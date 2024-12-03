import { PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera as PerspectiveCameraImpl } from "three";

export default function MainCamera() {
    // const cameraRef = useRef<PerspectiveCameraImpl>(null);
    // const radius = 5; // Distance from the center
    // let angle = 0; // Angle to revolve the camera

    // useFrame(() => {
    //     if (cameraRef.current) {
    //         angle += 0.01; // Increment the angle for rotation
    //         const x = radius * Math.cos(angle);
    //         const z = radius * Math.sin(angle);
    //         cameraRef.current.position.set(x, 2, z); // Set the camera's position
    //         cameraRef.current.lookAt(0, 0, 0); // Look at the origin
    //     }
    // });

    return (
        <PerspectiveCamera
            makeDefault // Makes this the default camera
            // position={[radius, 2, 0]} // Initial position
            position={[0, 2, 0]}
            fov={75} // Field of View
            near={0.1} // Near clipping plane
            far={1000} // Far clipping plane
            // ref={cameraRef}
        />
    );
}
