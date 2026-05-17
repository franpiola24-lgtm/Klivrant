export function CaseStudy() {
  return (
    <section
      id="casos"
      className="border-b border-canvas-line bg-canvas-alt py-20 dark:border-night-border dark:bg-night-surface"
    >
      <div className="container-page">
        <p className="section-tag">Caso real</p>
        <h2 className="mt-4 max-w-2xl text-[36px] font-semibold leading-[1.08] tracking-tighter text-ink md:text-[40px] dark:text-white">
          Resultados que{" "}
          <span className="text-brand-600">hablan solos.</span>
        </h2>
        <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-ink-muted dark:text-night-muted">
          Cada proyecto se cierra con métricas concretas. Sin &ldquo;depende del
          caso&rdquo;, sin promesas vagas.
        </p>

        <div className="mt-10 rounded-2xl border border-canvas-border bg-white p-8 shadow-sm md:p-10 dark:border-night-border dark:bg-ink">
          <p className="max-w-2xl text-[20px] font-medium leading-[1.4] tracking-tight text-ink md:text-[24px] dark:text-white">
            &ldquo;Antes llegaba a casa a las 10 de la noche. Hoy cierro a las
            6, mis balances salen en plazo y recuperé los fines de semana.{" "}
            <span className="gradient-text font-semibold">
              No lo puedo creer todavía.
            </span>
            &rdquo;
          </p>

          <div className="mt-7 flex items-center gap-3.5">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-500 text-[14px] font-semibold tracking-tight text-white">
              CV
            </div>
            <div>
              <p className="text-[14px] font-semibold tracking-tight text-ink dark:text-white">
                Carolina V.
              </p>
              <p className="text-[12px] text-ink-subtle dark:text-night-muted">
                Estudio contable · Córdoba · 6 empleados
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 overflow-hidden rounded-xl border border-canvas-border dark:border-night-border">
            {[
              { v: "81h", l: "recuperadas / mes" },
              { v: "4×", l: "más rápido" },
              { v: "93%", l: "menos errores" },
            ].map((m, i) => (
              <div
                key={m.l}
                className={`bg-white px-3 py-5 text-center dark:bg-ink ${
                  i > 0 ? "border-l border-canvas-line dark:border-night-border" : ""
                }`}
              >
                <p className="gradient-text text-[28px] font-semibold leading-none tracking-tightest md:text-[34px]">
                  {m.v}
                </p>
                <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.08em] text-ink-subtle dark:text-night-muted">
                  {m.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
