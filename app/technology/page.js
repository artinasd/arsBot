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
        <section className="border-b border-[#11131a]/8 py-20 sm:py-32">
          <div className="nova-container">
            <p className="text-xs font-bold tracking-[0.14em] text-[#3158e8]">NOVA / TECHNOLOGY</p>
            <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[1.08] tracking-[-0.06em] sm:text-7xl">فناوری وقتی بهترین است که فقط کار کند.</h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-[#11131a]/55 sm:text-lg">ما لایه‌های پیچیده را پشت تجربه‌ای ساده پنهان می‌کنیم تا شما به جای تنظیمات، روی زندگی تمرکز کنید.</p>
          </div>
        </section>
        <section className="py-20 sm:py-28">
          <div className="nova-container">
            <div className="divide-y divide-[#11131a]/10 border-y border-[#11131a]/10">
              {technologies.map((technology) => (
                <article key={technology.id} className="grid gap-7 py-10 md:grid-cols-[80px_0.9fr_1.1fr] md:py-14">
                  <span className="text-xs font-bold text-[#3158e8]">{technology.index}</span>
                  <h2 className="text-2xl font-bold sm:text-3xl">{technology.title}</h2>
                  <div>
                    <p className="text-base font-semibold text-[#11131a]/75">{technology.subtitle}</p>
                    <p className="mt-4 text-sm leading-8 text-[#11131a]/50">{technology.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
