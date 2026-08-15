"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "محصولات", href: "/products" },
  { label: "فناوری", href: "/technology" },
  { label: "درباره نُوا", href: "/about" },
  { label: "مجله", href: "/magazine" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-2xl">
      <div className="nova-container flex h-[76px] items-center justify-between">
        <Link href="/" className="group flex items-center gap-3" aria-label="نُوا، صفحه اصلی">
          <span className="grid size-9 place-items-center rounded-[12px] bg-slate-950 text-sm font-black text-white shadow-lg shadow-indigo-200 transition duration-300 group-hover:-rotate-3">ن</span>
          <span className="text-[17px] font-extrabold tracking-[0.04em] text-slate-950">NOVA</span>
        </Link>
        <nav className="hidden items-center gap-9 md:flex" aria-label="ناوبری اصلی">
          {links.map((link) => <Link key={link.href} href={link.href} className="text-[12px] font-medium text-slate-500 transition hover:text-slate-950">{link.label}</Link>)}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link href="/contact" className="rounded-full border border-slate-200 px-5 py-2.5 text-[12px] font-semibold text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950">ارتباط با ما</Link>
          <Link href="/products" className="rounded-full bg-slate-950 px-5 py-2.5 text-[12px] font-bold text-white transition hover:bg-[#3158e8]">مشاهده محصولات</Link>
        </div>
        <button type="button" onClick={() => setOpen((value) => !value)} className="grid size-11 place-items-center rounded-full border border-slate-200 bg-white md:hidden" aria-label={open ? "بستن منو" : "باز کردن منو"} aria-expanded={open}>
          <span className="flex w-4 flex-col gap-1.5"><span className={`h-px w-full bg-slate-900 transition ${open ? "translate-y-[4px] rotate-45" : ""}`} /><span className={`h-px w-full bg-slate-900 transition ${open ? "opacity-0" : ""}`} /><span className={`h-px w-full bg-slate-900 transition ${open ? "-translate-y-[4px] -rotate-45" : ""}`} /></span>
        </button>
      </div>
      <div className={`overflow-hidden border-t border-slate-200 bg-white/95 transition-all duration-300 md:hidden ${open ? "max-h-96" : "max-h-0"}`}>
        <nav className="nova-container flex flex-col gap-1 py-4" aria-label="ناوبری موبایل">
          {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-slate-950">{link.label}</Link>)}
          <Link href="/contact" onClick={() => setOpen(false)} className="mt-2 rounded-2xl bg-slate-950 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-[#3158e8]">ارتباط با ما</Link>
        </nav>
      </div>
    </header>
  );
}
