import "bootswatch/dist/pulse/bootstrap.min.css";
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import VideoList from "./Videos/VideoList";
// import VideoForm from "./Videos/VideoForm";
// import App from "./App";
import Navbar from './components/navbar/Navbar';
import { UtilsContextProvider } from "./components/context/Context";
import Game from "./components/gaming/Game";
import Chair from "./components/product/Chair";
import Photos from "./components/product/Photos";
import Path from "./components/pathScroll/Path";





const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
      {/* <Fragment> */}
        <Navbar />

        <div className="container p-4">
            <UtilsContextProvider>
          <Routes>
            {/* <Route exact path={["/", "/videos"]} component={VideoList} />
            <Route path="/new-video" component={VideoForm} />
            <Route path="/update/:id" component={VideoForm} /> */}
            {/* <Route path="/three" component={App} /> */}
              <Route path="/game" element={<Game />}/>
              <Route path="/chair" element={<Chair />}/>
              <Route exact path="/photos" element={<Photos />}/>
              <Route path="/path" element={<Path />}/>
          </Routes>
            </UtilsContextProvider>
          {/* <ToastContainer /> */}
        </div>
      {/* </Fragment> */}
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App