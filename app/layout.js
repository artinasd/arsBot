import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://nova.example"),
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
    locale: "fa_IR",
    url: "https://nova.example",
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
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
