export const products = [
  {
    id: "hub",
    slug: "nova-hub",
    name: "NOVA Hub",
    persianName: "مرکز هوشمند نُوا",
    category: "مرکز کنترل",
    tagline: "تمام خانه. یک تجربه.",
    description:
      "مرکز فرماندهی اکوسیستم نُوا؛ جایی که چراغ‌ها، سنسورها و دستگاه‌های هوشمند خانه در یک تجربه‌ی یکپارچه کنار هم قرار می‌گیرند.",
    accent: "#c8ff3d",
    image: "/images/products/hub.svg",
    featured: true,
    highlights: ["کنترل یکپارچه", "اتصال پایدار", "طراحی مینیمال"],
    specs: [
      ["اتصال", "Wi-Fi 6 / Zigbee 3.0"],
      ["پردازنده", "Quad-core 1.8 GHz"],
      ["حافظه", "4 GB"],
      ["ابعاد", "118 × 118 × 28 mm"],
    ],
  },
  {
    id: "air",
    slug: "nova-air",
    name: "NOVA Air",
    persianName: "تصفیه‌ هوای هوشمند",
    category: "سلامت خانه",
    tagline: "هوایی که متوجهش نمی‌شوید.",
    description:
      "تصفیه‌ هوای هوشمند با سنجش لحظه‌ای کیفیت هوا و تنظیم خودکار عملکرد برای محیطی سالم‌تر و آرام‌تر.",
    accent: "#8de7ff",
    image: "/images/products/air.svg",
    featured: true,
    highlights: ["فیلتر HEPA H13", "سنجش کیفیت هوا", "صدای فوق‌العاده کم"],
    specs: [
      ["پوشش", "تا ۷۰ متر مربع"],
      ["فیلتر", "HEPA H13 + Carbon"],
      ["نویز", "کمتر از ۲۴ dB"],
      ["اتصال", "Wi-Fi / Bluetooth"],
    ],
  },
  {
    id: "sense",
    slug: "nova-sense",
    name: "NOVA Sense",
    persianName: "سنسور چندمنظوره",
    category: "امنیت و پایش",
    tagline: "خانه، همیشه حواسش هست.",
    description:
      "یک سنسور کوچک برای تشخیص حرکت، دما و باز و بسته شدن درها؛ دقیق، کم‌مصرف و آماده برای هر سناریو.",
    accent: "#c9b6ff",
    image: "/images/products/sense.svg",
    featured: false,
    highlights: ["سه حسگر در یک دستگاه", "باتری تا ۱۸ ماه", "هشدار لحظه‌ای"],
    specs: [
      ["حسگرها", "Motion / Temp / Door"],
      ["باتری", "CR2450"],
      ["عمر باتری", "تا ۱۸ ماه"],
      ["اتصال", "Zigbee 3.0"],
    ],
  },
  {
    id: "light",
    slug: "nova-light",
    name: "NOVA Light",
    persianName: "روشنایی هوشمند",
    category: "روشنایی",
    tagline: "نور، دقیقاً همان‌طور که می‌خواهید.",
    description:
      "سیستم روشنایی هوشمند با میلیون‌ها ترکیب رنگ و سناریوهای قابل تنظیم برای هر لحظه از روز.",
    accent: "#ffc86b",
    image: "/images/products/light.svg",
    featured: true,
    highlights: ["16 میلیون رنگ", "کنترل شدت نور", "سناریوهای هوشمند"],
    specs: [
      ["توان", "9W"],
      ["دمای رنگ", "2700K – 6500K"],
      ["رنگ", "16M+"],
      ["اتصال", "Wi-Fi"],
    ],
  },
  {
    id: "guard",
    slug: "nova-guard",
    name: "NOVA Guard",
    persianName: "دوربین امنیتی هوشمند",
    category: "امنیت",
    tagline: "آرامش، حتی وقتی خانه نیستید.",
    description:
      "دوربین امنیتی داخلی با دید در شب، تشخیص هوشمند حرکت و اعلان‌های فوری روی موبایل.",
    accent: "#ff8f8f",
    image: "/images/products/guard.svg",
    featured: false,
    highlights: ["تصویر 2K", "دید در شب", "تشخیص هوشمند"],
    specs: [
      ["وضوح", "2304 × 1296"],
      ["زاویه دید", "۱۳۰ درجه"],
      ["دید در شب", "تا ۱۰ متر"],
      ["ذخیره‌سازی", "microSD / Cloud"],
    ],
  },
];

export function getProduct(slug) {
  return products.find((product) => product.slug === slug);
}
