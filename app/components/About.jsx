export default function About({ lang }) {
  return (
    <section className="py-20 px-4 bg-white dark:bg-stone-900" id="about">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Art / Illustration with your image */}
        <div className="bg-[#eaf2e9] dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center min-h-[350px] relative overflow-hidden shadow-inner">
          
          {/* Custom Cooking Image */}
          <div className="w-full h-56 sm:h-64 rounded-2xl overflow-hidden shadow-md mb-5 relative bg-stone-100">
            <img 
              src="/about-img.png" 
              alt="Kitchen Box LK Home Cook" 
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
              onError={(e) => {
                // Fallback if .png is not found, tries .jpg
                e.target.src = "/about-img.jpeg";
              }}
            />
          </div>

          <div className="text-center">
            <h3 className="text-xl font-extrabold text-[#103829] dark:text-white">
              {lang === 'en' ? "Freshly Prepared Daily" : "தினமும் சுடச்சுட தயாரிப்பு"}
            </h3>
            <p className="text-xs text-stone-600 dark:text-stone-300 mt-2 max-w-xs mx-auto leading-relaxed">
              {lang === 'en' 
                ? "Coordinating home cooks, quality checks, and doorstep delivery across Jaffna." 
                : "யாழ்ப்பாணத்தில் உள்ள தாய்மார்களின் சமையலை ஒருங்கிணைத்து உங்களுக்கு வழங்குவதில் பெருமிதம் கொள்கிறோம்."}
            </p>
          </div>
        </div>

        {/* Right Side: Content (Exact Old Code) */}
        <div>
          <span className="inline-flex items-center gap-2 bg-[#e8eee0] text-[#174b38] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#f58d40]"></span>
            {lang === 'en' ? "About Us" : "எங்களை பற்றி"}
          </span>
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#103829] dark:text-white mb-6 leading-tight">
            {lang === 'en' 
              ? "Made by home cooks. Coordinated by Kitchen Box LK." 
              : "வீட்டுச் சமையல் கலைஞர்கள் தயாரிப்பு. கிச்சன் பாக்ஸ் ஒருங்கிணைப்பு."}
          </h2>
          
          <p className="text-stone-600 dark:text-stone-300 text-base leading-relaxed mb-6">
            {lang === 'en' 
              ? "Kitchen Box LK brings selected home-makers (Ammaas) together under one reliable lunch service. We manage the daily menus, WhatsApp orders, hub quality checks, and prompt doorstep delivery so you can enjoy a comforting meal during your busy workday." 
              : "யாழ்ப்பாணத்தில் வெளியிலிருந்து வந்து தங்கிப்படிக்கும் மற்றும் வேலை செய்யும் மாணவர்களுக்கும், அலுவலர்களுக்கும் சொந்த வீட்டுச் சமையல் ஞாபகத்தை மீட்டெடுக்கும் வகையில் கிச்சன் பாக்ஸ் உருவாக்கப்பட்டுள்ளது. வாட்ஸ்அப் மூலம் ஆர்டர் பெற்று, தரமான முறையில் மதிய உணவு வழங்கப்படுகிறது."}
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm font-semibold text-[#174b38] dark:text-emerald-400">
              <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center text-xs">✓</span>
              <span>{lang === 'en' ? "Curated daily menus from trusted local home cooks" : "நம்பகமான உள்ளூர் சமையல்காரர்களின் தினசரி மெனு"}</span>
            </div>
            <div className="flex items-center gap-3 text-sm font-semibold text-[#174b38] dark:text-emerald-400">
              <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center text-xs">✓</span>
              <span>{lang === 'en' ? "Strict morning cutoff (9:30 AM) to ensure fresh preparation" : "புதியதாக சமைக்க காலை 9:30 மணி வரை மட்டுமே ஆர்டர்கள்"}</span>
            </div>
            <div className="flex items-center gap-3 text-sm font-semibold text-[#174b38] dark:text-emerald-400">
              <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center text-xs">✓</span>
              <span>{lang === 'en' ? "Reliable Cash on Delivery (COD) service across Jaffna" : "யாழ்ப்பாணம் முழுவதும் நம்பகமான கேஷ் ஆன் டெலிவரி (COD)"}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}