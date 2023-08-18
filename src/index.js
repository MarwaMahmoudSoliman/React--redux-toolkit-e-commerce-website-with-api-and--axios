// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.js";
// import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// import { BrowserRouter } from "react-router-dom";



// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
// <BrowserRouter>

// <CartProvider>
//   <App />
// </CartProvider>
 
 
// </BrowserRouter>
  
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from './Context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
import { UsersContextProvider } from './Context/context/UsersContext';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { Provider } from 'react-redux';
import { store } from './rtk/store';
root.render(
  
  <React.StrictMode>
 <UsersContextProvider>
    <AuthContextProvider>
  
     <Provider store={store}>

  

    <BrowserRouter>

      <App />
      </BrowserRouter>
      </Provider>
      
    </AuthContextProvider>
    </UsersContextProvider>

     
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();