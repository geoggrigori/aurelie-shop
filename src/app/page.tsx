"use client";

import { useState } from "react";
import { PRODUCTS, CATEGORIES, type Category } from "@/lib/products";
import { Header } from "@/components/Header";
import { CartDrawer } from "@/components/CartDrawer";
import { ProductCard } from "@/components/ProductCard";

export default function Page() {
  const [filter, setFilter] = useState<Category | "All">("All");
  const [cartOpen, setCartOpen] = useState(false);

  const products =
    filter === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  const tabs: (Category | "All")[] = ["All", ...CATEGORIES];

  return (
    <>
      <Header onCartClick={() => setCartOpen(true)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      {/* Hero */}
      <section className="border-b border-stone-200 bg-gradient-to-br from-rose-50 to-amber-50">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
            Quiet luxury, everyday glow
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-stone-600">
            A curated edit of perfume, skincare and makeup. Clean formulas,
            considered design.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6 py-12">
        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                filter === t
                  ? "bg-stone-900 text-white"
                  : "border border-stone-300 text-stone-600 hover:bg-stone-100"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </main>

      <footer className="border-t border-stone-200 px-6 py-10 text-center text-xs text-stone-400">
        Aurélie is a demo storefront · built with Next.js &amp; Tailwind CSS.
      </footer>
    </>
  );
}
