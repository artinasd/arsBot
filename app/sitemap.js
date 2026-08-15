import { articles } from "@/data/articles";
import { products } from "@/data/products";
import { siteConfig } from "@/lib/site";

const staticRoutes = ["", "/products", "/technology", "/about", "/magazine", "/contact", "/privacy", "/terms"];

export default function sitemap() {
  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      changeFrequency: "monthly",
      priority: route === "" ? 1 : 0.7,
    })),
    ...products.map((product) => ({
      url: `${siteConfig.url}/products/${product.slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
    })),
    ...articles.map((article) => ({
      url: `${siteConfig.url}/magazine/${article.slug}`,
      changeFrequency: "monthly",
      priority: 0.6,
    })),
  ];
}
