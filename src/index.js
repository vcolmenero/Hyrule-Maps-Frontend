import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from "./Main";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Main />
    </Router>
  </React.StrictMode>,
  document.getElementById('root') 
);


reportWebVitals();
