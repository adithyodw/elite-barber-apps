import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Menu } from "@/components/Menu";
import { BranchSelector } from "@/components/BranchSelector";
import { SocialHub } from "@/components/SocialHub";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Menu />
        <BranchSelector />
        <SocialHub />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
