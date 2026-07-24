"use client";

import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b bg-white px-8">

      <div className="flex items-center gap-3 rounded-xl border px-4 py-2 w-96">

        <Search size={18} />

        <input
          placeholder="Search anything..."
          className="w-full outline-none"
        />

      </div>

      <div className="flex items-center gap-6">

        <Bell className="cursor-pointer" />

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
            A
          </div>

          <div>

            <h3 className="font-semibold">
              Admin
            </h3>

            <p className="text-sm text-slate-500">
              Super Admin
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}