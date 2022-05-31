import React, { Suspense } from 'react';
// Mine
import '../App.css';
import { utilsContext, UtilsContextProvider } from '../context/Context';
import Footer from './Footer';
import MyCanvas from './MyCanvas';
import SwitchOptions from './SwitchOptions';

// Recorrido de "camera" en el eje "y" en base a scroll. Sin fisicas.

export default function Skills() {
	// TODO se podran meter componentes de react dentro del componente de Html de "drei" ??? Si. Lo que No se pueden meter son los componentes de Boostwatch
	// TODO Nuestro canvas cogera el "height" que le demos al viewport, vivira en el viewport. De tal forma que podremos usar el scroll en el viewport -
	// TODO que es el que utiliza gsap

	// TODO Agregarle algo parecido a "distance={3} // A factor that increases scroll bar travel (default: 1)" de "ScrollControls".
	// TODO Probar otra forma de lograr que tenga "scrub" en onUpdate

	// TODO AGREGAR useTransition
	// TODO Limitar la rotacion de la camara
	// TODO Meter mas objetos html del canvas y animar con gsap
	// TODO Juego con hardhat y ethers
	// TODO

	// TODO MAYBE Resumen de las tecnologias usadas y como se han usado (detallando datos tecnicos)

	// TODO tengo GSAP en "MyCanvas" para el "model" y GSAP en "HtmlCanvas" para lso textos

	/* React Component losing props after first render. Most likely an issue in the parent component.In React, whenever the parent's state is changed, all children will be re-rendered. The first time ClaimButton's render() is called, it has the right props.However, something is going on in the parent class --either the parent's state changed or some component farther up the ancestry chain had a state change -- which caused this component's props to change and trigger a re - render.I'd start your debugging efforts in the parent, since that's where the props are coming from. */
	return (
		<UtilsContextProvider>
			<div className='row'>
				<div className='col-md-12 main'>
					<SwitchOptions /> {/* Out of Canvas */}
					<utilsContext.Consumer>
						{(utils) => {
							return (
								<>
									<Suspense>
										<MyCanvas
											light={utils.light}
											rotationEnable={
												utils.rotationEnable
											}
											cameraRotation={utils.setRotation.cameraRotation}
										/>{' '}
										{/* Inside Canvas */}
									</Suspense>
								</>
							);
						}}
					</utilsContext.Consumer>
					<Footer /> {/* Out of Canvas */}
				</div>
			</div>
		</UtilsContextProvider>
	);
}

// Skills.prototype = {

// };

{
	/* <utilsContext.Consumer>
					{(consumerValue) => {
						console.log('JUEVES')
						console.log(consumerValue.light)
						const light = consumerValue.light
						return (
							<React.Fragment>
							</React.Fragment>
						);
					}}
				</utilsContext.Consumer> */
}

{
	/* <Html
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
  <h4>hello</h4>
  <p>world</p>
</Html> */
}

{
	/* <Cloud
	opacity={0.5}
	speed={0.1} // Rotation speed
	width={15} // Width of the full cloud
	depth={1.5} // Z-dir depth
	segments={10} // Number of particles
/> */
}

{
	/* <ScrollControls // permite tener un SCROLL estandar WEB en un Canvas 3D
	pages={3}
	distance={1} // A factor that increases scroll bar travel (default: 1)
	damping={4} // Friction, higher is faster (default: 4)
	horizontal={false} // Can also scroll horizontally (default: false)
	infinite={false} // Can also scroll infinitely (default: false)
>
	<Scroll html>
		<div className="marco"></div>
	</Scroll>
</ScrollControls> */
}
