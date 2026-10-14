'use client';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  const whatsappNumber = "+94769656552";
  const message = encodeURIComponent("Hi Kitchen Box LK! I would like to check today's menu and place an order.");

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 group"
      title="Chat with Kitchen Box LK on WhatsApp"
      aria-label="Chat on WhatsApp"
    >
      {/* Lucide MessageCircle Icon */}
      <MessageCircle className="w-8 h-8 text-white fill-white" />

      {/* Tooltip on Hover */}
      <span className="absolute right-16 bg-white dark:bg-stone-900 text-stone-800 dark:text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-stone-200 dark:border-stone-800">
        💬 Click to Chat & Order
      </span>
    </a>
  );
}