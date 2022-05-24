import React, { useEffect, useContext, useState } from 'react';
import { Html } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

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
	if (props.setRotation.cameraRotation) { // Set Camera Default Rotation
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
			{/* 
			<CanvasText position={{ y: 3, z: -200 }} light={props.light} triggerStart={'600'} text={'Solidity'} />
			<CanvasText position={{ y: -1, z: -300 }} light={props.light} triggerStart={'700'} text={'Ethers'} />

			<CanvasText position={{ y: -5, z: -200 }} light={props.light} triggerStart={'600'} text={'Hardhat'} />
			<CanvasText position={{ y: -9, z: -200 }} light={props.light} triggerStart={'700'} text={'React'} />

			<CanvasText position={{ y: -13, z: -200 }} light={props.light} triggerStart={'900'} text={'MongoDb'} />
			<CanvasText position={{ y: -17, z: -200 }} light={props.light} triggerStart={'1000'} text={'Express'} />

			<CanvasText position={{ y: -20, z: -200 }} light={props.light} triggerStart={'900'} text={'Node'} />
			<CanvasText position={{ y: -24, z: -200 }} light={props.light} triggerStart={'1000'} text={'Threejs'} /> */}
		</>
	);
};

export default CanvasElements;

{
	/* <Html
		fullscreen
	  >
		<div className="container">
		  <div className="row">
			<div className="col-md-12">

			  <div className="tittles">
				<h1 className="parrafos">hello</h1>
				<h1 className="parrafos">hello</h1>
				<div className="progress">
				  <div className="progress-bar bg-warning barra-fixed" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
				</div>

				<button onClick={yeah} type="button" className="btn btn-warning">warning</button>

				<div id="take" className="card text-white bg-primary mb-3" style={{ maxWidth: '20rem' }}>
				  <div className="card-header">Header</div>
				  <div className="card-body">
					<h4 className="card-title">Primary card title</h4>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				  </div>
				</div>
			  </div>

			</div>
		  </div>
		</div>

	  </Html> */
}

//   < Html
// fullscreen
// prepend
// center
// zIndexRange = { [0, 0]}
//   transform={true}
// sprite
//   as='div' // Wrapping element (default: 'div')
//   wrapperClass // The className of the wrapping element (default: undefined)
//   prepend // Project content behind the canvas (default: false)
//   center // Adds a -50%/-50% css transform (default: false) [ignored in transform mode]
//   fullscreen // Aligns to the upper-left corner, fills the screen (default:false) [ignored in transform mode]
//   distanceFactor={10} // If set (default: undefined), children will be scaled by this factor, and also by distance to a PerspectiveCamera / zoom by a OrthographicCamera.
//   zIndexRange={[100, 0]} // Z-order range (default=[16777271, 0])
//   portal={domnodeRef} // Reference to target container (default=undefined)
//   transform // If true, applies matrix3d transformations (default=false)
//   sprite // Renders as sprite, but only in transform mode (default=false)
//   calculatePosition={(el: Object3D, camera: Camera, size: { width: number; height: number }) => number[]} // Override default positioning function. (default=undefined) [ignored in transform mode]
//   occlude={[ref]} // Can be true or a Ref<Object3D>[], true occludes the entire scene (default: undefined)
//   onOcclude={(visible) => null} // Callback when the visibility changes (default: undefined)
//   {...groupProps} // All THREE.Group props are valid
//   {...divProps} // All HTMLDivElement props are valid
// >
//   <h1>hello</h1>
//   <p>world</p>
// </Html >
