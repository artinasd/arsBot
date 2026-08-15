import Link from "next/link";

import ProductVisual from "@/components/ui/ProductVisual";

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <ProductVisual product={product} compact />
      <div className="flex items-start justify-between gap-4 px-1 pt-5">
        <div>
          <p className="mb-1 text-[11px] font-medium text-white/35">{product.category}</p>
          <h3 className="text-xl font-bold tracking-tight text-white">{product.name}</h3>
          <p className="mt-1 text-sm text-white/45">{product.persianName}</p>
        </div>
        <span className="mt-1 grid size-9 shrink-0 place-items-center rounded-full border border-white/10 text-white/45 transition duration-300 group-hover:border-white/25 group-hover:bg-white group-hover:text-black">
          <svg viewBox="0 0 18 18" className="size-4 rotate-180" aria-hidden="true">
            <path d="M3 9h11M10 5l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
