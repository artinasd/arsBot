import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex min-h-[70vh] items-center justify-center px-6 pt-[76px] text-center">
        <div>
          <p className="text-sm font-semibold text-[#c8ff3d]">۴۰۴</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">این صفحه پیدا نشد.</h1>
          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-white/35">احتمالاً این محصول دیگر در اکوسیستم نُوا نیست یا آدرس اشتباه وارد شده است.</p>
          <a href="/" className="mt-8 inline-flex rounded-full bg-[#c8ff3d] px-6 py-3.5 text-sm font-bold text-[#08090b]">بازگشت به خانه</a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
