type DashboardCardProps = {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
};

export default function DashboardCard({
  title,
  value,
  change,
  icon,
}: DashboardCardProps) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200 transition hover:shadow-xl hover:-translate-y-1">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-slate-500">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            {value}
          </h2>

          <p className="mt-4 text-sm text-green-600 font-medium">
            {change}
          </p>
        </div>

        <div className="rounded-2xl bg-blue-100 p-4 text-blue-600">
          {icon}
        </div>

      </div>

    </div>
  );
}