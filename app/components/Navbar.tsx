"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-[100] bg-[#0a1120]/80 backdrop-blur-md border-b border-white/5 flex flex-row justify-center lg:justify-end items-center gap-4 lg:gap-8 p-6 lg:px-14 text-sm font-medium">
      {[
        { name: "Accueil", href: "/" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Parcours", href: "/parcours" },
      ].map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`relative py-2 transition-all duration-300 ${
            isActive(link.href) ? "text-cyan-400" : "text-slate-400 hover:text-white"
          }`}
        >
          {link.name}
          {isActive(link.href) && (
            <span className="absolute bottom-1 left-0 w-full h-0.5 bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)] rounded-full" />
          )}
        </Link>
      ))}

      <Link href="/contact">
        <button className={`px-4 py-2 rounded-md transition-all duration-300 border ${
          isActive("/contact")
            ? "bg-cyan-500 text-[#0a1120] border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
            : "border-cyan-500 text-cyan-500 hover:bg-cyan-500/10"
        }`}>
          Me contacter
        </button>
      </Link>
    </nav>
  );
}