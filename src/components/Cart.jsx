import React from "react";
import "./Cart.css";

export default function Cart({ cart, setCart, setShowCart }) {

  const handleRemove = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

 
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
    } else {
      alert("Thank you for your purchase! ✅");
      setCart([]); 
      setShowCart(false); 
    }
  };


 const handleEmptyCart = () => {
  if (cart.length === 0) {
    alert("Cart is already empty!");
  } else {
    const confirmDelete = window.confirm("هل تريد فعلاً مسح كل المنتجات من السلة؟ 🛒");
    if (confirmDelete) {
      setCart([]);
      alert("Your cart has been emptied 🗑️");
    }
  }
};

  const handleCloseCart = () => {
    setShowCart(false);
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Shopping Cart</h2>
        <button className="close-btn" onClick={handleCloseCart}>
          ✖
        </button>
      </div>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="cart-items">
            {cart.map((item, idx) => (
              <li key={idx} className="cart-item">
                <span>{item.name} - ${item.price}</span>
                <button className="remove-btn" onClick={() => handleRemove(idx)}>
                  ✖
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-actions">
            <button className="checkout-btn" onClick={handleCheckout}>
              Checkout
            </button>
            <button className="empty-btn" onClick={handleEmptyCart}>
              Empty Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}
