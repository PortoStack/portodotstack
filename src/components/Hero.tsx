"use client";

import { Download } from "lucide-react";
import { motion } from "motion/react";

const codeLines = [
  { text: "const porto = new Developer();", color: "text-secondary" },
  {
    text: "porto.stack = ['Next.js', 'Golnag', 'IoT'];",
    color: "text-primary",
  },
  { text: "porto.connect(hardware, software);", color: "text-foreground" },
  { text: "await porto.ship('clean solutions');", color: "text-secondary" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen snap-start snap-always items-center px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-24"
    >
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="grid w-full items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.78fr)] lg:gap-10"
      >
        <div className="flex max-w-4xl flex-col gap-6">
          <h1 className="text-5xl leading-none font-black sm:text-7xl lg:text-8xl">
            Hi, I&apos;m Porto
          </h1>
          <h2 className="text-xl leading-tight font-black sm:text-3xl">
            {"<"}
            <span className="text-primary">Full Stack Developer</span> {" & "}
            <span className="text-secondary">Hardware Enthusiast</span>
            {"/>"}
          </h2>
          <p className="text-muted max-w-3xl text-base leading-7 sm:text-xl">
            I am a passionate developer who loves bridging the gap between
            hardware and software. From building scalable web applications to
            tinkering with microcontrollers, I enjoy turning complex problems
            into elegant solutions.
          </p>
          <button className="bg-primary hover:bg-primary/50 active:bg-primary/80 mt-2 flex w-fit items-center gap-3 rounded-lg px-4 py-2 transition-colors sm:mt-4">
            Download Resuma <Download />
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="border-primary/30 bg-background/70 shadow-primary/15 relative w-full max-w-full overflow-hidden rounded-lg border shadow-2xl backdrop-blur"
        >
          <div className="border-primary/20 flex h-10 items-center gap-2 border-b px-3 sm:h-11 sm:px-4">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b] sm:h-3 sm:w-3" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166] sm:h-3 sm:w-3" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#6ee7b7] sm:h-3 sm:w-3" />
          </div>

          <div className="min-h-56 overflow-x-auto p-4 font-mono text-xs sm:min-h-72 sm:p-5 sm:text-base">
            {codeLines.map((line, index) => (
              <motion.div
                key={line.text}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{
                  delay: 0.7 + index * 0.75,
                  duration: 4.8,
                  repeat: Infinity,
                  times: [0, 0.08, 0.84, 1],
                }}
                className="flex min-h-7 w-max min-w-full items-center gap-3 sm:min-h-8 sm:gap-4"
              >
                <span className="text-muted w-5 shrink-0 text-right">
                  {index + 1}
                </span>
                <motion.span
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  animate={{
                    clipPath: [
                      "inset(0 100% 0 0)",
                      "inset(0 0% 0 0)",
                      "inset(0 0% 0 0)",
                      "inset(0 100% 0 0)",
                    ],
                  }}
                  transition={{
                    delay: 0.7 + index * 0.75,
                    duration: 4.8,
                    ease: "linear",
                    repeat: Infinity,
                    times: [0, 0.28, 0.84, 1],
                  }}
                  className={`${line.color} whitespace-nowrap`}
                >
                  {line.text}
                </motion.span>
              </motion.div>
            ))}

            <motion.div
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
              className="bg-secondary mt-2 ml-8 h-4 w-1.5 sm:ml-9 sm:h-5 sm:w-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
