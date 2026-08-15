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

function Spark() {
  return (
    <svg viewBox="0 0 20 20" className="size-4" aria-hidden="true">
      <path d="M10 1.8l1.25 6.95L18.2 10l-6.95 1.25L10 18.2l-1.25-6.95L1.8 10l6.95-1.25L10 1.8z" fill="currentColor" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div id="top" className="overflow-hidden">
      <Header />

      <main>
        <section className="relative min-h-[820px] overflow-hidden border-b border-white/[0.07] pt-[78px]">
          <div className="nova-grid absolute inset-0 opacity-70" />
          <div className="absolute -right-[18%] top-[8%] size-[700px] rounded-full bg-[#8b6cff]/10 blur-[110px]" />
          <div className="absolute -left-[12%] bottom-[-15%] size-[560px] rounded-full bg-[#54d9ff]/8 blur-[120px]" />

          <div className="nova-container relative flex min-h-[742px] flex-col justify-between py-16 sm:py-20">
            <div className="flex items-center justify-between text-[10px] font-medium text-white/30">
              <span>نُوا / ۱۴۰۵</span>
              <span className="hidden items-center gap-2 sm:flex"><span className="size-1.5 rounded-full bg-[#54d9ff] shadow-[0_0_12px_#54d9ff]" /> اکوسیستم هوشمند ایرانی</span>
            </div>

            <div className="relative grid items-center gap-10 py-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-6">
              <div className="relative z-10 max-w-4xl">
                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#8b6cff]/20 bg-[#8b6cff]/[0.07] px-3.5 py-2 text-[10px] font-semibold text-[#c9beff]">
                  <Spark />
                  فناوری که در پس‌زمینه زندگی می‌کند
                </div>
                <h1 className="max-w-5xl text-[clamp(3.7rem,8.4vw,8.4rem)] font-black leading-[0.94] tracking-[-0.075em] text-white">
                  زندگی،
                  <br />
                  <span className="nova-gradient-text">هوشمندتر.</span>
                </h1>
                <p className="mt-8 max-w-xl text-base leading-8 text-white/45 sm:text-lg">
                  {company.shortDescription} نُوا فناوری را از صفحه نمایش بیرون می‌آورد و به بخشی طبیعی از خانه شما تبدیل می‌کند.
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <Link href="/products" className="group flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#080914] transition duration-300 hover:bg-[#c9beff]">
                    کشف اکوسیستم <Arrow />
                  </Link>
                  <Link href="/technology" className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-6 py-3.5 text-sm font-medium text-white/65 transition hover:border-[#8b6cff]/35 hover:bg-[#8b6cff]/8 hover:text-white">
                    فناوری نُوا
                  </Link>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-[590px] lg:translate-x-5">
                <div className="absolute left-1/2 top-1/2 aspect-square w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8b6cff]/15 shadow-[0_0_120px_rgba(139,108,255,.12)]" />
                <div className="absolute left-1/2 top-1/2 aspect-square w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8b6cff]/10 blur-3xl" />
                <div className="nova-float relative z-10">
                  <ProductVisual product={products[0]} />
                </div>
                <div className="absolute -right-2 top-[18%] z-20 rounded-2xl border border-white/10 bg-[#0c1020]/80 px-4 py-3 shadow-2xl backdrop-blur-xl sm:right-0">
                  <p className="text-[9px] font-medium text-white/30">مرکز اکوسیستم</p>
                  <p className="mt-1 text-sm font-bold text-white">NOVA Hub</p>
                  <div className="mt-2 flex items-center gap-2 text-[9px] text-[#54d9ff]"><span className="size-1.5 rounded-full bg-[#54d9ff]" /> آنلاین و آماده</div>
                </div>
                <div className="absolute -bottom-3 -left-2 z-20 hidden rounded-2xl border border-white/10 bg-[#0c1020]/80 px-4 py-3 shadow-2xl backdrop-blur-xl sm:block">
                  <p className="text-[9px] text-white/30">طراحی شده در ایران</p>
                  <p className="mt-1 text-sm font-bold text-white">برای زندگی واقعی</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-white/[0.07] pt-5 text-[10px] text-white/28 sm:grid-cols-4">
              <span>طراحی یکپارچه</span>
              <span>اتصال بی‌وقفه</span>
              <span>حریم خصوصی</span>
              <span className="text-left sm:text-right">made for ایران</span>
            </div>
          </div>
        </section>

        <section className="relative border-b border-white/[0.07] py-24 sm:py-32">
          <div className="nova-container">
            <div className="grid gap-12 lg:grid-cols-[.62fr_1.38fr] lg:gap-24">
              <div>
                <p className="text-xs font-semibold text-[#9b83ff]">01 / دیدگاه نُوا</p>
                <p className="mt-5 max-w-xs text-sm leading-7 text-white/32">فناوری خوب خودش را به رخ نمی‌کشد؛ فقط باعث می‌شود روز شما کمی بهتر پیش برود.</p>
              </div>
              <div>
                <h2 className="max-w-5xl text-3xl font-semibold leading-[1.65] tracking-[-0.04em] text-white sm:text-5xl">
                  ما برای خانه‌هایی می‌سازیم که <span className="text-white/22">قرار نیست شبیه یک آزمایشگاه باشند.</span> باید زیبا، آرام و دقیقاً به اندازه‌ای هوشمند باشند که زندگی می‌طلبد.
                </h2>
                <div className="mt-14 grid gap-4 sm:grid-cols-3">
                  {company.stats.map((stat) => (
                    <div key={stat.label} className="nova-gradient-border rounded-3xl bg-[#0c1020] p-6">
                      <p className="text-3xl font-black tracking-tight text-white">{stat.value}</p>
                      <p className="mt-2 text-xs text-white/35">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="relative py-24 sm:py-32">
          <div className="nova-container">
            <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="mb-3 text-xs font-semibold text-[#9b83ff]">02 / اکوسیستم</p>
                <h2 className="text-4xl font-black tracking-[-0.055em] sm:text-6xl">یک خانه. یک تجربه.</h2>
              </div>
              <Link href="/products" className="flex items-center gap-2 text-xs font-semibold text-white/40 transition hover:text-[#c9beff]">مشاهده همه محصولات <Arrow /></Link>
            </div>

            <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
          </div>
        </section>

        <section id="technology" className="relative overflow-hidden border-y border-white/[0.07] bg-[#090c18] py-24 sm:py-32">
          <div className="absolute -right-32 top-1/2 size-[520px] -translate-y-1/2 rounded-full bg-[#54d9ff]/5 blur-[100px]" />
          <div className="nova-container relative">
            <div className="grid gap-16 lg:grid-cols-[.75fr_1.25fr]">
              <div>
                <p className="mb-3 text-xs font-semibold text-[#9b83ff]">03 / فناوری</p>
                <h2 className="text-4xl font-black leading-[1.2] tracking-[-0.055em] sm:text-6xl">پیچیده درون،<br /><span className="text-white/25">ساده بیرون.</span></h2>
                <p className="mt-7 max-w-md text-sm leading-8 text-white/35">پشت هر حرکت ساده، مجموعه‌ای از فناوری‌های هماهنگ قرار دارد؛ طراحی شده تا هیچ‌وقت مجبور نباشید به آن فکر کنید.</p>
              </div>
              <div className="nova-gradient-border rounded-[30px] bg-[#0d1121]/80 p-2 backdrop-blur-xl">
                <div className="divide-y divide-white/[0.07] rounded-[24px] border border-white/[0.04] bg-[#090c18]/70 px-6 sm:px-8">
                  {technologies.map((technology) => (
                    <div key={technology.id} className="group grid gap-5 py-8 sm:grid-cols-[60px_1fr]">
                      <span className="text-xs font-medium text-white/20">{technology.index}</span>
                      <div className="flex items-start justify-between gap-6">
                        <div>
                          <h3 className="text-xl font-bold transition group-hover:text-[#c9beff]">{technology.title}</h3>
                          <p className="mt-2 text-sm font-medium text-white/45">{technology.subtitle}</p>
                          <p className="mt-4 max-w-xl text-sm leading-7 text-white/28">{technology.description}</p>
                        </div>
                        <span className="mt-1 grid size-10 shrink-0 place-items-center rounded-full border border-white/8 text-white/20 transition group-hover:border-[#8b6cff]/45 group-hover:bg-[#8b6cff]/10 group-hover:text-[#c9beff]"><Arrow /></span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="magazine" className="py-24 sm:py-32">
          <div className="nova-container">
            <div className="mb-12 flex items-end justify-between gap-5">
              <div>
                <p className="mb-3 text-xs font-semibold text-[#9b83ff]">04 / مجله نُوا</p>
                <h2 className="text-4xl font-black tracking-[-0.055em] sm:text-6xl">چیزهایی که فکر می‌کنیم.</h2>
              </div>
              <Link href="/magazine" className="hidden items-center gap-2 text-xs font-semibold text-white/40 transition hover:text-[#c9beff] sm:flex">همه مطالب <Arrow /></Link>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {articles.map((article, index) => (
                <article key={article.slug} className={`group ${index === 0 ? "md:col-span-2" : ""}`}>
                  <Link href={`/magazine/${article.slug}`} className="block">
                    <div className={`relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#0c1020] ${index === 0 ? "aspect-[1.75/1]" : "aspect-[1.1/1]"}`}>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(139,108,255,.22),transparent_27%),radial-gradient(circle_at_25%_75%,rgba(84,217,255,.12),transparent_30%),linear-gradient(145deg,#171c35,#090c18)] transition duration-700 group-hover:scale-105" />
                      <div className="absolute right-6 top-6 grid size-10 place-items-center rounded-full border border-white/10 bg-black/10 text-white/35 backdrop-blur-xl transition group-hover:border-[#8b6cff]/40 group-hover:text-[#c9beff]"><Arrow /></div>
                      <div className="absolute bottom-6 right-6 left-6 flex items-end justify-between gap-4">
                        <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[10px] text-white/45 backdrop-blur">{article.category}</span>
                        <span className="text-[10px] text-white/25">{article.readTime}</span>
                      </div>
                    </div>
                    <p className="mt-5 text-xs text-white/25">{article.date}</p>
                    <h3 className="mt-2 text-xl font-bold leading-8 tracking-tight transition group-hover:text-[#c9beff]">{article.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/35">{article.excerpt}</p>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-4 sm:px-6 sm:pb-6">
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(135deg,#17122d,#101b35_52%,#0c2430)] text-white shadow-[0_40px_120px_rgba(0,0,0,.35)]">
            <div className="absolute -right-28 -top-40 size-[34rem] rounded-full border border-[#8b6cff]/20" />
            <div className="absolute -bottom-48 -left-20 size-[30rem] rounded-full border border-[#54d9ff]/15" />
            <div className="absolute right-[25%] top-[-25%] size-72 rounded-full bg-[#8b6cff]/15 blur-[90px]" />
            <div className="relative mx-auto max-w-5xl px-7 py-20 text-center sm:px-10 sm:py-28">
              <p className="text-xs font-bold tracking-wide text-[#c9beff]">NOVA / ۱۴۰۵</p>
              <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black leading-tight tracking-[-0.06em] sm:text-7xl">آینده، وقتی زیباتر است که ساده باشد.</h2>
              <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/45">آن را از جایی شروع کنید که هر روز بیشتر از هر جای دیگری در آن زندگی می‌کنید.</p>
              <Link href="/products" className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#090b16] transition hover:bg-[#c9beff]">ورود به اکوسیستم نُوا <Arrow /></Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
