import {OrbitControls, Stars} from '@react-three/drei';
import {Canvas, useFrame, useThree} from '@react-three/fiber';
import React, {Suspense} from 'react';
// Mine
import '../App.css';
import {Lights} from '../light/Lights';
import Texture from '../context/Texture';

// Recorrido de "camera" en el eje "y" en base a scroll. Sin fisicas.

export default function Photos() {
	function CameraMove(props) {
		const {camera} = useThree();

		window.addEventListener('wheel', onMouseWheel);
		// window.addEventListener("scroll", onMouseWheel)

		let y = 0;
		let position = 0;

		function onMouseWheel(e) {
			// if (position > 10 || position > -10) return
			y = e.deltaY * -0.0007;
			// console.log(camera.rotation);
		}

		useFrame(() => {
			position += y;
			y *= 0.97;
			camera.position.y = position;
			// Para mejorar rendimiento se puede eliminar "OrbitControls" y asi eliminar las rotaciones a 0
			camera.rotation.x = 0;
			camera.rotation.y = 0;
			camera.rotation.z = 0;
		});

		const childrenArray = React.Children.toArray(props.children);
		return <group>{childrenArray}</group>;
	}

	return (
		<div className='row'>
			<div className='col-md-12 my-screen'>
				{/* <button className="btn-primary" style={{ width: '100px', height: '100px', background: 'black'}} onClick={onMouseWheel}>CLIKC</button> */}
				<Canvas camera={{position: [0, 0, 1], rotation: [0, 0, 0]}}>
					<color attach='background' args={['#a64141']} />
					<Lights />
					<CameraMove />
					<Suspense fallback={null}>
						<Texture />
					</Suspense>

					<OrbitControls
						enableZoom={false}
						enablePan={false}
						enableRotate={false}
					/>
					{/* <fog attach="fog" args={["#94ebd8", 0, 100]} /> */}
					<Stars
						radius={1}
						depth={30}
						count={5000}
						factor={3}
						saturation={0.3}
						fade
						speed={1}
						color={3}
					/>
				</Canvas>
			</div>
		</div>
	);
}
