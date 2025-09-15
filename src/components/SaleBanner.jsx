import React from "react";
import WinterProducts from "./WinterProducts";
import "./SaleBanner.css";

export default function SaleBanner({ addToCart, showWinter, setShowWinter }) {
  return (
    <>
      <section className="sale-banner" id="sale-banner">
        <div className="sale-content">
          <h2>خصومات تصل إلى 50% على الملابس الشتوية!</h2>
          <p>لا تفوت الفرصة، العروض لفترة محدودة.</p>

          {!showWinter && (
            <button className="btn-primary" onClick={() => setShowWinter(true)}>
              تسوق الآن
            </button>
          )}
        </div>
      </section>
      {showWinter && (
        <WinterProducts 
          addToCart={addToCart} 
          closeWinter={() => setShowWinter(false)} 
        />
      )}
    </>
  );
}
