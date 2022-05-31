import React, { utilsContext, useState } from 'react';
import PropTypes from 'prop-types';
// Mine
import { utilsGameContext } from '../context/GameContext.jsx';

import ProviderExample from '../web3Connectors/ProviderExample'
// import CoinbaseWalletCard from '../components/connectCard/CoinbaseWalletCard'
// import NetworkCard from '../components/connectCard/NetworkCard'
// import WalletConnectCard from '../components/connectCard/WalletConnectCard'
import MetaMaskCard from '../web3Connectors/connectCard/MetaMaskCard'

import '../App.css';

// REACT elemts OUT of the CANVAS // Podemos usar useContext aqui o pasar los valores por props (usaremos este ulgimo en este caso)
export default function OutCanvasHtml(props) {

	const [wallet, setwallet] = useState('')

	const set = () => {
		// console.log(props.play)
		if (wallet) return setwallet('')
		setwallet('0x1CdECa32df426caa5c637886BBD19b888e8E4ca7')
	};

	return (
		<div className='bg-light '>
			<div className='col-md-12 text-center '>{/* maxHeight */}
				<fieldset style={{ display: 'inline-flex' }}>
					<p
						className="col-md-3 game-info-text"
					>The white Box will mimic your moves, hit it 3 times to win.Press play and click on earth to shoot it (straight)
						You ll keep in the center to hit the box,
					</p>
					<div className="col-md-3">

						<h5 className="game-info-text">Score</h5>
						<h5 className="game-info-text">{props.counter.counter}</h5>
					</div>

					<button
						className='col-md-3 btn btn-outline-dark btn-md game-info-text'
						onClick={set}
						type='button'
						style={{
						}}>
						{!wallet ? '-Connect-' : 'Disconnect'}
					</button>
					<p className=" col-md-3 game-info-text" >
						{!wallet ? '0x0000000000000000000000000000000000000000' : wallet}
					</p>

				</fieldset>
			</div>
			<div className='col-md-12 text-center '>
				<ProviderExample />
				<div style={{ display: 'flex', flexFlow: 'wrap', fontFamily: 'sans-serif' }}>
					<MetaMaskCard />
					{/* <WalletConnectCard />
					<CoinbaseWalletCard />
					<NetworkCard /> */}
				</div>
			</div>
		</div>
	);
}

OutCanvasHtml.propTypes = {
	counter: PropTypes.number,

};

// TODO estudio. Hay que usar useState para modificar la data que recoge el createContext para que se rendericen los componentes que usan el contexto
// Si se usa .consumer -> este componente se re-renderiza cada vez que cambia algo en el context, sino no

/* <legend className='mt-3 p-1 '>
								<div
									className='form-check form-switch'
									style={{ display: 'inline-flex' }}>
									<input
										onClick={enableRotation}
										className='form-check-input'
										type='checkbox'
										id='flexSwitchCheckChecked'
										defaultChecked
									/>
									<label
										className='form-check-label'
										htmlFor='flexSwitchCheckDefault'
									/>
								</div>
								<h5
									style={{
										display: 'inline-flex',
										color: 'gray',
									}}>
									CameDAWtion
								</h5>
							</legend> */