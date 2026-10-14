export default function HowItWorks({ lang }) {
  return (
    <section className="py-20 px-4 bg-white" id="how">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 bg-[#e8eee0] text-[#174b38] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#f58d40]"></span>
            {lang === "en" ? "Simple Process" : "செயல்முறை"}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#103829]">
            {lang === "en"
              ? "How Kitchen Box LK works"
              : "கிச்சன் பாக்ஸ் வேலை செய்யும் முறை"}
          </h2>
          <p className="text-stone-600 text-sm mt-2">
            {lang === "en"
              ? "Your lunch journey from home kitchens to your workspace in 4 easy steps."
              : "4 எளிமையான படிகளில் உங்கள் மதிய உணவு."}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#fbfcf8] border border-stone-200 p-6 rounded-2xl">
            <span className="text-xs font-extrabold text-[#f58d40]">
              STEP 01
            </span>
            <div className="text-3xl my-3">📋</div>
            <h3 className="font-bold text-[#103829] mb-1">Check Menu</h3>
            <p className="text-stone-600 text-xs">
              Browse today's menu broadcasted on WhatsApp before 9:20 AM.
            </p>
          </div>

          <div className="bg-[#fbfcf8] border border-stone-200 p-6 rounded-2xl">
            <span className="text-xs font-extrabold text-[#f58d40]">
              STEP 02
            </span>
            <div className="text-3xl my-3">💬</div>
            <h3 className="font-bold text-[#103829] mb-1">Confirm Order</h3>
            <p className="text-stone-600 text-xs">
              Send your meal selection and delivery address to WhatsApp.
            </p>
          </div>

          <div className="bg-[#fbfcf8] border border-stone-200 p-6 rounded-2xl">
            <span className="text-xs font-extrabold text-[#f58d40]">
              STEP 03
            </span>
            <div className="text-3xl my-3">👩‍🍳</div>
            <h3 className="font-bold text-[#103829] mb-1">Fresh Prep</h3>
            <p className="text-stone-600 text-xs">
              Selected home cooks prepare fresh meals, coordinated by admin.
            </p>
          </div>

          <div className="bg-[#fbfcf8] border border-stone-200 p-6 rounded-2xl">
            <span className="text-xs font-extrabold text-[#f58d40]">
              STEP 04
            </span>
            <div className="text-3xl my-3">🛵</div>
            <h3 className="font-bold text-[#103829] mb-1">Doorstep & COD</h3>
            <p className="text-stone-600 text-xs">
              Rider delivers your hot lunch box. Pay via Cash on Delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
