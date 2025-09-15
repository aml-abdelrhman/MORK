import React, { useState } from "react";
import "./Newsletter.css";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault(); 
    if (!email.trim()) return; // لو الحقل فاضي متعملش حاجة

    alert(`✅ تم الاشتراك بنجاح! شكرًا لانضمامك إلينا 🎉`);
    setEmail(""); 
  };

  return (
    <section className="newsletter">
      <h2>اشترك في النشرة البريدية</h2>
      <form onSubmit={handleSubscribe}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="أدخل بريدك الإلكتروني"
          required
        />
        <button type="submit">اشترك الآن</button>
      </form>
    </section>
  );
}
