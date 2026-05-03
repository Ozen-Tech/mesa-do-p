# A Mesa dos Profetas — Landing Page

Landing page de vendas em React + Vite + TypeScript + TailwindCSS para o ebook **A Mesa dos Profetas — 21 Receitas Bíblicas Esquecidas** (Edição Premium), de Enzo Almeida Verde.

## Stack

- [Vite 5](https://vitejs.dev/) + React 18 + TypeScript
- [TailwindCSS 3](https://tailwindcss.com/) com design system customizado (ouro, terracota, marrom)
- [lucide-react](https://lucide.dev/) (ícones)
- Fontes Google: **Playfair Display** (títulos), **Lora** (citações), **Inter** (corpo)
- Widget de checkout da **Hotmart** integrado (5 CTAs estratégicos)

## Como rodar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera /dist
npm run preview  # serve o build
```

## Estrutura

```
.
├── index.html                   # SEO em PT-BR + fontes Google + script Hotmart
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── hero-mesa.jpg        # imagem do Hero (gerada por IA)
│       └── ebook-mockup.png     # mockup 3D do ebook (gerada por IA)
├── src/
│   ├── main.tsx                 # bootstrap React
│   ├── App.tsx
│   ├── index.css                # Tailwind + CSS variables do design system
│   └── pages/
│       └── Home.tsx             # 9 seções da landing
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
├── tsconfig.json / tsconfig.node.json
└── package.json
```

## As 9 seções da landing

1. **Hero** — fundo com parallax, 2 CTAs, chevron animado
2. **O Poder da Mesa Bíblica** — citação de Gênesis 1:29
3. **21 Receitas** — grid de 6 cards + indicação das 15 restantes + 1 CTA
4. **Diferenciais** — Sabedoria Milenar, Base Científica, Aplicação Prática
5. **Mockup do Ebook** — imagem 3D + lista de 7 itens + 1 CTA
6. **Testemunhos** — 3 cards com 5 estrelas em ouro
7. **FAQ** — 4 perguntas em `<details>` nativo
8. **CTA Final** — fundo gradiente marrom→terracota + 1 CTA principal
9. **Footer** — autor, navegação, créditos

## Trocando o link da Hotmart

A constante está no topo de [`src/pages/Home.tsx`](src/pages/Home.tsx):

```ts
const HOTMART_URL = "https://pay.hotmart.com/G105661402K?checkoutMode=2";
```

Edite e salve — o Vite faz hot-reload automático.

## Trocando as imagens

Substitua os arquivos em `public/images/`:

- `hero-mesa.jpg` (recomendado 1920×1080, < 500 KB)
- `ebook-mockup.png` (recomendado 800×1000, fundo transparente)

Os caminhos no código apontam para `/images/...` (Vite serve `public/` na raiz).

## Design System

| Token        | Valor      | Uso                                     |
| ------------ | ---------- | --------------------------------------- |
| `accent`     | `#D4AF37`  | Ouro — botões, ícones, divisores        |
| `secondary`  | `#C67C4E`  | Terracota — eyebrows, gradientes        |
| `foreground` | `#3D2817`  | Marrom escuro — texto principal, fundos |
| `background` | `#F5E6D3`  | Creme — fundo geral                     |
| `muted`      | `#8A7060`  | Marrom médio — texto secundário         |
