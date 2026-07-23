"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  BrainCircuit,
  FileText,
  FolderOpen,
  CreditCard,
  BarChart3,
  Settings,
  ShieldCheck,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "AI Models",
    href: "/admin/ai-models",
    icon: BrainCircuit,
  },
  {
    title: "Prompts",
    href: "/admin/prompts",
    icon: FileText,
  },
  {
    title: "Files",
    href: "/admin/files",
    icon: FolderOpen,
  },
  {
    title: "Payments",
    href: "/admin/payments",
    icon: CreditCard,
  },
  {
    title: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
  {
    title: "Admins",
    href: "/admin/admins",
    icon: ShieldCheck,
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-[#0F172A] text-white shadow-2xl">
      {/* Logo */}
      <div className="border-b border-slate-700 px-6 py-7">
        <h1 className="text-3xl font-extrabold text-blue-400">
          OnePrompt AI
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Super Admin Panel
        </p>
      </div>

      {/* Menu */}
      <nav className="mt-6 flex flex-col gap-2 px-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`flex items-center gap-4 rounded-xl px-4 py-4 transition-all duration-300
              ${
                active
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icon size={22} />

              <span className="font-medium">
                {item.title}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="absolute bottom-0 w-full border-t border-slate-700 p-5">
        <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-red-500 px-4 py-3 font-semibold transition hover:bg-red-600">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
}