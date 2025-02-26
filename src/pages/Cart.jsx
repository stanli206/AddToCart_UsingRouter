import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Cart({ cart, setCart }) {
  const navigate = useNavigate();
  const updateCartItem = (id, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Calculate subtotal
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // discount
  const discount = subtotal * 0.1;
  const finalTotal = subtotal - discount;

  return (
    <div className="min-h-screen bg-white p-6">
      <header className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Shopping Cart</h2>
      </header>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center justify-between p-4 border-b"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">
                    Price: ₹{item.price.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-600">
                    Total: ₹{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-4 sm:mt-0 space-x-4">
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  onClick={() => updateCartItem(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span>
                  {" "}
                  <p className="inline text-gray-600 text-sm">Quantity: </p>
                  {item.quantity}
                </span>
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  onClick={() => updateCartItem(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-8 text-right">
            <p className="text-lg">
              Subtotal :{" "}
              <span className="font-bold">
                <i class="fa-solid fa-indian-rupee-sign"></i>{" "}
                {subtotal.toFixed(2)}
              </span>
            </p>
            <p className="text-lg">
              Discount (10%) :{" "}
              <span className="font-bold">
                - <i class="fa-solid fa-indian-rupee-sign"></i>{" "}
                {discount.toFixed(2)}
              </span>
            </p>
            <p className="text-xl font-bold">
              Final Total : <i class="fa-solid fa-indian-rupee-sign"></i>{" "}
              {finalTotal.toFixed(2)}
            </p>
          </div>
        </>
      )}
      <Link to="/">
        <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
          Back To Home
        </button>
      </Link>
    </div>
  );
}

export default Cart;
