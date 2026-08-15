import Image from "next/image";
import Link from "next/link";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/products/ProductCard";
import { company } from "@/data/company";
import { products } from "@/data/products";
import { technologies } from "@/data/technologies";
import { articles } from "@/data/articles";

const heroProduct = products.find((product) => product.id === "air");
const guardProduct = products.find((product) => product.id === "guard");
const lightProduct = products.find((product) => product.id === "light");

function Arrow() {
  return <svg viewBox="0 0 18 18" className="size-4" aria-hidden="true"><path d="M3 9h11M10 5l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function HomePage() {
  return (
    <div className="overflow-hidden bg-[#f7f8f6] text-slate-950">
      <Header />
      <main>
        <section className="relative overflow-hidden border-b border-slate-200 pt-[76px]">
          <div className="nova-grid absolute inset-0 opacity-70" />
          <div className="absolute -left-32 top-20 size-[500px] rounded-full bg-indigo-200/40 blur-[110px]" />
          <div className="absolute -right-20 bottom-0 size-[420px] rounded-full bg-cyan-100/60 blur-[100px]" />
          <div className="nova-container relative grid min-h-[760px] items-center gap-14 py-20 lg:grid-cols-[.92fr_1.08fr] lg:gap-10 lg:py-24">
            <div className="relative z-10">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-[11px] font-semibold text-slate-500 shadow-sm backdrop-blur"><span className="size-1.5 rounded-full bg-[#5b5ce2]" /> اکوسیستم فناوری برای خانه‌های امروز</div>
              <h1 className="max-w-3xl text-[clamp(3.8rem,8vw,8rem)] font-black leading-[.95] tracking-[-.075em] text-slate-950">خانه‌ای که<br /><span className="nova-gradient-text">با شماست.</span></h1>
              <p className="mt-8 max-w-xl text-base leading-8 text-slate-500 sm:text-lg">{company.shortDescription} نُوا فناوری را طوری طراحی می‌کند که در زندگی دیده نشود؛ فقط کیفیت آن را بهتر کند.</p>
              <div className="mt-9 flex flex-wrap gap-3"><Link href="/products" className="flex items-center gap-3 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-slate-300/50 transition hover:-translate-y-0.5 hover:bg-[#5b5ce2]">کشف محصولات <Arrow /></Link><Link href="/about" className="rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-950">داستان نُوا</Link></div>
              <div className="mt-14 grid max-w-xl grid-cols-3 gap-5 border-t border-slate-200 pt-6"><div><p className="text-2xl font-black">۵</p><p className="mt-1 text-[11px] text-slate-400">محصول در اکوسیستم</p></div><div><p className="text-2xl font-black">۱۴۰۵</p><p className="mt-1 text-[11px] text-slate-400">نسل تازه نُوا</p></div><div><p className="text-2xl font-black">۲۴/۷</p><p className="mt-1 text-[11px] text-slate-400">پایش هوشمند</p></div></div>
            </div>
            <div className="relative mx-auto w-full max-w-[650px] lg:translate-x-5">
              <div className="absolute -inset-8 rounded-[44px] bg-gradient-to-br from-indigo-100 via-white to-cyan-100 blur-2xl" />
              <div className="relative aspect-[4/4.5] overflow-hidden rounded-[40px] border border-white bg-white shadow-[0_40px_100px_rgba(15,23,42,.14)]">
                <Image src={heroProduct.imageUrl} alt="NOVA Air، تصفیه‌ هوای هوشمند" fill priority sizes="(max-width: 1024px) 90vw, 55vw" className="object-cover transition duration-1000 hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-white/10" />
                <div className="absolute right-6 top-6 rounded-2xl border border-white/50 bg-white/85 px-4 py-3 shadow-lg backdrop-blur"><p className="text-[9px] text-slate-400">NOVA Air</p><p className="mt-1 text-sm font-bold text-slate-900">هوای پاک، بی‌سروصدا</p></div>
                <div className="absolute bottom-6 right-6 left-6 flex items-end justify-between gap-5 text-white"><div><p className="text-[10px] font-medium text-white/70">محصول منتخب</p><p className="mt-1 text-xl font-bold">تصفیه‌ هوای هوشمند</p></div><Link href="/products/nova-air" className="grid size-11 place-items-center rounded-full bg-white text-slate-950 transition hover:bg-cyan-100" aria-label="مشاهده NOVA Air"><Arrow /></Link></div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white py-24 sm:py-32"><div className="nova-container"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-24"><div><p className="text-xs font-bold text-[#5b5ce2]">۰۱ / فلسفه</p><p className="mt-5 max-w-xs text-sm leading-8 text-slate-500">فناوری وقتی خوب است که بخشی از معماری زندگی شود، نه چیزی که مجبور باشیم هر روز مدیریت کنیم.</p></div><div><h2 className="max-w-5xl text-3xl font-bold leading-[1.7] tracking-[-.045em] text-slate-900 sm:text-5xl">ما محصولاتی می‌سازیم که <span className="text-slate-300">زیبایی را با مهندسی،</span> و آرامش را با هوشمندی ترکیب می‌کنند.</h2><div className="mt-12 grid gap-4 sm:grid-cols-3">{company.stats.map((stat) => <div key={stat.label} className="rounded-[24px] border border-slate-200 bg-[#f7f8f6] p-6"><p className="text-3xl font-black tracking-tight text-slate-950">{stat.value}</p><p className="mt-2 text-xs text-slate-500">{stat.label}</p></div>)}</div></div></div></div></section>

        <section className="py-24 sm:py-32"><div className="nova-container"><div className="mb-12 flex items-end justify-between gap-6"><div><p className="mb-3 text-xs font-bold text-[#5b5ce2]">۰۲ / محصولات</p><h2 className="text-4xl font-black tracking-[-.06em] sm:text-6xl">فناوری، به شکل واقعی.</h2></div><Link href="/products" className="hidden items-center gap-2 text-xs font-semibold text-slate-500 hover:text-[#5b5ce2] sm:flex">همه محصولات <Arrow /></Link></div><div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div></div></section>

        <section className="border-y border-slate-200 bg-[#e9eef2] py-24 sm:py-32"><div className="nova-container"><div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-20"><div><p className="mb-3 text-xs font-bold text-[#5b5ce2]">۰۳ / تجربه</p><h2 className="text-4xl font-black leading-[1.15] tracking-[-.055em] sm:text-6xl">وقتی خانه،<br /><span className="text-slate-400">شما را می‌شناسد.</span></h2><p className="mt-7 max-w-md text-sm leading-8 text-slate-500">از روشنایی صبح تا امنیت شب، دستگاه‌ها کنار هم کار می‌کنند تا شما کمتر با فناوری درگیر باشید.</p><Link href="/technology" className="mt-8 inline-flex items-center gap-3 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#5b5ce2]">فناوری پشت تجربه <Arrow /></Link></div><div className="grid gap-5 sm:grid-cols-2"><div className="relative min-h-[430px] overflow-hidden rounded-[34px] bg-white shadow-xl shadow-slate-300/30 sm:row-span-2"><Image src={guardProduct.imageUrl} alt="دوربین هوشمند NOVA Guard" fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" /><div className="absolute bottom-6 right-6 text-white"><p className="text-[10px] text-white/70">امنیت</p><p className="mt-1 text-2xl font-bold">NOVA Guard</p></div></div><div className="relative min-h-[205px] overflow-hidden rounded-[34px] bg-white shadow-xl shadow-slate-300/30"><Image src={lightProduct.imageUrl} alt="روشنایی هوشمند NOVA Light" fill sizes="(max-width: 640px) 100vw, 30vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 to-transparent" /><div className="absolute bottom-5 right-5 text-white"><p className="text-[10px] text-white/70">روشنایی</p><p className="mt-1 text-lg font-bold">NOVA Light</p></div></div><div className="flex min-h-[205px] flex-col justify-between rounded-[34px] bg-slate-950 p-7 text-white"><span className="text-xs font-bold text-cyan-300">یک اکوسیستم، نه چند دستگاه</span><p className="text-2xl font-bold leading-9">هر محصول برای کار کردن با محصول بعدی طراحی شده است.</p><Link href="/products" className="flex w-fit items-center gap-2 text-xs font-semibold text-white/65 hover:text-white">دیدن اکوسیستم <Arrow /></Link></div></div></div></div></section>

        <section className="bg-white py-24 sm:py-32"><div className="nova-container"><div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]"><div><p className="mb-3 text-xs font-bold text-[#5b5ce2]">۰۴ / مهندسی</p><h2 className="text-4xl font-black leading-[1.2] tracking-[-.055em] sm:text-6xl">پیچیده درون.<br /><span className="text-slate-300">ساده بیرون.</span></h2></div><div className="divide-y divide-slate-200 border-y border-slate-200">{technologies.map((technology) => <div key={technology.id} className="group grid gap-5 py-7 sm:grid-cols-[64px_1fr]"><span className="text-xs font-semibold text-slate-300">{technology.index}</span><div className="flex items-start justify-between gap-6"><div><h3 className="text-xl font-bold text-slate-900 group-hover:text-[#5b5ce2]">{technology.title}</h3><p className="mt-2 text-sm font-semibold text-slate-500">{technology.subtitle}</p><p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">{technology.description}</p></div><span className="mt-1 grid size-10 shrink-0 place-items-center rounded-full border border-slate-200 text-slate-400 transition group-hover:border-indigo-200 group-hover:bg-indigo-50 group-hover:text-[#5b5ce2]"><Arrow /></span></div></div>)}</div></div></div></section>

        <section className="bg-[#f7f8f6] py-24 sm:py-32"><div className="nova-container"><div className="mb-12 flex items-end justify-between gap-5"><div><p className="mb-3 text-xs font-bold text-[#5b5ce2]">۰۵ / مجله</p><h2 className="text-4xl font-black tracking-[-.055em] sm:text-6xl">فکرهایی درباره زندگی.</h2></div><Link href="/magazine" className="text-xs font-semibold text-slate-500 hover:text-[#5b5ce2]">همه مطالب</Link></div><div className="grid gap-6 md:grid-cols-3">{articles.map((article, index) => <Link key={article.slug} href={`/magazine/${article.slug}`} className="group"><div className={`relative overflow-hidden rounded-[30px] border border-slate-200 bg-white ${index === 0 ? "aspect-[1.45/1]" : "aspect-[1.1/1]"}`}><div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-white to-cyan-50" /><div className="absolute inset-6 rounded-[22px] border border-white/80 bg-white/50 backdrop-blur-sm"><div className="absolute right-7 top-7 text-5xl font-black text-indigo-200">{String(index + 1).padStart(2, "0")}</div><div className="absolute bottom-7 right-7 left-7"><span className="text-[10px] font-semibold text-[#5b5ce2]">{article.category}</span><p className="mt-3 text-lg font-bold leading-8 text-slate-800">{article.title}</p></div></div></div><p className="mt-5 text-[11px] text-slate-400">{article.date} · {article.readTime}</p><h3 className="mt-2 text-lg font-bold leading-8 text-slate-900 transition group-hover:text-[#5b5ce2]">{article.title}</h3></Link>)}</div></div></section>

        <section className="px-4 pb-4"><div className="relative overflow-hidden rounded-[38px] bg-slate-950 px-7 py-20 text-center text-white sm:px-10 sm:py-28"><div className="absolute -left-20 top-0 size-72 rounded-full bg-indigo-500/25 blur-[100px]" /><div className="absolute -right-20 bottom-0 size-72 rounded-full bg-cyan-400/20 blur-[100px]" /><div className="relative"><p className="text-xs font-semibold text-cyan-300">نُوا / ۱۴۰۵</p><h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black leading-[1.2] tracking-[-.055em] sm:text-6xl">خانه آینده قرار نیست عجیب باشد.<br /><span className="text-white/35">قرار است بهتر باشد.</span></h2><Link href="/contact" className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-slate-950 transition hover:bg-cyan-100">با نُوا آشنا شوید <Arrow /></Link></div></div></section>
      </main>
      <Footer />
    </div>
  );
}
