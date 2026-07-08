import type { Lang } from "./i18n";

export interface Dictionary {
  heroKicker: string;
  heroL1: string;
  heroL2: string;
  heroSub: string;
  heroCta1: string;
  heroCta2: string;
  menuKicker: string;
  menuTitle: string;
  tabMen: string;
  tabWomen: string;
  branchesKicker: string;
  branchesTitle: string;
  branchDirections: string;
  branchBook: string;
  igKicker: string;
  igTitle: string;
  tagline: string;
  footerRights: string;
  footnote: string;
}

const en: Dictionary = {
  heroKicker: "Batam's Premier Grooming House",
  heroL1: "Look Your",
  heroL2: "Best.",
  heroSub:
    "Precision cuts, hot-towel shaves and luxury studio styling — crafted for the modern gentleman and the discerning woman.",
  heroCta1: "Book Appointment",
  heroCta2: "Find Nearest Branch",
  menuKicker: "Price List",
  menuTitle: "The Menu",
  tabMen: "Men's Grooming",
  tabWomen: "Women's Studio",
  branchesKicker: "Two Locations",
  branchesTitle: "Find Your Studio",
  branchDirections: "Directions",
  branchBook: "Book via WhatsApp",
  igKicker: "Follow the Craft",
  igTitle: "On Instagram",
  tagline: "Look Your Best",
  footerRights:
    "© 2026 Elite Barber Batam · Elite Hair Studio. All rights reserved.",
  footnote:
    "Prices may vary based on hair length and thickness. A complimentary consultation with our master stylists is highly recommended before technical treatments.",
};

const id: Dictionary = {
  heroKicker: "Rumah Grooming Premium Batam",
  heroL1: "Look Your",
  heroL2: "Best.",
  heroSub:
    "Potongan presisi, cukur handuk panas, dan styling studio mewah — untuk pria modern dan wanita berkelas.",
  heroCta1: "Buat Janji",
  heroCta2: "Cabang Terdekat",
  menuKicker: "Daftar Harga",
  menuTitle: "Menu Layanan",
  tabMen: "Grooming Pria",
  tabWomen: "Studio Wanita",
  branchesKicker: "Dua Lokasi",
  branchesTitle: "Temukan Studio Anda",
  branchDirections: "Petunjuk Arah",
  branchBook: "Booking via WhatsApp",
  igKicker: "Ikuti Karyanya",
  igTitle: "Di Instagram",
  tagline: "Look Your Best",
  footerRights:
    "© 2026 Elite Barber Batam · Elite Hair Studio. Hak cipta dilindungi.",
  footnote:
    "Harga dapat berubah sesuai panjang & ketebalan rambut. Konsultasi dengan master stylist kami sangat disarankan sebelum treatment teknis.",
};

export const dictionaries: Record<Lang, Dictionary> = { en, id };
