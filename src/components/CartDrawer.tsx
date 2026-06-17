"use client";

import { useCart } from "@/lib/cart";
import { formatUSD } from "@/lib/format";

export function CartDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { items, totalCents, add, setQty, remove, clear } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-stone-900/40 transition-opacity ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-xl transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-stone-200 px-6 py-4">
          <h2 className="text-lg font-semibold">Your bag</h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-stone-400 hover:text-stone-700"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <p className="mt-10 text-center text-sm text-stone-400">
              Your bag is empty.
            </p>
          ) : (
            <ul className="space-y-4">
              {items.map(({ product, qty }) => (
                <li key={product.id} className="flex gap-3">
                  <div
                    className={`h-16 w-16 shrink-0 rounded-lg bg-gradient-to-br ${product.gradient}`}
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-stone-900">
                      {product.name}
                    </p>
                    <p className="text-xs text-stone-400">
                      {formatUSD(product.price_cents)}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        onClick={() => setQty(product.id, qty - 1)}
                        className="h-6 w-6 rounded border border-stone-300 text-stone-600"
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-sm">{qty}</span>
                      <button
                        onClick={() => add(product.id)}
                        className="h-6 w-6 rounded border border-stone-300 text-stone-600"
                      >
                        +
                      </button>
                      <button
                        onClick={() => remove(product.id)}
                        className="ml-auto text-xs text-stone-400 hover:text-rose-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <span className="text-sm font-medium">
                    {formatUSD(product.price_cents * qty)}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-stone-200 px-6 py-4">
          <div className="flex justify-between text-sm">
            <span className="text-stone-500">Subtotal</span>
            <span className="font-semibold">{formatUSD(totalCents)}</span>
          </div>
          <button
            disabled={items.length === 0}
            className="mt-4 w-full rounded-full bg-stone-900 py-3 text-sm font-medium text-white transition hover:bg-stone-700 disabled:opacity-40"
          >
            Checkout
          </button>
          {items.length > 0 && (
            <button
              onClick={clear}
              className="mt-2 w-full text-xs text-stone-400 hover:text-stone-600"
            >
              Clear bag
            </button>
          )}
        </div>
      </aside>
    </>
  );
}
