import {Physics} from '@react-three/cannon';
import {OrbitControls, Stars} from '@react-three/drei';
import {Canvas, useFrame, useThree} from '@react-three/fiber';
import React, {Suspense} from 'react';
// Mine
import '../App.css';
import {Lights} from '../light/Lights';
import KnotCurvePosition from './KnotCurvePosition';
// import Texture from "../context/Texture";
import MiddleBox from './MiddleBox';

// Recorrido de "camera" en base a scroll. Sin fisicas. Con eventos de onMouse o mousemove...

export default function Path() {
	// Utilizamos solamente el "useState" para volver a renderizar el componente y asi poder renderizar todos los elementos "MiddleBox" que queremos
	// sacar de la funcion "map"
	const [update, updateState] = React.useState(0);
	let cameraPosition;

	function CameraMove() {
		const {camera, mouse} = useThree();

		let y = 0;
		let position = 0;

		function onMouseWheel(e) {
			y = e.deltaY * 0.00001;
		}

		// Cada vez que se dispare wheel, se usaran los valores y y position para que en cada frame se mueva la camara y de sensacion de scroll
		window.addEventListener('wheel', onMouseWheel);
		// window.addEventListener("scroll", onMouseScroll)

		// TODO Como calcular que se dispare una funcion cuando nos acercamos a unno de los objetos/elementos?ç
		// Podriamos estar checkeando en cada frame si la camara esta cerca o no del objeto, y si esta cerca, disparar una funcion.
		// Buscar bibliotecas ya escritas que tengan esta funcion.
		// o
		// GSAP, scrolltrigger

		useFrame(() => {
			//
			position += y;
			y *= 0.99;
			const pos = KnotCurvePosition(position);
			camera.position.x = pos.x;
			camera.position.y = pos.y;
			camera.position.z = pos.z;

			const posLookAt = KnotCurvePosition(position * 1.3);

			camera.lookAt(posLookAt);
			// TODO monitorear posicion de la camara y actualizar la rotacion de los cubos
			// cameraPosition = camera.position;
		});
	}

	// positionCamera
	const positionCamera = KnotCurvePosition(0);

	// Agregar Boxes a lo largo del path
	const boxPosition = [];
	const createBoxes = () => {
		for (let i = 0; i < 10; i++) {
			const posi = KnotCurvePosition((i + 1) * 1.1);
			const posit = [posi.x, posi.y, posi.z];
			boxPosition.push(posit);
		}
	};

	createBoxes();
	setTimeout(() => {
		updateState(1);
	}, 100);

	return (
		<div className='row'>
			<div className='col-md-12 my-screen'>
				<Canvas camera={{position: positionCamera}}>
					<CameraMove />
					<Physics>
						<group>
							{boxPosition && // TODO Hay que volver a renderizar para que salgan los demas cubos
								boxPosition.map((po, i) => {
									// console.log(po);
									return (
										<MiddleBox
											key={i}
											po={po}
											cameraPosition={cameraPosition}
										/>
									);
								})}
						</group>
					</Physics>

					<Suspense fallback={null} />
					{/* Utilizando "enablePan"  en lugar de "enableRotate", conseguimos poder girar la camara, NO SE porque, EN PRODUCCION IGUAL NO FUNCIONA */}
					<OrbitControls
						enableZoom={false}
						enablePan
						enableRotate
						enableDamping={false}
					/>
					<color attach='background' args={['#a64141']} />
					<Lights />
					<fog attach='fog' args={['#94ebd8', 0, 100]} />
					<Stars
						radius={1}
						depth={50}
						count={500}
						factor={3}
						saturation={0.1}
						fade
						speed={1}
						color={3}
					/>
				</Canvas>
			</div>
		</div>
	);
}
