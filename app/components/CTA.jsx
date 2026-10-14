'use client';
import { MessageCircle } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

export default function CTA({ lang }) {
  const whatsappNumber = "+94769656552";
  const message = encodeURIComponent(
    lang === 'ta' 
      ? "வணக்கம் Kitchen Box LK! இன்றைய மதிய உணவு மெனு மற்றும் விலை விவரங்களை அறிய விரும்புகிறேன்." 
      : "Hi Kitchen Box LK! I would like to ask for today's confirmed menu, current prices, and delivery availability."
  );

  return (
    <section className="py-16 px-4 bg-white" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-[#164c38] to-[#0d3526] text-white rounded-3xl p-8 md:p-12 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative overflow-hidden">
          
          {/* Background subtle design */}
          <div className="absolute right-0 top-0 w-64 h-64 border-[30px] border-white/5 rounded-full pointer-events-none -mr-16 -mt-16"></div>

          {/* Left Text */}
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-3">
              {lang === 'en' ? "Ready to make lunch easier?" : "மதிய உணவு நேரத்தை எளிதாக்க தயாரா?"}
            </h2>
            <p className="text-emerald-100 text-sm md:text-base leading-relaxed max-w-xl">
              {lang === 'en' 
                ? "Message Kitchen Box to ask for today's confirmed menu, current prices, delivery areas, and availability before 9:30 AM." 
                : "காலை 9:30 மணிக்குள் இன்றைய உறுதிப்படுத்தப்பட்ட மெனு, விலைகள் மற்றும் விநியோகப் பகுதிகளை அறிய வாட்ஸ்அப்பில் தொடரப்பது."}
            </p>
          </div>

          {/* Right Button */}
          <div className="flex justify-start md:justify-end z-10">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#f58d40] hover:bg-[#e07b32] text-white px-7 py-4 rounded-xl font-bold text-base flex items-center gap-3 shadow-lg transition-transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              <FaWhatsapp className="w-8 h-8 text-white" />
              <span>{lang === 'en' ? "Chat on WhatsApp ↗" : "வாட்ஸ்அப்பில் பேச ↗"}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}