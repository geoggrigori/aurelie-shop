<!-- ══════════════════════════ PORTADA ══════════════════════════ -->
<div align="center">
  <img src="docs/title-banner.svg" width="100%" alt="Aurélie"/>
</div>

<!-- ══════════════════════ IDIOMAS / LANGUAGES ══════════════════════ -->
<div align="center">
<a href="README.md"><img src="https://img.shields.io/badge/Português-555555?style=for-the-badge" alt="Português"/></a>
<a href="README.en.md"><img src="https://img.shields.io/badge/English-555555?style=for-the-badge" alt="English"/></a>
<a href="README.es.md"><img src="https://img.shields.io/badge/Español-1987F0?style=for-the-badge" alt="Español"/></a>
</div>

<div align="center">
<img src="https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=nextdotjs&logoColor=white" alt="nextjs"/>
<img src="https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="react"/>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="ts"/>
<img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="tailwind"/>
<img src="https://img.shields.io/badge/License-MIT-2E7D32?style=flat-square" alt="license"/>
</div>

<div align="center">
<a href="#acerca-de"><img src="https://img.shields.io/badge/▸_ACERCA_DE-1987F0?style=for-the-badge" alt="acerca"/></a>
<a href="#funcionalidades"><img src="https://img.shields.io/badge/▸_FUNCIONALIDADES-000000?style=for-the-badge" alt="func"/></a>
<a href="#estructura"><img src="https://img.shields.io/badge/▸_ESTRUCTURA-1987F0?style=for-the-badge" alt="estructura"/></a>
<a href="#uso"><img src="https://img.shields.io/badge/▸_USO-000000?style=for-the-badge" alt="uso"/></a>
</div>

<br/>

> 🛍️ **Tienda de demostración** — el checkout es ilustrativo y no procesa pagos reales.

<div align="center">
  <img src="docs/screenshot.png" width="100%" alt="Aurélie — tienda de perfumes y cosméticos"/>
</div>

## Acerca de

**Aurélie** es una tienda de e-commerce pequeña pero completa para perfumes, skincare y maquillaje, con bolsa de compras funcional. UI premium y responsiva, con visuales de producto generados por CSS (sin depender de imágenes externas, así que nada se rompe).

## Funcionalidades

- **Catálogo de productos** con filtro por categoría (Perfume / Skincare / Maquillaje).
- **Bolsa de compras** — agregar, cambiar cantidad, quitar, subtotal — en un panel lateral con badge de conteo en vivo.
- **Carrito persistente** vía React Context + `localStorage` (sobrevive al refresh).

## Estructura

```
src/
  app/page.tsx          # tienda (filtro + grid + carrito)
  components/           # Header, ProductCard, CartDrawer, BottleMark
  lib/products.ts       # datos del catálogo
  lib/cart.tsx          # contexto del carrito (localStorage)
```

## Uso

```bash
npm install
npm run dev      # http://localhost:3000
```

## Licencia

[MIT](LICENSE).

<div align="center">
  <img src="https://file.loading.io/color/feature/thumb/Blues-8.png?" width="100%" height="10px" alt="divider"/>
</div>

<p align="center"><sub>Desarrollado por <strong><a href="https://github.com/geoggrigori">Grigori</a></strong> · 2026</sub></p>
