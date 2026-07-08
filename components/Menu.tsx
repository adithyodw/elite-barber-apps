"use client";

import { useRef, useState, type CSSProperties } from "react";
import { useApp } from "@/app/providers";
import { menu } from "@/lib/menu";
import { SERIF, SANS, COLORS } from "@/lib/theme";

function tabStyle(active: boolean): CSSProperties {
  return {
    flex: 1,
    border: "none",
    cursor: "pointer",
    fontFamily: SANS,
    fontWeight: 700,
    fontSize: "clamp(13px,2vw,15px)",
    letterSpacing: ".01em",
    padding: "13px 14px",
    borderRadius: 999,
    transition: "all .25s",
    background: active ? COLORS.red : "transparent",
    color: active ? "#fff" : "rgba(255,255,255,.65)",
    boxShadow: active ? "0 6px 18px rgba(230,57,70,.4)" : "none",
  };
}

export function Menu() {
  const { dict, lang, fmt } = useApp();
  const [tab, setTab] = useState<"men" | "women">("men");
  const tx = useRef<number | null>(null);

  const active = menu[tab];

  const onTouchStart = (e: React.TouchEvent) => {
    tx.current = e.touches[0]?.clientX ?? null;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (tx.current == null) return;
    const dx = (e.changedTouches[0]?.clientX ?? 0) - tx.current;
    if (Math.abs(dx) > 55) setTab(dx < 0 ? "women" : "men");
    tx.current = null;
  };

  return (
    <section
      id="menu"
      style={{
        background: COLORS.bone,
        color: COLORS.ink,
        padding: "clamp(56px,9vw,110px) clamp(16px,4vw,40px)",
      }}
    >
      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 38 }}>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: ".3em",
              textTransform: "uppercase",
              color: COLORS.red,
              marginBottom: 14,
            }}
          >
            {dict.menuKicker}
          </div>
          <h2
            style={{
              fontFamily: SERIF,
              fontWeight: 800,
              fontSize: "clamp(2.4rem,7vw,4rem)",
              lineHeight: 1,
              margin: 0,
              color: COLORS.ink,
            }}
          >
            {dict.menuTitle}
          </h2>
        </div>

        <div
          role="tablist"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            marginBottom: 8,
            background: "#111",
            borderRadius: 999,
            padding: 6,
            maxWidth: 440,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <button
            role="tab"
            aria-selected={tab === "men"}
            onClick={() => setTab("men")}
            style={tabStyle(tab === "men")}
          >
            {dict.tabMen}
          </button>
          <button
            role="tab"
            aria-selected={tab === "women"}
            onClick={() => setTab("women")}
            style={tabStyle(tab === "women")}
          >
            {dict.tabWomen}
          </button>
        </div>

        <div
          style={{
            textAlign: "center",
            fontFamily: SERIF,
            fontStyle: "italic",
            fontSize: 16,
            color: COLORS.slate,
            margin: "16px 0 34px",
          }}
        >
          {active.brand[lang]}
        </div>

        <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          {active.categories.map((cat) => (
            <div key={cat.name.en} style={{ marginBottom: 44 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                <h3
                  style={{
                    fontFamily: SANS,
                    fontWeight: 800,
                    fontSize: 13,
                    letterSpacing: ".22em",
                    textTransform: "uppercase",
                    color: COLORS.ink,
                    margin: 0,
                    whiteSpace: "nowrap",
                  }}
                >
                  {cat.name[lang]}
                </h3>
                <span style={{ flex: 1, height: 1, background: "rgba(17,17,17,.14)" }} />
              </div>

              {cat.items.map((it) => (
                <div
                  key={it.name.en}
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 16,
                    padding: "16px 0",
                    borderBottom: "1px solid rgba(17,17,17,.08)",
                  }}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: "clamp(16px,2.4vw,19px)",
                        color: COLORS.ink,
                        lineHeight: 1.3,
                      }}
                    >
                      {it.name[lang]}
                    </div>
                    {it.subtitle ? (
                      <div
                        style={{
                          fontSize: 13.5,
                          lineHeight: 1.5,
                          color: COLORS.slate,
                          marginTop: 5,
                          maxWidth: "52ch",
                        }}
                      >
                        {it.subtitle[lang]}
                      </div>
                    ) : null}
                  </div>
                  <div
                    style={{
                      fontWeight: 800,
                      fontSize: "clamp(15px,2.2vw,18px)",
                      color: COLORS.red,
                      whiteSpace: "nowrap",
                      letterSpacing: "-.01em",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {fmt(it.price, it.from)}
                  </div>
                </div>
              ))}
            </div>
          ))}

          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 12,
              marginTop: 14,
              padding: "20px 22px",
              background: "#fff",
              border: "1px solid rgba(17,17,17,.08)",
              borderRadius: 16,
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#E63946"
              strokeWidth="2"
              style={{ flexShrink: 0, marginTop: 1 }}
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: "#555", fontStyle: "italic" }}>
              {dict.footnote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
