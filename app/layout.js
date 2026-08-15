import "./globals.css";

import { siteConfig } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "نُوا | فناوری برای زندگی فردا",
    template: "%s | نُوا",
  },
  description:
    "نُوا؛ یک اکوسیستم ایرانی از محصولات هوشمند برای خانه‌ای ساده‌تر، زیباتر و متصل‌تر.",
  keywords: ["نُوا", "NOVA", "خانه هوشمند", "فناوری", "محصولات هوشمند", "ایران"],
  applicationName: "NOVA",
  authors: [{ name: "NOVA" }],
  creator: "NOVA",
  publisher: "NOVA",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: "NOVA",
    title: "نُوا | فناوری برای زندگی فردا",
    description: "اکوسیستم ایرانی محصولات هوشمند برای خانه‌ای ساده‌تر، زیباتر و متصل‌تر.",
  },
  twitter: {
    card: "summary_large_image",
    title: "نُوا | فناوری برای زندگی فردا",
    description: "اکوسیستم ایرانی محصولات هوشمند نُوا.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang={siteConfig.language} dir={siteConfig.direction}>
      <body>{children}</body>
    </html>
  );
}
