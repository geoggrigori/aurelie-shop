"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { PRODUCTS, type Product } from "./products";

interface CartItem {
  product: Product;
  qty: number;
}

interface CartCtx {
  items: CartItem[];
  count: number;
  totalCents: number;
  add: (id: string) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
}

const Ctx = createContext<CartCtx | null>(null);
const STORAGE_KEY = "aurelie-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  // map of productId -> qty
  const [qtys, setQtys] = useState<Record<string, number>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setQtys(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(qtys));
    } catch {}
  }, [qtys]);

  const value = useMemo<CartCtx>(() => {
    const items: CartItem[] = Object.entries(qtys)
      .map(([id, qty]) => {
        const product = PRODUCTS.find((p) => p.id === id);
        return product ? { product, qty } : null;
      })
      .filter((x): x is CartItem => x !== null && x.qty > 0);

    return {
      items,
      count: items.reduce((s, i) => s + i.qty, 0),
      totalCents: items.reduce((s, i) => s + i.product.price_cents * i.qty, 0),
      add: (id) => setQtys((q) => ({ ...q, [id]: (q[id] ?? 0) + 1 })),
      remove: (id) =>
        setQtys((q) => {
          const next = { ...q };
          delete next[id];
          return next;
        }),
      setQty: (id, qty) =>
        setQtys((q) => ({ ...q, [id]: Math.max(0, qty) })),
      clear: () => setQtys({}),
    };
  }, [qtys]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
