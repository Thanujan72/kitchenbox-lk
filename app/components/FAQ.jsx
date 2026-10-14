'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ({ lang }) {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      qEn: "What is the daily order cutoff time?",
      qTa: "தினசரி ஆர்டர் செய்யும் இறுதி நேரம் என்ன?",
      aEn: "New orders and quantity changes must be submitted before 9:20 AM. Cancellations are accepted until 9:30 AM daily.",
      aTa: "புதிய ஆர்டர்கள் மற்றும் மாற்றங்கள் காலை 9:20 மணிக்குள் சமர்ப்பிக்கப்பட வேண்டும். ரத்து செய்தல் 9:30 மணி வரை ஏற்றுக்கொள்ளப்படும்."
    },
    {
      qEn: "How do I pay for my food?",
      qTa: "உணவுக்கான கட்டணத்தை எவ்வாறு செலுத்துவது?",
      aEn: "We currently support Cash on Delivery (COD). You pay the rider directly when your food box arrives at your doorstep.",
      aTa: "தற்போது நாங்கள் கேஷ் ஆன் டெலிவரி (COD) முறையை மட்டுமே வழங்குகிறோம். உணவு உங்கள் கையில் கிடைக்கும் போது நேரடியாக வழங்கலாம்."
    },
    {
      qEn: "Who cooks the food?",
      qTa: "உணவை சமைப்பவர் யார்?",
      aEn: "The food is prepared by verified, expert home-makers (Ammaas) across Jaffna ensuring pure home taste and hygiene.",
      aTa: "யாழ்ப்பாணத்தில் உள்ள நம்பகமான மற்றும் அனுபவமிக்க தாய்மார்களால் தூய்மையான முறையில் இது சமைக்கப்படுகிறது."
    },
    {
      qEn: "Can I order from multiple vendors in one delivery?",
      qTa: "ஒரே ஆர்டரில் பல சமையல்காரர்களிடமிருந்து உணவு பெறலாமா?",
      aEn: "Yes! You get a single Kitchen Box order ID, and our team handles multi-vendor collection and delivers it in one box.",
      aTa: "ஆம்! நீங்கள் ஒரே ஆர்டர் மூலம் பலரிடமிருந்தும் உணவு பெறலாம். எங்கள் குழு அதனை ஒருங்கிணைத்து ஒரே பெட்டியாக வழங்கும்."
    }
  ];

  return (
    <section className="py-16 px-4 bg-white dark:bg-stone-900 border-t border-stone-100 dark:border-emerald-950 transition-colors">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-emerald-950 dark:text-white mb-3">
            {lang === 'en' ? "Frequently Asked Questions" : "அடிக்கடி கேட்கப்படும் கேள்விகள்"}
          </h2>
          <p className="text-stone-600 dark:text-stone-400">
            {lang === 'en' ? "Everything you need to know about Kitchen Box LK service." : "எங்கள் சேவை குறித்த அனைத்து விபரங்களும்."}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-stone-200 dark:border-emerald-900 rounded-xl overflow-hidden bg-stone-50 dark:bg-emerald-950/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left font-semibold text-emerald-950 dark:text-white flex justify-between items-center gap-4"
              >
                <span>{lang === 'en' ? faq.qEn : faq.qTa}</span>
                {openIndex === index ? <ChevronUp className="w-5 h-5 text-amber-500" /> : <ChevronDown className="w-5 h-5 text-stone-400" />}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-stone-600 dark:text-stone-300 text-sm leading-relaxed border-t border-stone-200/50 dark:border-emerald-900/50 pt-3">
                  {lang === 'en' ? faq.aEn : faq.aTa}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}