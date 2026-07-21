export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">

      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-5 border-b bg-white/80 backdrop-blur sticky top-0">
        <h1 className="text-3xl font-bold text-blue-600">
          OnePrompt AI
        </h1>

        <nav className="hidden md:flex gap-8 font-medium">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">API</a>
          <a href="#">About</a>
        </nav>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700">
          Login
        </button>
      </header>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center py-20 px-6">

        <h2 className="text-6xl font-bold text-gray-900">
          One Prompt.
          <br />
          Complete Work.
        </h2>

        <p className="mt-6 text-xl text-gray-600">
          Create Excel, PPT, PDF, Word, Email and much more using AI.
        </p>

        <textarea
          placeholder="✍️ Describe your work here..."
          className="mt-12 w-full h-48 rounded-3xl border border-gray-300 bg-white p-6 text-lg shadow-lg"
        />

        <div className="mt-8 flex flex-wrap justify-center gap-4">

          <button className="rounded-xl bg-white border px-6 py-3 shadow">
            📎 Upload
          </button>

          <button className="rounded-xl bg-white border px-6 py-3 shadow">
            🎤 Voice
          </button>

          <select className="rounded-xl border px-6 py-3 shadow">
            <option>🤖 Auto Detect</option>
            <option>📊 Excel</option>
            <option>📄 Word</option>
            <option>📽 PPT</option>
            <option>📕 PDF</option>
            <option>📧 Email</option>
          </select>

        </div>

        <button className="mt-10 bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-2xl text-xl font-bold shadow-lg">
          ✨ Create
        </button>

      </section>

    </main>
  );
}