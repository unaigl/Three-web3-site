import React from "react";
import { Link } from "react-router-dom";

import { Web3Provider } from '@ethersproject/providers';
import { Web3ReactProvider } from '@web3-react/core';
import Web3ReactConnectionComponent from '../THREE/connectors/Web3ReactConnectionComponent'

window.onload = function() {
	localStorage.clear();
};

const Navbar = () => {
  
  const getLibrary = (provider) => {
		const library = new Web3Provider(provider, 'any');
		library.pollingInterval = 15000;
		return library;
	};
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          My Favorite Videos
        </Link>
        <button
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
            <Web3ReactProvider getLibrary={getLibrary} >
              <Web3ReactConnectionComponent />
            </Web3ReactProvider>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
