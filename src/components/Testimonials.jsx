import React from "react";
import { FaStar } from "react-icons/fa";
import "./Testimonials.css";

const testimonials = [
  { id: 1, name: "أحمد", text: "خدمة رائعة والمنتجات عالية الجودة!", rating: 5, img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 2, name: "سارة", text: "وصل طلبي بسرعة والأسعار ممتازة!", rating: 4, img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: 3, name: "محمد", text: "تجربة تسوق سهلة وممتعة.", rating: 5, img: "https://randomuser.me/api/portraits/men/55.jpg" },
  { id: 4, name: "ليلى", text: "أنصح الجميع بالتسوق من هنا!", rating: 5, img: "https://randomuser.me/api/portraits/women/22.jpg" },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2>آراء عملائنا</h2>
      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <div key={t.id} className="testimonial-card">
            <div className="testimonial-header">
              <img src={t.img} alt={t.name} className="testimonial-img" />
              <h4>{t.name}</h4>
            </div>
            <p>“{t.text}”</p>
            <div className="testimonial-stars">
              {[...Array(t.rating)].map((_, i) => (
                <FaStar key={i} color="#FFD700" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
