export default function ProductVisual({ product, compact = false }) {
  const accent = product?.accent ?? "#8b6cff";
  const secondary = product?.secondaryAccent ?? "#54d9ff";

  return (
    <div
      className={`group relative isolate overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#0c1020] ${compact ? "aspect-square" : "aspect-[4/3]"}`}
      style={{ "--product-accent": accent, "--product-secondary": secondary }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,var(--product-accent)_0%,transparent_30%),radial-gradient(circle_at_70%_70%,var(--product-secondary)_0%,transparent_28%)] opacity-[0.16] transition duration-700 group-hover:opacity-25" />
      <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:38px_38px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
      <div className="absolute -left-20 bottom-[-20%] size-80 rounded-full border border-white/[0.05]" />
      <div className="absolute -right-14 top-[-16%] size-72 rounded-full border border-white/[0.05]" />
      <div className="absolute left-1/2 top-1/2 h-[54%] w-[52%] -translate-x-1/2 -translate-y-1/2 rotate-[-4deg] rounded-[32%] bg-[linear-gradient(145deg,#2a3150_0%,#12172b_42%,#080b16_100%)] shadow-[0_45px_100px_rgba(0,0,0,.7),inset_1px_1px_0_rgba(255,255,255,.16)] ring-1 ring-white/10 transition duration-700 group-hover:rotate-0 group-hover:scale-[1.025]" />
      <div className="absolute left-1/2 top-[43%] size-[22%] -translate-x-1/2 rounded-full bg-[#070914] shadow-[inset_0_0_0_1px_rgba(255,255,255,.12),0_0_55px_color-mix(in_srgb,var(--product-accent)_35%,transparent)]">
        <div className="absolute inset-[19%] rounded-full bg-[radial-gradient(circle_at_35%_30%,#ffffff,var(--product-accent)_34%,var(--product-secondary)_75%)] opacity-90" />
      </div>
      <div className="absolute bottom-[13%] left-1/2 -translate-x-1/2 text-center">
        <p className="text-[9px] font-semibold tracking-[0.38em] text-white/30">NOVA</p>
      </div>
    </div>
  );
}
