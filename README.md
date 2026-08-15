# NOVA — نُوا

یک وب‌سایت نمایشی، استاتیک و فارسی برای یک برند خیالی فناوری ایرانی.

> فناوری، به روایت زندگی.

## درباره پروژه

NOVA یک نمونه‌ی portfolio برای نمایش توانایی‌های طراحی و توسعه‌ی رابط کاربری مدرن، RTL، معماری Next.js و تجربه‌ی محصول است. این پروژه backend، database، authentication یا API ندارد و تمام محتوای آن به صورت build-time از فایل‌های داده‌ی محلی خوانده می‌شود.

## Stack

- Next.js App Router
- React
- JavaScript / ES6+
- Tailwind CSS
- npm

## اجرا

```powershell
npm install
npm run dev
```

سپس `http://localhost:3000` را باز کنید.

## ساختار

- `app/` — صفحات و routing
- `components/` — اجزای reusable رابط کاربری
- `data/` — محتوای شرکت، محصولات، فناوری و مجله
- `public/` — دارایی‌های استاتیک

## مسیرهای اصلی

- `/` — صفحه اصلی
- `/products` — محصولات
- `/products/[slug]` — جزئیات محصول
- `/about` — درباره نُوا
- `/technology` — فناوری
- `/magazine` — مجله
- `/magazine/[slug]` — مقاله
- `/contact` — ارتباط با ما
- `/privacy` — حریم خصوصی
- `/terms` — شرایط استفاده

## وضعیت

این پروژه در حال توسعه‌ی portfolio و polish نهایی است.
