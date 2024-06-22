import Image from "next/image";
import Projects from "./components/projects";
import Skills from "./components/skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-24 p-24">
      <Projects />
      <Skills />
    </main>
  );
}
