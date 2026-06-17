# Aurélie — storefront demo

A small but complete **e-commerce storefront** for perfume, skincare and makeup,
with a working shopping bag. Built with **Next.js 16, React 19, TypeScript and
Tailwind CSS**.

## Features

- **Product catalog** with category filtering (Perfume / Skincare / Makeup).
- **Shopping bag** — add, change quantity, remove, subtotal — in a slide-over
  drawer with a live item count badge.
- **Persistent cart** via React Context + `localStorage` (survives refresh).
- Premium, responsive UI with CSS-generated product visuals (no external image
  dependencies, so nothing ever breaks).

## Tech stack

| Concern     | Choice                       |
| ----------- | ---------------------------- |
| Framework   | Next.js 16 (App Router)      |
| UI          | React 19, Tailwind CSS       |
| Language    | TypeScript                   |
| Cart state  | React Context + localStorage |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Structure

```
src/
  app/page.tsx          # storefront (filter + grid + cart)
  components/           # Header, ProductCard, CartDrawer, BottleMark
  lib/products.ts       # catalog data
  lib/cart.tsx          # cart context (localStorage-backed)
```

> Aurélie is a demo store — checkout is illustrative and processes no payments.

## License

MIT
