import {
  Bot,
  Check,
  LayoutDashboard,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Zap,
    name: "Automatización IA",
    desc: "Flujos inteligentes que conectan tus apps y procesan datos sin intervención.",
    features: [
      "Hasta 5 integraciones",
      "IA incluida donde aplica",
      "30 días de soporte",
    ],
    from: "200",
  },
  {
    icon: Bot,
    name: "Agente IA a medida",
    desc: "Asistente entrenado en tu negocio, integrado a tus canales de venta.",
    features: ["Entrenado en tu data", "Multicanal", "Mejora continua"],
    from: "100",
  },
  {
    icon: LayoutDashboard,
    name: "Dashboard ejecutivo",
    desc: "Panel en vivo con AFIP, ventas, leads y métricas críticas del negocio.",
    features: ["Conectado a AFIP", "Alertas configurables", "Acceso desde mobile"],
    from: "60",
  },
  {
    icon: TrendingUp,
    name: "Estrategia + CM",
    desc: "Auditoría digital, plan de contenido y gestión de redes orientada a leads.",
    features: ["Auditoría completa", "Plan editorial 90 días", "Reportes mensuales"],
    from: "150",
  },
];

export function Pricing() {
  return (
    <section id="precios" className="border-b border-canvas-line py-20 dark:border-night-border">
      <div className="container-page">
        <p className="section-tag">Precios</p>
        <h2 className="mt-4 max-w-2xl text-[36px] font-semibold leading-[1.08] tracking-tighter text-ink md:text-[40px] dark:text-white">
          Precio fijo. <span className="text-brand-600">Scope cerrado.</span>
        </h2>
        <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-ink-muted dark:text-night-muted">
          Sin &ldquo;consultá por presupuesto&rdquo;. Sin sorpresas a mitad de
          proyecto. Sin contratos largos. Si lo vas a contratar, ya sabés cuánto
          sale.
        </p>

        <div className="mt-12 grid gap-2.5 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.name}
              className="rounded-2xl border border-canvas-border bg-white p-7 transition dark:border-night-border dark:bg-night-surface"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[10px] border border-brand-300/40 bg-gradient-to-br from-brand-100 to-brand-200">
                <s.icon size={20} className="text-brand-600" />
              </div>
              <h3 className="text-[17px] font-semibold tracking-tight text-ink dark:text-white">
                {s.name}
              </h3>
              <p className="mt-1.5 min-h-[42px] text-[13px] leading-relaxed text-ink-muted dark:text-night-muted">
                {s.desc}
              </p>

              <div className="mt-4 flex flex-col gap-2 border-t border-canvas-line pt-4 dark:border-night-border">
                {s.features.map((f) => (
                  <div
                    key={f}
                    className="flex items-start gap-2 text-[12px] text-ink/80 dark:text-white/80"
                  >
                    <Check size={14} className="mt-0.5 flex-shrink-0 text-success" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="text-[11px] text-ink-subtle dark:text-night-muted">desde</span>
                <span className="text-[15px] font-semibold tracking-tight text-ink dark:text-white">
                  USD {s.from}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="mt-8 flex items-center gap-6 rounded-2xl border border-brand-300 bg-gradient-to-br from-brand-50 to-brand-100 p-7 dark:border-brand-700/50 dark:from-brand-700/10 dark:to-brand-600/5">
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-brand-300 bg-white dark:border-brand-700/50 dark:bg-night-surface">
            <ShieldCheck size={28} className="text-brand-600" />
          </div>
          <div>
            <p className="text-[16px] font-semibold tracking-tight text-ink dark:text-white">
              Garantía de satisfacción de 30 días.
            </p>
            <p className="mt-1 text-[13px] leading-relaxed text-ink-muted dark:text-night-muted">
              Si el sistema no cumple lo prometido en el alcance, devolvemos el
              100% sin preguntas. Sin formularios largos. Sin condiciones raras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
