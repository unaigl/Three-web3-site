import React, { utilsContext, useState } from 'react';
import PropTypes from 'prop-types';
// Mine
import Modal from './modals/Modal';
import PlayModal from './modals/PlayModal';

import '../../App.css';

// REACT elemts OUT of the CANVAS // Podemos usar useContext aqui o pasar los valores por props (usaremos este ulgimo en este caso)
export default function OutCanvasMenu(props) {

	// DELETED, MOVED TO CONTEXT, const [modalIsOpen, setmodalIsOpen] = useState(false)
	const [playModalIsOpen, setplayModalIsOpen] = useState(false)

	return (
		<div className='bg-light '>
			<div className='col-md-12 text-center'>
				<fieldset style={{ display: 'inline-flex' }}>
					{/* 
					<div className="col-md-3">
						<h5 className="game-info-text">Score</h5>
					</div>
					<div className="col-md-3">
						<h5 className="game-info-text">{props.counter.counter}</h5>
					</div> */}


					<button
						className='col-md-3 btn btn-outline-dark btn-md game-info-text'
						onClick={() => setplayModalIsOpen(true)}
						type='button'
						style={{
							width: '150px'
						}}>
						How to play
					</button>

					<button
						className='col-md-3 btn btn-outline-dark btn-md game-info-text'
						onClick={() => props.setbuttonOpenModal(true)}
						type='button'
						style={{
							width: '150px'
						}}>
						{/* {!wallet ? 'Connect Wallet' : 'Disconnect'} */}
						Your Wallets
					</button>

					<div className="col-md-3" >
						{playModalIsOpen && <PlayModal playModalIsOpen={playModalIsOpen} onClose={() => setplayModalIsOpen(false)} />}
					</div>

					<div className="col-md-3" /* style={{ background: 'white' }} */>
						{props.buttonOpenModal && <Modal modalIsOpen={props.buttonOpenModal} onClose={() => props.setbuttonOpenModal(false)} />}
					</div>




				</fieldset>
			</div>

		</div>
	);
}

OutCanvasMenu.propTypes = {
	play: PropTypes.bool,
	setPlay: PropTypes.func,
	setWallet: PropTypes.func,
	wallet: PropTypes.string,
	counter: PropTypes.object,
	setbuttonOpenModal: PropTypes.func,
	buttonOpenModal: PropTypes.bool
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