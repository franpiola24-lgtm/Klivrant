const stack = [
  "◆ Claude",
  "⚙ n8n",
  "⌁ Firecrawl",
  "◐ OpenAI",
  "▲ Vercel",
  "◇ Supabase",
];

export function StackStrip() {
  return (
    <section className="border-y border-canvas-line bg-canvas-alt py-8 dark:border-night-border dark:bg-night-surface">
      <div className="container-page">
        <p className="mb-4 text-center text-[11px] font-medium uppercase tracking-[0.14em] text-ink-subtle dark:text-night-muted">
          Tecnología de clase mundial
        </p>
        <div className="flex flex-wrap items-center justify-around gap-6 opacity-75">
          {stack.map((s) => (
            <span
              key={s}
              className="text-[15px] font-semibold tracking-tighter text-ink dark:text-white"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
