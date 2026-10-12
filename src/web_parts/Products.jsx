
import React, { useState } from "react";
import "./Products.css";

function Products() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Ladies Dress",
      price: 2500,
      image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=500",
    },
    {
      id: 2,
      name: "Stylish Handbag",
      price: 1800,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
    },
    {
      id: 3,
      name: "Elegant Jewelry",
      price: 1200,
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500",
    },
    {
      id: 4,
      name: "Ladies Shoes",
      price: 2200,
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500",
    },
    {
      id: 5,
      name: "Fashion Sunglasses",
      price: 900,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
    },
    {
      id: 6,
      name: "Ladies Accessories",
      price: 1500,
      image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500",
    },
    {
      id: 7,
      name: "Floral Maxi Dress",
      price: 3200,
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500",
    },
    {
      id: 8,
      name: "Elegant Pink Dress",
      price: 2800,
      image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500",
    },
    {
      id: 9,
      name: "Traditional Party Dress",
      price: 4500,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
    },

  ];

  function addToCart(product) {
    setCart((previousCart) => [...previousCart, product]);
    alert(product.name + " added to cart!");
  }

  return (
    <div className="products-page">
      <section className="products-header">
        <h1>Our Products</h1>
        <p>Discover beautiful fashion for every style.</p>
        <h3>🛒 Cart Items: {cart.length}</h3>
      </section>

      <section className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  "https://placehold.co/500x400/fff0f5/b83265?text=Product+Image";
              }}
            />

            <div className="product-details">
              <h3>{product.name}</h3>

              <p className="product-price">
                Rs. {product.price.toLocaleString("en-PK")}
              </p>

              <button onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </section>

      <footer className="products-footer">
        <p>© 2026 Khurshiya Store | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Products;