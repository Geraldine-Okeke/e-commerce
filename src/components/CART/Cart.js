import React from 'react';
import { useCart } from '../HOME/CartContext';
import Header from '../HOME/Header';

function Cart() {
  const { cartItems, updateCartItemQuantity } = useCart();

  const handleQuantityChange = (itemId, newQuantity) => {
    updateCartItemQuantity(itemId, newQuantity);
  };

  const totalPrice = cartItems.reduce((total, item) => {
    return total + (item.discountPrice || item.price) * (item.quantity || 1);
  }, 0);

  return (
    <>
      <Header />

      <div className="container mx-auto mt-28 px-4">
        <h1 className="text-2xl font-semibold mb-3">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="border p-3 mb-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover"
                  />
                </div>
                <p>
                  Quantity:{' '}
                  <div className="flex items-center">
                    <button
                      onClick={() => handleQuantityChange(item.id, (item.quantity || 1) - 1)}
                      disabled={item.quantity <= 1}
                      className="bg-gray-200 text-gray-700 px-2 py-1 rounded-l"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={item.quantity || 1}
                      min={1}
                      onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                      className="w-16 py-1 px-2 border text-center"
                    />
                    <button
                      onClick={() => handleQuantityChange(item.id, (item.quantity || 1) + 1)}
                      className="bg-gray-200 text-gray-700 px-2 py-1 rounded-r"
                    >
                      +
                    </button>
                  </div>
                </p>
                <p>Discount Price: ${item.discountPrice || item.price}</p>
              </div>
            ))}
            <div className="border-t mt-3 pt-3">
              <p className="text-xl font-semibold">Total Price: ${totalPrice.toFixed(2)}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
