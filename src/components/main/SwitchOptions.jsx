import React, { useState } from "react";
import * as THREE from 'three'

// Mine
import "../App.css";
import { utilsContext } from '../context/Context.jsx'
import HtmlCanvas from "./HtmlCanvas";

// REACT elemts OUT of the CANVAS
export default function SwitchOptions() {

    const utils = React.useContext(utilsContext)

    const enableRotation = () => {
        utils.rotationEnable.setisRotationEnable(!utils.rotationEnable.isRotationEnable)
    }

    // TODO estudio.  Fuera del canvas (en el "SwitchOptions" AQUI) dejamos el boton para "setDefaultCameraRotation", que se encarga de darle el valor default al valor de la rotacion de la camara que
    // esta dentro del Canvas. Para ello usaremos context.Consumer en este componente para establecer el valor y despues pasaremos mediante props la data,
    // ya que react no permite pasar el context al canvas creado con fiber
    const setDefaultCameraRotation = () => {
        utils.setRotation.setcameraRotation(!utils.setRotation.cameraRotation)
    }

    return (

        <div className="bg-light" style={{ height: '60' }}>
            <div className="container ">
                <div className="row">
                    <div className="col-md-12 text-center">

                        <fieldset style={{ display: 'inline-flex' }}>
                            <legend className="mt-3 p-1 ">
                                <div className="form-check form-switch" style={{ display: 'inline-flex' }}>
                                    <input onClick={enableRotation} className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" defaultChecked />
                                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                                </div>
                                <h5 style={{ display: 'inline-flex', color: 'gray' }}>Camera rotation</h5>

                            </legend>

                            <button onClick={setDefaultCameraRotation} type="button" className="btn btn-outline-dark btn-sm " style={{ display: 'inline-flex', margin: '20px', width: '140px' }}>RESET</button>
                            
                            <button
                                onClick={() => {
                                    utils.light.setisLightSky(!utils.light.isLightSky)
                                }}
                                type="button" className="btn btn-outline-dark btn-sm " style={{ display: 'inline-flex', margin: '20px', width: '140px' }}>{utils.light.isLightSky ? 'Dark' : 'Light'}
                            </button>
                        </fieldset>

                    </div>
                </div>
            </div>
        </div>
    );
}
// TODO estudio. Hay que usar useState para modificar la data que recoge el createContext para que se rendericen los componentes que usan el contexto
// Si se usa .consumer -> este componente se re-renderiza cada vez que cambia algo en el context, sino no
{/* <utilsContext.Consumer>
    {(utils) => {
        return (
            <button 
                onClick={()=>{
                    utils.light.setisLightSky(!utils.light.isLightSky)
                }} 
                type="button" className="btn btn-outline-dark btn-sm " style={{ display: 'inline-flex', margin: '20px', width: '140px' }}>{utils.light.isLightSky ? 'Dark' : 'Light'}
            </button>)

    }
    }
</utilsContext.Consumer> */}