import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useBox, Physics } from "@react-three/cannon";

import React, { Suspense } from "react";
import * as THREE from 'three'
// Mine
import "../App.css";
import { Lights } from "../light/Lights";
import Texture from "../context/Texture";  
// import KnotCurve from './KnotCurve.js' 



// Recorrido de "camera" en base a scroll. Sin fisicas. Con eventos de onMouse o mousemove...

export default function Path() {

    function CameraMove(props) {
        const { camera } = useThree();
        
        window.addEventListener("wheel", onMouseWheel)
        // window.addEventListener("scroll", onMouseWheel)

        let y = 0;
        let position = 0;

        function onMouseWheel(e) {
            y = e.deltaY * -0.00001
            // y = 0.001
            console.log(camera.position)
        }
        
        useFrame(() => {
            position += y;
            y *= 0.98
            // camera.rotation.x = 0
            // camera.rotation.y = 0
            // camera.rotation.z = 0
            const pos = KnotCurvePosition(position)
            camera.position.x = pos.x
            camera.position.y = pos.y
            camera.position.z = pos.z
        })

        const childrenArray = React.Children.toArray(props.children)
        return <group >{childrenArray}</group>;
    }
    
    function KnotCurvePosition (t, optionalTarget) {

        var point = optionalTarget || new THREE.Vector3();

        t *= 2 * Math.PI;

        var R = 10;
        var s = 50;

        var x = s * Math.sin(t);
        var y = Math.cos(t) * (R + s * Math.cos(t));
        var z = Math.sin(t) * (R + s * Math.cos(t));

        return point.set(x, y, z);;

    }
    
    const Box = () => {

        const [ref, api] = useBox(() => ({
            mass: 0,
            type: "Dynamic",
            args: [2, 2, 2],
        }));
        
        window.addEventListener("wheel", onMouseWheel)
        // window.addEventListener("scroll", onMouseWheel)

        let y = 0;
        let position = 0;

        function onMouseWheel(e) {
            y = e.deltaY * -0.00001
            // y = 0.001
            // console.log(camera.position)
        }
        
        const hitBox = ()=>{
            y = 0.0001
        }

        useFrame(() => {
            position += y;
            y *= 0.98
            const pos = KnotCurvePosition(position)
            api.position.set(pos.x / 1.2, pos.y / 1.2, pos.z / 1.2);
        });

        return (
            <mesh ref={ref} onClick={hitBox}>
                <boxBufferGeometry attach="geometry" args={[2, 2, 2]}  />
                <meshStandardMaterial />
            </mesh>
        );
    };
    
    
    return (
        <div className="row">
            <div className="col-md-12 my-screen">
                {/* <button className="btn-primary" style={{ width: '100px', height: '100px', background: 'black'}} onClick={onMouseWheel}>CLIKC</button> */}
                <Canvas
                    camera={{ position: [0, 0, KnotCurvePosition(0)], rotation: [0, 0, 0] }}
                    >
                    <CameraMove/> 
                    <Physics>
                        <Box /> 
                    </Physics>

                    
                    
                    <Suspense fallback={null}>
                        <Texture />
                    </Suspense>
                    
                        <OrbitControls enableZoom={false} enablePan={true} enableRotate={true} />
                    <color attach="background" args={["#a64141"]} />
                    <Lights />
                    {/* <fog attach="fog" args={["#94ebd8", 0, 100]} /> */}
                    <Stars
                        radius={1}
                        depth={30}
                        count={500}
                        factor={3}
                        saturation={.1}
                        fade
                        speed={1}
                        color={3}
                        />
                </Canvas>
            </div>
        </div>
    );
}