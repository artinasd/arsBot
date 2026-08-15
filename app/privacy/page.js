import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = { title: "حریم خصوصی" };

export default function PrivacyPage() {
  return (
    <div className="bg-[#f7f8fb] text-[#11131a]"><Header /><main className="pt-[76px]"><section className="py-20 sm:py-28"><div className="nova-container max-w-3xl"><p className="text-xs font-bold tracking-[0.14em] text-[#3158e8]">NOVA / حریم خصوصی</p><h1 className="mt-5 text-5xl font-extrabold tracking-[-0.06em]">حریم خصوصی شما برای ما مهم است.</h1><div className="mt-10 space-y-7 text-sm leading-9 text-[#11131a]/60"><p>این وب‌سایت یک پروژه‌ی نمایشی و استاتیک است و هیچ حساب کاربری، پایگاه داده یا سرویس رهگیری شخصی ندارد.</p><p>فرم ارتباط با ما صرفاً برای نمایش تجربه‌ی کاربری طراحی شده و اطلاعات واردشده به سرور یا پایگاه داده‌ای ارسال نمی‌شود.</p><p>ممکن است مرورگر شما اطلاعات فنی استانداردی مانند آدرس IP یا نوع دستگاه را در سطح سرویس میزبانی ثبت کند. نُوا در این پروژه داده‌ای را برای شناسایی یا پروفایل‌سازی کاربران جمع‌آوری نمی‌کند.</p></div></div></section></main><Footer /></div>
  );
}
