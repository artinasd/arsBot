import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getProduct, products } from "@/data/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "محصول پیدا نشد" };
  return { title: product.name, description: product.description };
}

function Arrow() {
  return <svg viewBox="0 0 18 18" className="size-4" aria-hidden="true"><path d="M3 9h11M10 5l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const related = products.filter((item) => item.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#11131a]">
      <Header />
      <main className="pt-[76px]">
        <section className="overflow-hidden border-b border-black/8 py-14 sm:py-24">
          <div className="nova-container grid items-center gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 text-xs font-bold text-[#3158e8]"><span>{product.category}</span><span className="size-1 rounded-full bg-[#3158e8]/40" /><span>NOVA / PRODUCT</span></div>
              <h1 className="mt-6 text-5xl font-black leading-[1.02] tracking-[-.07em] sm:text-7xl">{product.name}</h1>
              <p className="mt-4 text-lg font-semibold text-black/35">{product.persianName}</p>
              <p className="mt-7 max-w-xl text-base leading-8 text-black/55">{product.description}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#specs" className="flex items-center gap-3 rounded-full bg-[#11131a] px-6 py-3.5 text-sm font-bold !text-white transition hover:bg-[#3158e8] hover:!text-white">مشخصات محصول <Arrow /></a>
                <a href="mailto:hello@nova.ir" className="rounded-full border border-black/10 bg-white px-6 py-3.5 text-sm font-semibold !text-slate-700 transition hover:border-black/20 hover:!text-slate-950">مشاوره محصول</a>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[38px] bg-slate-100 shadow-[0_35px_100px_rgba(15,23,42,.1)]">
                {product.image ? <Image src={product.image} alt={product.name} fill priority sizes="(max-width: 1024px) 100vw, 65vw" className="object-cover" /> : <div className="absolute inset-0 grid place-items-center text-sm text-black/30">تصویر محصول</div>}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-6 right-6 rounded-full bg-white/90 px-4 py-2 text-[10px] font-bold text-slate-900 backdrop-blur">{product.category}</div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-black/8 py-16 sm:py-24">
          <div className="nova-container">
            <div className="grid gap-8 lg:grid-cols-[.65fr_1.35fr] lg:gap-20">
              <div><p className="text-xs font-bold text-[#3158e8]">طراحی شده برای زندگی واقعی</p></div>
              <div><h2 className="max-w-4xl text-3xl font-bold leading-[1.55] tracking-[-.04em] sm:text-5xl">هر جزئیات، یک دلیل دارد؛ از اولین لمس تا آخرین تعامل.</h2><div className="mt-12 grid gap-px overflow-hidden rounded-[28px] border border-black/8 bg-black/8 sm:grid-cols-3">{product.highlights.map((highlight, index) => <div key={highlight} className="bg-white p-7 sm:p-8"><span className="text-[10px] font-bold text-[#3158e8]">۰{index + 1}</span><p className="mt-12 text-base font-bold leading-7">{highlight}</p></div>)}</div></div>
            </div>
          </div>
        </section>

        <section id="specs" className="py-20 sm:py-28">
          <div className="nova-container grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
            <div><p className="text-xs font-bold text-[#3158e8]">مشخصات فنی</p><h2 className="mt-4 text-3xl font-bold leading-[1.45] tracking-[-.04em] sm:text-4xl">جزئیات دقیق، برای تصمیمی مطمئن.</h2></div>
            <div className="border-y border-black/10">{product.specs.map(([label, value]) => <div key={label} className="grid grid-cols-[.8fr_1.2fr] border-b border-black/8 py-5 last:border-0 sm:grid-cols-2"><span className="text-sm text-black/35">{label}</span><span className="text-sm font-bold text-slate-800">{value}</span></div>)}</div>
          </div>
        </section>

        <section className="px-4 pb-4">
          <div className="overflow-hidden rounded-[38px] bg-slate-950 px-7 py-16 text-white sm:px-12 sm:py-20">
            <div className="mx-auto max-w-5xl text-center"><p className="text-xs font-bold text-cyan-300">NOVA / ECOSYSTEM</p><h2 className="mt-5 text-4xl font-black tracking-[-.05em] sm:text-6xl">یک محصول تنها نیست.<br /><span className="text-white/35">بخشی از یک اکوسیستم است.</span></h2></div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-3">{related.map((item) => <Link key={item.id} href={`/products/${item.slug}`} className="group"><div className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-white/10"><Image src={item.image} alt={item.name} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-black/10" /></div><div className="flex items-center justify-between pt-4"><div><p className="text-sm font-bold">{item.name}</p><p className="mt-1 text-[10px] text-white/40">{item.persianName}</p></div><span className="grid size-9 place-items-center rounded-full border border-white/15 text-white transition group-hover:bg-white group-hover:text-slate-950"><Arrow /></span></div></Link>)}</div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
