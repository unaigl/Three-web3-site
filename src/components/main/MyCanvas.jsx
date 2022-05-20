import { Scroll, ScrollControls, OrbitControls, Cloud, Html, TransformControls, Sky } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { Suspense, useEffect, useTransition, useContext, useState, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// Mine
import "../App.css";
import { Lights } from "../light/Lights";
import TextureGSAP from "../context/TextureGSAP";  
import {ModelChair} from "./ModelChair";
import AnimationGsap from "./AnimationGsap";
import HtmlCanvas from "./HtmlCanvas";
import { utilsContext } from '../context/Context';



// Recorrido de "camera" en el eje "y" en base a scroll. Sin fisicas.

export default function MyCanvas(props) {
    
    const modelChairObject = ModelChair("chair/armchairYellow.gltf");
    
    useEffect(() => {
        gsap.fromTo(modelChairObject.position, 
            {
                z: -40
            },
            {
                z: 40,
                scrollTrigger:{
                    // TODO cambiar trigger
                    // trigger: entrar,
                    start: "400 200px",
                    end: "+=1800px",
                    scrub: 5,
                    markers: true,
                    onUpdate: function(self) {
                        modelChairObject.rotation.x = 2. * 3.14 * self.progress / 2;
                        // modelChairObject.position.z = 2. * Math.sin(3.14 * self.progress )* 2;
                        modelChairObject.position.y = 10 + (2. * 3.14 * self.progress * 2 );
                        // modelChairObject.position.z = 2. * 3.14 * self.progress * -1 ;
                        
                    }
                },
                
        });
        
    }, [])
    
    // COMPONENT
    // TODO se podran meter componentes de react dentro del componente de Ktml de "drei" ??? o sino, funciones que usen componentes
    // TODO 
    // TODO Meterle GSAP al GLTF, parar que se acerque y aleje y gire cuando se hace scroll
    // TODO Cambiar el GLTF
    // TODO 
    
    return (
        <div className="row">
            <div className="col-md-12 main" >

                <Canvas
                    camera={{ position: [0, 0, 15], rotation: [0, 0, 0] }} /* className="my-canvas" */
                    >
                        
                    <Sky distance={450000} sunPosition={[0, props.light.isLightSky, 0]} inclination={0} azimuth={0.25} />
                    <OrbitControls rotateSpeed={0.1} enableZoom={false} enablePan={false} enableRotate={props.rotationEnable.isRotationEnable} />

                    <primitive
                        scale={0.05}
                        object={modelChairObject}
                        dispose={null}
                        position={[0, 10, -40]}
                        />
                    {/* <TransformControls mode="translate">
                        <mesh>
                        <boxGeometry args={[1, 1, 1]} />
                        </mesh>
                    </TransformControls> */}
                    
                    <HtmlCanvas setRotation={props.setRotation} light={props.light} position={modelChairObject.position}/>
                    {/* <color attach="background" args={["#a64141"]} /> */}
                    <Lights />
                    <Cloud
                        opacity={0.7}
                        speed={0.2} // Rotation speed
                        width={20} // Width of the full cloud
                        depth={1.5} // Z-dir depth
                        segments={10} // Number of particles
                        />
                </Canvas>
            </div>
        </div>
    );
}

{/* <AnimationGsap /> */ }

{/* <Cloud
                        opacity={0.5}
                        speed={0.1} // Rotation speed
                        width={15} // Width of the full cloud
                        depth={1.5} // Z-dir depth
                        segments={10} // Number of particles
                    /> */}

                    
{/* <ScrollControls // permite tener un SCROLL estandar WEB en un Canvas 3D
                        pages={3}
                        distance={1} // A factor that increases scroll bar travel (default: 1)
                        damping={4} // Friction, higher is faster (default: 4)
                        horizontal={false} // Can also scroll horizontally (default: false)
                        infinite={false} // Can also scroll infinitely (default: false)
                    >
                        <Scroll html>
                            <div className="marco"></div>
                        </Scroll>
                    </ScrollControls> */}
                    
                    
// const [update, setUpdate] = React.useState(0);

// setTimeout(() => {
//     setUpdate(1)
// }, 500);

// document.addEventListener("DOMContentLoaded", function () {
//     if (!getCookie('Popup')) {
//         entrar = document.getElementById("entrar")
//     }
// });