import { Web3Provider } from '@ethersproject/providers';
import React from "react";
import { Link } from "react-router-dom";

import "../App.css";

window.onload = function () {
  localStorage.clear();
};

const Navbar = () => {


  // usames "Web3Provider" de ethers para obtener la libreia y asi poder pasarsela por "Web3ReactProvider". De tal forma que en los hijos 
  // tendremos toda esa info. Funciona como un Context, pero con valores que obtiene la biblio de ethers del objeto del browser "window.ethereum"
  const getLibrary = (provider) => {
    const library = new Web3Provider(provider, 'any');
    library.pollingInterval = 15000;
    return library;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="row">
          <div className="nav-details">

            <Link className="navbar-brand" to="/game">
              GAME
            </Link>
            <Link className="navbar-brand" to="/chair">
              CHAIR
            </Link>
            <Link className="navbar-brand" to="/photos">
              PHOTOS
            </Link>
            <Link className="navbar-brand" to="/path">
              PATH
            </Link>
            <Link className="navbar-brand" to="/gsap">
              GSAP
            </Link>


          </div>
          <div className="nav-brand" >
            <Link className="navbar-brand my-text" to="/main">
              MAIN
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

{/* <Web3ReactProvider getLibrary={getLibrary} >
          <Web3ReactConnectionComponent />
        </Web3ReactProvider> */}
{/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          >
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
          <Link className="nav-link" to="/new-video">
          CreateVideo
          </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/three">
          3D
          </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/plane">
            Plane
            </Link>
            </li>
            </ul>
          </div> */}