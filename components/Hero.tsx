import { ArrowRight, Check, Play, Sparkles } from "lucide-react";

const liveWorkflows = [
  {
    name: "leads-instagram → CRM",
    status: "active",
    pill: "147 ejecuciones",
    time: "2.3s",
  },
  {
    name: "facturas-afip → dashboard",
    status: "active",
    pill: "82 ejecuciones",
    time: "1.1s",
  },
  {
    name: "agente-ventas-IA",
    status: "ai",
    pill: "always-on",
    time: "∞",
  },
  {
    name: "prospección-firecrawl",
    status: "active",
    pill: "21 leads nuevos",
    time: "cron",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* gradient blob */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px]"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(167, 139, 250, 0.12) 0%, transparent 65%)",
        }}
      />

      <div className="container-page relative pt-20 pb-16 text-center md:pt-24 md:pb-20">
        {/* Pill */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-300/40 bg-brand-100/60 px-3 py-1.5 text-[11px] font-medium text-brand-600">
          <span>⚡</span>
          <span>Empresas que automatizaron con Klivrant facturan un 30% más</span>
        </div>

        {/* H1 */}
        <h1 className="mx-auto max-w-3xl text-[44px] font-semibold leading-[1.02] tracking-tightest text-ink md:text-[60px] dark:text-white">
          Tu competencia ya
          <br />
          <span className="gradient-text">usa IA. ¿Y vos?</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-5 max-w-xl text-[16px] leading-[1.55] text-ink-muted md:text-[18px] dark:text-night-muted">
          Automatizamos los procesos que te roban tiempo y dinero. Tu empresa
          opera más rápido, sin contratar más gente, sin complicaciones.
        </p>

        {/* CTAs */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-2.5">
          <a
            href="https://wa.me/5491100000000?text=Hola%20Klivrant%2C%20quiero%20saber%20más%20sobre%20automatización"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Hablar por WhatsApp
            <ArrowRight size={14} />
          </a>
          <a href="#casos" className="btn-ghost">
            Ver casos reales
            <Play size={12} />
          </a>
        </div>

        {/* Meta */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-5 text-[12px] text-ink-subtle dark:text-night-muted">
          <span className="flex items-center gap-1.5">
            <Check size={14} className="text-success" />
            Respuesta en menos de 1 hora
          </span>
          <span className="flex items-center gap-1.5">
            <Check size={14} className="text-success" />
            Primera consulta sin costo
          </span>
          <span className="flex items-center gap-1.5">
            <Check size={14} className="text-success" />
            Resultados en 4 semanas
          </span>
        </div>

        {/* Mockup */}
        <div
          className="mx-auto mt-14 max-w-2xl overflow-hidden rounded-2xl border border-canvas-border bg-white text-left dark:border-night-border dark:bg-night-surface"
          style={{
            boxShadow:
              "0 24px 48px -12px rgba(120, 100, 200, 0.18), 0 8px 16px -8px rgba(0, 0, 0, 0.06)",
          }}
        >
          {/* mock header */}
          <div className="flex items-center gap-1.5 border-b border-canvas-line bg-canvas-alt px-4 py-2.5 dark:border-night-border dark:bg-ink">
            <div className="h-2.5 w-2.5 rounded-full bg-[#FF6058]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#28C941]" />
            <span className="ml-2.5 font-mono text-[11px] font-medium text-ink-subtle dark:text-night-muted">
              workflows.klivrant.com
            </span>
          </div>

          {/* mock body */}
          <div className="px-6 py-4">
            <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-ink-subtle dark:text-night-muted">
              Automatizaciones activas — últimas 24h
            </div>
            <div className="divide-y divide-canvas-line dark:divide-night-border">
              {liveWorkflows.map((w) => (
                <div
                  key={w.name}
                  className="flex items-center gap-2.5 py-2.5 text-[13px]"
                >
                  <div
                    className={`h-2 w-2 flex-shrink-0 rounded-full ${
                      w.status === "ai" ? "bg-brand-500" : "bg-success"
                    }`}
                  />
                  <span className="flex-1 font-mono text-[12px] font-medium text-ink dark:text-white">
                    {w.name}
                  </span>
                  <span
                    className={`rounded-md px-2 py-0.5 text-[10px] font-semibold tracking-wide ${
                      w.status === "ai"
                        ? "bg-brand-100 text-brand-600"
                        : "bg-[#E1F5EE] text-[#0F6E56] dark:bg-success/10 dark:text-success"
                    }`}
                  >
                    {w.pill}
                  </span>
                  <span className="font-mono text-[11px] text-ink-subtle dark:text-night-muted">
                    {w.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
