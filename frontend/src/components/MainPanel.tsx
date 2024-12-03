import { Paper, } from "@mui/material";
import { Canvas, } from "@react-three/fiber";
import { GizmoHelper, GizmoViewport, Grid, OrbitControls, PerspectiveCamera, } from "@react-three/drei";
import { Suspense, useRef } from "react";

import * as ToggleWorldPlaneStore from "../store/toggleWorldPlane";
import Camera from "./Camera";
import WorkObject from "./WorkObject";


function MainPanel() {


  const isVisibleXY = ToggleWorldPlaneStore.useWorldPlaneViewXY();
  const isVisibleYZ = ToggleWorldPlaneStore.useWorldPlaneViewYZ();
  const isVisibleZX = ToggleWorldPlaneStore.useWorldPlaneViewZX();




  return (
    <Paper
      id="MainPanel"
      elevation={2}
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        border: "1px solid black",
        p: 1,
      }}
    >

      <Suspense>
        <Canvas
          style={{ width: "100%", height: "100%", background: "linear-gradient(135deg, #afbac9, #575d66)" }}
          id="MainPanelCanvas"
        >
          <OrbitControls enableDamping={false} >
            <Camera />
          </OrbitControls>

          <directionalLight position={[1, 1, 1]} />
          <ambientLight intensity={0.5} />


          {isVisibleZX && (

            <>
              <Grid
                position={[0, 0, 0]} // Adjust position as needed
                args={[10, 10]} // [width, height]
                cellSize={1} // Size of each grid cell
                cellThickness={1} // Line thickness of each cell
                sectionSize={5} // Size of each major grid section
                sectionThickness={1} // Line thickness of major grid lines
                fadeDistance={50} // Optional: Fading distance
                fadeStrength={2} // Optional: Strength of fade
                infiniteGrid={true} // Optional: Creates an infinite grid
                rotation={[0, 0, 0]}
              />

              <Grid
                position={[0, 0, 0]} // Adjust position as needed
                args={[10, 10]} // [width, height]
                cellSize={1} // Size of each grid cell
                cellThickness={1} // Line thickness of each cell
                sectionSize={5} // Size of each major grid section
                sectionThickness={1} // Line thickness of major grid lines
                fadeDistance={50} // Optional: Fading distance
                fadeStrength={2} // Optional: Strength of fade
                infiniteGrid={true} // Optional: Creates an infinite grid
                rotation={[Math.PI, 0, 0]}
              />
            </>
          )}

          {isVisibleXY && (
            <>
              <Grid
                position={[0, 0, 0]} // Adjust position as needed
                args={[10, 10]} // [width, height]
                cellSize={1} // Size of each grid cell
                cellThickness={1} // Line thickness of each cell
                sectionSize={5} // Size of each major grid section
                sectionThickness={1} // Line thickness of major grid lines
                fadeDistance={50} // Optional: Fading distance
                fadeStrength={2} // Optional: Strength of fade
                infiniteGrid={true} // Optional: Creates an infinite grid
                rotation={[Math.PI / 2, 0, 0]}
              />

              <Grid
                position={[0, 0, 0]} // Adjust position as needed
                args={[10, 10]} // [width, height]
                cellSize={1} // Size of each grid cell
                cellThickness={1} // Line thickness of each cell
                sectionSize={5} // Size of each major grid section
                sectionThickness={1} // Line thickness of major grid lines
                fadeDistance={50} // Optional: Fading distance
                fadeStrength={2} // Optional: Strength of fade
                infiniteGrid={true} // Optional: Creates an infinite grid
                rotation={[-Math.PI / 2, 0, 0]}
              />

            </>

          )}

          {isVisibleYZ && (
            <>
              <Grid
                position={[0, 0, 0]} // Adjust position as needed
                args={[10, 10]} // [width, height]
                cellSize={1} // Size of each grid cell
                cellThickness={1} // Line thickness of each cell
                sectionSize={5} // Size of each major grid section
                sectionThickness={1} // Line thickness of major grid lines
                fadeDistance={50} // Optional: Fading distance
                fadeStrength={2} // Optional: Strength of fade
                infiniteGrid={true} // Optional: Creates an infinite grid
                rotation={[0, 0, Math.PI / 2]}
              />
              <Grid
                position={[0, 0, 0]} // Adjust position as needed
                args={[10, 10]} // [width, height]
                cellSize={1} // Size of each grid cell
                cellThickness={1} // Line thickness of each cell
                sectionSize={5} // Size of each major grid section
                sectionThickness={1} // Line thickness of major grid lines
                fadeDistance={50} // Optional: Fading distance
                fadeStrength={2} // Optional: Strength of fade
                infiniteGrid={true} // Optional: Creates an infinite grid
                rotation={[0, 0, -Math.PI / 2]}
              />

            </>
          )}


          <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
            <GizmoViewport axisColors={['#9d4b4b', '#2f7f4f', '#3b5b9d']} labelColor="white" />
          </GizmoHelper>



          <WorkObject />



        </Canvas>
      </Suspense>
    </Paper>
  );
}

export default MainPanel;




