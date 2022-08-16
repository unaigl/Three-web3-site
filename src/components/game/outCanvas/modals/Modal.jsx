import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import ReactDom from 'react-dom';
import Web3ChildConnector from '../../../web3Connectors/Web3ChildConnector';

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
                y: -1200, /* px */
                x: 0
            },
            {
                y: -620,
                x: window.innerWidth / 10,
                duration: 0.5,
            }
        )
        return () => {
            document.getElementById('root').removeEventListener('click', closeModal);
        };
    }, [])

    // ProviderExample, efectivamente no se usa
    // Entiendo que aqui usa useWeb3React para sacar solo el connector, cuando tb tiene library, chainId, account, activate, deactivate
    // Estos valores en cambio, los sacara utilizando "initializeConnector" de "@web3-react/core". Suena redundante, pero es lo que hace
    // Este componente obtiene "ciertas variables" que tal vez no se esten usando realmente 
    // V2. Este componente si que hay que usarlo en todos los casos, la cosa es que aun declarada... no se estaba usando. es un Web3ReactProvider
    return ReactDom.createPortal(

        <div className="overlay-styles">

            <div className='text-center  '>
                <Web3ChildConnector />
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