export default function PromptBox() {
  return (
    <section className="mx-auto -mt-6 max-w-5xl px-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
        <textarea
          placeholder="✍️ Write your prompt here...
Example: Create an Excel report from this sales data."
          className="h-44 w-full resize-none rounded-2xl border border-slate-200 p-5 text-lg outline-none focus:border-blue-500"
        />

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-3">
            <button className="rounded-xl border px-5 py-3 hover:bg-slate-100">
              📎 Upload
            </button>

            <button className="rounded-xl border px-5 py-3 hover:bg-slate-100">
              🎤 Voice
            </button>
          </div>

          <select className="rounded-xl border px-4 py-3">
            <option>Auto Detect</option>
            <option>Excel</option>
            <option>Word</option>
            <option>PowerPoint</option>
            <option>PDF</option>
            <option>Email</option>
          </select>
        </div>

        <div className="mt-8 text-center">
          <button className="rounded-2xl bg-blue-600 px-10 py-4 text-lg font-bold text-white hover:bg-blue-700">
            ✨ Create
          </button>
        </div>
      </div>
    </section>
  );
}