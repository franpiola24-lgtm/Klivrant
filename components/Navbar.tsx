import { ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { label: "Producto", href: "#producto" },
  { label: "Casos", href: "#casos" },
  { label: "Precios", href: "#precios" },
  { label: "Blog", href: "#blog" },
];

export function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50"
      style={{
        background: "rgba(252,252,253,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div className="container-page flex items-center justify-between py-4">
        <div className="flex items-center gap-2.5">
          <Logo size={26} />
          <span className="font-semibold tracking-[-0.4px]" style={{ fontSize: 15, color: "#0A0A0F" }}>
            klivrant<span className="text-brand-500">.</span>
          </span>
        </div>
        <div className="hidden gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] transition-colors duration-200 hover:text-[#0A0A0F]"
              style={{ color: "#5F5F69" }}
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="https://wa.me/5491100000000?text=Hola%20Klivrant%2C%20quiero%20saber%20m%C3%A1s%20sobre%20automatizaci%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-[7px] bg-[#0A0A0F] px-[18px] py-[9px] text-[13px] font-medium text-white"
          >
            WhatsApp&nbsp;→
            <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </nav>
  );
}
