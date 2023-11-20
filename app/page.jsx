import Image from "next/image";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutMeSection from "@/components/sections/AboutMeSection";
import Contact from "@/components/sections/Contact";
import ProjectsSection from "@/components/sections/ProjectsSection";

export const metadata = {
  title: 'Houssem DH Portfolio',
  description: 'Houssem DH Portfolio',
}

export default function Home() {


  return (
    <main>
      <HeroSection />
      <br /><br /><br /> <br />
      <br />
      <AboutMeSection/>
      <ServicesSection/>
      <ProjectsSection/>
      <Contact/>
      
      
     
    </main>
  );
}
