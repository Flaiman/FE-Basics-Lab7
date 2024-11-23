import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Card from './Card';
import './style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename='/FE-Basics-Lab7'>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/page2" element={<Card />} />
    </Routes>
  </BrowserRouter>
);

