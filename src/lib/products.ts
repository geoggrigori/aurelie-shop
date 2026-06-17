export type Category = "Perfume" | "Skincare" | "Makeup";

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: Category;
  price_cents: number;
  gradient: string; // tailwind gradient classes for the product visual
  blurb: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Nuit de Rose",
    brand: "Aurélie",
    category: "Perfume",
    price_cents: 128_00,
    gradient: "from-rose-300 to-rose-500",
    blurb: "Rose, oud and a whisper of amber. Warm, lingering, unmistakable.",
  },
  {
    id: "p2",
    name: "Lumière Blanche",
    brand: "Aurélie",
    category: "Perfume",
    price_cents: 142_00,
    gradient: "from-amber-200 to-amber-400",
    blurb: "Bergamot and white musk — luminous and clean.",
  },
  {
    id: "p3",
    name: "Velvet Orchid",
    brand: "Aurélie",
    category: "Perfume",
    price_cents: 156_00,
    gradient: "from-fuchsia-300 to-purple-500",
    blurb: "Orchid, vanilla and sandalwood for a velvety trail.",
  },
  {
    id: "p4",
    name: "Dewy Glow Serum",
    brand: "Lumi",
    category: "Skincare",
    price_cents: 48_00,
    gradient: "from-teal-200 to-emerald-400",
    blurb: "Hyaluronic acid + niacinamide for a plump, dewy finish.",
  },
  {
    id: "p5",
    name: "Midnight Repair Oil",
    brand: "Lumi",
    category: "Skincare",
    price_cents: 64_00,
    gradient: "from-indigo-300 to-blue-500",
    blurb: "Overnight botanical oil that restores while you sleep.",
  },
  {
    id: "p6",
    name: "Silk Veil Cream",
    brand: "Lumi",
    category: "Skincare",
    price_cents: 52_00,
    gradient: "from-sky-200 to-cyan-400",
    blurb: "Lightweight moisture with a soft-focus, silky finish.",
  },
  {
    id: "p7",
    name: "Satin Lip — Plum",
    brand: "Maison",
    category: "Makeup",
    price_cents: 26_00,
    gradient: "from-rose-400 to-pink-600",
    blurb: "Creamy, full-coverage colour with an all-day satin finish.",
  },
  {
    id: "p8",
    name: "Cloud Blush — Peach",
    brand: "Maison",
    category: "Makeup",
    price_cents: 24_00,
    gradient: "from-orange-200 to-rose-400",
    blurb: "Weightless powder blush that melts into the skin.",
  },
  {
    id: "p9",
    name: "Lumino Highlighter",
    brand: "Maison",
    category: "Makeup",
    price_cents: 30_00,
    gradient: "from-amber-200 to-yellow-400",
    blurb: "A soft, lit-from-within glow — never glittery.",
  },
];

export const CATEGORIES: Category[] = ["Perfume", "Skincare", "Makeup"];
