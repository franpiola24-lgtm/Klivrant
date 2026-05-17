const steps = [
  {
    num: "01 / DÍA 0",
    title: "Discovery",
    desc: "Llamada de 30 min. Mapeamos procesos y oportunidades reales.",
  },
  {
    num: "02 / DÍA 2",
    title: "Propuesta",
    desc: "Scope, precio y plazo cerrados. En 48 horas. Sin ambigüedad.",
  },
  {
    num: "03 / SEM 1-3",
    title: "Build",
    desc: "Construcción iterativa con avances que vos validás cada semana.",
  },
  {
    num: "04 / SEM 4",
    title: "Launch",
    desc: "Entrega, capacitación al equipo y 30 días de soporte gratis.",
  },
];

export function Process() {
  return (
    <section className="border-b border-canvas-line bg-canvas-alt py-20 dark:border-night-border dark:bg-night-surface">
      <div className="container-page">
        <p className="section-tag">Proceso</p>
        <h2 className="mt-4 max-w-2xl text-[36px] font-semibold leading-[1.08] tracking-tighter text-ink md:text-[40px] dark:text-white">
          De primera llamada a{" "}
          <span className="text-brand-600">sistema en producción.</span>
        </h2>
        <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-ink-muted dark:text-night-muted">
          Cuatro etapas claras con plazos concretos. Vos sabés en todo momento
          dónde estamos.
        </p>

        <div className="mt-10 grid gap-2.5 md:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-canvas-border bg-white p-6 dark:border-night-border dark:bg-ink"
            >
              <span className="block font-mono text-[11px] font-semibold tracking-wide text-brand-600">
                {s.num}
              </span>
              <h3 className="mt-3.5 text-[16px] font-semibold tracking-tight text-ink dark:text-white">
                {s.title}
              </h3>
              <p className="mt-1.5 text-[12px] leading-relaxed text-ink-subtle dark:text-night-muted">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
