"use client";

import {
  createContext,
  useContext,
  useMemo,
  useSyncExternalStore,
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
const EMPTY = "{}";

type Qtys = Record<string, number>; // map of productId -> qty

// The cart lives in localStorage, read through useSyncExternalStore so the
// server render and first client render both see an empty cart and the saved
// cart appears right after hydration (also syncs across tabs).
const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  window.addEventListener("storage", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onChange);
  };
}

function getSnapshot(): string {
  try {
    return localStorage.getItem(STORAGE_KEY) ?? EMPTY;
  } catch {
    return EMPTY;
  }
}

const getServerSnapshot = () => EMPTY;

function parse(raw: string): Qtys {
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function setQtys(update: (q: Qtys) => Qtys) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(update(parse(getSnapshot()))));
  } catch {}
  listeners.forEach((l) => l());
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const qtys = useMemo(() => parse(raw), [raw]);

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
      clear: () => setQtys(() => ({})),
    };
  }, [qtys]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
