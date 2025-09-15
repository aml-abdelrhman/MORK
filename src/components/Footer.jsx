import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-copy">© {new Date().getFullYear()} MORK Store. جميع الحقوق محفوظة.</p>

        <div className="footer-social">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
        </div>

        
        <div className="footer-links">
         <Link to="/privacy">سياسة الخصوصية</Link>
         <Link to="/terms">الشروط والأحكام</Link>
         <Link to="/faq">الأسئلة الشائعة</Link>
         <Link to="/contact">تواصل معنا</Link>
         <Link to="/about">عن المتجر</Link>
        </div>
      </div>
    </footer>
  );
}

