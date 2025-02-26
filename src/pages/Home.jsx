import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import axios from "axios";
import CurrentOffers from "../components/CurrentOffers";

function Home({ cart, setCart }) {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (!existingItem) {
      setCart([...cart, { ...product, quantity: 1 }]);
      // setMessage(" Item added to cart!");
    } else {
      setMessage("⚠️ Item already in cart!");
    }
    setTimeout(() => setMessage(""), 3000);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    setMessage("❌ Item removed from cart!");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="relative">
      <CurrentOffers/>
      {/* <Navbar cartCount={cart.length} /> */}
      {message && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-gray-800 text-white py-2 px-4 rounded-lg">
          {message}
        </div>
      )}
      <div className="p-6 pt-5">
        <Product
          products={products}
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </div>
    </div>
  );
}

export default Home;
