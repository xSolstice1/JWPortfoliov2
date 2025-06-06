import { Float, OrbitControls } from "@react-three/drei";
import { HeroImage } from "../components/HeroImage";
import HeroText from "../components/HeroText";
import ParallexBG from "../components/ParallexBG";
import { useMediaQuery } from "react-responsive";
import { Canvas, useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section
      id="home"
      className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space"
    >
      <HeroText />
      <ParallexBG />
      <figure
        className="absolute inset-8"
        // style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Float>
              <HeroImage
                scale={isMobile && 1}
                position={isMobile && [0, -1.5, 0]}
              />
            </Float>
          </Suspense>
          {/* <OrbitControls enableZoom={false} /> */}
          <Rig />
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(state.camera.position, [
      state.mouse.x / 10,
      1 + state.mouse.y / 10,
      3,
      0.5,
      delta,
    ]);
  });
}

export default Hero;
