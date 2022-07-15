import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route, Redirect,} from "react-router-dom";

//Homepage
import Homepage from './Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>
);


reportWebVitals();