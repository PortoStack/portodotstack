import { About } from "@/components/About";
import Experience from "@/components/Experience";
import { Hero } from "@/components/Hero";
import Project from "@/components/Project";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skill />
      <Project />
      <Experience />
    </>
  );
}
