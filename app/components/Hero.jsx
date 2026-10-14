"use client";
import { MessageCircle } from "lucide-react";

export default function Hero({ lang }) {
  const whatsappNumber = "+94769656552";
  const whatsappMessage = encodeURIComponent(
    lang === "ta"
      ? "வணக்கம் Kitchen Box LK! இன்றைய மதிய உணவு மெனுவை பார்க்கலாமா?"
      : "Hi Kitchen Box LK! I would like to check today's menu and place an order.",
  );

  return (
    <section
      className="relative py-16 md:py-24 px-4 bg-gradient-to-br from-[#fffdf5] to-[#f7f5e9] overflow-hidden"
      id="home"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <span className="inline-flex items-center gap-2 bg-[#e8eee0] text-[#174b38] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-[#f58d40]"></span>
            {lang === "en"
              ? "Fresh from Jaffna Home Kitchens"
              : "யாழ்ப்பாண வீட்டுச் சமையல்"}
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#103829] tracking-tight mb-6 leading-tight">
            {lang === "en" ? "Good food." : "நல்ல உணவு,"} <br />
            <span className="text-[#f58d40]">
              {lang === "en"
                ? "Better lunch breaks."
                : "சிறந்த மதிய உணவு இடைவேளை."}
            </span>
          </h1>

          <p className="text-stone-600 text-base sm:text-lg mb-8 leading-relaxed max-w-lg">
            {lang === "en"
              ? "Enjoy comforting, home-style lunch at work. Made with care by local home cooks in Jaffna, brought together by Kitchen Box LK, and delivered to you. (Order before 9:20 AM)"
              : "யாழ்ப்பாணத்தில் உள்ளூர் சமையல்காரர்களால் அன்போடு தயாரிக்கப்பட்டு, கிச்சன் பாக்ஸ் மூலம் உங்கள் அலுவலகத்திற்கோ அல்லது இல்லத்திற்கோ வழங்கப்படும் தூய்மையான வீட்டு மதிய உணவு."}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Click here to check today's menu & place orders securely via WhatsApp"
              className="bg-[#f58d40] hover:bg-[#e07b32] text-white px-7 py-4 rounded-xl font-extrabold text-base flex items-center gap-3 shadow-lg transition-all duration-300 hover:-translate-y-0.5 group"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>
                {lang === "en"
                  ? "Order via WhatsApp Now ↗"
                  : "வாட்ஸ்அப்பில் ஆர்டர் செய்க ↗"}
              </span>
            </a>
          </div>

          <div className="flex flex-wrap gap-6 mt-10 text-xs font-semibold text-stone-600">
            <span>
              ✅{" "}
              <b className="text-[#174b38]">
                {lang === "en" ? "Home-style meals" : "வீட்டு முறை சமையல்"}
              </b>
            </span>
            <span>
              ✅{" "}
              <b className="text-[#174b38]">
                {lang === "en" ? "Simple ordering" : "எளிய வாட்ஸ்அப் ஆர்டர்"}
              </b>
            </span>
            <span>
              ✅{" "}
              <b className="text-[#174b38]">
                {lang === "en" ? "Cash on delivery" : "கேஷ் ஆன் டெலிவரி"}
              </b>
            </span>
          </div>
        </div>

        {/* Right Art: hero.png with standard <img> tag (No Next.js fill warning) */}
        <div className="relative flex justify-center items-center min-h-[420px]">
          <div className="absolute w-[84%] aspect-square bg-[#e7efdf] rounded-[46%_54%_57%_43%] rotate-[-18deg] -z-10"></div>

          {/* Top-Right Floating Card */}
          <div className="absolute top-4 right-2 sm:right-6 z-20 bg-white shadow-xl rounded-2xl p-3 flex items-center gap-3 border border-stone-100">
            <span className="text-2xl bg-[#f5f5ea] p-2 rounded-xl">🍃</span>
            <div className="text-xs font-extrabold text-[#103829]">
              {lang === "en"
                ? "Home-cooked goodness"
                : "தூய்மையான வீட்டுச் சுவை"}
              <span className="block text-[10px] font-medium text-stone-500">
                {lang === "en" ? "Made with care" : "அன்போடு தயாரிக்கப்பட்டது"}
              </span>
            </div>
          </div>

          {/* Main Hero Image using standard <img> tag */}
          <div className="relative w-full max-w-[460px] h-[340px] sm:h-[380px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-stone-100">
            <img
              src="/hero.png"
              alt="Jaffna Traditional Banana Leaf Meal"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Bottom-Left Floating Card */}
          <div className="absolute bottom-4 left-2 sm:left-6 z-20 bg-white shadow-xl rounded-2xl p-3 flex items-center gap-3 border border-stone-100">
            <span className="text-2xl bg-[#f5f5ea] p-2 rounded-xl">🍛</span>
            <div className="text-xs font-extrabold text-[#103829]">
              {lang === "en" ? "Wholesome lunch" : "சத்தான மதிய உணவு"}
              <span className="block text-[10px] font-medium text-stone-500">
                {lang === "en" ? "Every workday" : "ஒவ்வொரு வேலை நாளும்"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
