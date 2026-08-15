import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { company } from "@/data/company";

export const metadata = {
  title: "درباره نُوا",
  description: "داستان، نگاه و ارزش‌های نُوا.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f7f8f6] text-slate-950">
      <Header />
      <main className="pt-[76px]">
        <section className="border-b border-slate-200 py-20 sm:py-32">
          <div className="nova-container">
            <p className="text-xs font-semibold text-[#5b5ce2]">NOVA / درباره ما</p>
            <h1 className="mt-6 max-w-5xl text-5xl font-extrabold leading-[1.1] tracking-[-0.06em] sm:text-7xl">ما در نُوا، فناوری را از جایی شروع می‌کنیم که زندگی شروع می‌شود.</h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">{company.description}</p>
          </div>
        </section>
        <section className="py-20 sm:py-28">
          <div className="nova-container">
            <div className="mb-14">
              <p className="text-xs font-semibold text-[#5b5ce2]">چیزهایی که برایمان مهم‌اند</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">سه اصل، در تمام جزئیات.</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {company.values.map((value) => (
                <article key={value.number} className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
                  <span className="text-xs font-semibold text-[#5b5ce2]">{value.number}</span>
                  <h3 className="mt-16 text-2xl font-bold text-slate-950">{value.title}</h3>
                  <p className="mt-4 text-sm leading-8 text-slate-500">{value.description}</p>
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
