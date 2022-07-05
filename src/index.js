import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Card from './routes/Card';
import Pokeinfo from './routes/Pokeinfo';
import Dates from './routes/Dates'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
      <Route path="/Card" element={<Card />} />
      <Route path="/Pokeinfo" element={<Pokeinfo />} />
      <Route path="/Dates" element={<Dates />} />
      </Route>
    </Routes>
    </BrowserRouter> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

