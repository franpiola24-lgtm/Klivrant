import { ArrowRight } from "lucide-react";
import { Wordmark } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { label: "Producto", href: "#producto" },
  { label: "Casos", href: "#casos" },
  { label: "Precios", href: "#precios" },
  { label: "Blog", href: "#blog" },
];

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-canvas-line bg-canvas/85 backdrop-blur-md dark:border-night-border dark:bg-ink/85">
      <div className="container-page flex items-center justify-between py-4">
        <Wordmark />
        <div className="hidden gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium text-ink-muted transition hover:text-ink dark:text-night-muted dark:hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="https://wa.me/5491100000000?text=Hola%20Klivrant%2C%20quiero%20saber%20más%20sobre%20automatización"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md bg-ink px-3.5 py-2 text-[13px] font-medium text-white transition hover:bg-ink/90 dark:bg-brand-500 dark:hover:bg-brand-600"
          >
            WhatsApp
            <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </nav>
  );
}
