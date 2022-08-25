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

        gsap.fromTo(
            ".overlay-styles",
            {
                y: -1200, /* px */
                x: 0
            },
            {
                y: -500,
                x: window.innerWidth / 10,
                duration: 0.5,
            }
        )
        return () => {
            document.getElementById('root').removeEventListener('click', closeModal);
        };
    }, [])

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