import React, { Suspense } from 'react';
// Mine
import '../App.css';
import { utilsContext, UtilsContextProvider } from '../context/Context';
import Footer from './Footer';
import MyCanvas from './MyCanvas';
import SwitchOptions from './SwitchOptions';
import Spinner from '../spinner/Spinner'


// Recorrido de "camera" en el eje "y" en base a scroll. Sin fisicas.

export default function Skills() {
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
									<Suspense fallback={<Spinner>Loading...</Spinner>}>
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

