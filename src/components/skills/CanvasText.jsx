import React, { useRef, useEffect } from 'react'
import { Html } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Mine
import '../App.css';
import { utilsContext } from '../context/Context.jsx';

gsap.registerPlugin(ScrollTrigger);

const CanvasText = (props) => {

    const ref = useRef()
    useEffect(() => {
        ref.current.position.y = props.position.y

        gsap.fromTo(
            ref.current.position,
            {
                z: props.position.z,
            },
            {
                z: props.position.z + 500,
                scrollTrigger: {
                    start: `${props.triggerStart} 200px`,
                    end: '+=1800px',
                    scrub: 3,
                    markers: true,
                },
            }
        )
    }, [])

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

export default CanvasText
