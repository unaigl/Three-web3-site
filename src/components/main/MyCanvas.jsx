import { Scroll, ScrollControls, OrbitControls, Cloud, Html } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { Suspense, useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// Mine
import "../App.css";
import { Lights } from "../light/Lights";
import TextureGSAP from "../context/TextureGSAP";  
import {ModelChair} from "./ModelChair";
import AnimationGsap from "./AnimationGsap";



// Recorrido de "camera" en el eje "y" en base a scroll. Sin fisicas.

export default function MyCanvas() {

    const modelChairObject = ModelChair("chair/armchairYellow.gltf");
    // function ChairMove(props) {

    //     // const { camera } = useThree();
    //     window.addEventListener("wheel", onMouseWheel)
    //     function onMouseWheel(e) {
    //         // console.log()
    //     }
    //     useFrame(() => {
            
    //         modelChairObject.rotation.x += 0.01;
    //     });
    //     const childrenArray = React.Children.toArray(props.children)
    //     return <group >{childrenArray}</group>;
    // }
    
    const entrar = document.getElementById("entrar")
    
    useEffect(() => {
    
        const a = {b:0}
        gsap.fromTo(modelChairObject.position, 
            {
                // TODO revisar mas propiedades para que no vaya atronpicones
                z: -40
            },
            {
                z: 40,
                scrollTrigger:{
                    // TODO cambiar trigger
                    trigger: entrar,
                    start: "400 200px",
                    end: "+=1800px",
                    scrub: 5,
                    markers: true,
                    onUpdate: function(self) {
                        console.log(self.progress)
                        // modelChairObject.rotation.x = 2. * 3.14 * self.progress / 2;
                        // TODO falla al echar para atras
                        // modelChairObject.position.z = 2. * Math.sin(3.14 * self.progress )* 2;
                        // para ver
                        // modelChairObject.position.y = 2. * 3.14 * self.progress * -0.1;
                        // console.log(modelChairObject.position)
                    }
                },
                
        })
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
                    camera={{ position: [0, 0, 15], rotation: [0, 0, 0] }} className="my-canvas"
                >
                    {/* <ChairMove /> */}
                    <Suspense fallback={null}>
                        <primitive
                            scale={0.05}
                            object={modelChairObject}
                            dispose={null}
                            position={[0, 1, -6]}
                        />
                        <Html
                            fullscreen
                            // prepend
                            // center
                            // zIndexRange={[0, 0]}
                            // transform
                            // sprite

                        >
                            <h1 className="parrafos">hello</h1>
                            <h1 className="parrafos">hello</h1>
                        </Html>
                    </Suspense>
                    <OrbitControls enableZoom={false} enablePan={true} enableRotate={true} />
                    <color attach="background" args={["#a64141"]} />
                    <Lights />
                    {/* <Cloud
                        opacity={0.7}
                        speed={0.2} // Rotation speed
                        width={20} // Width of the full cloud
                        depth={1.5} // Z-dir depth
                        segments={30} // Number of particles
                    /> */}
                    
                </Canvas>
            </div>
        </div>
    );
}

{/* <AnimationGsap /> */ }


{/* <Html
  as='div' // Wrapping element (default: 'div')
  wrapperClass // The className of the wrapping element (default: undefined)
  prepend // Project content behind the canvas (default: false)
  center // Adds a -50%/-50% css transform (default: false) [ignored in transform mode]
  fullscreen // Aligns to the upper-left corner, fills the screen (default:false) [ignored in transform mode]
  distanceFactor={10} // If set (default: undefined), children will be scaled by this factor, and also by distance to a PerspectiveCamera / zoom by a OrthographicCamera.
  zIndexRange={[100, 0]} // Z-order range (default=[16777271, 0])
  portal={domnodeRef} // Reference to target container (default=undefined)
  transform // If true, applies matrix3d transformations (default=false)
  sprite // Renders as sprite, but only in transform mode (default=false)
  calculatePosition={(el: Object3D, camera: Camera, size: { width: number; height: number }) => number[]} // Override default positioning function. (default=undefined) [ignored in transform mode]
  occlude={[ref]} // Can be true or a Ref<Object3D>[], true occludes the entire scene (default: undefined)
  onOcclude={(visible) => null} // Callback when the visibility changes (default: undefined)
  {...groupProps} // All THREE.Group props are valid
  {...divProps} // All HTMLDivElement props are valid
>
  <h1>hello</h1>
  <p>world</p>
</Html> */}


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