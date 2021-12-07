import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min'
import 'material-icons/css/material-icons.min.css'
import "swiper/swiper-bundle.min.css";
import {GlobalStyles} from './GlobalStyles'
ReactDOM.render(
  <React.StrictMode>
      <GlobalStyles/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);