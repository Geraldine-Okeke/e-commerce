import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemId, itemName, itemPrice, itemDiscountPrice) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      const index = updatedItems.findIndex((item) => item.id === itemId);

      if (index !== -1) {
      } else {
        updatedItems.push({
          id: itemId,
          name: itemName,
          price: itemPrice,
          discountPrice: itemDiscountPrice,
        });
      }

      return updatedItems;
    });
  };
  

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      const index = updatedItems.findIndex((item) => item.id === itemId);

      if (index !== -1) {
        if (updatedItems[index].quantity > 1) {
          updatedItems[index].quantity -= 1;
        } else {
          updatedItems.splice(index, 1);
        }
      }

      return updatedItems;
    });
  };
  const updateCartItemQuantity = (itemId, newQuantity) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: parseInt(newQuantity) };
        }
        return item;
      });
      return updatedItems;
    });
  };

  

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart,updateCartItemQuantity,setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
