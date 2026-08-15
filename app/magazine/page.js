import Image from "next/image";
import Link from "next/link";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { articles } from "@/data/articles";

export const metadata = {
  title: "مجله نُوا",
  description: "نگاه نُوا به طراحی، فناوری و آینده‌ی زندگی.",
};

export default function MagazinePage() {
  const [featured, ...rest] = articles;

  return (
    <div className="bg-[#f7f8fb] text-[#11131a]">
      <Header />
      <main className="pt-[76px]">
        <section className="relative overflow-hidden border-b border-[#11131a]/8 py-20 sm:py-32">
          <div className="absolute -left-24 top-12 size-80 rounded-full bg-indigo-200/35 blur-[100px]" />
          <div className="nova-container relative">
            <p className="text-xs font-bold tracking-[0.14em] text-[#3158e8]">NOVA / MAGAZINE</p>
            <div className="mt-6 grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end lg:gap-20">
              <h1 className="max-w-5xl text-5xl font-extrabold leading-[1.05] tracking-[-0.065em] sm:text-7xl lg:text-8xl">ایده‌هایی درباره<br /><span className="text-slate-300">چیزهایی که فردا را می‌سازند.</span></h1>
              <p className="max-w-xl border-r-2 border-[#3158e8] pr-6 text-base leading-8 text-[#11131a]/55 sm:text-lg">از طراحی محصول تا فناوری‌های خانه؛ چیزهایی که در نُوا درباره‌شان فکر می‌کنیم، می‌سازیم و دوباره به چالش می‌کشیم.</p>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="nova-container">
            <div className="mb-8 flex items-end justify-between gap-6">
              <div><p className="text-xs font-bold text-[#3158e8]">داستان منتخب</p><h2 className="mt-3 text-2xl font-bold sm:text-3xl">این هفته در نُوا</h2></div>
              <span className="hidden text-xs text-black/35 sm:block">01 / {String(articles.length).padStart(2, "0")}</span>
            </div>
            {featured && (
              <Link href={`/magazine/${featured.slug}`} className="group grid overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-[0_30px_90px_rgba(15,23,42,.08)] lg:grid-cols-[1.15fr_.85fr]">
                <div className="relative min-h-[320px] overflow-hidden bg-slate-100 sm:min-h-[480px]">
                  <Image src={featured.image} alt={featured.title} fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover transition duration-700 group-hover:scale-[1.035]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                  <span className="absolute right-6 top-6 rounded-full bg-white/90 px-4 py-2 text-[11px] font-bold text-slate-900 backdrop-blur">{featured.category}</span>
                </div>
                <div className="flex flex-col justify-between p-7 sm:p-12 lg:p-14">
                  <div><div className="flex items-center gap-3 text-[10px] font-semibold text-black/35"><span>{featured.date}</span><span className="size-1 rounded-full bg-black/20" /><span>{featured.readTime}</span></div><h2 className="mt-7 text-3xl font-extrabold leading-[1.35] tracking-[-.04em] sm:text-5xl">{featured.title}</h2><p className="mt-6 max-w-lg text-sm leading-8 text-black/50 sm:text-base">{featured.excerpt}</p></div>
                  <span className="mt-10 inline-flex w-fit items-center gap-3 text-sm font-bold text-slate-900">مطالعه مقاله <span className="transition group-hover:-translate-x-1">←</span></span>
                </div>
              </Link>
            )}
          </div>
        </section>

        <section className="pb-20 sm:pb-28">
          <div className="nova-container">
            <div className="mb-8 flex items-center justify-between"><h2 className="text-2xl font-bold sm:text-3xl">بیشتر بخوانید</h2><span className="text-xs text-black/35">نگاه نُوا به آینده</span></div>
            <div className="grid gap-6 md:grid-cols-2">
              {rest.map((article, index) => (
                <Link key={article.slug} href={`/magazine/${article.slug}`} className="group grid grid-cols-[120px_1fr] gap-5 rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_16px_50px_rgba(15,23,42,.045)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,.08)] sm:grid-cols-[180px_1fr]">
                  <div className="relative aspect-square overflow-hidden rounded-[20px] bg-slate-100"><Image src={article.image} alt={article.title} fill sizes="180px" className="object-cover transition duration-500 group-hover:scale-105" /></div>
                  <div className="flex min-w-0 flex-col justify-center py-2"><div className="text-[10px] font-semibold text-black/35">{article.category} · {article.readTime}</div><h3 className="mt-3 text-lg font-bold leading-8 transition group-hover:text-[#3158e8] sm:text-xl">{article.title}</h3><p className="mt-2 line-clamp-2 text-xs leading-6 text-black/45">{article.excerpt}</p></div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
