import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App.js';
import About from './components/About/About.js';

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import Resources from './components/Resources/Resources';
// import Skywatch from './Skywatch.js';
import Eclipse from './components/Eclipse/Eclipse.js';
// import Spacewatch from './Spacewatch.js';
import Home from './components/Home/Home.js';
import Error from './components/Error/Error.js';
// import { Auth0Provider } from "@auth0/auth0-react";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<Error />}>
      <Route path="/" element={<Home />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/eclipse" element={<Eclipse />} />
      <Route path="/about" element={<About />} />
    </Route>
  )
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />

);


//ReactDOM.render(
  //<React.StrictMode>
  //  <RouterProvider router={router} />
 // </React.StrictMode>
 // </Auth0Provider>,
 // document.getElementById("root")
//);
//<Route path="/skywatch" element={<Skywatch />} />
//<Route path="/spacewatch" element={<Spacewatch />} />