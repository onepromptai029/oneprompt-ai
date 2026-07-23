export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-100">

      <div className="flex">

        {/* Sidebar */}

        <aside className="w-72 bg-white border-r min-h-screen p-6">

          <h1 className="text-3xl font-bold text-blue-600">
            OnePrompt AI
          </h1>

          <p className="text-slate-500 mt-1">
            Admin Dashboard
          </p>

          <div className="mt-10 space-y-3">

            <button className="w-full rounded-xl bg-blue-600 py-3 text-white">
              Dashboard
            </button>

            <button className="w-full rounded-xl border py-3">
              Users
            </button>

            <button className="w-full rounded-xl border py-3">
              AI Models
            </button>

            <button className="w-full rounded-xl border py-3">
              Prompts
            </button>

            <button className="w-full rounded-xl border py-3">
              Payments
            </button>

            <button className="w-full rounded-xl border py-3">
              Analytics
            </button>

            <button className="w-full rounded-xl border py-3">
              Settings
            </button>

          </div>

        </aside>

        {/* Content */}

        <section className="flex-1 p-10">

          <h2 className="text-4xl font-bold">
            Dashboard
          </h2>

          <p className="mt-2 text-slate-500">
            Welcome Admin 👋
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-3xl bg-white p-6 shadow">
              <h3 className="text-slate-500">
                Users
              </h3>

              <p className="mt-3 text-4xl font-bold">
                0
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow">
              <h3 className="text-slate-500">
                AI Requests
              </h3>

              <p className="mt-3 text-4xl font-bold">
                0
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow">
              <h3 className="text-slate-500">
                Revenue
              </h3>

              <p className="mt-3 text-4xl font-bold">
                ₹0
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow">
              <h3 className="text-slate-500">
                Active AI
              </h3>

              <p className="mt-3 text-4xl font-bold">
                12
              </p>
            </div>

          </div>

        </section>

      </div>

    </main>
  );
}