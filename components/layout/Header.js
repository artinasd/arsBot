"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "محصولات", href: "/products" },
  { label: "فناوری", href: "/technology" },
  { label: "درباره نُوا", href: "/about" },
  { label: "مجله", href: "/magazine" },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4">
      <path d="M3 8h9M8 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#08090b]/75 backdrop-blur-2xl">
      <div className="nova-container flex h-[76px] items-center justify-between">
        <Link href="/" className="group flex items-center gap-3" aria-label="نُوا، صفحه اصلی">
          <span className="grid size-9 place-items-center rounded-xl bg-[#c8ff3d] text-[#08090b] shadow-[0_0_30px_rgba(200,255,61,0.15)]">
            <span className="text-lg font-extrabold tracking-[-0.08em]">ن</span>
          </span>
          <span className="text-lg font-extrabold tracking-[-0.04em]">NOVA</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="ناوبری اصلی">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-[13px] font-medium text-white/60 transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/contact" className="rounded-full border border-white/10 px-5 py-2.5 text-[12px] font-semibold text-white/75 transition hover:border-white/25 hover:text-white">
            ارتباط با ما
          </Link>
          <Link href="/products" className="group flex items-center gap-2 rounded-full bg-[#c8ff3d] px-5 py-2.5 text-[12px] font-bold text-[#08090b] transition hover:bg-[#d5ff6a]">
            محصولات
            <ArrowIcon />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid size-11 place-items-center rounded-full border border-white/10 md:hidden"
          aria-label={open ? "بستن منو" : "باز کردن منو"}
          aria-expanded={open}
        >
          <span className="flex w-4 flex-col gap-1.5">
            <span className={`h-px w-full bg-white transition ${open ? "translate-y-[4px] rotate-45" : ""}`} />
            <span className={`h-px w-full bg-white transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-px w-full bg-white transition ${open ? "-translate-y-[4px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      <div className={`overflow-hidden border-t border-white/5 transition-all duration-300 md:hidden ${open ? "max-h-96" : "max-h-0"}`}>
        <nav className="nova-container flex flex-col gap-1 py-4" aria-label="ناوبری موبایل">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="mt-2 rounded-2xl bg-[#c8ff3d] px-4 py-3 text-center text-sm font-bold text-[#08090b]">
            ارتباط با ما
          </Link>
        </nav>
      </div>
    </header>
  );
}
