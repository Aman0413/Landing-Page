import Image from "next/image";
import Navbar from "@/app/components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";
import Faq from "./components/FAQ/Faq";
import MainSection from "./components/MainSection/MainSection";

export default function Home() {
  return (
    <main className="p-4 flex items-center justify-center">
      <div className="w-[90%] p-2">
        <Navbar />
        <HeroSection />
        <MainSection />
        <Faq />
        <Footer />
      </div>
    </main>
  );
}
