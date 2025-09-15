import React from "react";
import "./HelpPage.css";

export default function HelpPage() {
  const faqs = [
    {
      question: "كيف يمكنني إنشاء حساب جديد؟",
      answer: "اضغط على زر تسجيل الدخول ثم اختر 'إنشاء حساب جديد' واملأ البيانات المطلوبة."
    },
    {
      question: "كيف أتابع طلباتي السابقة؟",
      answer: "بعد تسجيل الدخول، اذهب إلى قسم 'حسابي' ثم 'طلباتي' لمتابعة الطلبات."
    },
    {
      question: "ما هي طرق الدفع المتاحة؟",
      answer: "يمكنك الدفع باستخدام بطاقات الائتمان، الدفع عند الاستلام، أو باي بال."
    },
    {
      question: "كيف أسترجع كلمة المرور؟",
      answer: "اضغط على 'نسيت كلمة المرور' في صفحة تسجيل الدخول واتبع التعليمات."
    }
  ];

  return (
    <div className="help-container">
      <h1>المساعدة</h1>
      <p>ستجد هنا إجابات للأسئلة الأكثر شيوعًا وكيفية استخدام الموقع.</p>
      
      <div className="faq-list">
        {faqs.map((item, index) => (
          <div key={index} className="faq-item">
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
