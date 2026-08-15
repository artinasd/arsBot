import "./globals.css";

export const metadata = {
  title: {
    default: "نُوا | فناوری برای زندگی فردا",
    template: "%s | نُوا",
  },
  description:
    "نُوا؛ یک اکوسیستم ایرانی از محصولات هوشمند برای خانه‌ای ساده‌تر، زیباتر و متصل‌تر.",
  keywords: ["نُوا", "NOVA", "خانه هوشمند", "فناوری", "محصولات هوشمند", "ایران"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
