import Link from "next/link";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#11131a]">
      <Header />
      <main className="flex min-h-[70vh] items-center justify-center px-6 pt-[76px] text-center">
        <div>
          <p className="text-sm font-bold tracking-[0.14em] text-[#3158e8]">۴۰۴</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">این صفحه پیدا نشد.</h1>
          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#11131a]/50">احتمالاً این محصول دیگر در اکوسیستم نُوا نیست یا آدرس اشتباه وارد شده است.</p>
          <Link href="/" className="mt-8 inline-flex rounded-full bg-[#11131a] px-6 py-3.5 text-sm font-bold !text-white transition hover:bg-[#3158e8] hover:!text-white focus:outline-none focus:ring-4 focus:ring-[#3158e8]/20">بازگشت به خانه</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
