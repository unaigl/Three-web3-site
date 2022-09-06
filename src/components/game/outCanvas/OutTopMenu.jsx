import PropTypes from 'prop-types';
import { useState } from 'react';
// Mine
import Modal from './modals/Modal';
import PlayModal from './modals/PlayModal';

import '../../../App.css';

// REACT elemts OUT of the CANVAS 
export default function OutCanvasMenu(props) {

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
						Your Wallets
					</button>
					<div className="col-md-3" >
						{playModalIsOpen && <PlayModal playModalIsOpen={playModalIsOpen} onClose={() => setplayModalIsOpen(false)} />}
					</div>

					<div className="col-md-3" >
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
