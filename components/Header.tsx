"use client";

import type { CSSProperties } from "react";
import { useApp } from "@/app/providers";
import { branches } from "@/lib/branches";
import { SANS, COLORS } from "@/lib/theme";
import { LogoChip, Wordmark } from "./Logo";

function seg(active: boolean): CSSProperties {
  return {
    border: "none",
    cursor: "pointer",
    fontFamily: SANS,
    fontWeight: 700,
    fontSize: 12,
    letterSpacing: ".03em",
    padding: "7px 13px",
    borderRadius: 999,
    transition: "all .2s",
    background: active ? COLORS.red : "transparent",
    color: active ? "#fff" : "rgba(255,255,255,.6)",
  };
}

const groupStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  background: "rgba(255,255,255,.06)",
  border: `1px solid ${COLORS.line}`,
  borderRadius: 999,
  padding: 3,
};

export function Header() {
  const { lang, setLang, branchIndex, setBranchIndex } = useApp();

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 60,
        backdropFilter: "blur(22px)",
        WebkitBackdropFilter: "blur(22px)",
        background: "rgba(17,17,17,.72)",
        borderBottom: `1px solid ${COLORS.line}`,
      }}
    >
      <div
        className="site-header__inner"
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "10px clamp(16px,4vw,40px)",
        }}
      >
        <a href="#top" className="site-header__brand">
          <LogoChip size={46} img={40} priority />
          <Wordmark />
        </a>

        <div className="site-header__controls">
          <div style={groupStyle} role="group" aria-label="Branch">
            {branches.map((b, i) => (
              <button
                key={b.short}
                type="button"
                className="site-header__seg"
                onClick={() => setBranchIndex(i)}
                aria-pressed={branchIndex === i}
                title={b.name}
                style={seg(branchIndex === i)}
              >
                {b.short}
              </button>
            ))}
          </div>

          <div style={groupStyle} role="group" aria-label="Language">
            <button
              type="button"
              className="site-header__seg"
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              style={seg(lang === "en")}
            >
              EN
            </button>
            <button
              type="button"
              className="site-header__seg"
              onClick={() => setLang("id")}
              aria-pressed={lang === "id"}
              style={seg(lang === "id")}
            >
              ID
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
