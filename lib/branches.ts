import type { Lang, Localized } from "./i18n";

export const WHATSAPP_NUMBER = "6282283712380";
export const INSTAGRAM_URL = "https://www.instagram.com/elit3barber.official/";
export const INSTAGRAM_HANDLE = "@elit3barber.official";

export interface Branch {
  short: string;
  name: string;
  brand: string;
  address: Localized;
  maps: string;
  wa: string;
}

export const branches: Branch[] = [
  {
    short: "Penuin",
    name: "Penuin Centre",
    brand: "Elite Barber · Kota Batam",
    address: {
      en: "Jl. Komp. Penuin Centre No.15 Blk A, Batu Selicin, Lubuk Baja, Kota Batam, Kepulauan Riau 29411",
      id: "Jl. Komp. Penuin Centre No.15 Blk A, Batu Selicin, Lubuk Baja, Kota Batam, Kepulauan Riau 29411",
    },
    maps: "https://share.google/CSioaivqAjzvJZ5rf",
    wa: WHATSAPP_NUMBER,
  },
  {
    short: "Bizpark",
    name: "Tunas Bizpark",
    brand: "Elite Hair Studio · Batam Centre",
    address: {
      en: "Tunas Bizpark, Jl. Selasih No.08 Blok B, Belian, Batam Centre, Kota Batam, Kepulauan Riau 29432",
      id: "Tunas Bizpark, Jl. Selasih No.08 Blok B, Belian, Batam Centre, Kota Batam, Kepulauan Riau 29432",
    },
    maps: "https://share.google/IOH00zLVdamuI8Aw3",
    wa: WHATSAPP_NUMBER,
  },
];

/** WhatsApp deep link with a localized prefilled message. */
export function waUrl(num: string, lang: Lang): string {
  const msg =
    lang === "id"
      ? "Halo Elite Barber, saya ingin membuat janji."
      : "Hello Elite Barber, I'd like to book an appointment.";
  return `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
}
