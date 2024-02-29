import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
// pages
import Products from './pages/Products';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Login from './pages/loginPages/Login';
import Signup from './pages/loginPages/Signup';
import Cart from './pages/Cart';

const App = () => {
  const [signedin, setSignedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout signedin={signedin} setSignedIn={setSignedIn}/>}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login signedin={signedin} setSignedIn={setSignedIn} />} />
          <Route path="/signup" element={<Signup signedin={signedin}/>} />
          {/*
          <Route path="/products" element={<Products signedin={signedin} setSignedIn={setSignedIn}/>} />
          <Route path="/cart" element={<Cart signedin={signedin}/>} />
  */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
