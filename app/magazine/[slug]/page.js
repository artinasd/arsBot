import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { articles } from "@/data/articles";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  return article ? { title: article.title, description: article.excerpt } : { title: "مطلب پیدا نشد" };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) notFound();

  return (
    <div>
      <Header />
      <main className="pt-[76px]">
        <article>
          <header className="border-b border-white/7 py-20 sm:py-32">
            <div className="nova-container max-w-5xl">
              <div className="flex items-center gap-3 text-[11px] text-white/30"><span className="text-[#c8ff3d]">{article.category}</span><span className="size-1 rounded-full bg-white/15" /><span>{article.date}</span><span className="size-1 rounded-full bg-white/15" /><span>{article.readTime}</span></div>
              <h1 className="mt-7 max-w-4xl text-4xl font-extrabold leading-[1.3] tracking-[-0.055em] sm:text-6xl">{article.title}</h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/40 sm:text-lg">{article.excerpt}</p>
            </div>
          </header>
          <div className="nova-container max-w-3xl py-16 sm:py-24">
            <div className="space-y-8 text-base leading-9 text-white/55 sm:text-lg sm:leading-10">
              <p>{article.excerpt} در نُوا، ما به محصول فقط به عنوان یک شیء نگاه نمی‌کنیم؛ هر محصول مجموعه‌ای از تصمیم‌ها درباره‌ی انسان، فضا و زمان است.</p>
              <p>وقتی یک فناوری خوب طراحی شده باشد، پیچیدگی آن در تجربه‌ی کاربر دیده نمی‌شود. اتصال، سنجش و پردازش در پس‌زمینه اتفاق می‌افتند تا نتیجه ساده، قابل پیش‌بینی و قابل اعتماد باشد.</p>
              <p>این نگاه، از اولین طرح روی کاغذ تا آخرین جزئیات نرم‌افزار، بخشی از روش ساخت نُوا است. ما می‌خواهیم محصولاتی بسازیم که بعد از مدتی حضورشان را فراموش کنید، اما نبودنشان را نه.</p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
