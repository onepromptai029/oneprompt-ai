const activity = [
  "✅ New user registered",
  "🤖 GPT-5.5 Model Updated",
  "💰 New Premium Subscription",
  "📊 Dashboard Analytics Generated",
];

export default function RecentActivity() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200">

      <h2 className="text-2xl font-bold mb-6">
        Recent Activity
      </h2>

      <div className="space-y-4">
        {activity.map((item) => (
          <div
            key={item}
            className="rounded-xl bg-slate-100 p-4"
          >
            {item}
          </div>
        ))}
      </div>

    </div>
  );
}