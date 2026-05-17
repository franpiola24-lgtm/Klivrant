import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const themeScript = `(function(){try{var t=localStorage.getItem('theme'),p=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';if((t||p)==='dark')document.documentElement.classList.add('dark');}catch(e){}})();`;

export const metadata: Metadata = {
  title: "Klivrant — Automatización con IA para empresas",
  description:
    "Diseñamos sistemas inteligentes, agentes de IA y dashboards a medida para empresas que quieren operar más rápido sin sumar equipo. Listo en semanas.",
  metadataBase: new URL("https://klivrant.com"),
  openGraph: {
    title: "Klivrant — Automatización con IA para empresas",
    description:
      "Sistemas inteligentes, agentes de IA y dashboards a medida. Listo en semanas.",
    url: "https://klivrant.com",
    siteName: "Klivrant",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Klivrant — Automatización con IA para empresas",
    description:
      "Sistemas inteligentes, agentes de IA y dashboards a medida. Listo en semanas.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
