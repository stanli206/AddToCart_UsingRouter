import React from "react";
import Product from "./Product";

function Categories({ title, products, cart, addToCart, removeFromCart }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl bg-red-300 rounded text-white p-1 w-55 text-center font-semibold mb-4">{title}</h2>
      {products.length > 0 ? (
        <Product
          products={products}
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ) : (
        <p className="text-gray-500">No products available.</p>
      )}
    </div>
  );
}

export default Categories;
