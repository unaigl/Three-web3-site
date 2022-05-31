import React, { useEffect, useContext, useState } from 'react';
import { Html } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import PropTypes from 'prop-types';


import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Mine
import '../App.css';

import { utilsContext } from '../context/Context.jsx';
import CanvasText from './CanvasText';
import { ModelChair } from './ModelChair';

gsap.registerPlugin(ScrollTrigger);

const CanvasElements = (props) => {

	const { camera } = useThree();
	if (props.cameraRotation) { // Set Camera Default Rotation
		gsap.to(camera.position, {
			x: 0,
			y: 0,
			z: 5,
			delay: 0.3,
		});
	}

	const modelChairObject = ModelChair('chair/armchairYellow.gltf');
	const ref = React.useRef();
	useEffect(() => { // Movimiento del gltf y del texto
		// ref.current.position = { x: 0, y: 10, z: -40 }
		ref.current.position.x = 0;
		ref.current.position.y = 15;
		ref.current.position.z = -40;
		gsap.fromTo(
			[modelChairObject.position, ref.current.position],
			{
				z: -40,
			},
			{
				z: 40,
				scrollTrigger: {
					// TODO cambiar trigger
					// trigger: entrar,
					start: '400 200px',
					end: '+=1400px',
					scrub: 5,
					markers: true,
					onUpdate: function (self) {
						modelChairObject.rotation.x =
							(2.0 * 3.14 * self.progress) / 2;
						modelChairObject.position.y =
							10 + 2.0 * 3.14 * self.progress * 2;
					},
				},
			}
		);
	}, []);

	const allTexts = [
		[{ y: 3, z: -200 }, /* props.light, */ '600', 'Solidity'],
		[{ y: -1, z: -200 }, '700', 'Ethers'],
		[{ y: -5, z: -200 }, '600', 'Hardhat'],
		[{ y: -9, z: -200 }, '700', 'React'],
		[{ y: -13, z: -200 }, '900', 'MongoDb'],
		[{ y: -17, z: -200 }, '1000', 'Express'],
		[{ y: -20, z: -200 }, '900', 'Node'],
		[{ y: -24, z: -200 }, '1000', 'Threejs'],
	]

	return (
		<>
			<primitive // gltf
				scale={0.05}
				object={modelChairObject}
				dispose={null}
				position={[0, 10, -40]}
			/>
			<group ref={ref}>
				<Html
					transform // If true, applies matrix3d transformations (default=false)
				>
					<h1
						className={
							props.light.isLightSky ? 'black-text' : 'white-text'
						}>
						JavaScript
					</h1>
				</Html>
			</group>

			{allTexts.map((item, index) => {
				return (
					<CanvasText
						key={index}
						position={item[0]}
						triggerStart={item[1]}
						text={item[2]}
						light={props.light}
					/>
				)
			})}
		</>
	);
};

CanvasElements.prototype = {
	light: PropTypes.object,
	cameraRotation: PropTypes.bool,
};

export default CanvasElements;

