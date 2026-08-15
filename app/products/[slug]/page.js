import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductVisual from "@/components/ui/ProductVisual";
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
    <div className="min-h-screen bg-[#f7f8f6] text-slate-950">
      <Header />
      <main className="pt-[76px]">
        <section className="border-b border-slate-200 py-16 sm:py-24">
          <div className="nova-container grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-semibold text-[#5b5ce2]">{product.category}</p>
              <h1 className="mt-5 text-5xl font-extrabold tracking-[-0.06em] sm:text-7xl">{product.name}</h1>
              <p className="mt-4 text-xl font-medium text-slate-500">{product.persianName}</p>
              <p className="mt-7 max-w-xl text-base leading-8 text-slate-500">{product.description}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#specs" className="flex items-center gap-3 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#5b5ce2]">مشخصات محصول <Arrow /></a>
                <a href="mailto:hello@nova.ir" className="rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-950">مشاوره محصول</a>
              </div>
            </div>
            <ProductVisual product={product} />
          </div>
        </section>

        <section className="border-b border-slate-200 py-20 sm:py-28">
          <div className="nova-container">
            <p className="text-xs font-semibold text-[#5b5ce2]">جزئیات</p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {product.highlights.map((highlight) => <div key={highlight} className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm"><span className="mb-10 block size-2 rounded-full" style={{ backgroundColor: product.accent }} /><p className="text-lg font-semibold text-slate-900">{highlight}</p></div>)}
            </div>
          </div>
        </section>

        <section id="specs" className="py-20 sm:py-28">
          <div className="nova-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div><p className="text-xs font-semibold text-[#5b5ce2]">مشخصات فنی</p><h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">جزئیات دقیق، برای تصمیمی مطمئن.</h2></div>
            <div className="border-y border-slate-200">{product.specs.map(([label, value]) => <div key={label} className="grid grid-cols-2 border-b border-slate-200 py-5 last:border-0"><span className="text-sm text-slate-400">{label}</span><span className="text-sm font-semibold text-slate-800">{value}</span></div>)}</div>
          </div>
        </section>

        <section className="border-t border-slate-200 py-20 sm:py-28">
          <div className="nova-container">
            <div className="mb-10"><p className="text-xs font-semibold text-[#5b5ce2]">اکوسیستم</p><h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">شاید این‌ها هم مناسب شما باشند.</h2></div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{related.map((item) => <Link key={item.id} href={`/products/${item.slug}`} className="group"><ProductVisual product={item} compact /><div className="flex items-center justify-between px-1 pt-5"><div><p className="text-lg font-bold text-slate-900">{item.name}</p><p className="mt-1 text-xs text-slate-400">{item.persianName}</p></div><span className="grid size-9 place-items-center rounded-full border border-slate-200 text-slate-500 transition group-hover:border-indigo-200 group-hover:bg-indigo-50 group-hover:text-[#5b5ce2]"><Arrow /></span></div></Link>)}</div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
