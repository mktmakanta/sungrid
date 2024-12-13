import AboutUs from "@/components/AboutUs";
import TeamSection from "@/components/TeamSection";
import SectionsHeader from "@/components/SectionsHeader";
import ContactPage from "@/components/Contact";

export default function About() {
  return (
    <main className="">
      <SectionsHeader text={"About Us"} image={"first"} />
      <AboutUs />
      <TeamSection />
      <ContactPage />
    </main>
  );
}
