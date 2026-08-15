"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <div>
      <Header />
      <main className="pt-[76px]">
        <section className="border-b border-white/7 py-20 sm:py-32">
          <div className="nova-container">
            <p className="text-xs font-semibold text-[#c8ff3d]">NOVA / ارتباط با ما</p>
            <h1 className="mt-6 max-w-4xl text-5xl font-extrabold tracking-[-0.06em] sm:text-7xl">بیایید درباره‌ی ایده بعدی صحبت کنیم.</h1>
          </div>
        </section>
        <section className="py-20 sm:py-28">
          <div className="nova-container grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm leading-8 text-white/40">برای همکاری، رسانه، نمایندگی یا هر سؤال دیگری، پیام خود را برای ما بفرستید.</p>
              <div className="mt-10 space-y-5 text-sm">
                <a className="block text-white/60 transition hover:text-white" href="mailto:hello@nova.ir">hello@nova.ir</a>
                <a className="block text-white/60 transition hover:text-white" href="tel:+982191002200">۰۲۱-۹۱۰۰ ۲۲۰۰</a>
                <p className="text-white/35">تهران، خیابان ولیعصر، مرکز فناوری نُوا</p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-xs text-white/40">نام<input required className="mt-2 w-full rounded-2xl border border-white/8 bg-[#111216] px-4 py-4 text-sm text-white outline-none transition focus:border-[#c8ff3d]/50" placeholder="نام شما" /></label>
                <label className="text-xs text-white/40">ایمیل<input required type="email" className="mt-2 w-full rounded-2xl border border-white/8 bg-[#111216] px-4 py-4 text-sm text-white outline-none transition focus:border-[#c8ff3d]/50" placeholder="you@example.com" /></label>
              </div>
              <label className="block text-xs text-white/40">موضوع<input required className="mt-2 w-full rounded-2xl border border-white/8 bg-[#111216] px-4 py-4 text-sm text-white outline-none transition focus:border-[#c8ff3d]/50" placeholder="موضوع پیام" /></label>
              <label className="block text-xs text-white/40">پیام<textarea required rows="6" className="mt-2 w-full resize-none rounded-2xl border border-white/8 bg-[#111216] px-4 py-4 text-sm leading-7 text-white outline-none transition focus:border-[#c8ff3d]/50" placeholder="چطور می‌توانیم کمک کنیم؟" /></label>
              <button type="submit" className="rounded-full bg-[#c8ff3d] px-7 py-3.5 text-sm font-bold text-[#08090b] transition hover:bg-[#d6ff70]">{sent ? "پیام شما ثبت شد ✓" : "ارسال پیام"}</button>
              {sent && <p className="text-xs text-white/35">این فرم در نسخه نمایشی به صورت محلی عمل می‌کند و پیامی به سرور ارسال نمی‌شود.</p>}
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
