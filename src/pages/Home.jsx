import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import axios from "axios";

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
    if (existingItem) {
      setMessage("⚠️ Item already in cart!");
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="relative">
      <Navbar cartCount={cart.length} />
      {message && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-gray-800 text-white py-2 px-4 rounded-lg">
          {message}
        </div>
      )}
      <div className="p-6 pt-20">
        {/* <h1 className="text-3xl font-bold text-center mb-6">Product Categories</h1> */}
        <Categories
          title="Men's Clothing"
          products={products.filter((p) => p.category === "men's clothing")}
          addToCart={addToCart}
        />
        <Categories
          title="Women's Clothing"
          products={products.filter((p) => p.category === "women's clothing")}
          addToCart={addToCart}
        />
        <Categories
          title="Jewelry"
          products={products.filter((p) => p.category === "jewelery")}
          addToCart={addToCart}
        />
        <Categories
          title="Electronics"
          products={products.filter((p) => p.category === "electronics")}
          addToCart={addToCart}
        />
      </div>
    </div>
  );
}

export default Home;
