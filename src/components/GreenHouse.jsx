import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function GreenHouse(props) {
  const group = useRef();
  const { nodes } = props.modelOne ? useGLTF("/models/green_house.glb") : useGLTF("/models/green_house2.glb");

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.position.y =
      (props.position?.[1] || 0) + Math.sin(t * 1.2) * 0.15;
    group.current.rotation.z = Math.sin(t * 0.8) * 0.05;
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={props.scale || 1.5}
      position={props.position || [1.1, 0, -1]}
    >
      {Object.values(nodes).map((node, i) =>
        node.isMesh ? (
          <mesh
            key={i}
            geometry={node.geometry}
            material={node.material}
          />
        ) : null
      )}
    </group>
  );
}


useGLTF.preload("/models/green_house2.glb");
