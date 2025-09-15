import React from "react";
import "./Hero.css";

const Hero = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <div className="hero-image">
        <div className="hero-overlay">
          <h1 className="hero-title">اكتشف أحدث صيحات الموضة</h1>
          <p className="hero-subtitle">
            تسوق تشكيلات الرجال، النساء والأطفال بخصومات حصرية
          </p>
           <div className="hero-buttons">
            <button className="btn-primary" onClick={() => scrollToSection("ProductGrid")}>
              تسوق الآن
            </button>
            <button className="btn-outline" onClick={() => scrollToSection("sale-banner")}>
              تعرف على العروض
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
