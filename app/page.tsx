import StatsGrid from "@/components/admin/StatsGrid";
import Charts from "@/components/admin/Charts";
import QuickActions from "@/components/admin/QuickActions";
import RecentActivity from "@/components/admin/RecentActivity";

export default function AdminPage() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-500">
          Welcome back, Super Admin 👋
        </p>
      </div>

      <StatsGrid />

      <Charts />

      <div className="grid gap-8 lg:grid-cols-2">
        <QuickActions />
        <RecentActivity />
      </div>

    </div>
  );
}