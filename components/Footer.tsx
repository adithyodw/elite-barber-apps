"use client";

import { useApp } from "@/app/providers";
import { whatsappLink, INSTAGRAM_URL, WHATSAPP_DISPLAY } from "@/lib/branches";
import { LogoChip } from "./Logo";

export function Footer() {
  const { dict, branch, lang } = useApp();
  const waHref = whatsappLink(dict.whatsapp.message + branch.name[lang]);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-5 text-center sm:px-6">
        <LogoChip size={96} />

        <p className="mt-6 font-serif text-2xl italic text-white">
          {dict.footer.tagline}
        </p>

        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-red px-7 py-3.5 text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-0.5"
        >
          {dict.footer.book}
        </a>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-slate">
          <a
            href={`tel:+${WHATSAPP_DISPLAY.replace(/[^\d]/g, "")}`}
            className="transition-colors hover:text-white"
          >
            {WHATSAPP_DISPLAY}
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            {dict.social.button}
          </a>
        </div>

        <p className="mt-8 text-[12px] text-slate/70">
          &copy; {year} Elite Barber Batam · Elite Hair Studio. {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}
