import { Physics } from "@react-three/cannon";
import { CameraShake, OrbitControls, Stars, Html } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useContext, useState } from "react";
import React from "react";
import { Vector3 } from "three";
import "../App.css";
import { utilsContext } from "../context/Context";
import { Lights } from "../controls/Lights";
import AttackersSpawner from "./AttackersSpawner";
import BoxPlayer from "./BoxPlayer";
import BulletBox from "./BulletBox";
import HtmlText from "./HtmlText";
import Objetive from "./Objetive";
import MenuPlay from "../menu/MenuPlay";
import MenuPause from "../menu/MenuPause";
import { Scene } from "three";


export default function planeBoxes() {
  
  const utils = useContext(utilsContext);
  //TODO rojo x, verde y, azul z 
  //TODO Se puede hacer MAS FACIL CON NUMEROS, COMO ESTADO, 1 EN PAUSA, 2 JUGAR, 3 VICTORIA, 4 GAMEOVER
  const [play, setplay] = useState(false)
  const [win, setwin] = useState(false)
  
  // Funcion que permite mantener la camara constantemente
  function Rig(props) {
    const vec = new Vector3();
    const { camera, mouse , events} = useThree();
    useFrame(() => {
        camera.position.lerp(vec.set(mouse.x * 3, mouse.y * 3, 7), 0.05);
      // TODO me esta permitiendo cambiar " utils.objetivePosition" sin utilizar Provider.Consumer
      utils.objetivePosition = camera.position;
      
    });
    
    const childrenArray = React.Children.toArray(props.children)
    
    return <group >{childrenArray}</group>;
  }
  
  return (
    <div className="Game-screen">
      <Canvas
        camera={{ position: [0, 0, 3000], fov: 90, rotation: [0, 0, 0] }}
        // shadows
      >
        <CameraShake
          yawFrequency={0.1}
          pitchFrequency={0.1}
          rollFrequency={0.1}
        />
        <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
        <color attach="background" args={["#080101"]} />
        <Lights />
        <fog attach="fog" args={["#94ebd8", 0, 100]} />

        {/* <HtmlText
          setplay={setplay}
          play={play}
          win={win}
        /> */}
        

        <Rig>
          <Physics>
            {/* <Html position={[-6.5, 7, 0]} className="text-play">HIT TO PLAY</Html>
            <Html position={[-5.5, 7, 0]} className="text-play">HIT TO PAUSE</Html> */}
            <BulletBox play={play} />
            <BoxPlayer setplay={setplay} />
            <Objetive setplay={setplay} setwin={setwin} />
            <AttackersSpawner play={play} />
            <MenuPlay setplay={setplay}/>
            <MenuPause setplay={setplay}/>
          </Physics>
        </Rig>
        <Stars
          radius={1}
          depth={30}
          count={5000}
          factor={3}
          saturation={.3}
          fade
          speed={1}
          /** Color of particles (default: 100) */
          //color?: THREE.ColorRepresentation | Float32Array   ->>> https://github.com/pmndrs/drei#stars
          color={3}
        />
      </Canvas>
    </div>
  );
}
{
  /* <TransformControls mode="translate">
          <mesh />
        </TransformControls> */
}