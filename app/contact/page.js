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
    <div className="bg-[#f7f8fb] text-[#11131a]">
      <Header />
      <main className="pt-[76px]">
        <section className="border-b border-[#11131a]/8 py-20 sm:py-32">
          <div className="nova-container">
            <p className="text-xs font-bold tracking-[0.14em] text-[#3158e8]">NOVA / ارتباط با ما</p>
            <h1 className="mt-6 max-w-4xl text-5xl font-extrabold tracking-[-0.06em] sm:text-7xl">بیایید درباره‌ی ایده بعدی صحبت کنیم.</h1>
          </div>
        </section>
        <section className="py-20 sm:py-28">
          <div className="nova-container grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm leading-8 text-[#11131a]/55">برای همکاری، رسانه، نمایندگی یا هر سؤال دیگری، پیام خود را برای ما بفرستید.</p>
              <div className="mt-10 space-y-5 text-sm">
                <a className="block text-[#11131a]/65 transition hover:text-[#3158e8]" href="mailto:hello@nova.ir">hello@nova.ir</a>
                <a className="block text-[#11131a]/65 transition hover:text-[#3158e8]" href="tel:+982191002200">۰۲۱-۹۱۰۰ ۲۲۰۰</a>
                <p className="text-[#11131a]/45">تهران، خیابان ولیعصر، مرکز فناوری نُوا</p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5 rounded-[32px] border border-[#11131a]/8 bg-white p-6 shadow-[0_24px_80px_rgba(17,19,26,0.07)] sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-xs font-semibold text-[#11131a]/55">نام<input required className="mt-2 w-full rounded-2xl border border-[#11131a]/10 bg-[#f7f8fb] px-4 py-4 text-sm text-[#11131a] outline-none transition focus:border-[#3158e8] focus:ring-4 focus:ring-[#3158e8]/10" placeholder="نام شما" /></label>
                <label className="text-xs font-semibold text-[#11131a]/55">ایمیل<input required type="email" className="mt-2 w-full rounded-2xl border border-[#11131a]/10 bg-[#f7f8fb] px-4 py-4 text-sm text-[#11131a] outline-none transition focus:border-[#3158e8] focus:ring-4 focus:ring-[#3158e8]/10" placeholder="you@example.com" /></label>
              </div>
              <label className="block text-xs font-semibold text-[#11131a]/55">موضوع<input required className="mt-2 w-full rounded-2xl border border-[#11131a]/10 bg-[#f7f8fb] px-4 py-4 text-sm text-[#11131a] outline-none transition focus:border-[#3158e8] focus:ring-4 focus:ring-[#3158e8]/10" placeholder="موضوع پیام" /></label>
              <label className="block text-xs font-semibold text-[#11131a]/55">پیام<textarea required rows="6" className="mt-2 w-full resize-none rounded-2xl border border-[#11131a]/10 bg-[#f7f8fb] px-4 py-4 text-sm leading-7 text-[#11131a] outline-none transition focus:border-[#3158e8] focus:ring-4 focus:ring-[#3158e8]/10" placeholder="چطور می‌توانیم کمک کنیم؟" /></label>
              <button type="submit" className="rounded-full bg-[#11131a] px-7 py-3.5 text-sm font-bold !text-white transition hover:bg-[#3158e8] hover:!text-white focus:outline-none focus:ring-4 focus:ring-[#3158e8]/20">{sent ? "پیام شما ثبت شد ✓" : "ارسال پیام"}</button>
              {sent && <p className="text-xs text-[#11131a]/45">این فرم در نسخه نمایشی به صورت محلی عمل می‌کند و پیامی به سرور ارسال نمی‌شود.</p>}
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
