import Link from "next/link";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductVisual from "@/components/ui/ProductVisual";
import ProductCard from "@/components/products/ProductCard";
import { company } from "@/data/company";
import { products } from "@/data/products";
import { technologies } from "@/data/technologies";
import { articles } from "@/data/articles";

function Arrow() {
  return (
    <svg viewBox="0 0 18 18" className="size-4" aria-hidden="true">
      <path d="M3 9h11M10 5l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div id="top" className="overflow-hidden">
      <Header />

      <main>
        <section className="relative flex min-h-[780px] items-center border-b border-white/7 pt-[76px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(200,255,61,0.11),transparent_28%),radial-gradient(circle_at_85%_75%,rgba(92,111,255,0.08),transparent_25%)]" />
          <div className="nova-container relative grid w-full items-center gap-14 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:py-28">
            <div className="max-w-2xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-[11px] font-medium text-white/55">
                <span className="size-1.5 rounded-full bg-[#c8ff3d] shadow-[0_0_12px_#c8ff3d]" />
                نسل جدید خانه‌های هوشمند
              </div>
              <h1 className="text-[clamp(3.4rem,8vw,7.7rem)] font-extrabold leading-[0.98] tracking-[-0.075em] text-white">
                فناوری،
                <br />
                <span className="text-[#c8ff3d]">به روایت زندگی.</span>
              </h1>
              <p className="mt-8 max-w-lg text-base leading-8 text-white/45 sm:text-lg">
                {company.shortDescription} ما فناوری را برای دیده شدن نمی‌سازیم؛ برای بهتر زندگی کردن می‌سازیم.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="#products" className="flex items-center gap-3 rounded-full bg-[#c8ff3d] px-6 py-3.5 text-sm font-bold text-[#08090b] transition hover:bg-[#d6ff70]">
                  کشف محصولات <Arrow />
                </a>
                <a href="#about" className="rounded-full border border-white/10 px-6 py-3.5 text-sm font-medium text-white/60 transition hover:border-white/25 hover:text-white">
                  نُوا را بشناسید
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[620px]">
              <div className="absolute left-1/2 top-1/2 aspect-square w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c8ff3d]/10 shadow-[0_0_120px_rgba(200,255,61,0.08)]" />
              <ProductVisual product={products[0]} />
              <div className="absolute bottom-7 right-5 rounded-2xl border border-white/10 bg-[#0b0c0f]/75 px-4 py-3 backdrop-blur-xl sm:right-8">
                <p className="text-[10px] text-white/35">محصول جدید</p>
                <p className="mt-1 text-sm font-bold">NOVA Hub</p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] text-white/25 md:flex">
            <span className="h-px w-12 bg-white/10" />
            اسکرول کنید
            <span className="h-px w-12 bg-white/10" />
          </div>
        </section>

        <section id="about" className="border-b border-white/7 py-24 sm:py-32">
          <div className="nova-container">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
              <div>
                <p className="text-xs font-semibold text-[#c8ff3d]">01 / درباره نُوا</p>
              </div>
              <div>
                <h2 className="max-w-4xl text-3xl font-semibold leading-[1.65] tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
                  ما فکر می‌کنیم آینده قرار نیست پیچیده‌تر باشد. <span className="text-white/25">قرار است هوشمندتر، آرام‌تر و بیشتر شبیه خودِ زندگی باشد.</span>
                </h2>
                <div className="mt-14 grid gap-8 border-t border-white/8 pt-8 sm:grid-cols-3">
                  {company.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-3xl font-bold tracking-tight text-white">{stat.value}</p>
                      <p className="mt-2 text-xs text-white/35">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="py-24 sm:py-32">
          <div className="nova-container">
            <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="mb-3 text-xs font-semibold text-[#c8ff3d]">02 / محصولات</p>
                <h2 className="text-4xl font-bold tracking-[-0.05em] sm:text-5xl">اکوسیستم نُوا</h2>
              </div>
              <p className="max-w-sm text-sm leading-7 text-white/35">هر محصول به تنهایی قدرتمند است؛ کنار هم، تجربه‌ای کاملاً متفاوت می‌سازند.</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
          </div>
        </section>

        <section id="technology" className="border-y border-white/7 bg-[#0b0c0f] py-24 sm:py-32">
          <div className="nova-container">
            <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="mb-3 text-xs font-semibold text-[#c8ff3d]">03 / فناوری</p>
                <h2 className="text-4xl font-bold leading-tight tracking-[-0.05em] sm:text-5xl">هوشمندی،<br />وقتی لازم نیست دیده شود.</h2>
                <p className="mt-7 max-w-md text-sm leading-8 text-white/35">پشت سادگی محصولات نُوا، مجموعه‌ای از فناوری‌های هماهنگ قرار دارد که همه چیز را در یک تجربه‌ی یکپارچه جمع می‌کند.</p>
              </div>
              <div className="divide-y divide-white/8 border-y border-white/8">
                {technologies.map((technology) => (
                  <div key={technology.id} className="group grid gap-5 py-8 sm:grid-cols-[70px_1fr]">
                    <span className="text-xs text-white/20">{technology.index}</span>
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <h3 className="text-xl font-bold">{technology.title}</h3>
                        <p className="mt-2 text-sm font-medium text-white/55">{technology.subtitle}</p>
                        <p className="mt-4 max-w-xl text-sm leading-7 text-white/30">{technology.description}</p>
                      </div>
                      <span className="mt-1 grid size-9 shrink-0 place-items-center rounded-full border border-white/8 text-white/20 transition group-hover:border-[#c8ff3d]/40 group-hover:text-[#c8ff3d]">
                        <Arrow />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="magazine" className="py-24 sm:py-32">
          <div className="nova-container">
            <div className="mb-12 flex items-end justify-between gap-5">
              <div>
                <p className="mb-3 text-xs font-semibold text-[#c8ff3d]">04 / مجله نُوا</p>
                <h2 className="text-4xl font-bold tracking-[-0.05em] sm:text-5xl">چیزهایی که فکر می‌کنیم.</h2>
              </div>
              <Link href="/magazine" className="hidden items-center gap-2 text-xs font-semibold text-white/45 transition hover:text-white sm:flex">همه مطالب <Arrow /></Link>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {articles.map((article, index) => (
                <article key={article.slug} className={`group ${index === 0 ? "md:col-span-2" : ""}`}>
                  <Link href={`/magazine/${article.slug}`} className="block">
                    <div className={`relative overflow-hidden rounded-[28px] border border-white/8 bg-[#111216] ${index === 0 ? "aspect-[1.75/1]" : "aspect-[1.1/1]"}`}>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(200,255,61,0.12),transparent_28%),linear-gradient(145deg,#17191e,#0c0d10)] transition duration-500 group-hover:scale-105" />
                      <div className="absolute bottom-6 right-6 left-6 flex items-end justify-between gap-4">
                        <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[10px] text-white/45 backdrop-blur">{article.category}</span>
                        <span className="text-[10px] text-white/25">{article.readTime}</span>
                      </div>
                    </div>
                    <p className="mt-5 text-xs text-white/25">{article.date}</p>
                    <h3 className="mt-2 text-xl font-bold leading-8 tracking-tight transition group-hover:text-[#c8ff3d]">{article.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/35">{article.excerpt}</p>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-4 sm:px-6 sm:pb-6">
          <div className="relative overflow-hidden rounded-[32px] border border-white/8 bg-[#c8ff3d] text-[#08090b]">
            <div className="absolute -left-20 -top-32 size-96 rounded-full border border-black/10" />
            <div className="absolute -bottom-44 right-[-4%] size-[30rem] rounded-full border border-black/10" />
            <div className="relative mx-auto max-w-5xl px-7 py-20 text-center sm:px-10 sm:py-28">
              <p className="text-xs font-bold opacity-50">NOVA / ۱۴۰۵</p>
              <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold leading-tight tracking-[-0.06em] sm:text-6xl">آینده را لازم نیست منتظر بمانید.</h2>
              <p className="mx-auto mt-6 max-w-xl text-sm leading-7 opacity-65">آن را از جایی شروع کنید که هر روز بیشتر از هر جای دیگری در آن زندگی می‌کنید.</p>
              <a href="#products" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#08090b] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#17191d]">محصولات نُوا <Arrow /></a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
