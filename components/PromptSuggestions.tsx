const suggestions = [
  "📊 Create Excel Report",
  "📄 Create Word Document",
  "📑 Make PowerPoint",
  "📕 Summarize PDF",
  "📧 Write Professional Email",
  "📈 Create Dashboard",
  "📝 Create Resume",
  "🌐 Translate Document",
];

export default function PromptSuggestions() {
  return (
    <section className="mx-auto mt-10 max-w-6xl px-6">
      <h2 className="mb-5 text-center text-2xl font-bold">
        Popular AI Tasks
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {suggestions.map((item) => (
          <button
            key={item}
            className="rounded-full border border-slate-300 bg-white px-5 py-3 transition hover:bg-blue-600 hover:text-white"
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}