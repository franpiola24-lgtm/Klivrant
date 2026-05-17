"use client";

import { MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/5491100000000?text=Hola%20Klivrant%2C%20quiero%20saber%20más%20sobre%20automatización";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      <div className="relative">
        <div className="absolute bottom-16 right-0 bg-ink text-white text-xs font-medium px-3 py-2 rounded-lg whitespace-nowrap dark:bg-white dark:text-ink opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          ¿Hablamos?
          <div className="absolute -bottom-1 right-4 w-2 h-2 bg-ink dark:bg-white transform rotate-45" />
        </div>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 rounded-full transition-all hover:scale-110 active:scale-95"
          style={{
            backgroundColor: "#25D366",
            boxShadow: "0 4px 12px rgba(37, 211, 102, 0.3)",
          }}
        >
          <MessageCircle size={24} className="text-white" />
        </a>
      </div>
    </div>
  );
}
