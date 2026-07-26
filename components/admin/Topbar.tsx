"use client";

import { Bell, Search, UserCircle } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex items-center justify-between border-b bg-white px-8 py-5">

      <div className="flex items-center gap-3 rounded-xl border px-4 py-2 w-80">
        <Search size={18} />
        <input
          type="text"
          placeholder="Search..."
          className="w-full outline-none"
        />
      </div>

      <div className="flex items-center gap-5">
        <Bell className="cursor-pointer" />

        <div className="flex items-center gap-2">
          <UserCircle size={36} />
          <div>
            <p className="font-semibold">Admin</p>
            <p className="text-sm text-slate-500">
              Super Administrator
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}