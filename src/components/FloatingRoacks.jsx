import { Float } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function FloatingRoacks() {
  const rock1 = useLoader(GLTFLoader, process.env.PUBLIC_URL + "models/floating_rock_1.glb");
  const rock2 = useLoader(GLTFLoader, process.env.PUBLIC_URL + "models/floating_rock_2.glb");
  const rock3 = useLoader(GLTFLoader, process.env.PUBLIC_URL + "models/floating_rock_3.glb");
  const rock4 = useLoader(GLTFLoader, process.env.PUBLIC_URL + "models/floating_rock_4.glb");

  return (
    <>
      <Float speed={1.5} rotationIntensity={1.6} floatIntensity={0} position={[-20, 3.5, -15]}>
        <primitive object={rock1.scene} />
      </Float>
      <Float speed={1.5} rotationIntensity={1.6} floatIntensity={0} position={[-15, 3.5, 15]}>
        <primitive object={rock2.scene} />
      </Float>
      <Float speed={1.5} rotationIntensity={1.6} floatIntensity={0} position={[15, 3.5, -15]}>
        <primitive object={rock3.scene} />
      </Float>
      <Float speed={1.5} rotationIntensity={1.6} floatIntensity={0} position={[15, 3.5, 15]}>
        <primitive object={rock4.scene} />
      </Float>
    </>
  );
}

export default FloatingRoacks;
