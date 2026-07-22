const tools = [
  {
    icon: "📄",
    title: "Word",
    desc: "Create professional Word documents instantly.",
  },
  {
    icon: "📊",
    title: "Excel",
    desc: "Generate reports, formulas and dashboards.",
  },
  {
    icon: "📑",
    title: "PowerPoint",
    desc: "Beautiful AI presentations in seconds.",
  },
  {
    icon: "📕",
    title: "PDF",
    desc: "Convert, merge and summarize PDFs.",
  },
  {
    icon: "✉️",
    title: "Email",
    desc: "Write professional emails instantly.",
  },
  {
    icon: "🌐",
    title: "Translate",
    desc: "Translate into 100+ languages.",
  },
  {
    icon: "🖼️",
    title: "Image AI",
    desc: "Generate amazing AI images.",
  },
  {
    icon: "🤖",
    title: "AI Assistant",
    desc: "Ask anything. Get complete work.",
  },
];

export default function FeatureCards() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-14 text-center">
        <h2 className="text-4xl font-bold">
          Everything You Need
        </h2>

        <p className="mt-4 text-lg text-slate-600">
          One Prompt AI helps you complete every office task from one place.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {tools.map((tool) => (
          <div
            key={tool.title}
            className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="text-5xl">{tool.icon}</div>

            <h3 className="mt-5 text-xl font-bold">
              {tool.title}
            </h3>

            <p className="mt-3 text-slate-600">
              {tool.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}