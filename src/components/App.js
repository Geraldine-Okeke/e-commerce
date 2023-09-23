import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './HOME/Home';
import Header from './HOME/Header'; // Assuming you have a header component
import { CartProvider } from './HOME/CartContext';

export default function App() {
  return (
    <>
      <Router>
        {/* Wrap the entire app with CartProvider */}
        <CartProvider>
          <Header /> {/* Place your header component here */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about"  />
            <Route path="/contact"  />
          </Routes>
        </CartProvider>
      </Router>
    </>
  );
}
