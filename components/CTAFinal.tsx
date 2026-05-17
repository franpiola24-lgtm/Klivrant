import { ArrowRight, Check, Mail } from "lucide-react";
import { Logo } from "./Logo";

export function CTAFinal() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden border-b border-canvas-line py-24 bg-gradient-to-b from-canvas-alt to-brand-100 dark:border-night-border dark:from-ink dark:to-ink"
    >
      <div className="container-page text-center">
        <p className="section-tag inline-flex justify-center">Empezá hoy</p>
        <h2 className="mx-auto mt-4 max-w-xl text-[40px] font-semibold leading-[1.05] tracking-tightest text-ink md:text-[48px] dark:text-white">
          Tu empresa,{" "}
          <span className="gradient-text">en otra escala.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[16px] leading-relaxed text-ink-muted dark:text-night-muted">
          Una charla de 30 minutos basta para saber si Klivrant es para vos.
          Sin compromiso, sin presentaciones plantillas.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-2.5">
          <a
            href="mailto:hola@klivrant.com?subject=Quiero agendar una demo"
            className="btn-primary"
          >
            Agendar demo gratis
            <ArrowRight size={14} />
          </a>
          <a href="mailto:hola@klivrant.com" className="btn-ghost">
            <Mail size={13} />
            hola@klivrant.com
          </a>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-[12px] text-ink-subtle dark:text-night-muted">
          <span className="flex items-center gap-1.5">
            <Check size={13} className="text-success" />
            Respuesta en 24h
          </span>
          <span className="flex items-center gap-1.5">
            <Check size={13} className="text-success" />
            Sin compromiso
          </span>
          <span className="flex items-center gap-1.5">
            <Check size={13} className="text-success" />
            Garantía 30 días
          </span>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-white py-8 dark:bg-ink">
      <div className="container-page">
        <div className="flex flex-col items-center justify-between gap-4 border-b border-canvas-line pb-5 md:flex-row dark:border-night-border">
          <div className="flex items-center gap-2.5">
            <Logo size={22} />
            <span className="text-[14px] font-semibold tracking-tight text-ink dark:text-white">
              klivrant<span className="text-brand-500">.</span>
            </span>
          </div>
          <div className="flex gap-5 text-[12px] text-ink-muted dark:text-night-muted">
            <a href="#producto">Producto</a>
            <a href="#casos">Casos</a>
            <a href="#precios">Precios</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>
        <div className="mt-5 flex flex-col items-center justify-between gap-2 text-[11px] text-ink-subtle md:flex-row dark:text-night-muted">
          <span>© 2026 Klivrant · Buenos Aires, Argentina</span>
          <span>hola@klivrant.com</span>
        </div>
      </div>
    </footer>
  );
}
