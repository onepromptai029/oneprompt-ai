export default function AdminPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="rounded-2xl bg-white p-10 shadow-xl text-center">
        <h1 className="text-4xl font-bold text-blue-600">
          OnePrompt AI
        </h1>

        <p className="mt-3 text-xl">
          Admin Dashboard
        </p>

        <button className="mt-8 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white">
          Dashboard Ready 🚀
        </button>
      </div>
    </div>
  );
}