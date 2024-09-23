import About from "@/components/about";
import Intro from "../components/Intro"
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";


export default function Home() {
  return (
    <div className="flex flex-col items-center pt-20 md:pt-28 px-4 mb-5">
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
