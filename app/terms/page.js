import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = { title: "شرایط استفاده" };

export default function TermsPage() {
  return (
    <div><Header /><main className="pt-[76px]"><section className="py-20 sm:py-28"><div className="nova-container max-w-3xl"><p className="text-xs font-semibold text-[#c8ff3d]">NOVA / شرایط استفاده</p><h1 className="mt-5 text-5xl font-extrabold tracking-[-0.06em]">شرایط استفاده از وب‌سایت.</h1><div className="mt-10 space-y-7 text-sm leading-9 text-white/45"><p>مطالب، تصاویر و هویت برند این وب‌سایت بخشی از یک پروژه‌ی نمونه برای معرفی تجربه‌ی دیجیتال نُوا هستند.</p><p>اطلاعات محصولات و مشخصات فنی نمایش‌داده‌شده جنبه‌ی معرفی دارند و نباید به عنوان پیشنهاد فروش، مشخصات قراردادی یا تضمین عملکرد تلقی شوند.</p><p>استفاده، بازنشر یا استخراج هویت بصری و محتوای این نمونه بدون اجازه‌ی صاحب اثر مجاز نیست.</p></div></div></section></main><Footer /></div>
  );
}
