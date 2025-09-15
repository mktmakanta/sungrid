import metadata from "@/lib/metadata";
import Services from "@/components/Services";
import SectionsHeader from "@/components/SectionsHeader";
import Projects from "@/components/Projects";
import ContactPage from "@/components/Contact";
import AboutUs from "@/components/AboutUs";

export const metadata = metadata.services;

export default function Service() {
  return (
    <main>
      <SectionsHeader text={"Our Services"} image={"second"} />
      <Services />
      <AboutUs />
      <Projects />
      <ContactPage />
    </main>
  );
}
