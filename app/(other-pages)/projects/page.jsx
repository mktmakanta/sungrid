import Contact from "@/components/Contact";
import GetQuote from "@/components/GetQuote";
import Projects from "@/components/Projects";
import SectionsHeader from "@/components/SectionsHeader";

export default function ProjectsPAge() {
  return (
    <main>
      <SectionsHeader text={"Projects"} image={"third"} />
      <Projects />
      <Contact />
    </main>
  );
}
