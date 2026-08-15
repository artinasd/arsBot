import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductVisual from "@/components/ui/ProductVisual";
import { getProduct, products } from "@/data/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }) {
  const product = getProduct(params.slug);

  if (!product) {
    return { title: "محصول پیدا نشد" };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

function Arrow() {
  return (
    <svg viewBox="0 0 18 18" className="size-4" aria-hidden="true">
      <path d="M3 9h11M10 5l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ProductPage({ params }) {
  const product = getProduct(params.slug);

  if (!product) notFound();

  const related = products.filter((item) => item.id !== product.id).slice(0, 3);

  return (
    <div>
      <Header />
      <main className="pt-[76px]">
        <section className="border-b border-white/7 py-16 sm:py-24">
          <div className="nova-container grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-semibold text-[#c8ff3d]">{product.category}</p>
              <h1 className="mt-5 text-5xl font-extrabold tracking-[-0.06em] sm:text-7xl">{product.name}</h1>
              <p className="mt-4 text-xl font-medium text-white/55">{product.persianName}</p>
              <p className="mt-7 max-w-xl text-base leading-8 text-white/40">{product.description}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#specs" className="flex items-center gap-3 rounded-full bg-[#c8ff3d] px-6 py-3.5 text-sm font-bold text-[#08090b]">مشخصات محصول <Arrow /></a>
                <a href="mailto:hello@nova.ir" className="rounded-full border border-white/10 px-6 py-3.5 text-sm text-white/60 transition hover:border-white/25 hover:text-white">مشاوره محصول</a>
              </div>
            </div>
            <ProductVisual product={product} />
          </div>
        </section>

        <section className="border-b border-white/7 py-20 sm:py-28">
          <div className="nova-container">
            <p className="text-xs font-semibold text-[#c8ff3d]">جزئیات</p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {product.highlights.map((highlight) => (
                <div key={highlight} className="rounded-[24px] border border-white/8 bg-[#111216] p-6">
                  <span className="mb-10 block size-2 rounded-full" style={{ backgroundColor: product.accent }} />
                  <p className="text-lg font-semibold">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="specs" className="py-20 sm:py-28">
          <div className="nova-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold text-[#c8ff3d]">مشخصات فنی</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight">جزئیات دقیق، برای تصمیمی مطمئن.</h2>
            </div>
            <div className="border-y border-white/8">
              {product.specs.map(([label, value]) => (
                <div key={label} className="grid grid-cols-2 border-b border-white/8 py-5 last:border-0">
                  <span className="text-sm text-white/30">{label}</span>
                  <span className="text-sm font-medium text-white/70">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/7 py-20 sm:py-28">
          <div className="nova-container">
            <div className="mb-10 flex items-end justify-between">
              <div>
                <p className="text-xs font-semibold text-[#c8ff3d]">اکوسیستم</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight">شاید این‌ها هم مناسب شما باشند.</h2>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <a key={item.id} href={`/products/${item.slug}`} className="group">
                  <ProductVisual product={item} compact />
                  <div className="flex items-center justify-between px-1 pt-5">
                    <div>
                      <p className="text-lg font-bold">{item.name}</p>
                      <p className="mt-1 text-xs text-white/35">{item.persianName}</p>
                    </div>
                    <span className="grid size-9 place-items-center rounded-full border border-white/10 text-white/40 transition group-hover:border-white/25 group-hover:bg-white group-hover:text-black"><Arrow /></span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
