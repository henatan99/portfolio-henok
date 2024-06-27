import Projects from "./components/projects";
import Skills from "./components/skills";
import Background from "./components/background";
import GetInTouch from "./components/getInTouch";
import Hero from "./components/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-12 lg:gap-24 lg:p-24 bg-[#FAFAFB]">
      <Hero />
      <Projects />
      <Skills />
      <Background />
      <GetInTouch />
    </main>
  );
}
