import { useEffect, useRef, useState } from 'react';
import { GetWorkObject } from '../../wailsjs/go/main/App';
import { Edges, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// function WorkObject() {
//     const geometryRef = useRef<THREE.BufferGeometry | null>(null);
//     const [isWorkObjectLoaded, setIsWorkObjectLoaded] = useState(false);

//     useEffect(() => {
//         GetWorkObject()
//             .then((workObject: { Vertices: number[]; Indices: number[] }) => {
//                 if (
//                     Array.isArray(workObject.Vertices) &&
//                     Array.isArray(workObject.Indices)
//                 ) {
//                     const vertices = new Float32Array(workObject.Vertices.flat());
//                     const indices = new Uint32Array(workObject.Indices);

//                     if (geometryRef.current) {
//                         const geometry = geometryRef.current;

//                         // geometry.setFromPoints(workObject.Vertices.map((v) => new THREE.Vector3(v)));
//                         geometry.setAttribute(
//                             'position',
//                             new THREE.BufferAttribute(vertices, 3)
//                         );
//                         geometry.setIndex(new THREE.BufferAttribute(indices, 1));
//                         // geometry.computeBoundingBox();
//                         // geometry.computeBoundingSphere();

//                         setIsWorkObjectLoaded(true); // Trigger a re-render
//                     }
//                 } else {
//                     console.error('Invalid or missing vertices/indices data.');
//                 }
//             })
//             .catch((error) => {
//                 console.error('Failed to fetch work object:', error);
//             });
//     }, []);

//     return (
//         <mesh position={[0, 0, 0]}>
//             <bufferGeometry ref={geometryRef} />
//             {isWorkObjectLoaded ? (
//                 <>
//                     <meshStandardMaterial color="red" side={THREE.DoubleSide} />
//                     <Edges scale={2} color="red" />
//                 </>
//             ) : (
//                 <>
//                     <boxGeometry />
//                     <meshStandardMaterial color="red" />
//                     <Edges scale={1} color="red" />
//                 </>
//             )}
//         </mesh>
//     );
// }


/***************************************************************************************************************/

function WorkObject() {
    const geometryRef = useRef<THREE.BufferGeometry | null>(null);


    const positions = new Float32Array([
        0, 0, 0,
        -1, -1, -1,
        1, -1, -1,
    ]);


    useEffect(()=>{

        if(geometryRef.current){
            const geometry = geometryRef.current;
            geometry.setAttribute(
                'position',
                new THREE.BufferAttribute(positions, 3)
            );
        }
    },[])

    // useEffect(() => {
    //     GetWorkObject()
    //         .then((workObject: { Vertices: number[]; Indices: number[] }) => {
    //             if (
    //                 Array.isArray(workObject.Vertices) &&
    //                 Array.isArray(workObject.Indices)
    //             ) {
    //                 const vertices = new Float32Array(workObject.Vertices.flat());
    //                 const indices = new Uint32Array(workObject.Indices);

    //                 if (geometryRef.current) {
    //                     const geometry = geometryRef.current;

    //                     geometry.setAttribute(
    //                         'position',
    //                         new THREE.BufferAttribute(vertices, 3)
    //                     );
    //                     geometry.setIndex(new THREE.BufferAttribute(indices, 1));
    //                     geometry.computeBoundingBox();
    //                     geometry.computeBoundingSphere();
    //                 }
    //             } else {
    //                 console.error('Invalid or missing vertices/indices data.');
    //             }
    //         })
    //         .catch((error) => {
    //             console.error('Failed to fetch work object:', error);
    //         });
    // }, []);

    return (
        <Points>
            <bufferGeometry ref={geometryRef}>
                <bufferAttribute
                    attach="attributes-position"
                    array={positions}
                    count={positions.length / 3}
                    itemSize={4}
                />
            </bufferGeometry>
            <meshStandardMaterial color="red" />
        </Points>
    );
}



export default WorkObject;
