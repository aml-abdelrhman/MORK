import "./NewArrivals.css";

const newArrivals = [
  { id: 1, name: "Classic Hoodie", color: "White", price: 50, img: "https://images.pexels.com/photos/8217300/pexels-photo-8217300.jpeg" },
  { id: 2, name: "Oversized T-Shirt", color: "White", price: 28, img: "https://images.pexels.com/photos/20736690/pexels-photo-20736690.jpeg" },
  { id: 3, name: "Relaxed Fit Jeans", color: "Denim Blue", price: 45, img: "https://images.pexels.com/photos/10196164/pexels-photo-10196164.jpeg" },
  { id: 4, name: "Crop Top", color: "Pink", price: 25, img: "https://images.pexels.com/photos/3755931/pexels-photo-3755931.jpeg" },
  { id: 5, name: "Sneakers", color: "Gray", price: 65, img: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg" },
];

export default function NewArrivals({ addToCart }) {
  return (
    <section className="new-arrivals">
      <h2 className="section-title">New Arrivals</h2>
      <div className="grid">
        {newArrivals.map((product) => (
          <div key={product.id} className="card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name} ({product.color})</h3>
            <p>${product.price}.00</p>
            <button className="buy-btn" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
