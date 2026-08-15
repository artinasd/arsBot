import Link from "next/link";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { articles } from "@/data/articles";

export const metadata = {
  title: "مجله نُوا",
  description: "نگاه نُوا به طراحی، فناوری و آینده‌ی زندگی.",
};

export default function MagazinePage() {
  return (
    <div>
      <Header />
      <main className="pt-[76px]">
        <section className="border-b border-white/7 py-20 sm:py-32">
          <div className="nova-container">
            <p className="text-xs font-semibold text-[#c8ff3d]">NOVA / MAGAZINE</p>
            <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-tight tracking-[-0.06em] sm:text-7xl">ایده‌هایی درباره چیزهایی که فردا را می‌سازند.</h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-white/40">از طراحی محصول تا فناوری‌های خانه؛ چیزهایی که در نُوا درباره‌شان فکر می‌کنیم.</p>
          </div>
        </section>
        <section className="py-20 sm:py-28">
          <div className="nova-container grid gap-12 md:grid-cols-2">
            {articles.map((article) => (
              <Link key={article.slug} href={`/magazine/${article.slug}`} className="group">
                <div className="aspect-[1.5/1] overflow-hidden rounded-[28px] border border-white/8 bg-[#111216]">
                  <div className="h-full w-full bg-[radial-gradient(circle_at_60%_35%,rgba(200,255,61,0.13),transparent_27%),linear-gradient(145deg,#181a20,#0c0d10)] transition duration-500 group-hover:scale-105" />
                </div>
                <div className="mt-5 flex items-center gap-3 text-[10px] text-white/25"><span>{article.category}</span><span className="size-1 rounded-full bg-white/15" /><span>{article.date}</span></div>
                <h2 className="mt-3 text-2xl font-bold leading-9 tracking-tight transition group-hover:text-[#c8ff3d]">{article.title}</h2>
                <p className="mt-3 text-sm leading-7 text-white/35">{article.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
