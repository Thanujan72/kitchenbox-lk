export default function CutoffNotice({ lang }) {
  return (
    <div className="bg-[#174b38] text-white py-7 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold mb-1">
            {lang === "en"
              ? "Plan your lunch ahead ⏰"
              : "மதிய உணவை முன்கூட்டியே திட்டமிடுங்கள் ⏰"}
          </h3>
          <p className="text-emerald-100 text-sm">
            {lang === "en"
              ? "Orders and changes must be completed before daily cutoff (Sri Lanka time)."
              : "ஆர்டர்கள் மற்றும் மாற்றங்கள் காலை cutoff நேரத்திற்குள் முடிக்கப்பட வேண்டும்."}
          </p>
        </div>
        <div className="flex gap-4">
          <div className="border border-white/30 rounded-xl px-5 py-3 text-center min-w-[130px]">
            <strong className="text-xl block">9:30 AM</strong>
            <small className="text-emerald-200 text-xs">
              {lang === "en" ? "Orders Close" : "ஆர்டர் முடிவு"}
            </small>
          </div>
        
        </div>
      </div>
    </div>
  );
}
