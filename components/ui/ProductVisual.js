export default function ProductVisual({ product, compact = false }) {
  const accent = product?.accent ?? "#5b5ce2";
  const imageSrc = typeof product?.image === "string" && product.image.trim() ? product.image : null;
  const productName = product?.name ?? "محصول نُوا";
  const productPersianName = product?.persianName ?? "";

  return (
    <div
      className={`group relative isolate overflow-hidden border border-slate-200 bg-white ${compact ? "aspect-[1.05/1] rounded-[28px]" : "aspect-[4/3] rounded-[36px]"}`}
      style={{ "--product-accent": accent }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_25%,var(--product-accent),transparent_28%),linear-gradient(145deg,#f8fafc,#eef2f6)] opacity-90" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.035)_1px,transparent_1px)] bg-[size:44px_44px]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/[0.06] to-transparent" />
      <div className="absolute inset-[7%] overflow-hidden rounded-[24px] bg-white shadow-[0_30px_80px_rgba(15,23,42,.14)] transition duration-700 group-hover:scale-[1.015]">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={`${productName} — ${productPersianName}`}
            loading={product?.featured && !compact ? "eager" : "lazy"}
            decoding="async"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-slate-50 px-8 text-center">
            <div>
              <p className="text-[10px] font-bold tracking-[0.14em] text-slate-400">NOVA / PRODUCT</p>
              <p className="mt-2 text-sm font-semibold text-slate-500">تصویر محصول در دسترس نیست</p>
            </div>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10" />
      </div>
      <div className="absolute bottom-5 right-5 left-5 flex items-end justify-between gap-4">
        <div className="rounded-full border border-white/70 bg-white/80 px-3 py-1.5 text-[10px] font-semibold text-slate-700 shadow-sm backdrop-blur-md">
          {product?.category ?? "محصول"}
        </div>
        <div className="rounded-full border border-white/70 bg-white/80 px-3 py-1.5 text-[9px] font-medium text-slate-500 shadow-sm backdrop-blur-md">
          تصویر محصول
        </div>
      </div>
    </div>
  );
}
