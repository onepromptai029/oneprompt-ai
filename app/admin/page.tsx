import StatsGrid from "@/components/StatsGrid";

export default function AdminPage() {
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-500">
          Welcome back, Super Admin 👋
        </p>
      </div>

      <StatsGrid />
    </div>
  );
}