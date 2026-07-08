import type { Lang } from "./i18n";

export interface Dictionary {
  brand: { studio: string };
  header: { branchLabel: string; langLabel: string };
  hero: {
    kicker: string;
    titleTop: string;
    titleAccent: string;
    subcopy: string;
    ctaBook: string;
    ctaBranch: string;
  };
  marquee: string[];
  menu: {
    title: string;
    subtitle: string;
    tabMen: string;
    tabWomen: string;
    footnote: string;
  };
  branches: {
    title: string;
    subtitle: string;
    directions: string;
    book: string;
    activeTag: string;
    addressLabel: string;
  };
  social: {
    title: string;
    subtitle: string;
    button: string;
    caption: string;
    tiles: string[];
  };
  footer: { tagline: string; book: string; rights: string };
  whatsapp: { fabLabel: string; message: string };
}

const en: Dictionary = {
  brand: { studio: "Hair Studio · Batam" },
  header: { branchLabel: "Branch", langLabel: "Language" },
  hero: {
    kicker: "Batam's Premier Grooming House",
    titleTop: "Look Your",
    titleAccent: "Best.",
    subcopy:
      "Precision cuts, hot-towel shaves, and luxury studio styling — an international grooming experience across two premier Batam locations.",
    ctaBook: "Book Appointment",
    ctaBranch: "Find Nearest Branch",
  },
  marquee: [
    "Precision Cuts",
    "Hot-Towel Shaves",
    "Signature Pomade",
    "Luxury Studio Styling",
    "Man Hair Spa",
    "Couture Colour",
    "Look Your Best",
  ],
  menu: {
    title: "The Menu",
    subtitle: "Two studios. One standard of excellence.",
    tabMen: "Men's Grooming",
    tabWomen: "Women's Studio",
    footnote:
      "Prices may vary based on hair length and thickness. A complimentary consultation with our master stylists is highly recommended before technical treatments.",
  },
  branches: {
    title: "Two Premier Locations",
    subtitle: "Find the studio nearest you and book in seconds.",
    directions: "Directions",
    book: "Book via WhatsApp",
    activeTag: "Selected",
    addressLabel: "Address",
  },
  social: {
    title: "Inside the Studio",
    subtitle: "Fresh work, daily. Follow the craft on Instagram.",
    button: "@elit3barber.official",
    caption: "Tap any tile to open our live feed on Instagram",
    tiles: [
      "Signature Fades",
      "Editorial Styling",
      "The Barber Pole",
      "Couture Colour",
      "Hot-Towel Shave",
      "Beard Sculpting",
    ],
  },
  footer: {
    tagline: "Look Your Best.",
    book: "Book via WhatsApp",
    rights: "All rights reserved.",
  },
  whatsapp: {
    fabLabel: "Book via WhatsApp",
    message:
      "Hello Elite Barber Batam, I'd like to book an appointment. My preferred branch is ",
  },
};

const id: Dictionary = {
  brand: { studio: "Hair Studio · Batam" },
  header: { branchLabel: "Cabang", langLabel: "Bahasa" },
  hero: {
    kicker: "Rumah Grooming Premier di Batam",
    titleTop: "Look Your",
    titleAccent: "Best.",
    subcopy:
      "Potongan presisi, cukur handuk panas, dan penataan studio mewah — pengalaman grooming berkelas internasional di dua lokasi utama di Batam.",
    ctaBook: "Buat Janji",
    ctaBranch: "Cari Cabang Terdekat",
  },
  marquee: [
    "Potongan Presisi",
    "Cukur Handuk Panas",
    "Pomade Signature",
    "Penataan Studio Mewah",
    "Hair Spa Pria",
    "Warna Couture",
    "Look Your Best",
  ],
  menu: {
    title: "Daftar Layanan",
    subtitle: "Dua studio. Satu standar keunggulan.",
    tabMen: "Grooming Pria",
    tabWomen: "Studio Wanita",
    footnote:
      "Harga dapat berubah sesuai panjang & ketebalan rambut. Konsultasi sebelum treatment sangat disarankan.",
  },
  branches: {
    title: "Dua Lokasi Utama",
    subtitle: "Temukan studio terdekat dan buat janji dalam hitungan detik.",
    directions: "Petunjuk Arah",
    book: "Booking via WhatsApp",
    activeTag: "Dipilih",
    addressLabel: "Alamat",
  },
  social: {
    title: "Di Dalam Studio",
    subtitle: "Karya terbaru setiap hari. Ikuti prosesnya di Instagram.",
    button: "@elit3barber.official",
    caption: "Ketuk tile mana pun untuk membuka feed langsung kami di Instagram",
    tiles: [
      "Fade Signature",
      "Penataan Editorial",
      "Tiang Barber",
      "Warna Couture",
      "Cukur Handuk Panas",
      "Bentuk Janggut",
    ],
  },
  footer: {
    tagline: "Look Your Best.",
    book: "Booking via WhatsApp",
    rights: "Hak cipta dilindungi.",
  },
  whatsapp: {
    fabLabel: "Booking via WhatsApp",
    message:
      "Halo Elite Barber Batam, saya ingin membuat janji. Cabang pilihan saya adalah ",
  },
};

export const dictionaries: Record<Lang, Dictionary> = { en, id };
