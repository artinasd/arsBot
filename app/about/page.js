import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { company } from "@/data/company";

export const metadata = {
  title: "درباره نُوا",
  description: "داستان، نگاه و ارزش‌های نُوا.",
};

export default function AboutPage() {
  return (
    <div>
      <Header />
      <main className="pt-[76px]">
        <section className="border-b border-white/7 py-20 sm:py-32">
          <div className="nova-container">
            <p className="text-xs font-semibold text-[#c8ff3d]">NOVA / درباره ما</p>
            <h1 className="mt-6 max-w-5xl text-5xl font-extrabold leading-[1.1] tracking-[-0.06em] sm:text-7xl">ما در نُوا، فناوری را از جایی شروع می‌کنیم که زندگی شروع می‌شود.</h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-white/40 sm:text-lg">{company.description}</p>
          </div>
        </section>
        <section className="py-20 sm:py-28">
          <div className="nova-container">
            <div className="mb-14">
              <p className="text-xs font-semibold text-[#c8ff3d]">چیزهایی که برایمان مهم‌اند</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">سه اصل، در تمام جزئیات.</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {company.values.map((value) => (
                <article key={value.number} className="rounded-[28px] border border-white/8 bg-[#111216] p-7 sm:p-8">
                  <span className="text-xs text-[#c8ff3d]">{value.number}</span>
                  <h3 className="mt-16 text-2xl font-bold">{value.title}</h3>
                  <p className="mt-4 text-sm leading-8 text-white/35">{value.description}</p>
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
