import DashboardCard from "./DashboardCard";

import {
  Users,
  IndianRupee,
  BrainCircuit,
  Activity,
} from "lucide-react";

export default function StatsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <DashboardCard
        title="Total Users"
        value="2,540"
        change="+15% this month"
        icon={<Users size={30} />}
      />

      <DashboardCard
        title="Revenue"
        value="₹85,400"
        change="+22% this month"
        icon={<IndianRupee size={30} />}
      />

      <DashboardCard
        title="AI Requests"
        value="12,340"
        change="+31% this week"
        icon={<BrainCircuit size={30} />}
      />

      <DashboardCard
        title="Active AI"
        value="12"
        change="Running"
        icon={<Activity size={30} />}
      />

    </div>
  );
}