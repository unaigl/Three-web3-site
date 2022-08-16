import 'bootswatch/dist/cyborg/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import Spinner from './components/spinner/Spinner'

const App = () => {

	const Game = lazy(() => import('./components/game/Game'));
	// const Skills = lazy(() => import('./components/skills/Skills'));

	return (
		<React.StrictMode>
			<BrowserRouter>
				{/* <Navbar /> */}
				<Suspense fallback={<Spinner>Welcome</Spinner>}>
					<Routes>
						<Route path='/' element={<Game />}> </Route>
						{/* <Route path='/libraries' element={<Skills />}> </Route> */}
					</Routes>
				</Suspense>
			</BrowserRouter>
		</React.StrictMode>
	);
};

export default App;
