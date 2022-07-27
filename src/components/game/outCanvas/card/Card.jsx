import React from 'react'
import PropTypes from 'prop-types'
import Modal from '../modals/Modal'


import './Card.css'

const Card = (props) => {

    const openModal = () => {
        scrollTo(0, 190)
        props.setbuttonOpenModal(true)
        console.log('Connect your wallet and try again.');
    }

    return (
        <section>
            <div className="container">
                <div className="card">
                    <div className="content">
                        <div className="imgBx">
                            <img src={props.photo} />

                        </div>
                        {/* <h4>METAMASK </h4> */}
                        <h5>
                            {props.text}
                        </h5>

                    </div>
                    <ul className="sci">
                        <li>
                            <button
                                disabled={!props.disabled}
                                className="btn btn-primary btn-md button-margin"
                                // if wallet is not connected, "openModal" will redirect to the wallet connect modal
                                onClick={props.accounts ? props.claim : openModal}
                            >
                                {props.buttonOpenModal && <Modal />}
                                {props.buttonContent}
                            </button>
                            <button
                                disabled={!props.disabled}
                                className="btn btn-primary btn-md button-margin"
                                // if wallet is not connected, "openModal" will redirect to the wallet connect modal
                                onClick={props.accounts ? props.burn : openModal}
                            >
                                {props.buttonOpenModal && <Modal />}
                                {props.buttonTwoContent}
                            </button>
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    )
}

Card.propTypes = {
    photo: PropTypes.string,
    buttonContent: PropTypes.string,
    buttonTwoContent: PropTypes.string,
    claim: PropTypes.func,
    burn: PropTypes.func,
    text: PropTypes.node,
    disabled: PropTypes.bool,
    setbuttonOpenModal: PropTypes.func,
    buttonOpenModal: PropTypes.bool,
    accounts: PropTypes.array,
}

export default Card