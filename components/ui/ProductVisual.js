import Image from "next/image";

export default function ProductVisual({ product, compact = false }) {
  const accent = product?.accent ?? "#5b5ce2";
  const imageSrc = typeof product?.image === "string" && product.image.trim() ? product.image : null;
  const productName = product?.name ?? "محصول نُوا";
  const productPersianName = product?.persianName ?? "";

  return (
    <div
      className={`group relative isolate overflow-hidden border border-slate-200 bg-slate-100 shadow-[0_20px_70px_rgba(15,23,42,.07)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(15,23,42,.12)] ${compact ? "aspect-[4/4.5] rounded-[30px]" : "aspect-[4/3] rounded-[38px]"}`}
      style={{ "--product-accent": accent }}
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={`${productName} — ${productPersianName}`}
          fill
          sizes={compact ? "(max-width: 768px) 90vw, 320px" : "(max-width: 768px) 94vw, 720px"}
          priority={Boolean(product?.featured && !compact)}
          className="object-cover transition duration-1000 ease-out group-hover:scale-[1.025]"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-slate-50 px-8 text-center">
          <div>
            <p className="text-[10px] font-bold tracking-[0.14em] text-slate-400">NOVA / PRODUCT</p>
            <p className="mt-2 text-sm font-semibold text-slate-500">تصویر محصول در دسترس نیست</p>
          </div>
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-white/10" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/15 to-transparent" />

      <div className="absolute bottom-5 right-5 left-5 flex items-end justify-between gap-4">
        <div className="rounded-full border border-white/55 bg-white/88 px-3 py-1.5 text-[10px] font-semibold text-slate-800 shadow-lg backdrop-blur-md">
          {product?.category ?? "محصول"}
        </div>
        <div className="grid size-10 place-items-center rounded-full border border-white/60 bg-white/90 text-slate-900 shadow-lg backdrop-blur-md transition duration-300 group-hover:bg-white" aria-hidden="true">
          <svg viewBox="0 0 18 18" className="size-4 rotate-180" aria-hidden="true"><path d="M3 9h11M10 5l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
      </div>
    </div>
  );
}
