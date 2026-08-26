<!-- ══════════════════════════ TÍTULO ══════════════════════════ -->
<div align="center">
  <img src="docs/title-banner.svg" width="100%" alt="Aurélie"/>
</div>

<!-- ══════════════════════ IDIOMAS / LANGUAGES ══════════════════════ -->
<div align="center">
<a href="README.md"><img src="https://img.shields.io/badge/Português-1987F0?style=for-the-badge" alt="Português"/></a>
<a href="README.en.md"><img src="https://img.shields.io/badge/English-555555?style=for-the-badge" alt="English"/></a>
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
<a href="#sobre"><img src="https://img.shields.io/badge/▸_SOBRE-1987F0?style=for-the-badge" alt="sobre"/></a>
<a href="#funcionalidades"><img src="https://img.shields.io/badge/▸_FUNCIONALIDADES-000000?style=for-the-badge" alt="func"/></a>
<a href="#estrutura"><img src="https://img.shields.io/badge/▸_ESTRUTURA-1987F0?style=for-the-badge" alt="estrutura"/></a>
<a href="#uso"><img src="https://img.shields.io/badge/▸_USO-000000?style=for-the-badge" alt="uso"/></a>
</div>

<br/>

> 🛍️ **Loja de demonstração** — o checkout é ilustrativo, não processa pagamentos reais.

<div align="center">
  <img src="docs/screenshot.png" width="100%" alt="Aurélie — loja de perfumes e cosméticos"/>
</div>

## Sobre

**Aurélie** é uma loja de e-commerce pequena, mas completa, para perfumes, skincare e maquiagem, com sacola de compras funcional. Toda a UI é premium e responsiva, com visuais de produto gerados via CSS (sem depender de imagens externas, então nada quebra).

## Funcionalidades

- **Catálogo de produtos** com filtro por categoria (Perfume / Skincare / Maquiagem).
- **Sacola de compras** — adicionar, mudar quantidade, remover, subtotal — numa gaveta lateral com badge de contagem ao vivo.
- **Carrinho persistente** via React Context + `localStorage` (sobrevive a refresh).

## Estrutura

```
src/
  app/page.tsx          # loja (filtro + grid + carrinho)
  components/           # Header, ProductCard, CartDrawer, BottleMark
  lib/products.ts       # dados do catálogo
  lib/cart.tsx          # contexto do carrinho (localStorage)
```

## Uso

```bash
npm install
npm run dev      # http://localhost:3000
```

## Licença

[MIT](LICENSE).

<div align="center">
  <img src="https://file.loading.io/color/feature/thumb/Blues-8.png?" width="100%" height="10px" alt="divider"/>
</div>

<p align="center"><sub>Desenvolvido por <strong><a href="https://github.com/geoggrigori">Grigori</a></strong> · 2026</sub></p>
