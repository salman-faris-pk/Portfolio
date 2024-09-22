import About from "@/components/about";
import Intro from "../components/Intro"

export default function Home() {
  return (
    <div className="flex flex-col items-center pt-20 md:pt-28 px-4">
       <Intro/>
       <About />
    </div>
  );
}
