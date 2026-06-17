"use client";

import { useCart } from "@/lib/cart";

export function Header({ onCartClick }: { onCartClick: () => void }) {
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-30 border-b border-stone-200 bg-[#faf7f5]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div>
          <p className="text-xl font-semibold tracking-wide text-stone-900">
            AURÉLIE
          </p>
          <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400">
            Perfume · Skincare · Makeup
          </p>
        </div>
        <button
          onClick={onCartClick}
          className="relative rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 transition hover:bg-stone-100"
        >
          Bag
          {count > 0 && (
            <span className="absolute -right-2 -top-2 grid h-5 w-5 place-items-center rounded-full bg-rose-500 text-xs font-bold text-white">
              {count}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
