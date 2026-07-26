const actions = [
  "➕ Add User",
  "🤖 Add AI Model",
  "📢 Send Notification",
  "💳 View Payments",
];

export default function QuickActions() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200">

      <h2 className="text-2xl font-bold mb-6">
        Quick Actions
      </h2>

      <div className="grid gap-4">
        {actions.map((item) => (
          <button
            key={item}
            className="rounded-xl border p-4 text-left transition hover:bg-blue-600 hover:text-white"
          >
            {item}
          </button>
        ))}
      </div>

    </div>
  );
}