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
        <section className="relative overflow-hidden border-b border-[#11131a]/8 py-20 sm:py-32">
          <div className="absolute -right-24 top-8 size-96 rounded-full bg-indigo-200/35 blur-[110px]" />
          <div className="nova-container relative">
            <p className="text-xs font-bold tracking-[0.14em] text-[#3158e8]">NOVA / ارتباط با ما</p>
            <div className="mt-6 grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end lg:gap-20">
              <h1 className="max-w-5xl text-5xl font-extrabold leading-[1.05] tracking-[-0.065em] sm:text-7xl lg:text-8xl">بیایید درباره‌ی<br /><span className="text-slate-300">ایده‌ی بعدی صحبت کنیم.</span></h1>
              <p className="border-r-2 border-[#3158e8] pr-6 text-base leading-8 text-[#11131a]/55 sm:text-lg">یک محصول، یک همکاری یا فقط یک سؤال دارید؟ مسیر گفتگو از همین‌جا شروع می‌شود.</p>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="nova-container grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
            <aside className="lg:pt-4">
              <p className="text-xs font-bold text-[#3158e8]">در تماس باشیم</p>
              <p className="mt-5 max-w-sm text-sm leading-8 text-[#11131a]/55">برای همکاری، رسانه، نمایندگی یا هر سؤال دیگری، پیام خود را برای ما بفرستید. تیم نُوا در اولین فرصت پاسخ می‌دهد.</p>
              <div className="mt-12 border-t border-black/10 pt-6">
                <p className="text-[10px] font-bold text-black/35">ایمیل</p>
                <a className="mt-2 block text-lg font-bold transition hover:text-[#3158e8]" href="mailto:hello@nova.ir">hello@nova.ir</a>
                <p className="mt-7 text-[10px] font-bold text-black/35">تلفن</p>
                <a className="mt-2 block text-lg font-bold transition hover:text-[#3158e8]" href="tel:+982191002200">۰۲۱-۹۱۰۰ ۲۲۰۰</a>
                <p className="mt-7 text-[10px] font-bold text-black/35">دفتر نُوا</p>
                <p className="mt-2 text-sm leading-7 text-black/55">تهران، خیابان ولیعصر<br />مرکز فناوری نُوا</p>
              </div>
            </aside>

            <form onSubmit={handleSubmit} className="relative overflow-hidden rounded-[34px] border border-slate-200 bg-white p-6 shadow-[0_30px_90px_rgba(15,23,42,.075)] sm:p-10">
              <div className="absolute left-0 top-0 h-1 w-32 bg-[#3158e8]" />
              <div className="mb-9"><p className="text-xs font-bold text-[#3158e8]">پیام شما</p><h2 className="mt-2 text-2xl font-bold">چه چیزی در ذهن شماست؟</h2></div>
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="text-xs font-semibold text-[#11131a]/55">نام<input required className="mt-2 w-full rounded-xl border border-black/10 bg-[#f7f8fb] px-4 py-3.5 text-sm text-[#11131a] outline-none transition placeholder:text-black/25 focus:border-[#3158e8] focus:ring-4 focus:ring-[#3158e8]/10" placeholder="نام شما" /></label>
                <label className="text-xs font-semibold text-[#11131a]/55">ایمیل<input required type="email" className="mt-2 w-full rounded-xl border border-black/10 bg-[#f7f8fb] px-4 py-3.5 text-sm text-[#11131a] outline-none transition placeholder:text-black/25 focus:border-[#3158e8] focus:ring-4 focus:ring-[#3158e8]/10" placeholder="you@example.com" /></label>
              </div>
              <label className="mt-6 block text-xs font-semibold text-[#11131a]/55">موضوع<input required className="mt-2 w-full rounded-xl border border-black/10 bg-[#f7f8fb] px-4 py-3.5 text-sm text-[#11131a] outline-none transition placeholder:text-black/25 focus:border-[#3158e8] focus:ring-4 focus:ring-[#3158e8]/10" placeholder="موضوع پیام" /></label>
              <label className="mt-6 block text-xs font-semibold text-[#11131a]/55">پیام<textarea required rows="6" className="mt-2 w-full resize-none rounded-xl border border-black/10 bg-[#f7f8fb] px-4 py-3.5 text-sm leading-7 text-[#11131a] outline-none transition placeholder:text-black/25 focus:border-[#3158e8] focus:ring-4 focus:ring-[#3158e8]/10" placeholder="چطور می‌توانیم کمک کنیم؟" /></label>
              <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[10px] leading-5 text-black/35">نسخه نمایشی · اطلاعات شما به سرور ارسال نمی‌شود.</p>
                <button type="submit" className="rounded-full bg-[#11131a] px-7 py-3.5 text-sm font-bold !text-white transition hover:bg-[#3158e8] hover:!text-white focus:outline-none focus:ring-4 focus:ring-[#3158e8]/20">{sent ? "پیام شما ثبت شد ✓" : "ارسال پیام"}</button>
              </div>
              {sent && <p className="mt-4 text-xs font-semibold text-emerald-600">پیام شما با موفقیت ثبت شد.</p>}
            </form>
          </div>
        </section>

        <section className="px-4 pb-4">
          <div className="overflow-hidden rounded-[38px] bg-slate-950 px-7 py-20 text-center text-white sm:px-12 sm:py-24">
            <p className="text-xs font-bold text-cyan-300">NOVA / ۱۴۰۵</p>
            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black leading-[1.25] tracking-[-.05em] sm:text-6xl">گاهی بهترین پروژه‌ها<br /><span className="text-white/35">با یک پیام شروع می‌شوند.</span></h2>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
