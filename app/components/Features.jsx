export default function Features({ lang }) {
  return (
    <section className="py-20 px-4 bg-white" id="benefits">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 bg-[#e8eee0] text-[#174b38] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#f58d40]"></span>
            {lang === "en" ? "Why Kitchen Box LK?" : "ஏன் கிச்சன் பாக்ஸ்?"}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#103829]">
            {lang === "en"
              ? "Lunch that feels like home."
              : "வீட்டு உணவைப் போன்ற மதிய உணவு."}
          </h2>
          <p className="text-stone-600 text-sm mt-2">
            {lang === "en"
              ? "All the comfort of a home kitchen, made easy for your busy workday in Jaffna."
              : "யாழ்ப்பாணத்தில் உங்கள் வேலை நாட்களில் எளிதாகப் பெறும் வீட்டுச் சமையல்."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-8 border border-stone-200 rounded-3xl bg-[#fffefa] shadow-sm">
            <div className="w-14 h-14 bg-[#eaf2e9] rounded-2xl flex items-center justify-center text-2xl mb-5">
              🍲
            </div>
            <h3 className="text-lg font-bold text-[#103829] mb-2">
              {lang === "en" ? "Amma Kai Samayal" : "அம்மா கை சமையல்"}
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              {lang === "en"
                ? "Meals prepared by selected home cooks, bringing familiar flavours to your lunch break."
                : "தேர்ந்தெடுக்கப்பட்ட வீட்டுச் சமையல்காரர்களால் தயாரிக்கப்படும் உணவு."}
            </p>
          </div>

          <div className="p-8 border border-stone-200 rounded-3xl bg-[#fffefa] shadow-sm">
            <div className="w-14 h-14 bg-[#eaf2e9] rounded-2xl flex items-center justify-center text-2xl mb-5">
              💬
            </div>
            <h3 className="text-lg font-bold text-[#103829] mb-2">
              {lang === "en" ? "WhatsApp Ordering" : "வாட்ஸ்அப் ஆர்டர்"}
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              {lang === "en"
                ? "Browse the menu and connect with us on WhatsApp. No extra customer app required."
                : "வாட்ஸ்அப் மூலமாக எளிதாக ஆர்டர் செய்யலாம். தனி ஆப் தேவையில்லை."}
            </p>
          </div>

          <div className="p-8 border border-stone-200 rounded-3xl bg-[#fffefa] shadow-sm">
            <div className="w-14 h-14 bg-[#eaf2e9] rounded-2xl flex items-center justify-center text-2xl mb-5">
              🛵
            </div>
            <h3 className="text-lg font-bold text-[#103829] mb-2">
              {lang === "en" ? "Workplace Delivery" : "இடத்திற்கே விநியோகம்"}
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              {lang === "en"
                ? "Meals are collected, checked and dispatched for delivery to your chosen location with COD."
                : "உணவு சேகரிக்கப்பட்டு உங்கள் இடத்திற்கே பாதுகாப்பாக வழங்கப்படுகிறது."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
