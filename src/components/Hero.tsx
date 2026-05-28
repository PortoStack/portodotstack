"use client";

import { Download } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section
      id="home"
      className="h-screen snap-start snap-always space-y-4 px-8 py-16 lg:px-16 lg:py-24"
    >
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-6"
      >
        <h1 className="text-8xl font-black">Hi, I&apos;m Porto</h1>
        <h2 className="text-4xl font-black">
          {"<"}
          <span className="text-primary">Full Stack Developer</span> {" & "}
          <span className="text-secondary">Hardware Enthusiast</span>
          {"/>"}
        </h2>
        <p className="text-muted text-xl">
          I am a passionate developer who loves bridging the gap between
          hardware and software. From building scalable web applications to
          tinkering with microcontrollers, I enjoy turning complex problems into
          elegant solutions.
        </p>
        <button className="bg-primary hover:bg-primary/50 active:bg-primary/80 mt-4 flex w-fit gap-4 rounded-lg px-4 py-2 transition-colors">
          Download Resuma <Download />
        </button>
      </motion.div>
      <div></div>
    </section>
  );
}
