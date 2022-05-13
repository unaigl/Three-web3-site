import { Scroll, ScrollControls, OrbitControls, Stars } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { Suspense } from "react";

import { gsap } from "gsap";
// Mine
import "../App.css";
import { Lights } from "../light/Lights";
import TextureGSAP from "../context/TextureGSAP";


// Recorrido de "camera" en el eje "y" en base a scroll. Sin fisicas.

export default function GSAP() {
    
    const text = "mañana viernes"
    
    function CameraMove(props) {
        const { camera } = useThree();

        // Al hacer scroll dentro de ScrollControls, tambien se ejecutara esta logica
        window.addEventListener("wheel", onMouseWheel)

        let y = 0;
        let position = 0;

        function onMouseWheel(e) {
            y = e.deltaY * -0.0003
        }

        useFrame(() => {
            position += y;
            y *= 0.97
            camera.position.y = position
            // Para mejorar rendimiento se puede eliminar "OrbitControls" y asi eliminar las rotaciones a 0
            camera.rotation.x = 0
            camera.rotation.y = 0
            camera.rotation.z = 0
        });

        const childrenArray = React.Children.toArray(props.children)
        return <group >{childrenArray}</group>;
    }

    return (
        <div className="row">
            <div className="col-md-12 my-screen">

                {/* <button className="btn-primary" style={{ width: '100px', height: '100px', background: 'black'}} onClick={onMouseWheel}>CLIKC</button> */}
                <Canvas
                    camera={{ position: [0, 0, 1], rotation: [0, 0, 0] }}
                >
                    <CameraMove />
                        <Suspense fallback={null}>
                            <TextureGSAP />
                        </Suspense>

                        {/* <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} /> */}
                        <color attach="background" args={["#a64141"]} />
                        <Lights />
                        {/* <fog attach="fog" args={["#94ebd8", 0, 100]} /> */}
                        <Stars
                            radius={1}
                            depth={30}
                            count={5000}
                            factor={3}
                            saturation={.3}
                            fade
                            speed={1}
                            color={3}
                        />

                    <ScrollControls // permite tener un SCROLL estandar WEB en un Canvas 3D
                        pages={3}
                        distance={1} // A factor that increases scroll bar travel (default: 1)
                        damping={4} // Friction, higher is faster (default: 4)
                        horizontal={false} // Can also scroll horizontally (default: false)
                        infinite={false} // Can also scroll infinitely (default: false)
                    >
                        <Scroll html>
                            <div className="marco"></div>
                                <div className="marco"><h3 style={{ color: 'white' }} >marcoPolo</h3></div>
                            <div className="marco">
                                <div className="col-md-5 p-5">
                                    <h3 style={{ color: 'white' }} >CHAIR</h3>
                                    <br />
                                    <h4 style={{ color: 'white' }}>Solo los mas atrevidos podran sentarse en esta silla</h4>
                                </div>
                            </div>
                        </Scroll>
                    </ScrollControls>
                </Canvas>
                
                {"MAÑANAVIERNES".split('').map((letter)=>{ 
                    return (<h5>{letter}</h5>)
                })}
                {[...text].map((letter)=>{ // Resultado parecido
                    return (<h5>{letter}</h5>)// De esta forma si que incluye el espacio (pero no ocupara)
                })}
                

                // TODO DETALLES- SCROLLTRIGGER - Agregamos estos "div" para dar mas "height" a la hoja y poder hacer scroll hacia abajo (en el viewport)
                // TODO DETALLES- SCROLLTRIGGER - ya que, gsap con este plugin solo nos permite definir los triggers segun el viewport
                {/* <div className="marco"><h3 style={{ color: 'white' }} >marcoPolo</h3></div>
                <div className="marco"></div> */}

            </div>
        </div>
    );
}