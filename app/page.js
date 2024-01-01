import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-900">
      <Navbar />
      <div className="container mx-auto px-10 sm:px-28 py-4 mt-20">
        <HeroSection />
        <AboutSection />
        <Skills />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
