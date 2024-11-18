import { Paper } from "@mui/material";
import { Image } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import myImage from "../../../assets/pictures/20230811_130024.jpg";

function ImageDisplay() {
  // Load the texture
  const texture = useLoader(TextureLoader, myImage); // Provide the correct path

  return (
    <>
      <mesh position={[0, 0, 0.01]}>
        {" "}
        {/* Slight offset to ensure the image is in front */}
        <Image url={myImage}>
          <planeGeometry args={[5, 5]} />
        </Image>
        <meshBasicMaterial map={texture} />
      </mesh>
    </>
  );
}

function MainPanel() {
  return (
    <Paper
      id="MainPanel"
      elevation={2}
      sx={{
        width: "100%", // Subtract the total border width
        height: "100%", // Subtract the total border height
      }}
    >
      <Canvas style={{ width: "100%", height: "100%" }}>
        <ImageDisplay />
      </Canvas>
    </Paper>
  );
}

export default MainPanel;
