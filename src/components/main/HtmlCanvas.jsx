import React, { useEffect, useContext, useState } from 'react'
import { Html } from '@react-three/drei'
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from 'three'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Mine
import "../App.css";
gsap.registerPlugin(ScrollTrigger);

import { utilsContext } from '../context/Context.jsx'

const HtmlCanvas = (props) => {

  const { camera } = useThree()
  // is not possible to use, useContext insede the canvas. React can't share context among multiple context objects
  // const { setRotation } = React.useContext(utilsContext)
  // camera.setRotationFromEuler(setRotation.cameraRotation)
  
  const ref0 = React.useRef()
  const ref = React.useRef()
  const ref2 = React.useRef()

  useEffect(() => {
    
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".container",
        pin: true,  
        start: "top top",
        end: "+=500", 
        scrub: 1,
      }
    });
    
    tl
      .fromTo(ref.current.position,
        {
          z: -300,
          y: 1.5,
        },
        {
          z: 200,
          scrollTrigger: {
            start: "400 200px",
            end: "+=1800px",
            scrub: 3,
            markers: true,
          },

        })
      .fromTo(ref2.current.position,
        {
          z: -300,
          y: -5,
        },
        {
          z: 200,
          scrollTrigger: {
            start: "600 200px",
            end: "+=1800px",
            scrub: 3,
            markers: true,
            onUpdate: ()=>{
              // props.setRotation.cameraRotation = camera.rotation 
              // console.log(camera.position)
            }
          },

        })
        

  }, [])
  
  // TODO aplicarlo
  if (props.setRotation.cameraRotation) {
    // props.light.setisLightSky(!props.light.isLightSky)
    gsap.to(camera.position, {
      x: 0,
      y: 0,
      z: 5,
      delay: .3,
    })
  }
  
  useFrame(() => {
    ref0.current.position.z = props.position.z
    ref0.current.position.x = props.position.x
    ref0.current.position.y = props.position.y + 4
  })

  return (
    <>
      <group ref={ref0}>
        <Html
          transform={true} // If true, applies matrix3d transformations (default=false)
        >
          <h1 className={props.light.isLightSky ?  "black-text" : "white-text"} >Skills</h1>
        </Html>
      </group>
      
      <group ref={ref}>
        <Html
          transform={true} // If true, applies matrix3d transformations (default=false)
        >
          <h1 className={props.light.isLightSky ?  "black-text" : "white-text"} >JavaScript</h1>
        </Html>
      </group>
      <group ref={ref2}>
        <Html
          transform={true} // If true, applies matrix3d transformations (default=false)
        >
          <h1 className={props.light.isLightSky ? "black-text" : "white-text"}>JJJJS</h1>
        </Html>
      </group>
      
    </ >
  )
}

export default HtmlCanvas

{/* <Html
        fullscreen
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">

              <div className="tittles">
                <h1 className="parrafos">hello</h1>
                <h1 className="parrafos">hello</h1>
                <div className="progress">
                  <div className="progress-bar bg-warning barra-fixed" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                </div>

                <button onClick={yeah} type="button" className="btn btn-warning">warning</button>

                <div id="take" className="card text-white bg-primary mb-3" style={{ maxWidth: '20rem' }}>
                  <div className="card-header">Header</div>
                  <div className="card-body">
                    <h4 className="card-title">Primary card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </Html> */}


//   < Html
// fullscreen
// prepend
// center
// zIndexRange = { [0, 0]}
      //   transform={true}
      // sprite
      //   as='div' // Wrapping element (default: 'div')
      //   wrapperClass // The className of the wrapping element (default: undefined)
      //   prepend // Project content behind the canvas (default: false)
      //   center // Adds a -50%/-50% css transform (default: false) [ignored in transform mode]
      //   fullscreen // Aligns to the upper-left corner, fills the screen (default:false) [ignored in transform mode]
      //   distanceFactor={10} // If set (default: undefined), children will be scaled by this factor, and also by distance to a PerspectiveCamera / zoom by a OrthographicCamera.
      //   zIndexRange={[100, 0]} // Z-order range (default=[16777271, 0])
      //   portal={domnodeRef} // Reference to target container (default=undefined)
      //   transform // If true, applies matrix3d transformations (default=false)
      //   sprite // Renders as sprite, but only in transform mode (default=false)
      //   calculatePosition={(el: Object3D, camera: Camera, size: { width: number; height: number }) => number[]} // Override default positioning function. (default=undefined) [ignored in transform mode]
      //   occlude={[ref]} // Can be true or a Ref<Object3D>[], true occludes the entire scene (default: undefined)
      //   onOcclude={(visible) => null} // Callback when the visibility changes (default: undefined)
      //   {...groupProps} // All THREE.Group props are valid
      //   {...divProps} // All HTMLDivElement props are valid
      // >
      //   <h1>hello</h1>
      //   <p>world</p>
      // </Html >
