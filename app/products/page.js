import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/products";

export const metadata = {
  title: "محصولات",
  description: "محصولات هوشمند نُوا برای خانه‌ای متصل‌تر و ساده‌تر.",
};

export default function ProductsPage() {
  return (
    <div>
      <Header />
      <main className="pt-[76px]">
        <section className="border-b border-white/7 py-20 sm:py-28">
          <div className="nova-container">
            <p className="text-xs font-semibold text-[#c8ff3d]">NOVA / محصولات</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-extrabold leading-tight tracking-[-0.06em] sm:text-7xl">هر چیزی که برای شروع یک خانه‌ی هوشمند لازم دارید.</h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/40">محصولات نُوا مستقل طراحی شده‌اند، اما برای یک تجربه‌ی یکپارچه کنار هم ساخته شده‌اند.</p>
          </div>
        </section>
        <section className="py-20 sm:py-28">
          <div className="nova-container grid gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
