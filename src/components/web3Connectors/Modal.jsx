import { useEffect, useRef } from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import ProviderExample from '../web3Connectors/ProviderExample'
import CoinbaseWalletCard from '../web3Connectors/connectCard/CoinbaseWalletCard'
import NetworkCard from '../web3Connectors/connectCard/NetworkCard'
import WalletConnectCard from '../web3Connectors/connectCard/WalletConnectCard'
import MetaMaskCard from '../web3Connectors/connectCard/MetaMaskCard'

gsap.registerPlugin(ScrollTrigger);


const Modal = ({ modalIsOpen, onClose }) => {

    if (!modalIsOpen) return null

    useEffect(() => {
        // como estamos observando en el "root", al clickar sobre el "modal" ("portal"), no se lanza ningun evento, por lo que lo he simplificado
        // y he cogido un valor cualquiera del evento que nunca sera 0 (el "clientX"), para que cuando devuelva un true, se cierre el modal
        const closeModal = e => {
            e.stopPropagation()
            if (e.clientX || e.isTrusted || e.cancelable) return onClose()
        }
        document.getElementById('root').addEventListener('click', closeModal);
        // La funcion return se ejecuta cuando se va a desmontar el componente

        gsap.fromTo(
            ".overlay-styles", // a los elementos del DOM, se le coje por clase, no hace falta ref
            {
                y: -1000, // px
                x: window.innerWidth / 2 / 2 // MODIFICAR
            },
            {
                y: -500,
                duration: 0.5,
            }
        )
        return () => {
            document.getElementById('root').removeEventListener('click', closeModal);
        };
    }, [])

    return ReactDom.createPortal(

        <div className="overlay-styles">

            <div className='col-md-12 text-center modal-styles' id='targett'>
                <ProviderExample />
                <div style={{ display: 'flex', flexFlow: 'wrap', fontFamily: 'sans-serif' }}>
                    <MetaMaskCard />
                    <WalletConnectCard />
                    <CoinbaseWalletCard />
                    <NetworkCard />
                </div>
            </div>
        </div>
        , document.getElementById('portal')
    )
}

Modal.prototype = {
    modalIsOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
}

export default Modal