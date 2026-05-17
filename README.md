[README.md](https://github.com/user-attachments/files/27865028/README.md)
# Klivrant# Klivrant — Landing

Landing oficial de **Klivrant** — automatización con IA para empresas.

Stack: **Next.js 14** (App Router) · **TypeScript** · **Tailwind CSS** · **Geist Font** · **Lucide Icons**.

## Setup en 60 segundos

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estructura

```
klivrant/
├── app/
│   ├── layout.tsx          ← Layout root con fuentes Geist
│   ├── page.tsx            ← Página principal (compone componentes)
│   └── globals.css         ← Tailwind + estilos base
├── components/
│   ├── Logo.tsx            ← Logo SVG + Wordmark
│   ├── Navbar.tsx          ← Header con CTA "Empezar"
│   ├── Hero.tsx            ← Hero + mockup de dashboard
│   ├── StackStrip.tsx      ← Strip de tech (Claude, n8n, etc)
│   ├── Capabilities.tsx    ← Bento grid de capacidades
│   ├── CaseStudy.tsx       ← Testimonio + métricas
│   ├── Pricing.tsx         ← 4 servicios + garantía
│   ├── Process.tsx         ← 4 pasos del proceso
│   ├── FAQ.tsx             ← Accordion con FAQs
│   └── CTAFinal.tsx        ← CTA final + Footer
├── public/
│   └── favicon.svg
└── tailwind.config.js      ← Paleta de marca (brand-*, ink-*, etc)
```

## Deploy a producción (Vercel)

1. Subí el repo a GitHub
2. Importalo en [vercel.com/new](https://vercel.com/new)
3. Conectá el dominio `klivrant.com` en Settings → Domains

Auto-deploy: cualquier push a `main` despliega solo.

## Paleta de marca

| Token | Hex | Uso |
|---|---|---|
| `ink` | `#0A0A0F` | Texto principal, botones primarios |
| `ink-muted` | `#5F5F69` | Texto secundario |
| `canvas` | `#FCFCFD` | Background |
| `canvas-alt` | `#FAFAFB` | Background secundario (secciones) |
| `brand-500` | `#7C68F0` | Acento IA principal |
| `brand-400` | `#A78BFA` | Acento IA claro (en gradientes) |
| `brand-600` | `#5F4FD9` | Texto destacado violeta |

## Tipografía

- **Geist Sans** — todo el cuerpo y los titulares
- **Geist Mono** — código, métricas, badges

Ambas se cargan automáticamente vía el paquete `geist`.

## Editar contenido

- **Hero:** `components/Hero.tsx`
- **Servicios y precios:** `components/Pricing.tsx` → array `services`
- **Caso de estudio:** `components/CaseStudy.tsx`
- **FAQs:** `components/FAQ.tsx` → array `faqs`
- **Capacidades:** `components/Capabilities.tsx` → array `capabilities`

## SEO

Los metatags están en `app/layout.tsx`. Editá `title`, `description` y `openGraph` según necesites.

## Ads (Meta, Google)

Recomendado:
1. Crear `app/(landing)/[slug]/page.tsx` para landings variantes por campaña
2. Sumar Meta Pixel y Google Tag en `app/layout.tsx`
3. Trackear clicks de "Agendar demo" con un evento `Lead`

---

© 2026 Klivrant · Buenos Aires
