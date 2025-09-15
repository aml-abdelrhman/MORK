import "./ProductGrid.css";

const menProducts = [
  { id: 1, name: "Men's Essential Tee", color: "Black", price: 30, img: "https://images.pexels.com/photos/20813983/pexels-photo-20813983.jpeg" },
  { id: 2, name: "Men's Essential Tee", color: "Gray", price: 35, img: "https://images.pexels.com/photos/27505995/pexels-photo-27505995.jpeg" },
  { id: 3, name: "Men's Essential Tee", color: "Orange", price: 33, img: "https://images.pexels.com/photos/16581351/pexels-photo-16581351.jpeg" },
  { id: 4, name: "Men's Essential Tee", color: "Beige", price: 35, img: "https://images.pexels.com/photos/17570147/pexels-photo-17570147.jpeg" },
  { id: 5, name: "Men's Essential Tee", color: "Black", price: 30, img: "https://images.pexels.com/photos/8044949/pexels-photo-8044949.jpeg" },
  { id: 6, name: "Men's Essential Tee", color: "Black", price: 40, img: "https://images.pexels.com/photos/7827738/pexels-photo-7827738.jpeg" },
  { id: 7, name: "Men's Essential Tee", color: "White", price: 41, img: "https://images.pexels.com/photos/15743050/pexels-photo-15743050.jpeg" },
];

const womenProducts = [
  { id: 1, name: "Women's Essential Tee", color: "White", price: 28, img: "https://images.pexels.com/photos/13626269/pexels-photo-13626269.jpeg" },
  { id: 2, name: "Women's Essential Tee", color: "white", price: 30, img: "https://images.pexels.com/photos/32508293/pexels-photo-32508293.jpeg" },
  { id: 3, name: "Women's Essential Tee", color: "Lavender", price: 28, img: "https://images.pexels.com/photos/582039/pexels-photo-582039.jpeg" },
  { id: 4, name: "Women's Essential Tee", color: "Black", price: 40, img: "https://images.pexels.com/photos/15548440/pexels-photo-15548440.jpeg" },
  { id: 5, name: "Women's Essential Tee", color: "White", price: 35, img: "https://images.pexels.com/photos/23583944/pexels-photo-23583944.jpeg" },
  { id: 6, name: "Women's Essential Tee", color: "Black", price: 28, img: "https://images.pexels.com/photos/9986313/pexels-photo-9986313.jpeg" },
  { id: 7, name: "Women's Essential Tee", color: "Pink", price: 25, img: "https://images.pexels.com/photos/17164523/pexels-photo-17164523.jpeg" },
];

const kidsProducts = [
  { id: 1, name: "Kids Essential Tee", color: "Gray", price: 20, img: "https://images.pexels.com/photos/5483638/pexels-photo-5483638.jpeg" },
  { id: 2, name: "Kids Essential Tee", color: "White", price: 25, img: "https://images.pexels.com/photos/1073083/pexels-photo-1073083.jpeg" },
  { id: 3, name: "Kids Essential Tee", color: "Dark-Gray", price: 22, img: "https://images.pexels.com/photos/15494942/pexels-photo-15494942.jpeg" },
  { id: 4, name: "Kids Essential Tee", color: "Blue", price: 20, img: "https://images.pexels.com/photos/5486883/pexels-photo-5486883.jpeg" },
  { id: 5, name: "Kids Essential Tee", color: "Green", price: 24, img: "https://images.pexels.com/photos/12714051/pexels-photo-12714051.jpeg" },
  { id: 6, name: "Kids Essential Tee", color: "White", price: 26, img: "https://images.pexels.com/photos/17328939/pexels-photo-17328939.jpeg" },
  { id: 7, name: "Kids Essential Tee", color: "White", price: 20, img: "https://images.pexels.com/photos/11307006/pexels-photo-11307006.jpeg" },
];

export default function ProductGrid({ activeTab, setActiveTab, addToCart }) {
  let products = [];
  if (activeTab === "men") products = menProducts;
  if (activeTab === "women") products = womenProducts;
  if (activeTab === "kids") products = kidsProducts;

  return (
    <div className="product-section" id="ProductGrid">
      <div className="tabs">
        <button id="men" className={activeTab === "men" ? "active" : ""} onClick={() => setActiveTab("men")}>Men</button>
        <button id="women" className={activeTab === "women" ? "active" : ""} onClick={() => setActiveTab("women")}>Women</button>
        <button id="kids" className={activeTab === "kids" ? "active" : ""} onClick={() => setActiveTab("kids")}>Kids</button>
      </div>

      <div className="grid" id="men">
        {activeTab === "men" && menProducts.map((product) => (
          <div key={product.id} className="card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name} ({product.color})</h3>
            <p>${product.price}.00</p>
            <button className="buy-btn" onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="grid" id="women">
        {activeTab === "women" && womenProducts.map((product) => (
          <div key={product.id} className="card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name} ({product.color})</h3>
            <p>${product.price}.00</p>
            <button className="buy-btn" onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="grid" id="kids">
        {activeTab === "kids" && kidsProducts.map((product) => (
          <div key={product.id} className="card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name} ({product.color})</h3>
            <p>${product.price}.00</p>
            <button className="buy-btn" onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
