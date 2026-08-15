import Link from "next/link";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { company } from "@/data/company";

export const metadata = {
  title: "درباره نُوا",
  description: "داستان، نگاه و ارزش‌های نُوا.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f7f8f6] text-slate-950">
      <Header />
      <main className="pt-[76px]">
        <section className="relative overflow-hidden border-b border-slate-200 py-20 sm:py-32 lg:py-40">
          <div className="absolute -left-32 top-10 size-[420px] rounded-full bg-indigo-100/70 blur-[110px]" />
          <div className="absolute -right-24 bottom-0 size-[360px] rounded-full bg-cyan-100/60 blur-[100px]" />
          <div className="nova-container relative">
            <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-20">
              <div>
                <p className="text-xs font-bold tracking-[0.12em] text-[#5b5ce2]">NOVA / درباره ما</p>
                <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[1.08] tracking-[-0.065em] sm:text-7xl lg:text-[5.8rem]">ما فناوری را از جایی شروع می‌کنیم که <span className="nova-gradient-text">زندگی شروع می‌شود.</span></h1>
              </div>
              <div className="lg:pb-2">
                <p className="max-w-xl text-base leading-8 text-slate-500 sm:text-lg">{company.description}</p>
                <Link href="/products" className="mt-8 inline-flex items-center gap-3 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#5b5ce2]">دیدن محصولاتی که ساخته‌ایم <span aria-hidden="true">←</span></Link>
              </div>
            </div>
            <div className="mt-20 grid border-y border-slate-200 sm:grid-cols-3">
              <div className="border-b border-slate-200 py-7 sm:border-b-0 sm:border-l sm:px-8"><p className="text-3xl font-black">۱۴۰۵</p><p className="mt-2 text-xs text-slate-400">نسل تازه نُوا</p></div>
              <div className="border-b border-slate-200 py-7 sm:border-b-0 sm:border-l sm:px-8"><p className="text-3xl font-black">۵</p><p className="mt-2 text-xs text-slate-400">محصول در اکوسیستم</p></div>
              <div className="py-7 sm:px-8"><p className="text-3xl font-black">یک</p><p className="mt-2 text-xs text-slate-400">نگاه یکپارچه به خانه</p></div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-28">
          <div className="nova-container">
            <div className="grid gap-12 lg:grid-cols-[.55fr_1.45fr] lg:gap-24">
              <div>
                <p className="text-xs font-bold text-[#5b5ce2]">نگاه ما</p>
                <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-4xl">کمتر دیده شویم، بیشتر اثر بگذاریم.</h2>
              </div>
              <div className="grid gap-8 sm:grid-cols-2">
                <p className="text-lg font-semibold leading-9 text-slate-800">ما باور داریم بهترین فناوری، فناوری‌ای نیست که هر لحظه حضورش را به رخ بکشد؛ چیزی است که آرام، دقیق و قابل اعتماد، کیفیت روزمره را بهتر کند.</p>
                <p className="text-sm leading-8 text-slate-500">نُوا یک برند فرضی برای این تجربه است؛ مجموعه‌ای از محصولات هوشمند که با یک زبان طراحی مشترک ساخته شده‌اند تا خانه به جای مجموعه‌ای از دستگاه‌ها، یک اکوسیستم منسجم باشد.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="nova-container">
            <div className="mb-12 flex items-end justify-between gap-6">
              <div>
                <p className="text-xs font-bold text-[#5b5ce2]">اصول نُوا</p>
                <h2 className="mt-4 text-4xl font-black tracking-[-0.055em] sm:text-6xl">سه اصل، در تمام جزئیات.</h2>
              </div>
              <span className="hidden text-xs text-slate-400 sm:block">۰۱ — ۰۳</span>
            </div>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {company.values.map((value) => (
                <article key={value.number} className="grid gap-6 py-9 sm:grid-cols-[90px_1fr_1.2fr] sm:items-start sm:py-12">
                  <span className="text-xs font-bold text-[#5b5ce2]">{value.number}</span>
                  <h3 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">{value.title}</h3>
                  <p className="max-w-xl text-sm leading-8 text-slate-500">{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-4">
          <div className="relative overflow-hidden rounded-[38px] bg-slate-950 px-7 py-20 text-center text-white sm:px-10 sm:py-24">
            <div className="absolute -left-20 top-0 size-72 rounded-full bg-indigo-500/20 blur-[100px]" />
            <div className="absolute -right-20 bottom-0 size-72 rounded-full bg-cyan-400/10 blur-[100px]" />
            <div className="relative mx-auto max-w-3xl">
              <p className="text-xs font-bold text-cyan-300">NOVA / NEXT</p>
              <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] sm:text-6xl">حالا وقت دیدن محصولات است.</h2>
              <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-white/55">از هوای خانه تا امنیت و روشنایی، اکوسیستم نُوا برای یک تجربه یکپارچه طراحی شده است.</p>
              <Link href="/products" className="mt-9 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-bold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-100">کشف اکوسیستم نُوا</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
