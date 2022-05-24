import 'bootswatch/dist/cyborg/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Chair from './components/chair-photos/Chair';
import Photos from './components/chair-photos/Photos';
import Game from './components/gaming/Game';
import Gsap from './components/gsap/GSAP';
import Main from './components/main/Main';
// import VideoList from "./Videos/VideoList";
// import VideoForm from "./Videos/VideoForm";
// import App from "./App";
import Navbar from './components/navbar/Navbar';
import Path from './components/pathScroll/Path';
import React from 'react';

// https://stackoverflow.com/questions/12936953/chrome-extension-onmessage-addlistener-cannot-read-property-onmessage-of-undef
// addEventListener('message', function (event) {
//   if (event.data && event.data.extensionMessage) {
//     alert(event.data.extensionMessage);
//   }
// });

const App = () => {
	return (
		<React.StrictMode>
			<BrowserRouter>
				{/* <Fragment> */}
				<Navbar />

				{/* <div className="container p-4"> */}
				<Routes>
					{/* <Route exact path={["/", "/videos"]} component={VideoList} />
                <Route path="/new-video" component={VideoForm} />
              <Route path="/update/:id" component={VideoForm} /> */}
					{/* <Route path="/three" component={App} /> */}

					<Route path='/game' element={<Game />} />

					<Route path='/chair' element={<Chair />} />
					<Route exact path='/photos' element={<Photos />} />
					<Route path='/path' element={<Path />} />
					<Route path='/gsap' element={<Gsap />} />

					<Route path='/main' element={<Main />} />
				</Routes>
				{/* </div> */}
				{/* <Routes>
          </Routes> */}
				{/* <ToastContainer /> */}
				{/* </Fragment> */}
			</BrowserRouter>
		</React.StrictMode>
	);
};

export default App;
