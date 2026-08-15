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
    <div className="bg-[#f7f8fb] text-[#11131a]">
      <Header />
      <main className="pt-[76px]">
        <section className="border-b border-[#11131a]/8 py-20 sm:py-32">
          <div className="nova-container">
            <p className="text-xs font-bold tracking-[0.14em] text-[#3158e8]">NOVA / MAGAZINE</p>
            <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-tight tracking-[-0.06em] sm:text-7xl">ایده‌هایی درباره چیزهایی که فردا را می‌سازند.</h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-[#11131a]/55">از طراحی محصول تا فناوری‌های خانه؛ چیزهایی که در نُوا درباره‌شان فکر می‌کنیم.</p>
          </div>
        </section>
        <section className="py-20 sm:py-28">
          <div className="nova-container grid gap-12 md:grid-cols-2">
            {articles.map((article, index) => (
              <Link key={article.slug} href={`/magazine/${article.slug}`} className="group">
                <div className="aspect-[1.5/1] overflow-hidden rounded-[28px] border border-[#11131a]/8 bg-white shadow-[0_20px_60px_rgba(17,19,26,0.06)]">
                  <div className={`h-full w-full transition duration-500 group-hover:scale-[1.03] ${index % 2 === 0 ? "bg-[radial-gradient(circle_at_65%_35%,rgba(49,88,232,0.24),transparent_30%),linear-gradient(145deg,#edf2ff,#ffffff)]" : "bg-[radial-gradient(circle_at_35%_40%,rgba(42,190,183,0.22),transparent_28%),linear-gradient(145deg,#eafaf7,#ffffff)]"}`} />
                </div>
                <div className="mt-5 flex items-center gap-3 text-[10px] font-semibold text-[#11131a]/35"><span>{article.category}</span><span className="size-1 rounded-full bg-[#11131a]/20" /><span>{article.date}</span></div>
                <h2 className="mt-3 text-2xl font-bold leading-9 tracking-tight transition group-hover:text-[#3158e8]">{article.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#11131a]/50">{article.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
