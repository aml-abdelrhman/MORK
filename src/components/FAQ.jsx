import React from "react";
import "./InfoSections.css";

export default function FAQ() {
  return (
    <section id="faq" className="info-section">
      <h2>الأسئلة الشائعة</h2>
      <ul>
        <li><strong>كيف أطلب؟</strong> اختَر المنتج وأضفه إلى عربة التسوق ثم أكمِل عملية الدفع.</li>
        <li><strong>هل الشحن متاح لجميع المحافظات؟</strong> نعم، نوصل إلى جميع المحافظات خلال 2-5 أيام عمل.</li>
        <li><strong>ما هي طرق الدفع؟</strong> الدفع عند الاستلام أو عبر بطاقات الدفع الإلكتروني.</li>
      </ul>
    </section>
  );
}
