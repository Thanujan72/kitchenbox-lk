"use client";
import { useState, useEffect } from "react";
import { MessageCircle, Heart } from "lucide-react";
import { FaFacebook, FaTiktok, FaWhatsapp } from "react-icons/fa"; // <--- Import from react-icons

export default function Footer() {
  const [year, setYear] = useState("");
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const whatsappNumber = "+94769656552";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi Kitchen Box LK! I would like to know more about your services.")}`;
  const fbUrl = "https://www.facebook.com/profile.php?id=61594250133738";
  const tiktokUrl =
    "https://www.tiktok.com/@kitchenboxlk?is_from_webapp=1&sender_device=pc";

  return (
    <footer className="bg-[#062319] text-stone-300 pt-16 pb-12 border-t border-[#103829]">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Col 1: Brand Info */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Kitchen Box LK Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-extrabold text-white text-xl tracking-tight">
              KitchenBox <span className="text-[#f58d40]">lk</span>
            </span>
          </div>
          <p className="text-xs text-stone-400 leading-relaxed mb-6">
            Authentic home-style lunches thoughtfully prepared by local home
            cooks and delivered across Jaffna for students and professionals.
          </p>
          <div className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-2 rounded-lg inline-block">
            ⏰ Cutoff: 9:30 AM Daily
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="font-bold text-white mb-4 text-sm tracking-wide uppercase">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-xs text-stone-400">
            <li>
              <a href="#home" className="hover:text-amber-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:text-amber-400 transition">
                Today's Menu
              </a>
            </li>
            <li>
              <a href="#how" className="hover:text-amber-400 transition">
                How It Works
              </a>
            </li>
            <li>
              <a href="#benefits" className="hover:text-amber-400 transition">
                Why Kitchen Box
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: Contact & Rules */}
        <div>
          <h4 className="font-bold text-white mb-4 text-sm tracking-wide uppercase">
            Contact & Rules
          </h4>
          <ul className="space-y-2.5 text-xs text-stone-400">
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition"
              >
                WhatsApp: +94 76 965 6552
              </a>
            </li>
            <li>
              Orders Close:{" "}
              <span className="text-white font-medium">9:30 AM</span>
            </li>
            <li>
              Payment:{" "}
              <span className="text-white font-medium">
                Cash on Delivery (COD)
              </span>
            </li>
          </ul>
        </div>

        {/* Col 4: Social Media using react-icons */}
        <div>
          <h4 className="font-bold text-white mb-4 text-sm tracking-wide uppercase">
            Follow Us
          </h4>
          <p className="text-xs text-stone-400 mb-4">
            Stay updated with daily menus and offers.
          </p>
          <div className="flex items-center gap-3">
            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-emerald-900/80 hover:bg-emerald-800 text-amber-400 flex items-center justify-center transition shadow border border-emerald-700"
              title="WhatsApp"
            >
              <FaWhatsapp className="w-5 h-5 text-amber-400" />
            </a>

            {/* Facebook */}
            <a
              href={fbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-emerald-900/80 hover:bg-emerald-800 text-amber-400 flex items-center justify-center transition shadow border border-emerald-700"
              title="Facebook"
            >
              <FaFacebook className="w-5 h-5 text-amber-400" />
            </a>

            {/* TikTok */}
            <a
              href={tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-emerald-900/80 hover:bg-emerald-800 text-amber-400 flex items-center justify-center transition shadow border border-emerald-700"
              title="TikTok"
            >
              <FaTiktok className="w-4 h-4 text-amber-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto px-4 pt-8 border-t border-[#103829] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
        <div className="flex items-center gap-1">
          <span>Made with</span>{" "}
          <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />{" "}
          <span>for Jaffna Students & Professionals</span>
        </div>
        <div>
          © {year || "2026"} Kitchen Box LK. All rights reserved. · Jaffna, Sri
          Lanka.
        </div>
      </div>
    </footer>
  );
}
