export default function MenuPreview({ lang }) {
  const whatsappNumber = "+94769656552";
  const message = encodeURIComponent(
    lang === "ta"
      ? "வணக்கம் Kitchen Box LK! இன்றைய மெனு மற்றும் விலை விவரాలను அறிய விரும்புகிறேன்."
      : "Hi Kitchen Box LK! I would like to check today's menu and order.",
  );

  const sampleDishes = [
    {
      titleEn: "Jaffna Rice & Chicken Curry",
      titleTa: "யாழ்ப்பாண சோறும் கோழிக்கறியும்",
      tagEn: "TRADITIONAL BOX",
      tagTa: "பாரம்பரிய உணவுப் பெட்டி",
      descEn:
        "Red rice, authentic Jaffna chicken curry, parippu, pol sambol, mallung, and crispy appalam.",
      descTa:
        "சிவப்பு அரிசி, பாரம்பரிய யாழ்ப்பாண கோழிக்கறி, பருப்பு, தேங்காய்ச் sambol, மல்லு மற்றும் மொறுமொறுப்பான அப்பளம்.",
      price: "LKR 270",
      // First unique image for Chicken/Rice Meal
      image: "/menu-rice.jpg",
    },
    {
      titleEn: "Home-Style Veg Meal",
      titleTa: "வீட்டு முறை சைவ உணவு",
      tagEn: "VEGETARIAN BOX",
      tagTa: "சைவ உணவுப் பெட்டி",
      descEn:
        "Wholesome rice with seasonal Jaffna vegetable curry, moru, and crispy appalam.",
      descTa:
        "யாழ்ப்பாணக் காய்கறி கறிகள், மோர் மற்றும் மொறுமொறுப்பான அப்பளத்துடன் கூடிய சைவ உணவு.",
      price: "LKR 230",
      // Second unique image for Veg Meal (Change name if your file is menu-veg.png or something else)
      image: "/menu-veg.jpg",
    },
  ];

  return (
    <section className="py-20 px-4 bg-[#f7f7ef]" id="menu">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 bg-[#e8eee0] text-[#174b38] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#f58d40]"></span>
            {lang === "en" ? "Sample Menu" : "மாதிரி மெனு"}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#103829]">
            {lang === "en"
              ? "What sounds good today?"
              : "இன்று என்ன சாப்பிடலாம்?"}
          </h2>
          <p className="text-stone-600 text-sm mt-2">
            {lang === "en"
              ? "Today's confirmed dishes and availability are shared through WhatsApp."
              : "இன்றைய உணவுகள் மற்றும் கிடைக்கும் தன்மை வாட்ஸ்அப் மூலம் பகிரப்படும்."}
          </p>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {sampleDishes.map((dish, index) => (
            <div
              key={index}
              className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-md flex flex-col transition-all hover:shadow-xl"
            >
              {/* Image Container */}
              <div className="h-64 sm:h-72 overflow-hidden bg-stone-100 relative">
                <img
                  src={dish.image}
                  alt={dish.titleEn}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  onError={(e) => {
                    // This tells you in browser console if a specific image file is missing
                    console.error("Missing image file:", dish.image);
                  }}
                />
              </div>

              {/* Card Body */}
              <div className="p-7 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#f58d40]">
                    {lang === "en" ? dish.tagEn : dish.tagTa}
                  </span>
                  <h3 className="text-2xl font-bold text-[#103829] mt-1 mb-2">
                    {lang === "en" ? dish.titleEn : dish.titleTa}
                  </h3>
                  <p className="text-stone-600 text-sm mb-6 leading-relaxed">
                    {lang === "en" ? dish.descEn : dish.descTa}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="border-t border-stone-100 pt-4 flex items-center justify-between">
                  <span className="font-extrabold text-base text-[#174b38]">
                    {dish.price}{" "}
                    <small className="text-stone-500 font-normal text-xs">
                      (COD)
                    </small>
                  </span>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${message}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-sm text-[#174b38] hover:text-[#f58d40] transition-colors"
                  >
                    {lang === "en"
                      ? "Order via WhatsApp ↗"
                      : "வாட்ஸ்அப்பில் ஆர்டர் ↗"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
