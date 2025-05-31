import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useMotionValue, useSpring } from "motion/react";
import { useFrame } from "@react-three/fiber";

export function HeroImage(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/lost_programmer.glb");
  const { actions } = useAnimations(animations, group);

  // Smooth falling animation
  const yPosition = useMotionValue(5);
  const ySpring = useSpring(yPosition, { damping: 30 });

  useEffect(() => {
    ySpring.set(-1); // Animate down
  }, [ySpring]);

  useFrame(() => {
    if (group.current) group.current.position.y = ySpring.get();
  });

  useEffect(() => {
    if (animations.length > 0) {
      actions[animations[0].name]?.play();
    }
  }, [actions, animations]);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      rotation={[-Math.PI / 1, 2, 0]}
      scale={props.scale || 1.3}
      position={props.position || [1, 2, 0]}
    >
      <group position={[0, 0.752, -0.086]} rotation={[1.263, 0, 0]}>
        <primitive object={nodes.my_rig_rootJoint} />
        <skinnedMesh geometry={nodes.hair_0.geometry} material={materials.cloth} skeleton={nodes.hair_0.skeleton} />
        <skinnedMesh geometry={nodes.hair_1.geometry} material={materials.solidify} skeleton={nodes.hair_1.skeleton} />
        <skinnedMesh geometry={nodes.me_0.geometry} material={materials.body} skeleton={nodes.me_0.skeleton} />
        <skinnedMesh geometry={nodes.me_1.geometry} material={materials.solidify} skeleton={nodes.me_1.skeleton} />
        <skinnedMesh geometry={nodes.me002_0.geometry} material={materials.cloth} skeleton={nodes.me002_0.skeleton} />
        <skinnedMesh geometry={nodes.me002_1.geometry} material={materials.solidify} skeleton={nodes.me002_1.skeleton} />
        <skinnedMesh geometry={nodes.kemeja_0.geometry} material={materials.cloth} skeleton={nodes.kemeja_0.skeleton} />
        <skinnedMesh geometry={nodes.kemeja_1.geometry} material={materials.solidify} skeleton={nodes.kemeja_1.skeleton} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005_0.geometry}
        material={materials.laptop_tex}
        position={[-0.033, -0.442, -0.467]}
        rotation={[2.378, 0, 0]}
        scale={0.149}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bool1185_0.geometry}
        material={materials.Material}
        position={[2.403, 0.752, -0.428]}
        rotation={[-0.464, 0.296, -0.932]}
        scale={0.106}
      />
    </group>
  );
}

useGLTF.preload("/models/lost_programmer.glb");