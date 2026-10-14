'use client';
import { useState } from 'react';
import { Star, MessageSquare, Send } from 'lucide-react';

export default function Testimonials({ lang }) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const whatsappNumber = "+94769656552";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !comment) {
      alert(lang === 'en' ? "Please fill in your name and comment." : "தயவுசெய்து உங்கள் பெயர் மற்றும் கருத்துக்களை நிரப்பவும்.");
      return;
    }

    // Format message for WhatsApp
    const reviewText = encodeURIComponent(
      `⭐ *New Customer Feedback - Kitchen Box LK*\n\n` +
      `👤 *Name:* ${name}\n` +
      `📍 *Role/Area:* ${role || 'Jaffna'}\n` +
      `⭐ *Rating:* ${rating} / 5 Stars\n` +
      `💬 *Feedback:* "${comment}"`
    );

    // Open WhatsApp with prefilled feedback
    window.open(`https://wa.me/${whatsappNumber}?text=${reviewText}`, '_blank');
  };

  return (
    <section className="py-20 px-4 bg-stone-50 dark:bg-stone-950 transition-colors" id="reviews">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 bg-[#e8eee0] dark:bg-emerald-950 text-[#174b38] dark:text-emerald-300 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#f58d40]"></span>
            {lang === 'en' ? "Customer Feedback" : "வாடிக்கையாளர் கருத்து"}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#103829] dark:text-white">
            {lang === 'en' ? "Share your lunch experience" : "உங்கள் உணவு அனுபவத்தைப் பகிரவும்"}
          </h2>
          <p className="text-stone-600 dark:text-stone-400 text-sm mt-2">
            {lang === 'en' ? "We love hearing from you! Send your review directly to our WhatsApp." : "உங்கள் கருத்துக்களை வாட்ஸ்அப் மூலம் எங்களுடன் பகிர்ந்து கொள்ளுங்கள்."}
          </p>
        </div>

        {/* Feedback Form Card */}
        <div className="bg-white dark:bg-emerald-950/40 border border-stone-200 dark:border-emerald-900 rounded-3xl p-8 shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 dark:text-stone-300 mb-2">
                  {lang === 'en' ? "Your Name *" : "உங்கள் பெயர் *"}
                </label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={lang === 'en' ? "e.g. Thayooran" : "எ.கா: தமயரன்"}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-emerald-900 bg-stone-50 dark:bg-stone-900 text-stone-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#f58d40]"
                  required
                />
              </div>

              {/* Role / Area Input */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 dark:text-stone-300 mb-2">
                  {lang === 'en' ? "Your Role / Area" : "பணி / பகுதி"}
                </label>
                <input 
                  type="text" 
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder={lang === 'en' ? "e.g. Student, Nallur" : "எ.கா: மாணவர், நல்லூர்"}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-emerald-900 bg-stone-50 dark:bg-stone-900 text-stone-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#f58d40]"
                />
              </div>
            </div>

            {/* Star Rating Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 dark:text-stone-300 mb-2">
                {lang === 'en' ? "Rating" : "மதிப்பீடு"}
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setRating(star)}
                    className="p-1 focus:outline-none transition-transform hover:scale-110"
                  >
                    <Star 
                      className={`w-7 h-7 ${star <= rating ? 'text-amber-500 fill-amber-500' : 'text-stone-300 dark:text-stone-700'}`} 
                    />
                  </button>
                ))}
                <span className="ml-3 font-bold text-sm text-[#103829] dark:text-amber-400">
                  {rating} / 5 Stars
                </span>
              </div>
            </div>

            {/* Comment Textarea */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 dark:text-stone-300 mb-2">
                {lang === 'en' ? "Your Feedback / Review *" : "உங்கள் கருத்துக்கள் *" }
              </label>
              <textarea 
                rows={4}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder={lang === 'en' ? "How was the food and delivery?" : "உணவு மற்றும் டெலிவரி எப்படி இருந்தது?"}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-emerald-900 bg-stone-50 dark:bg-stone-900 text-stone-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#f58d40] resize-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#174b38] hover:bg-[#103829] text-white px-7 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all shadow-lg hover:shadow-xl"
              >
                <Send className="w-4 h-4 text-amber-400" />
                <span>{lang === 'en' ? "Send Feedback via WhatsApp" : "வாட்ஸ்அப் மூலம் அனுப்பவும்"}</span>
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}