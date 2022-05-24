import {Physics} from '@react-three/cannon';
import {CameraShake, Html, OrbitControls, Stars} from '@react-three/drei';
import {Canvas, useFrame, useThree} from '@react-three/fiber';
import React, {useState} from 'react';
import {Vector3} from 'three';
// Mine
import '../App.css';
import {Lights} from '../light/Lights';
import Spawner from './Spawner';
import PlayerBox from './PlayerBox';
import BulletBox from './BulletBox';
import MenuPause from './menu/MenuPause';
import MenuPlay from './menu/MenuPlay';
import Objetive from './Objetive';

// Juego con fisicas pero sin recorrido de "camera" en base a scroll. La camera se movera con el movimiento del mouse
export default function Game() {
	// TODO rojo x, verde y, azul z
	// TODO Se puede hacer MAS FACIL CON NUMEROS, COMO ESTADO, 1 EN PAUSA, 2 JUGAR, 3 VICTORIA, 4 GAMEOVER
	const [play, setplay] = useState(false);
	const [win, setwin] = useState(false);

	const [move, setmove] = useState({
		x: 0,
		y: 0,
		z: 0,
	});

	const utils = {
		hasCollide: false,
		// Antes usabamos context, funcionaba cuando queria, ya que no funcionna bien dentro del canvas
		// Por lo que se ha usado un useState, ya que este objeto no volvia a renderizar el componente (ni sus hijos) cuando cambaiaba de valor
		/* objetivePosition: {
      x: 0,
      y: 0,
      z: 0,
    }, */
	};

	// Funcion que permite mantener la camara constantemente
	function Rig(props) {
		const vec = new Vector3();
		const {camera, mouse, events} = useThree();
		useFrame(() => {
			// este vector "vec", en su parametro z es el que hace que la camara este constantemente en el 7.
			camera.position.lerp(vec.set(mouse.x * 3, mouse.y * 3, 7), 0.05);
			// TODO me esta permitiendo cambiar " utils.objetivePosition" sin utilizar Provider.Consumer
			// utils.objetivePosition = camera.position;
			setmove(camera.position);
		});

		const childrenArray = React.Children.toArray(props.children);
		return <group>{childrenArray}</group>;
	}

	return (
		// <UtilsGameContextProvider>
		<div className='row'>
			<div className='col-md-12 my-screen'>
				<Canvas
					camera={{
						position: [0, 0, 3000],
						fov: 90,
						rotation: [0, 0, 0],
					}}
				>
					{/* <Html fullscreen>
            LET GO
          </Html> */}
					<CameraShake
						yawFrequency={0.1}
						pitchFrequency={0.1}
						rollFrequency={0.1}
					/>
					<OrbitControls
						enableZoom={false}
						enablePan={false}
						enableRotate={false}
					/>
					<color attach='background' args={['#080101']} />
					<Lights />
					<fog attach='fog' args={['#94ebd8', 0, 100]} />

					{/* <HtmlText
          setplay={setplay}
          play={play}
          win={win}
        /> */}

					<Rig>
						<Physics>
							{/* <Html position={[-6.5, 7, 0]} className="text-play">HIT TO PLAY</Html>
            <Html position={[-5.5, 7, 0]} className="text-play">HIT TO PAUSE</Html> */}
							<PlayerBox setplay={setplay} move={move} />
							<BulletBox
								play={play} /* hasCollide={utils.hasCollide} */
							/>
							<Objetive
								setplay={setplay}
								setwin={setwin}
								move={move}
							/>
							<Spawner play={play} setplay={setplay} />

							<MenuPlay setplay={setplay} />
							<MenuPause setplay={setplay} />
						</Physics>
					</Rig>
					<Stars
						radius={1}
						depth={30}
						count={5000}
						factor={3}
						saturation={0.3}
						fade
						speed={1}
						/** Color of particles (default: 100) */
						// color?: THREE.ColorRepresentation | Float32Array   ->>> https://github.com/pmndrs/drei#stars
						color={3}
					/>
				</Canvas>
			</div>
		</div>
	);
	{
		/* </UtilsGameContextProvider> */
	}
}
{
	/* <TransformControls mode="translate">
          <mesh />
        </TransformControls> */
}
