import { Physics } from '@react-three/cannon';
import { CameraShake, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Web3ReactProvider } from '@web3-react/core';
import { Suspense } from 'react';
import '../../App.css';
import { utilsGameContext, UtilsGameContextProvider } from '../context/GameContext';
import { Lights } from '../light/Lights';
import BulletBox from './canvas/BulletBox';
import CameraRig from './canvas/CameraRig';
import { coinbaseWallet, hooks as coinbaseWalletHooks } from '../web3Connectors/connectors/coinbaseWallet';
import { hooks as metaMaskHooks, metaMask } from '../web3Connectors/connectors/metaMask';
import { hooks as networkHooks, network } from '../web3Connectors/connectors/network';
import { hooks as walletConnectHooks, walletConnect } from '../web3Connectors/connectors/walletConnect';
import GameStars from './canvas/GameStars';
import HtmlCanvas from './canvas/menuCanvas/HtmlCanvas';
import MenuPause from './canvas/menuCanvas/MenuPause';
import MenuPlay from './canvas/menuCanvas/MenuPlay';
import OutTopMenu from './outCanvas/OutTopMenu';
import Objetive from './canvas/Objetive';
import OutFooter from './outCanvas/OutFooter';
import PlayerBox from './canvas/PlayerBox';
import Spawner from './canvas/Spawner';

const Game = () => {

	const connectors = [
		[metaMask, metaMaskHooks],
		[walletConnect, walletConnectHooks],
		[coinbaseWallet, coinbaseWalletHooks],
		[network, networkHooks],
	]

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
										<Web3ReactProvider connectors={connectors}>
											<OutTopMenu play={gameUtils.arePlaying.play} counter={gameUtils.counter}
												setbuttonOpenModal={gameUtils.buttonOpenModal.setbuttonOpenModal}
												buttonOpenModal={gameUtils.buttonOpenModal.buttonOpenModal}
											/>
										</Web3ReactProvider>

										{/* <div className="game-prebox"> */}
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
											{/* {gameUtils.arePlaying.play && <fog attach='fog' args={['#232625', 0, 60]} // FOG />} */}
											{gameUtils.gameover.gameover && <HtmlCanvas> GAMEOVER </HtmlCanvas>}
											{gameUtils.hasWin.win && <HtmlCanvas> WINNER </HtmlCanvas>}
											<CameraRig setmove={gameUtils.cameraMovement.setmove} />
											{/* <Html position={[-6.5, 7, 0]} className="text-play">HIT TO PLAY</Html>
            										<Html position={[-5.5, 7, 0]} className="text-play">HIT TO PAUSE</Html> */}
											<Physics>
												<PlayerBox setplay={gameUtils.arePlaying.setplay} move={gameUtils.cameraMovement.move}
													gameover={gameUtils.gameover} />
												<BulletBox
													play={gameUtils.arePlaying.play}
												/>
												<Objetive
													setplay={gameUtils.arePlaying.setplay}
													setwin={gameUtils.hasWin.setwin}
													move={gameUtils.cameraMovement.move}
													counter={gameUtils.counter.counter}
													setcounter={gameUtils.counter.setcounter}
													settokens={gameUtils.tokens.settokens}
												/>
												<Spawner play={gameUtils.arePlaying.play} setplay={gameUtils.arePlaying.setplay} />
												<MenuPlay arePlaying={gameUtils.arePlaying} gameover={gameUtils.gameover} setwin={gameUtils.hasWin.setwin} />
												<MenuPause arePlaying={gameUtils.arePlaying} counter={gameUtils.counter} />
											</Physics>
											<GameStars />
										</Canvas>

										<Web3ReactProvider connectors={connectors}>
											<OutFooter arePlaying={gameUtils.arePlaying} tokens={gameUtils.tokens.tokens}
												setcounter={gameUtils.counter.setcounter}
												setbuttonOpenModal={gameUtils.buttonOpenModal.setbuttonOpenModal}
												buttonOpenModal={gameUtils.buttonOpenModal.buttonOpenModal}
											/>
										</Web3ReactProvider>

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