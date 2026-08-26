<!-- ══════════════════════════ TITLE ══════════════════════════ -->
<div align="center">
  <img src="docs/title-banner.svg" width="100%" alt="Aurélie"/>
</div>

<!-- ══════════════════════ IDIOMAS / LANGUAGES ══════════════════════ -->
<div align="center">
<a href="README.md"><img src="https://img.shields.io/badge/Português-555555?style=for-the-badge" alt="Português"/></a>
<a href="README.en.md"><img src="https://img.shields.io/badge/English-1987F0?style=for-the-badge" alt="English"/></a>
<a href="README.es.md"><img src="https://img.shields.io/badge/Español-555555?style=for-the-badge" alt="Español"/></a>
</div>

<div align="center">
<img src="https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=nextdotjs&logoColor=white" alt="nextjs"/>
<img src="https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="react"/>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="ts"/>
<img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="tailwind"/>
<img src="https://img.shields.io/badge/License-MIT-2E7D32?style=flat-square" alt="license"/>
</div>

<div align="center">
<a href="#about"><img src="https://img.shields.io/badge/▸_ABOUT-1987F0?style=for-the-badge" alt="about"/></a>
<a href="#features"><img src="https://img.shields.io/badge/▸_FEATURES-000000?style=for-the-badge" alt="features"/></a>
<a href="#structure"><img src="https://img.shields.io/badge/▸_STRUCTURE-1987F0?style=for-the-badge" alt="structure"/></a>
<a href="#usage"><img src="https://img.shields.io/badge/▸_USAGE-000000?style=for-the-badge" alt="usage"/></a>
</div>

<br/>

> 🛍️ **Demo store** — checkout is illustrative and processes no real payments.

<div align="center">
  <img src="docs/screenshot.png" width="100%" alt="Aurélie — perfume & cosmetics storefront"/>
</div>

## About

**Aurélie** is a small but complete e-commerce storefront for perfume, skincare and makeup, with a working shopping bag. Premium, responsive UI with CSS-generated product visuals (no external image dependencies, so nothing ever breaks).

## Features

- **Product catalog** with category filtering (Perfume / Skincare / Makeup).
- **Shopping bag** — add, change quantity, remove, subtotal — in a slide-over drawer with a live item count badge.
- **Persistent cart** via React Context + `localStorage` (survives refresh).

## Structure

```
src/
  app/page.tsx          # storefront (filter + grid + cart)
  components/           # Header, ProductCard, CartDrawer, BottleMark
  lib/products.ts       # catalog data
  lib/cart.tsx          # cart context (localStorage-backed)
```

## Usage

```bash
npm install
npm run dev      # http://localhost:3000
```

## License

[MIT](LICENSE).

<div align="center">
  <img src="https://file.loading.io/color/feature/thumb/Blues-8.png?" width="100%" height="10px" alt="divider"/>
</div>

<p align="center"><sub>Built by <strong><a href="https://github.com/geoggrigori">Grigori</a></strong> · 2026</sub></p>
