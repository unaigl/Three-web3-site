import { Cloud, OrbitControls, Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'

// Mine
import '../App.css';
import { Lights } from '../light/Lights';
import CanvasElements from './CanvasElements';

gsap.registerPlugin(ScrollTrigger);

// Recorrido de "camera" en el eje "y" en base a scroll. Sin fisicas.
// is not possible to use, useContext insede the canvas. React can't share context among multiple context objects
export default function MyCanvas(props) {

	const [cloudsColor, setcloudsColor] = useState('#ad4c4c');

	// COMPONENT
	// TODO se podran meter componentes de react dentro del componente de Ktml de "drei" ??? o sino, funciones que usen componentes
	// TODO
	// TODO Meterle GSAP al GLTF, parar que se acerque y aleje y gire cuando se hace scroll
	// TODO Cambiar el GLTF
	// TODO

	return (
		<div className='row'>
			<div className='col-md-12 main'>
				<Canvas camera={{ position: [0, 0, 15], rotation: [0, 0, 0] }}>
					<Sky
						distance={450000}
						sunPosition={[0, props.light.isLightSky, 0]}
						inclination={0}
						azimuth={0.25}
					/>
					<OrbitControls
						rotateSpeed={0.1}
						enableZoom={false}
						enablePan={false}
						enableRotate={props.rotationEnable.isRotationEnable}
					/>
					<CanvasElements
						cameraRotation={props.cameraRotation}
						light={props.light}
					// position={modelChairObject.position}
					/>
					{/* <color attach="background" args={["#a64141"]} /> */}
					<Lights />
					<Cloud
						opacity={0.7}
						speed={0.2} // Rotation speed
						width={20} // Width of the full cloud
						depth={1.5} // Z-dir depth
						segments={15} // Number of particles
						color={cloudsColor} // Color of the particles
						depthTest
					/>
				</Canvas>
			</div>
		</div>
	);
}

MyCanvas.propTypes = {
	light: PropTypes.object,
	rotationEnable: PropTypes.object,
	setRotation: PropTypes.func,
};