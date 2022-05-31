import 'bootswatch/dist/cyborg/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Game from './components/gaming/Game';
import Skills from './components/skills/Skills';
import Navbar from './components/navbar/Navbar';
import React from 'react';

const App = () => {
	return (
		<React.StrictMode>
			<BrowserRouter>
				<Navbar />
				{/* <div className="container p-4"> */}
				<Routes>
					<Route path='/game' element={<Game />} />
					<Route path='/skills' element={<Skills />} />
					<Route path='/' exact element={<Skills />} />
				</Routes>
			</BrowserRouter>
		</React.StrictMode>
	);
};

export default App;
