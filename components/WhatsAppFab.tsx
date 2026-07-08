"use client";

import { useApp } from "@/app/providers";

export function WhatsAppFab() {
  const { activeWa } = useApp();

  return (
    <a
      href={activeWa}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book via WhatsApp"
      className="eb-fab"
      style={{
        position: "fixed",
        right: "clamp(16px,4vw,28px)",
        bottom: "clamp(16px,4vw,28px)",
        zIndex: 70,
        width: 58,
        height: 58,
        borderRadius: "50%",
        background: "#E63946",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg width="30" height="30" viewBox="0 0 24 24" fill="#fff">
        <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.42 1.27 4.86L2 22l5.28-1.38A9.93 9.93 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
      </svg>
    </a>
  );
}
