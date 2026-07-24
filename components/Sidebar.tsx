"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  BrainCircuit,
  FileText,
  CreditCard,
  BarChart3,
  Settings,
} from "lucide-react";

const menu = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin",
  },
  {
    name: "Users",
    icon: Users,
    href: "/users",
  },
  {
    name: "AI Models",
    icon: BrainCircuit,
    href: "/ai-models",
  },
  {
    name: "Prompts",
    icon: FileText,
    href: "/prompts",
  },
  {
    name: "Payments",
    icon: CreditCard,
    href: "/payments",
  },
  {
    name: "Analytics",
    icon: BarChart3,
    href: "/analytics",
  },
  {
    name: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-[#0F172A] text-white min-h-screen flex flex-col">

      <div className="border-b border-slate-700 p-6">
        <h1 className="text-3xl font-bold text-blue-400">
          OnePrompt AI
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          Admin Dashboard
        </p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-blue-600"
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-slate-700 p-5">
        <p className="text-sm text-slate-400">
          Version 1.0
        </p>
      </div>

    </aside>
  );
}