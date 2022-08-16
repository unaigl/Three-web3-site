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
