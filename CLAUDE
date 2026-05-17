# Klivrant — guía para Claude Code

Este archivo le dice a Claude Code cómo trabajar en este proyecto. Si ves algo
que no encaja con estas reglas, preguntá antes de cambiarlo.

## Identidad de marca (no negociable)

- **Nombre:** Klivrant (siempre minúscula en wordmark, con punto violeta final)
- **Tagline principal:** "Automatización con IA real para empresas"
- **Tono:** profesional, directo, sin jerga innecesaria pero tampoco infantil.
  No usar "transformar", "revolucionar", "disruptivo". Sí usar "automatizar",
  "operar", "escalar", "entregar".

## Decisiones de diseño

- **Light mode primario.** No agregar dark mode salvo que se pida explícito.
- **Acento violeta** (`brand-500`, `#7C68F0`) solo en momentos clave: CTA principal,
  badges, "IA", elementos destacados. No usar como background masivo.
- **Geist Sans + Geist Mono.** No agregar otras fuentes.
- **Espaciado generoso.** Cada sección tiene `py-20` mínimo. No comprimir.
- **Bordes:** siempre `border-canvas-border` (gris muy suave). Nunca negro.
- **Shadows:** solo en el mockup del hero. El resto plano.

## Reglas de copy

- Frases cortas. Si una oración tiene más de 18 palabras, partirla.
- Cero "nosotros somos una agencia de...". Hablar siempre en términos del
  resultado para el cliente.
- Precios SIEMPRE en USD con "desde" antes del número.
- Botones máximo 3 palabras.

## Cuando agreguen funcionalidad

- Forms de captura → conectar con Resend o Notion API (no email crudo)
- Analytics → preferir Vercel Analytics + Plausible antes que Google Analytics
- CMS → solo agregar si hay más de 5 páginas distintas (no para 1 landing)

## Cuando se pidan cambios visuales

- Mantener la paleta del `tailwind.config.js`. No introducir hex nuevos.
- Si necesitan un color nuevo, agregarlo al config primero, después usarlo.
- Animaciones: solo CSS transitions, no Framer Motion para esto (overkill).

## Estructura de la página

El orden de las secciones está calibrado para conversión. No reordenar sin
razón fuerte:

1. **Navbar** — anclar todo
2. **Hero** — gancho + valor + mockup
3. **StackStrip** — prueba social técnica
4. **Capabilities** — qué hacés
5. **CaseStudy** — prueba social emocional
6. **Pricing** — disparador de decisión
7. **Process** — destrabar la objeción "¿y cómo es trabajar con uds?"
8. **FAQ** — última fila de objeciones
9. **CTAFinal** — segunda oportunidad de conversión
10. **Footer**

## Cosas que NO hacer

- ❌ Agregar carruseles de testimonios (siempre estáticos)
- ❌ Pop-ups de "newsletter" o "10% off"
- ❌ Live chats genéricos (Intercom/Tawk). Mejor un Calendly limpio.
- ❌ Stock photos. Si necesitás imagen, usar mockups generados por código.
- ❌ Emojis en la copy (excepción: redes sociales, no la landing)

## Comandos útiles

```bash
npm run dev          # desarrollo
npm run build        # build producción
npm run start        # correr build
```

## Si algo no está claro

Preguntá antes de ejecutar. Este proyecto está hecho para que cualquier cambio
sea pequeño y reversible.
