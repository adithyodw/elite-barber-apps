import Image from "next/image";
import { SANS, COLORS } from "@/lib/theme";

export function LogoChip({
  size = 46,
  img = 40,
  shadow = "0 2px 12px rgba(0,0,0,.45)",
  priority = false,
}: {
  size?: number;
  img?: number;
  shadow?: string;
  priority?: boolean;
}) {
  return (
    <span
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        boxShadow: shadow,
      }}
    >
      <Image
        src="/logo.png"
        alt="Elite Barber Batam logo"
        width={img}
        height={img}
        priority={priority}
        style={{ width: img, height: img, objectFit: "contain", display: "block" }}
      />
    </span>
  );
}

export function Wordmark() {
  return (
    <span style={{ display: "flex", flexDirection: "column", lineHeight: 1, minWidth: 0 }}>
      <span
        className="site-header__wordmark-main"
        style={{
          fontFamily: SANS,
          fontWeight: 800,
          letterSpacing: ".18em",
          fontSize: 15,
          color: "#fff",
        }}
      >
        ELIT
        <span style={{ color: COLORS.red, display: "inline-block", transform: "scaleX(-1)" }}>
          E
        </span>{" "}
        BARBER
      </span>
      <span
        className="site-header__wordmark-sub"
        style={{
          fontFamily: SANS,
          fontWeight: 500,
          letterSpacing: ".32em",
          fontSize: 8.5,
          color: COLORS.slate,
          marginTop: 5,
        }}
      >
        HAIR STUDIO · BATAM
      </span>
    </span>
  );
}
