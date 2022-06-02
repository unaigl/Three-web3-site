import { Physics } from '@react-three/cannon';
import { CameraShake, OrbitControls, Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useState, Suspense, useRef } from 'react';
// Mine
import '../App.css';
import { Lights } from '../light/Lights';
import BulletBox from './BulletBox';
import CameraRig from './CameraRig';
import MenuPause from './menu/MenuPause';
import MenuPlay from './menu/MenuPlay';
import Objetive from './Objetive';
import PlayerBox from './PlayerBox';
import Spawner from './Spawner';
import OutCanvasHtml from './OutCanvasHtml';
import Footer from './Footer';
import GameOver from './GameOver';
import GameStars from './GameStars';
// import Web3 from '../connectors/Web3';

import { utilsGameContext, UtilsGameContextProvider } from '../context/GameContext';

// SUGERENCIAS
// Se puede hacer MAS FACIL CON NUMEROS, COMO ESTADO, 1 EN PAUSA, 2 JUGAR, 3 VICTORIA, 4 GAMEOVER
// rojo x, verde y, azul z

// FUNCIONAMIENTO
// Juego con fisicas pero sin recorrido de "camera" en base a scroll. La camera se movera con el movimiento del mouse
// Utilizaremos useState, ya que useContext no funciona bien dentro del elemento "canvas" de "fiber"

// El texto ira fuera del canvas, ya que al usar "Physics" de "cannon", al poner el mouse encima del html, se vuelve loco
// TODO resuelto. Al final, utilizando useContext se ha solucionado el problema. Antes tenia en el componente principal declarados los valores con useState
// y no me dejaba pasarlos al componente htmlOutCanvas sin que se volviera loco

// Si no se ponen los elementos html dentro del "Suspense", se vuelve loca la pantallla

const Game = () => {

	const ref = useRef();

	// TODO WinText component
	return (
		<div className='row'>
			<div className='col-md-12 game-screen'>
				{/* <Web3 /> */}
				<UtilsGameContextProvider>
					<utilsGameContext.Consumer>
						{(gameUtils) => {
							return (
								<>
									<Suspense fallback={null}>
										<OutCanvasHtml play={gameUtils.arePlaying.play} counter={gameUtils.counter} />

										<Canvas
											camera={{
												position: [0, 0, 3000],
												fov: 90,
												rotation: [0, 0, 0],
											}}>
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
											{gameUtils.arePlaying.play && <fog attach='fog' args={['#232625', 0, 60]} />}

											<CameraRig setmove={gameUtils.cameraMovement.setmove}>
												{/* <Html position={[-6.5, 7, 0]} className="text-play">HIT TO PLAY</Html>
            										<Html position={[-5.5, 7, 0]} className="text-play">HIT TO PAUSE</Html> */}
												<Physics>
													<PlayerBox setplay={gameUtils.arePlaying.setplay} move={gameUtils.cameraMovement.move}
														gameOver={gameUtils.gameOver} />
													<BulletBox
														play={gameUtils.arePlaying.play}
													/>
													<Objetive
														setplay={gameUtils.arePlaying.setplay}
														setwin={gameUtils.hasWin.setwin}
														move={gameUtils.cameraMovement.move}
														counter={gameUtils.counter}
														tokens={gameUtils.tokens}
													/>


													{gameUtils.arePlaying.play && <Spawner play={gameUtils.arePlaying.play} setplay={gameUtils.arePlaying.setplay} />}

													<MenuPlay arePlaying={gameUtils.arePlaying} gameOver={gameUtils.gameOver} setwin={gameUtils.hasWin.setwin} />
													<MenuPause arePlaying={gameUtils.arePlaying} counter={gameUtils.counter} />

												</Physics>
											</CameraRig>

											<GameStars />
										</Canvas>
										<GameOver arePlaying={gameUtils.arePlaying} gameOver={gameUtils.gameOver} hasWin={gameUtils.hasWin} tokens={gameUtils.tokens} />
										<Footer /> {/* Out of Canvas */}
									</Suspense>
								</>
							);
						}}

					</utilsGameContext.Consumer>
				</UtilsGameContextProvider>


			</div>
		</div>
	);
}

export default Game