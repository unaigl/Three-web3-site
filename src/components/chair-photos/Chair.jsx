import { Scroll, ScrollControls, useScroll, OrbitControls, Stars, Sky } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef, Suspense } from "react";

import "../App.css";
import { Model } from "../context/Model";
import { Lights } from "../light/Lights";

function Foo(props) {
  const ref = useRef()

  const data = useScroll()
  useFrame(() => {
    // data.offset = current scroll position, between 0 and 1, dampened
    // data.delta = current delta, between 0 and 1, dampened
    // console.log(data.offset)
    // console.log(data.delta)

    // const b = data.range(0, 1, 0.1)
    // console.log(b)

    // Will move between 0-1-0 for the selected range
    // const d = data.curve(1 / 3, 1 / 3)


    // Returns true if the offset is in range and false if it isn't
    // const e = data.visible(0 / 3, 2 / 3)
    // console.log(e)
  })
  return (<mesh ref={ref} {...props} className="col-md-5 p-5">
    {/* <Suspense fallback={null}>
      <Model url="chair/armchairYellow.gltf" position={[0, -2, 0]} />
    </Suspense> */}
  </mesh>)
}

// Este componente SIRVE para crear un scroll web (usando "ScrollControls"), despues dentro de "Scroll" definimos si es "html" o no para definir que
// tipo de componente queremos que se mueva con el scroll. 
// Sin fisicas. "Rotacion" y "pan" de camara + scroll web (no de camara)

const Chair = () => {

  return (
    <div className="container">
      <div className="row my-screen">
        <div className="col-md-12">
          <Canvas
            style={{ overflow: "hidden" /* background: "gray" */ }}
            camera={{ position: [0, 0, 5]/* , fov: 90 */, rotation: [0, 0, 0] }}
          // 1- Componentes de utilidad. 2- Componentes para la web.
          >
            <color attach="background" args={["#376bb0"]}></color>
            <Lights />
            <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
            <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />
            {/* <Stars
              radius={.5}
              depth={30}
              count={5000}
              factor={3}
              saturation={.1}
              fade
              speed={1}
              color={31}
            /> */}

            <Suspense fallback={null}>
              <Model url="chair/armchairYellow.gltf" position={[0, -2, 0]} />
            </Suspense>
            <ScrollControls // permite tener un SCROLL estandar WEB en un Canvas 3D
              pages={1.5}
              distance={1} // A factor that increases scroll bar travel (default: 1)
              damping={4} // Friction, higher is faster (default: 4)
              horizontal={false} // Can also scroll horizontally (default: false)
              infinite={false} // Can also scroll infinitely (default: false)
            >
              {/* You can have components in here, they are not scrolled, but they can still
              react to scroll by using useScroll! */}
              <Scroll>
                <Foo position={[0, 0, 0]} />
              </Scroll>
              <Scroll html>
                <div className="col-md-5 p-5">
                  <h3 style={{ color: 'white' }} >CHAIR</h3>
                  <br />
                  <h4 style={{ color: 'white' }}>Solo los mas atrevidos podran sentarse en esta silla</h4>
                  <span style={{ color: 'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed dolore, et laborum enim tempora eos. Ex adipisci dolor atque dolorem sequi nemo odio, impedit eum ipsa reiciendis placeat error.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed dolore, et laborum enim tempora eos. Ex adipisci dolor atque dolorem sequi nemo odio, impedit eum ipsa reiciendis placeat error.</span>
                  <br />
                  <br />
                  <br />
                  <span style={{ color: 'white' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed dolore, et laborum enim tempora eos. Ex adipisci dolor atque dolorem sequi nemo odio, impedit eum ipsa reiciendis placeat error.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed dolore, et laborum enim tempora eos. Ex adipisci dolor atque dolorem sequi nemo odio, impedit eum ipsa reiciendis placeat error.</span>
                  <br />
                  <br />
                  <br />
                  <span style={{ color: 'white' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed dolore, et laborum enim tempora eos. Ex adipisci dolor atque dolorem sequi nemo odio, impedit eum ipsa reiciendis placeat error.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed dolore, et laborum enim tempora eos. Ex adipisci dolor atque dolorem sequi nemo odio, impedit eum ipsa reiciendis placeat error.</span>
                  <br />
                  <br />
                  <br />
                  <span style={{ color: 'white' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed dolore, et laborum enim tempora eos. Ex adipisci dolor atque dolorem sequi nemo odio, impedit eum ipsa reiciendis placeat error.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed dolore, et laborum enim tempora eos. Ex adipisci dolor atque dolorem sequi nemo odio, impedit eum ipsa reiciendis placeat error.</span>
                </div>
              </Scroll>
            </ScrollControls>
          </Canvas>
        </div>
      </div >
    </div >)
}
export default Chair;