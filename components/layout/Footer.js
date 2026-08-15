import Link from "next/link";

const footerLinks = [
  { label: "محصولات", href: "/products" },
  { label: "فناوری", href: "/technology" },
  { label: "درباره نُوا", href: "/about" },
  { label: "مجله", href: "/magazine" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#eef1f0]">
      <div className="nova-container py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link href="/" className="group mb-5 flex w-fit items-center gap-3" aria-label="نُوا، صفحه اصلی">
              <span className="grid size-9 place-items-center rounded-[12px] bg-slate-950 text-lg font-black !text-white transition duration-300 group-hover:-rotate-3">ن</span>
              <span className="text-lg font-extrabold tracking-[0.04em] text-slate-950">NOVA</span>
            </Link>
            <p className="max-w-md text-sm leading-8 text-slate-500">فناوری، به روایت زندگی. محصولاتی برای خانه‌ای آرام‌تر، متصل‌تر و کمی ساده‌تر.</p>
          </div>
          <div><p className="mb-5 text-xs font-semibold text-slate-400">دسترسی سریع</p><div className="flex flex-col gap-3">{footerLinks.map((link) => <Link key={link.href} href={link.href} className="w-fit text-sm text-slate-600 transition hover:text-[#3158e8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3158e8]/35 focus-visible:ring-offset-2">{link.label}</Link>)}</div></div>
          <div><p className="mb-5 text-xs font-semibold text-slate-400">در تماس باشیم</p><div className="flex flex-col gap-3 text-sm text-slate-600"><a href="mailto:hello@nova.ir" className="w-fit transition hover:text-[#3158e8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3158e8]/35 focus-visible:ring-offset-2">hello@nova.ir</a><a href="tel:+982191002200" className="w-fit transition hover:text-[#3158e8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3158e8]/35 focus-visible:ring-offset-2">۰۲۱-۹۱۰۰ ۲۲۰۰</a><Link href="/contact" className="w-fit transition hover:text-[#3158e8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3158e8]/35 focus-visible:ring-offset-2">فرم ارتباط با ما</Link><span>تهران، خیابان ولیعصر</span></div></div>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-slate-200 pt-6 text-[11px] text-slate-400 sm:flex-row sm:items-center sm:justify-between"><span>© ۱۴۰۵ نُوا. تمامی حقوق محفوظ است.</span><div className="flex gap-5"><Link href="/privacy" className="transition hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3158e8]/35 focus-visible:ring-offset-2">حریم خصوصی</Link><Link href="/terms" className="transition hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3158e8]/35 focus-visible:ring-offset-2">شرایط استفاده</Link></div></div>
      </div>
    </footer>
  );
}
