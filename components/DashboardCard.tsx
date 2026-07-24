import { ReactNode } from "react";

interface DashboardCardProps {
  title: string;
  value: string;
  change?: string;
  icon: ReactNode;
}

export default function DashboardCard({
  title,
  value,
  change,
  icon,
}: DashboardCardProps) {
  return (
    <div className="group rounded-3xl bg-white p-6 shadow-sm border border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-slate-500 text-sm">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            {value}
          </h2>

          {change && (
            <p className="mt-3 text-sm font-medium text-green-600">
              {change}
            </p>
          )}

        </div>

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg group-hover:scale-110 transition">
          {icon}
        </div>

      </div>

    </div>
  );
}