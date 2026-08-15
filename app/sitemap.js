import { products } from "@/data/products";
import { articles } from "@/data/articles";

const baseUrl = "https://nova.example";

export default function sitemap() {
  const staticRoutes = ["", "/products", "/technology", "/about", "/magazine", "/contact", "/privacy", "/terms"];

  return [
    ...staticRoutes.map((route) => ({ url: `${baseUrl}${route}`, changeFrequency: "monthly", priority: route === "" ? 1 : 0.7 })),
    ...products.map((product) => ({ url: `${baseUrl}/products/${product.slug}`, changeFrequency: "monthly", priority: 0.8 })),
    ...articles.map((article) => ({ url: `${baseUrl}/magazine/${article.slug}`, changeFrequency: "monthly", priority: 0.6 })),
  ];
}
