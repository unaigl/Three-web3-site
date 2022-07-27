import React, { useRef, useEffect, useState } from 'react'
import { Html } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PropTypes from 'prop-types';
// Mine
import '../App.css';
import { utilsContext } from '../context/Context.jsx';

gsap.registerPlugin(ScrollTrigger);

const CanvasText = (props) => {

    const ref = useRef()

    const random = Math.random();

    useEffect(() => {
        ref.current.position.y = props.position.y;
        // ref.current.rotation.y = random * 2 * Math.PI;

        gsap.fromTo(
            ref.current.position,
            {
                z: props.position.z,
            },
            {
                z: props.position.z + 300,
                scrollTrigger: {
                    start: `${props.triggerStart} 200px`,
                    end: '+=1800px',
                    scrub: 3,
                    // markers: true,
                },
            }
        )
    }, [])

    // useFrame(() => {
    //     ref.current.rotation.y += 0.03

    //     if (ref.current.rotation.y > 2 * Math.PI) {
    //         ref.current.rotation.y = 0;
    //     }
    // })

    return (
        <group ref={ref}>
            <Html
                transform // If true, applies matrix3d transformations (default=false)
            >
                <h1
                    onClick={() => { alert('hit') }}
                    className={
                        props.light.isLightSky ? 'black-text' : 'white-text'
                    }>
                    {props.text}
                </h1>
            </Html>
        </group>
    )
}

CanvasText.propTypes = {
    text: PropTypes.string.isRequired,
    position: PropTypes.object.isRequired,
    triggerStart: PropTypes.string.isRequired,
    light: PropTypes.object.isRequired,
}

export default CanvasText
