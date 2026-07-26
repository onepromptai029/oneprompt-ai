export default function Charts() {
  return (
    <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          AI Analytics
        </h2>

        <button className="rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          View Report
        </button>
      </div>

      <div className="mt-6 h-80 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center">

        <div className="text-center">

          <div className="text-6xl">
            📊
          </div>

          <h3 className="mt-4 text-2xl font-bold">
            Analytics Chart
          </h3>

          <p className="mt-2 text-slate-500">
            Live Charts will be connected with Firebase later.
          </p>

        </div>

      </div>

    </div>
  );
}