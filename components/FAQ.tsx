"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "¿Cómo cobran y en qué moneda?",
    a: "Cotizamos siempre en USD y aceptamos pagos en pesos al tipo de cambio del día (transferencia o MercadoPago) o en USD vía transferencia bancaria internacional. Facturamos como monotributistas con CUIT argentino.",
  },
  {
    q: "¿Qué stack tecnológico usan?",
    a: "Trabajamos con n8n para flujos de automatización, Claude y OpenAI para capacidades de IA, Firecrawl para extracción de datos, Vercel para hosting y Supabase para bases de datos. Todo elegido por estabilidad, no por moda.",
  },
  {
    q: "¿Tengo que saber de tecnología para trabajar con ustedes?",
    a: "No. Vos nos contás qué problema querés resolver y nosotros nos encargamos de lo técnico. Te capacitamos al final para que sepas usar lo que entregamos, sin necesidad de programar nada.",
  },
  {
    q: "¿Trabajan con clientes fuera de Argentina?",
    a: "Sí, trabajamos con empresas de toda LATAM y España. Las reuniones son por Google Meet y la entrega es 100% remota.",
  },
  {
    q: "¿Qué pasa después de los 30 días de soporte?",
    a: "Te ofrecemos un plan mensual de mantenimiento opcional desde USD 80/mes que incluye monitoreo, ajustes menores y soporte priorizado. Si no lo necesitás, el sistema sigue funcionando solo.",
  },
  {
    q: "¿Mi data queda protegida?",
    a: "Sí. Firmamos NDA antes de cualquier acceso a tu información. Los sistemas se montan en tu infraestructura cuando es posible, y nunca compartimos datos de clientes con terceros.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-b border-canvas-line py-20 dark:border-night-border">
      <div className="container-page">
        <p className="section-tag">Preguntas</p>
        <h2 className="mt-4 max-w-2xl text-[36px] font-semibold leading-[1.08] tracking-tighter text-ink md:text-[40px] dark:text-white">
          Lo que <span className="text-brand-600">nos preguntan</span> antes de
          empezar.
        </h2>

        <div className="mt-10 divide-y divide-canvas-line dark:divide-night-border">
          {faqs.map((f, i) => (
            <button
              key={i}
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-start justify-between gap-4 py-5 text-left"
            >
              <div className="flex-1">
                <p className="text-[15px] font-medium tracking-tight text-ink dark:text-white">
                  {f.q}
                </p>
                {open === i && (
                  <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-ink-muted dark:text-night-muted">
                    {f.a}
                  </p>
                )}
              </div>
              {open === i ? (
                <Minus size={20} className="mt-0.5 flex-shrink-0 text-brand-600" />
              ) : (
                <Plus size={20} className="mt-0.5 flex-shrink-0 text-brand-600" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
