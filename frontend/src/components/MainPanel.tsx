import {
  ImageList,
  ImageListItem,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { Image } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense, useState } from "react";
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
  const [displayMode, setDisplayMode] = useState<string | null>("3D");

  const handleDisplayMode = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setDisplayMode(newAlignment);
  };

  return (
    <Paper
      id="MainPanel"
      elevation={2}
      sx={{
        width: "100%", // Subtract the total border width
        height: "100%", // Subtract the total border height
        position: "relative",
        border: "1px solid black",
        p: 1,
      }}
    >
      <Suspense>
        <ToggleButtonGroup
          value={displayMode}
          exclusive
          onChange={handleDisplayMode}
          aria-label="Change Mode"
          sx={{ position: "absolute", top: "10px", right: "10px", zIndex: 1 }}
          size="small"
        >
          <ToggleButton value="3D" aria-label="3D">
            3D
          </ToggleButton>
          <ToggleButton value="2D" aria-label="2D">
            2D
          </ToggleButton>
        </ToggleButtonGroup>
        {displayMode === "2D" ? (
          <ImageList rowHeight="auto">
            <ImageListItem key="MyImage" sx={{ border: "1px solid black" }}>
              <img
                src={myImage}
                alt="My Image"
                style={{ width: "100%", height: "100%" }}
              />
            </ImageListItem>
          </ImageList>
        ) : (
          <Canvas style={{ width: "100%", height: "100%" }}>
            <ImageDisplay />
          </Canvas>
        )}
      </Suspense>
    </Paper>
  );
}

export default MainPanel;
