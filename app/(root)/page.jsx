import dynamic from "next/dynamic";
import HeroSection from "@/components/Hero";
import Stats from "@/components/Stats";
import BackToHome from "@/components/BackToHome";

const AboutUs = dynamic(() => import("@/components/AboutUs"));
const Services = dynamic(() => import("@/components/Services"));
const ChooseUs = dynamic(() => import("@/components/ChooseUs"));
const Projects = dynamic(() => import("@/components/Projects"));
const GetQuote = dynamic(() => import("@/components/GetQuote"));
const Contact = dynamic(() => import("@/components/Contact"));
const TeamSection = dynamic(() => import("@/components/TeamSection"));
const Testimonial = dynamic(() => import("@/components/Testimonials"));

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <Stats />
      <AboutUs />
      <Services />
      <ChooseUs />
      <Projects />
      <GetQuote />
      <Contact />
      <TeamSection />
      <Testimonial />
      <BackToHome />
    </main>
  );
}
