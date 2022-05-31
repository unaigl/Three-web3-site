import { Web3Provider } from '@ethersproject/providers';
import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

window.onload = function () {
	localStorage.clear();
};

const Navbar = () => {

	return (
		<nav
			className='navbar navbar-expand-lg navbar-light bg-light'
			style={{ height: '60px' }}>
			<div className='container'>
				<div className='row nav-margins'>
					<div className='col-md-12 text-center'>

						<div className='nav-brand' style={{ display: 'inline' }}>
							<Link className='navbar-brand my-text' to='/' exact="true">
								MAIN
							</Link>
						</div>

						<Link className='navbar-brand' to='/game'>
							GAME
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
