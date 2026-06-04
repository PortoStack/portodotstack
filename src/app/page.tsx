import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
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
      <Contact />
    </>
  );
}
