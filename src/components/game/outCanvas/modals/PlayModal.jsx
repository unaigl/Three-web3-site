import { useEffect, useRef } from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const PlayModal = ({ playModalIsOpen, onClose }) => {

    if (!playModalIsOpen) return null

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
                // x: window.innerWidth / 8 // MODIFICAR
            },
            {
                y: -700,
                duration: 0.5,
            }
        )
        return () => {
            document.getElementById('root').removeEventListener('click', closeModal);
        };
    }, [])

    return ReactDom.createPortal(

        <div className="col-md-6 overlay-styles">
            <div className=" btn btn-outline btn-md ">

                <p
                    style={{ margin: '120px' }}
                >The white Box will mimic your moves, hit it and earn tokens.
                    <br />
                    You have to mantein in the center to have a possibility to hit
                    <br />
                    Press play and click on earth to shoot it (straight).
                </p>
            </div>
        </div>
        , document.getElementById('playPortal')
    )
}

PlayModal.prototype = {
    modalIsOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
}

export default PlayModal