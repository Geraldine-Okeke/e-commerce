import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './HOME/Home';
import { CartProvider } from './HOME/CartContext';
import Cart from './CART/Cart';
export default function App() {
  return (
    <>
      <Router>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path=""  />
            <Route path="/CART/Cart" element={<Cart/>}/>
            <Route path="/contact"  />
          </Routes>
        </CartProvider>
      </Router>
    </>
  );
}
