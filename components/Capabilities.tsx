type Capability = {
  tag: string;
  title: string;
  desc: string;
  featured?: boolean;
  flow?: { label: string; accent?: boolean }[];
};

const capabilities: Capability[] = [
  {
    tag: "Servicio principal",
    title: "Automatización inteligente de procesos",
    desc: "Conectamos las herramientas que ya usás (WhatsApp, Excel, AFIP, Meta Ads, MercadoLibre) en flujos que corren solos. Sumamos IA donde tiene sentido para que el sistema decida, no solo ejecute.",
    featured: true,
    flow: [
      { label: "Instagram DM" },
      { label: "Agente IA", accent: true },
      { label: "CRM" },
      { label: "Email" },
      { label: "Reporte", accent: true },
    ],
  },
  {
    tag: "IA aplicada",
    title: "Agentes a medida",
    desc: "Asistentes entrenados en tu negocio que atienden, califican leads y procesan datos las 24 horas.",
  },
  {
    tag: "Data",
    title: "Dashboards en vivo",
    desc: "Métricas conectadas a AFIP, Meta Ads y tus sistemas — todo en una pantalla.",
  },
  {
    tag: "Marketing",
    title: "Estrategia + CM",
    desc: "Auditoría de redes y campañas, contenido orientado a leads y gestión de comunidad.",
  },
  {
    tag: "Growth",
    title: "Prospección automática",
    desc: "Leads calificados de tu nicho, entregados cada semana, listos para tu equipo comercial.",
  },
];

export function Capabilities() {
  return (
    <section id="producto" className="border-b border-canvas-line py-20 dark:border-night-border">
      <div className="container-page">
        <p className="section-tag">Capacidades</p>
        <h2 className="mt-4 max-w-2xl text-[36px] font-semibold leading-[1.08] tracking-tighter text-ink md:text-[40px] dark:text-white">
          Todo lo que tu empresa necesita para{" "}
          <span className="text-brand-600">operar con IA.</span>
        </h2>
        <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-ink-muted dark:text-night-muted">
          Desde flujos automatizados hasta asistentes inteligentes — bajo un
          mismo techo, con un proceso claro y plazos cumplidos.
        </p>

        <div className="mt-12 grid gap-3 md:grid-cols-[1.5fr_1fr]">
          {capabilities.map((c) => (
            <div
              key={c.title}
              className={`rounded-2xl border p-7 transition ${
                c.featured
                  ? "border-brand-300 bg-gradient-to-br from-white to-brand-50 md:col-span-2 dark:border-brand-700/50 dark:from-night-surface dark:to-ink"
                  : "border-canvas-border bg-white dark:border-night-border dark:bg-night-surface"
              }`}
            >
              <p className="section-tag !mb-4">
                <span>{c.tag}</span>
              </p>
              <h3 className="text-[20px] font-semibold leading-snug tracking-tight text-ink md:text-[22px] dark:text-white">
                {c.title}
              </h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-ink-muted dark:text-night-muted">
                {c.desc}
              </p>

              {c.flow && (
                <div className="mt-5 flex flex-wrap items-center gap-2 rounded-xl border border-canvas-border bg-white p-4 dark:border-night-border dark:bg-ink">
                  {c.flow.map((n, j) => (
                    <span
                      key={j}
                      className="flex items-center gap-2 font-mono text-[11px]"
                    >
                      <span
                        className={`rounded-md border px-2.5 py-1 ${
                          n.accent
                            ? "border-brand-500 bg-brand-100 font-semibold text-brand-600"
                            : "border-canvas-border bg-canvas-alt font-medium text-ink dark:border-night-border dark:bg-night-surface dark:text-white"
                        }`}
                      >
                        {n.label}
                      </span>
                      {j < c.flow!.length - 1 && (
                        <span className="text-ink-subtle dark:text-night-muted">→</span>
                      )}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
