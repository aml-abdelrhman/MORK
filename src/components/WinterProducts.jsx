import React from "react";
import "./WinterProducts.css";

const winterProducts = [
  { id: 1, name: "Winter Jacket", price: 120, img: "https://images.pexels.com/photos/1805853/pexels-photo-1805853.jpeg" },
  { id: 2, name: "Wool Sweater", price: 80, img: "https://images.pexels.com/photos/10339372/pexels-photo-10339372.jpeg" },
  { id: 3, name: "Winter Boots", price: 150, img: "https://images.pexels.com/photos/30229925/pexels-photo-30229925.jpeg" },
  { id: 4, name: "Wool Hat", price: 120, img: "https://images.pexels.com/photos/10912814/pexels-photo-10912814.jpeg" },

];

export default function WinterProducts({ addToCart, closeWinter }) {
  return (
    <div className="winter-section">
      <div className="grid">
        {winterProducts.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button className="buy-btn" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <button onClick={closeWinter} className="back-btn">رجوع</button>
    </div>
  );
}
