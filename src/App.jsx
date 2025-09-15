import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Cart from "./components/Cart";
import SaleBanner from "./components/SaleBanner";
import NewArrivals from "./components/NewArrivals";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import About from "./components/About";
import LoginPage from "./components/LoginPage";
import HelpPage from "./components/HelpPage";

export default function App() {
  const [activeTab, setActiveTab] = useState("men");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showWinter, setShowWinter] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} تم إضافته للعربة! ✅`);
  };

  return (
    <Router>
      <Navbar 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        showCart={showCart}
        setShowCart={setShowCart}
      />

      {showCart && <Cart cart={cart} setCart={setCart} setShowCart={setShowCart} />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <SaleBanner
                addToCart={addToCart}
                showWinter={showWinter}
                setShowWinter={setShowWinter}
              />
              {!showWinter && (
                <ProductGrid
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  addToCart={addToCart}
                />
              )}
              <NewArrivals addToCart={addToCart} />
              <About />
              <Testimonials />
              <Newsletter />

            </>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </Router>
  );
}
