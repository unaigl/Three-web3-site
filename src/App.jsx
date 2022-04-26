import "bootswatch/dist/pulse/bootstrap.min.css";
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import VideoList from "./Videos/VideoList";
// import VideoForm from "./Videos/VideoForm";
// import App from "./THREE/App";
import Navbar from './components/Navbar/Navbar';
import { UtilsContextProvider } from "./components/THREE/context/Context";
import Game from "./components/THREE/gaming/Game";





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
              <Route exact path="/plane" element={<Game />}/>
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