import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Cactus(props) {
  const group = useRef();
  const { nodes } = useGLTF("/models/cacto.glb");

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
      scale={props.scale || 0.7}
      position={props.position || [2, 0, 0]}
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


useGLTF.preload("/models/cacto.glb");
