export default function ProductVisual({ product, compact = false }) {
  const accent = product?.accent ?? "#c8ff3d";

  return (
    <div
      className={`relative isolate overflow-hidden rounded-[32px] border border-white/8 bg-[#111216] ${compact ? "aspect-square" : "aspect-[4/3]"}`}
      style={{ "--product-accent": accent }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,var(--product-accent)_0%,transparent_32%)] opacity-10" />
      <div className="absolute -left-16 bottom-[-20%] size-72 rounded-full border border-white/5" />
      <div className="absolute -right-10 top-[-18%] size-64 rounded-full border border-white/5" />
      <div className="absolute left-1/2 top-1/2 h-[56%] w-[56%] -translate-x-1/2 -translate-y-1/2 rounded-[30%] bg-[linear-gradient(145deg,#272a30,#0d0e11)] shadow-[0_35px_90px_rgba(0,0,0,0.65)] ring-1 ring-white/10" />
      <div className="absolute left-1/2 top-[43%] size-[22%] -translate-x-1/2 rounded-full bg-[#08090b] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08),0_0_50px_color-mix(in_srgb,var(--product-accent)_30%,transparent)]">
        <div className="absolute inset-[22%] rounded-full" style={{ background: accent, opacity: 0.75 }} />
      </div>
      <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 text-center">
        <p className="text-[10px] font-medium tracking-[0.3em] text-white/25">NOVA</p>
      </div>
    </div>
  );
}
