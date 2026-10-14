export default function ServiceAreas({ lang }) {
  const areas = ["Nallur", "Jaffna Town"];
  return (
    <section className="py-12 px-4 bg-[#f7f7ef] text-center border-y border-stone-200">
      <div className="max-w-4xl mx-auto">
        <h3 className="font-bold text-[#103829] mb-4 text-base">
          {lang === 'en' ? "📍 Delivering Across Key Jaffna Locations" : "📍 யாழ்ப்பாணத்தின் முக்கிய பகுதிகளில் விநியோகம்"}
        </h3>
        <div className="flex flex-wrap justify-center gap-2.5">
          {areas.map((area, idx) => (
            <span key={idx} className="bg-white border border-stone-300 px-4 py-1.5 rounded-full text-xs font-bold text-[#174b38] shadow-xs">
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}