import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { technologies } from "@/data/technologies";

export const metadata = {
  title: "فناوری",
  description: "فناوری‌های پشت اکوسیستم هوشمند نُوا.",
};

export default function TechnologyPage() {
  return (
    <div className="bg-[#f7f8fb] text-[#11131a]">
      <Header />
      <main className="pt-[76px]">
        <section className="relative overflow-hidden border-b border-[#11131a]/8 py-20 sm:py-32">
          <div className="absolute -left-32 top-10 size-[420px] rounded-full bg-indigo-200/35 blur-[110px]" />
          <div className="absolute -right-20 bottom-0 size-[360px] rounded-full bg-cyan-100/60 blur-[100px]" />
          <div className="nova-container relative">
            <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-24">
              <div>
                <p className="text-xs font-bold tracking-[0.14em] text-[#3158e8]">NOVA / TECHNOLOGY</p>
                <h1 className="mt-6 max-w-5xl text-5xl font-extrabold leading-[1.05] tracking-[-0.065em] sm:text-7xl lg:text-8xl">فناوری وقتی<br /><span className="text-slate-300">بهترین است که فقط کار کند.</span></h1>
              </div>
              <div className="border-r-2 border-[#3158e8] pr-6 lg:mb-2">
                <p className="text-base leading-8 text-[#11131a]/60 sm:text-lg">ما لایه‌های پیچیده را پشت تجربه‌ای ساده پنهان می‌کنیم تا شما به جای تنظیمات، روی زندگی تمرکز کنید.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="nova-container">
            <div className="mb-14 grid gap-6 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
              <div><p className="text-xs font-bold text-[#3158e8]">لایه‌های نامرئی</p></div>
              <h2 className="max-w-4xl text-3xl font-bold leading-[1.65] tracking-[-.04em] sm:text-5xl">تمام چیزی که می‌بینید، نتیجه‌ی همکاری چندین سیستم است که قرار نیست هیچ‌وقت مزاحم شما شوند.</h2>
            </div>
            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,.07)]">
              {technologies.map((technology, index) => (
                <article key={technology.id} className="group grid gap-6 border-b border-slate-200 p-7 last:border-b-0 sm:p-10 md:grid-cols-[72px_1fr_1fr] md:gap-10 md:p-12">
                  <span className="text-xs font-bold text-[#3158e8]">{technology.index}</span>
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight transition group-hover:text-[#3158e8] sm:text-3xl">{technology.title}</h2>
                    <p className="mt-3 text-sm font-semibold text-[#11131a]/65">{technology.subtitle}</p>
                  </div>
                  <p className="text-sm leading-8 text-[#11131a]/50 md:pt-1">{technology.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-4">
          <div className="relative overflow-hidden rounded-[38px] bg-slate-950 px-7 py-20 text-white sm:px-12 sm:py-28">
            <div className="absolute -left-24 -top-24 size-80 rounded-full bg-indigo-500/25 blur-[100px]" />
            <div className="absolute -bottom-32 -right-20 size-96 rounded-full bg-cyan-400/15 blur-[110px]" />
            <div className="relative mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold text-cyan-300">فناوری برای انسان</p>
              <h2 className="mt-5 text-4xl font-black leading-[1.25] tracking-[-.05em] sm:text-6xl">پیچیده درون.<br /><span className="text-white/35">ساده بیرون.</span></h2>
              <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/55">نُوا فناوری را برای نمایش دادن نمی‌سازد؛ آن را برای ساختن تجربه‌ای آرام‌تر، دقیق‌تر و انسانی‌تر مهندسی می‌کند.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
