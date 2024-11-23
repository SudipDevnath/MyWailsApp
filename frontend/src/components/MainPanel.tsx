import { Paper, } from "@mui/material";
import { Canvas, } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, } from "react";
import { Edges } from "@react-three/drei";
import { useToggleWorldPlaneStore } from "../store/toggleWorldPlane";

function MainPanel() {

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
        >
          <OrbitControls enableDamping={false} />
          <directionalLight position={[1, 1, 1]} />
          <ambientLight intensity={0.5} />
          <mesh position={[0, 0, 0]}>
            <boxGeometry />
            <meshStandardMaterial color="red" />
            <Edges scale={1} color="red" />
          </mesh>

          {useToggleWorldPlaneStore((state) => state.viewXY) && (

            <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[10, 10, 10, 10]} />
              <meshBasicMaterial color="white" wireframe />
            </mesh>

          )}

          {useToggleWorldPlaneStore((state) => state.viewYZ) && (

            <mesh position={[0, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
              <planeGeometry args={[10, 10, 10, 10]} />
              <meshBasicMaterial color="white" wireframe />
            </mesh>

          )}


          {useToggleWorldPlaneStore((state) => state.viewYZ) && (

            <mesh position={[0, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
              <planeGeometry args={[10, 10, 10, 10]} />
              <meshBasicMaterial color="white" wireframe />
            </mesh>

          )}
        </Canvas>
      </Suspense>
    </Paper>
  );
}

export default MainPanel;


