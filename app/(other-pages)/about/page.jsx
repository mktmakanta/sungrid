import metadata from "@/lib/metadata";
import AboutUs from "@/components/AboutUs";
import TeamSection from "@/components/TeamSection";
import SectionsHeader from "@/components/SectionsHeader";
import ContactPage from "@/components/Contact";
import Services from "@/components/Services";

export const metadata = metadata.about;

export default function About() {
  return (
    <main className="">
      <SectionsHeader text={"About Us"} image={"first"} />
      <AboutUs />
      <Services />
      <TeamSection />
      <ContactPage />
    </main>
  );
}
