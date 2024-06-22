import Image from "next/image";
import Projects from "./components/projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Projects />
    </main>
  );
}
