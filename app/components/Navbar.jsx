"use client";
import { useState } from "react";
import { Globe, Menu, X } from "lucide-react";

export default function Navbar({ lang, setLang }) {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = "+94769656552";
  const message = encodeURIComponent(
    lang === "ta"
      ? "வணக்கம் Kitchen Box LK! இன்றைய மதிய உணவு மெனுவை பார்க்கலாமா?"
      : "Hi Kitchen Box LK! I want to check today's menu.",
  );

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-100">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo with official /logo.png */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="h-10 w-10 sm:h-11 sm:w-11 flex items-center justify-center">
            <img
              src="/logo.png"
              alt="Kitchen Box LK Logo"
              className="w-full h-full object-contain group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="text-xl sm:text-2xl font-black tracking-tight text-[#174b38] flex items-center gap-1">
            Kitchen<span className="text-[#f58d40]">Box</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-stone-700">
          <a href="#home" className="hover:text-[#f58d40] transition">
            {lang === "en" ? "Home" : "முகப்பு"}
          </a>

          <a href="#menu" className="hover:text-[#f58d40] transition">
            {lang === "en" ? "Food Gallery" : "உணவுப் படத்தொகுப்பு"}
          </a>

          <a href="#how" className="hover:text-[#f58d40] transition">
            {lang === "en" ? "How It Works" : "செயல்முறை"}
          </a>
          <a href="#about" className="hover:text-[#f58d40] transition">
            {lang === "en" ? "About Us" : "எங்களை பற்றி"}
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setLang(lang === "en" ? "ta" : "en")}
            className="flex items-center gap-1 text-xs font-bold px-2.5 py-2 rounded-xl bg-[#e8eee0] text-[#174b38] hover:bg-[#d5dfd6] transition shadow-xs"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang === "en" ? "தமிழ்" : "Eng"}</span>
          </button>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex bg-[#174b38] hover:bg-[#103829] text-white px-4 py-2 rounded-xl font-bold text-xs sm:text-sm items-center gap-1.5 transition-all shadow-md"
          >
            <span>{lang === "en" ? "Contact ↗" : "தொடர்பு ↗"}</span>
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl bg-stone-100 text-[#174b38] hover:bg-stone-200 transition"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-stone-200 shadow-xl px-6 py-5 flex flex-col gap-4 text-stone-800 font-bold transition-all">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#f58d40] py-1 border-b border-stone-100"
          >
            {lang === "en" ? "Home" : "முகப்பு"}
          </a>
          <a href="#menu" className="hover:text-[#f58d40] transition">
            {lang === "en" ? "Food Gallery" : "உணவுப் படத்தொகுப்பு"}
          </a>

          <a
            href="#how"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#f58d40] py-1 border-b border-stone-100"
          >
            {lang === "en" ? "How It Works" : "செயல்முறை"}
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#f58d40] py-1"
          >
            {lang === "en" ? "About Us" : "எங்களை பற்றி"}
          </a>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden bg-[#174b38] text-white py-3 rounded-xl text-center font-bold text-sm shadow-md mt-2 flex items-center justify-center gap-2"
          >
            <span>
              {lang === "en" ? "Contact via WhatsApp ↗" : "வாட்ஸ்அப் தொடர்பு ↗"}
            </span>
          </a>
        </div>
      )}
    </header>
  );
}
