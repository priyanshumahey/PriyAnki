import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Database from 'better-sqlite3';

//Start Page
import Start from './Start/Start'

//Home Page
import Homepage from './Homepage/Home'

//App Structure
//Starts at the Start menu
//Start -> Homepage
//Homepage ->
//            Settings
//            Notes
//            Flashcards
//Settings
//Notes
//Flashcards



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Start" element={<Start />} />
      <Route path="Homepage" element={<Homepage />} />
    </Routes>
  </BrowserRouter>
);


reportWebVitals();