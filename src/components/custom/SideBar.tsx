"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

 

export default function Sidebar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <aside className="w-64 bg-white shadow-lg hidden md:flex flex-col">
       <nav className="flex-1 p-6 space-y-2 text-gray-700">
        <SidebarLink href="/home/petani" label="🏠 Dashboard" active={isActive("/dashboard")} />
        <SidebarLink href="/home/petani/lahan" label="🌾 Data Lahan" active={isActive("/dashboard/lahan")} />
        <SidebarLink href="/home/petani/panen" label="🧺 Hasil Panen" active={isActive("/dashboard/panen")} />
        <SidebarLink href="/home/petani/cuaca" label="☀️ Cuaca" active={isActive("/dashboard/cuaca")} />
      </nav>
    </aside>
  );
}

function SidebarLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`block px-4 py-2 rounded-lg transition-all duration-200 ${
        active
          ? "bg-green-100 text-green-700 font-semibold before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-green-600"
          : "hover:bg-green-50 hover:text-green-600"
      }`}
    >
      {label}
    </Link>
  );
}


