import { Float, Text3D } from "@react-three/drei";
import React from "react";

function TextComponent(props) {
  return (
    <>
      <Float rotationIntensity={0.35} floatIntensity={0.5} position={props.position} rotation={props.rotation}>
        <Text3D font={process.env.PUBLIC_URL + "fonts/Roboto_Regular.json"} size={0.275} height={0.065} curveSegments={12}>
          {props.text}
          <meshStandardMaterial color={[1, 0.15, 0.1]} emissive={[1, 0.1, 0]} />
        </Text3D>
      </Float>
    </>
  );
}

export default TextComponent;
