import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Start Page
import Start from './Start/Start'

//Home Page
import Homepage from './Homepage/Home'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Homepage" element={<Homepage />} />
      <Route path="Start" element={<Start />} />
    </Routes>
  </BrowserRouter>
);


reportWebVitals();