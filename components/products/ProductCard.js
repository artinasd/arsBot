import Link from "next/link";

import ProductVisual from "@/components/ui/ProductVisual";

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <ProductVisual product={product} compact />
      <div className="flex items-start justify-between gap-4 px-1 pt-5">
        <div>
          <p className="mb-1 text-[10px] font-semibold tracking-wide text-slate-400">{product.category}</p>
          <h3 className="text-xl font-bold tracking-[-0.02em] text-slate-950 transition group-hover:text-[#5b5ce2]">{product.name}</h3>
          <p className="mt-1 text-sm text-slate-500">{product.persianName}</p>
        </div>
        <span className="mt-1 grid size-10 shrink-0 place-items-center rounded-full border border-slate-200 bg-white text-slate-400 transition duration-300 group-hover:border-indigo-200 group-hover:bg-indigo-50 group-hover:text-[#5b5ce2]">
          <svg viewBox="0 0 18 18" className="size-4 rotate-180" aria-hidden="true"><path d="M3 9h11M10 5l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
      </div>
    </Link>
  );
}
