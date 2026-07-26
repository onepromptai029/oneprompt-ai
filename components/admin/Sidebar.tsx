"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  Bot,
  FileText,
  CreditCard,
  BarChart3,
  Settings,
} from "lucide-react";

const menu = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/admin" },
  { name: "Users", icon: Users, href: "/admin/users" },
  { name: "AI Models", icon: Bot, href: "/admin/ai-models" },
  { name: "Prompts", icon: FileText, href: "/admin/prompts" },
  { name: "Payments", icon: CreditCard, href: "/admin/payments" },
  { name: "Analytics", icon: BarChart3, href: "/admin/analytics" },
  { name: "Settings", icon: Settings, href: "/admin/settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-10 text-center">
        🚀 OnePrompt AI
      </h1>

      <nav className="space-y-3">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-slate-800"
            >
              <Icon size={20} />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}