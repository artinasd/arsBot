import Link from "next/link";

const footerLinks = [
  { label: "محصولات", href: "/products" },
  { label: "فناوری", href: "/technology" },
  { label: "درباره نُوا", href: "/about" },
  { label: "مجله", href: "/magazine" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#060709]">
      <div className="nova-container py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link href="/" className="mb-5 flex w-fit items-center gap-3" aria-label="نُوا، صفحه اصلی">
              <span className="grid size-9 place-items-center rounded-xl bg-[#c8ff3d] text-lg font-extrabold text-[#08090b]">ن</span>
              <span className="text-lg font-extrabold">NOVA</span>
            </Link>
            <p className="max-w-md text-sm leading-8 text-white/45">
              فناوری، به روایت زندگی. محصولاتی برای خانه‌ای آرام‌تر، متصل‌تر و کمی ساده‌تر.
            </p>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold text-white/30">دسترسی سریع</p>
            <div className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} className="w-fit text-sm text-white/55 transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold text-white/30">در تماس باشیم</p>
            <div className="flex flex-col gap-3 text-sm text-white/55">
              <a href="mailto:hello@nova.ir" className="w-fit transition hover:text-white">hello@nova.ir</a>
              <a href="tel:+982191002200" className="w-fit transition hover:text-white">۰۲۱-۹۱۰۰ ۲۲۰۰</a>
              <Link href="/contact" className="w-fit transition hover:text-white">فرم ارتباط با ما</Link>
              <span>تهران، خیابان ولیعصر</span>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/7 pt-6 text-[11px] text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <span>© ۱۴۰۵ نُوا. تمامی حقوق محفوظ است.</span>
          <div className="flex gap-5">
            <Link href="/privacy" className="transition hover:text-white/60">حریم خصوصی</Link>
            <Link href="/terms" className="transition hover:text-white/60">شرایط استفاده</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
