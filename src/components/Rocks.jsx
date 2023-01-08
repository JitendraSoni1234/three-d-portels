import { useLoader } from "@react-three/fiber";
import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Rocks() {
  const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + 'models/rocks.glb');

  return <primitive object={gltf.scene}/>;
}

export default Rocks;
