import React, { useState } from "react";
import "./LoginPage.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      alert(`✅ تم تسجيل الدخول بنجاح!\nالبريد: ${email}`);
      setEmail("");
      setPassword("");
    } else {
      alert("⚠️ الرجاء إدخال البريد الإلكتروني وكلمة المرور");
    }
  };

  return (
    <div className="login-container">
      <h1>تسجيل الدخول</h1>
      <p>أدخل بياناتك لتسجيل الدخول إلى حسابك</p>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="البريد الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">تسجيل الدخول</button>
      </form>
    </div>
  );
}
