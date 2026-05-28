import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Project } from "@/components/Project";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Project />
      <Experience />
    </>
  );
}
