import type { Lang } from "./i18n";

/**
 * Formats an IDR price for display.
 * EN → "IDR 95,000" / "From IDR 110,000"
 * ID → "Rp 95.000"  / "Mulai Rp 110.000"
 *
 * Grouping is locale-driven: en-US groups with commas, id-ID with dots.
 */
export function formatPrice(amount: number, from: boolean, lang: Lang): string {
  if (lang === "id") {
    const value = `Rp ${amount.toLocaleString("id-ID")}`;
    return from ? `Mulai ${value}` : value;
  }
  const value = `IDR ${amount.toLocaleString("en-US")}`;
  return from ? `From ${value}` : value;
}
