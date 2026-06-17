"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";
import { formatUSD } from "@/lib/format";
import { useCart } from "@/lib/cart";
import { BottleMark } from "./BottleMark";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    add(product.id);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  }

  return (
    <article className="group overflow-hidden rounded-2xl border border-stone-200 bg-white transition hover:shadow-lg">
      <div
        className={`flex h-48 items-center justify-center bg-gradient-to-br ${product.gradient}`}
      >
        <div className="transition-transform duration-500 group-hover:scale-110">
          <BottleMark />
        </div>
      </div>
      <div className="p-5">
        <p className="text-xs uppercase tracking-wide text-stone-400">
          {product.brand} · {product.category}
        </p>
        <h3 className="mt-1 font-semibold text-stone-900">{product.name}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-stone-500">{product.blurb}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-semibold text-stone-900">
            {formatUSD(product.price_cents)}
          </span>
          <button
            onClick={handleAdd}
            className="rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-stone-700"
          >
            {added ? "Added ✓" : "Add to bag"}
          </button>
        </div>
      </div>
    </article>
  );
}
