import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Cactus } from "../components/Cactus";
import { GreenHouse } from "../components/GreenHouse";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader";
import { useState } from "react";


const Hero = () => {
    const isMobile = useMediaQuery({ maxWidth: 100 });
    const [showModel, setshowModel] = useState(true);
    return (
        <section id="home" className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space bg-beige">
            <HeroText />
            <ParallaxBackground />
            <figure
                className="absolute inset-0"
                style={{ width: "100vw", height: "100vh" }}
                onClick={() => setshowModel((v) => !v)}
            >
                <Canvas camera={{ position: [0, 1, 3] }}>
                    <Suspense fallback={<Loader />}>
                        <Float>
                            <ambientLight intensity={0.6} />

                            {/* Luz principal */}
                            <directionalLight
                                position={[5, 5, 5]}
                                intensity={2}
                                castShadow
                            />
                            {/* Luz de preenchimento */}
                            <directionalLight
                                position={[-5, -3, 2]}
                                intensity={5}
                            />

                            {/* <Cactus
                                scale={isMobile ? 1 : 1}
                                position={isMobile ? [0, -2, 0] : [1.7, -2, 0]}
                            /> */}

                            <GreenHouse
                                scale={isMobile}
                                rotation={[0, -Math.PI/5, 0]}
                                position={isMobile && [-0.1, 0, 0]}
                                modelOne = {showModel}
                            />
                        </Float>
                        <Rig />

                    </Suspense>
                </Canvas>
            </figure>
        </section>
    );
};

function Rig() {
    return useFrame((state, delta) => {
        easing.damp3(
            state.camera.position,
            [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
            0.5,
            delta
        );
    });
}

export default Hero;