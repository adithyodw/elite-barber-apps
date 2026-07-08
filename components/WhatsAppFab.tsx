"use client";

import { useApp } from "@/app/providers";
import { whatsappLink } from "@/lib/branches";

export function WhatsAppFab() {
  const { dict, branch, lang } = useApp();
  const waHref = whatsappLink(dict.whatsapp.message + branch.name[lang]);

  return (
    <a
      href={waHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={dict.whatsapp.fabLabel}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-red text-white animate-floatPulse transition-transform duration-200 hover:-translate-y-0.5"
      style={{
        bottom: "calc(1.25rem + var(--safe-bottom))",
        right: "calc(1.25rem + var(--safe-right))",
      }}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2Zm5.8 14.03c-.25.69-1.45 1.32-1.99 1.36-.53.05-1.03.24-3.47-.72-2.92-1.15-4.79-4.13-4.94-4.32-.14-.2-1.18-1.57-1.18-2.99 0-1.42.75-2.12 1.01-2.41.25-.29.55-.36.73-.36.18 0 .37 0 .53.01.17.01.4-.06.62.48.25.6.85 2.06.92 2.21.07.15.12.32.02.52-.1.2-.15.32-.29.49-.15.17-.31.39-.44.52-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.35 1.45.29.15.46.12.63-.07.17-.2.73-.85.92-1.14.2-.29.39-.24.66-.15.27.1 1.71.81 2 .96.29.15.49.22.56.34.07.12.07.69-.18 1.38Z" />
      </svg>
    </a>
  );
}
