"use client";

import { motion, Variants } from "motion/react";
import { FaJava } from "react-icons/fa";
import {
  SiArduino,
  SiAutodesk,
  SiCplusplus,
  SiCss,
  SiDjango,
  SiDocker,
  SiDotnet,
  SiExpress,
  SiFastapi,
  SiGin,
  SiGit,
  SiGithub,
  SiGitlab,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiJenkins,
  SiK6,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiNvidia,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiRos,
  SiRust,
  SiSpringboot,
  SiTailwindcss,
  SiTauri,
  SiTypescript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export function About() {
  const slideFromLeft: Variants = {
    hidden: { opacity: 0, x: -64 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.75, ease: "easeOut" },
    },
  };
  const slideFromRight: Variants = {
    hidden: { opacity: 0, x: 64 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.75, ease: "easeOut" },
    },
  };

  const staggerList: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.25,
      },
    },
  };

  const cardItem: Variants = {
    hidden: { opacity: 0, x: 36 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const languages: { icon: React.ElementType }[] = [
    { icon: SiJavascript },
    { icon: SiTypescript },
    { icon: SiPython },
    { icon: FaJava },
    { icon: SiCplusplus },
    { icon: SiRust },
  ];

  const developerTools: {
    icon: React.ElementType;
    label: string;
    color: string;
  }[] = [
    { icon: VscVscode, label: "VS Code", color: "#007ACC" },
    { icon: SiGit, label: "Git", color: "#F05032" },
    { icon: SiGithub, label: "GitHub", color: "#181717" },
    { icon: SiGitlab, label: "Gitlab", color: "#FC6C26" },
    { icon: SiPostman, label: "Postman", color: "#FF6C37" },
    { icon: SiK6, label: "k6", color: "#7D64FE" },
  ];

  const techStacks: {
    title: string;
    description: string;
    tools: { icon: React.ElementType; label: string; color: string }[];
  }[] = [
    {
      title: "Frontend",
      description: "Interactive interfaces, responsive layouts, and clean UI.",
      tools: [
        { icon: SiHtml5, label: "HTML", color: "#E34F26" },
        { icon: SiCss, label: "CSS", color: "#1572B6" },
        { icon: SiReact, label: "React", color: "#61DAFB" },
        { icon: SiNextdotjs, label: "Next.js", color: "#000000" },
        { icon: SiTailwindcss, label: "Tailwind", color: "#06B6D4" },
        { icon: SiTauri, label: "Tauri", color: "#FFC131" },
      ],
    },
    {
      title: "Backend",
      description: "Microservices, APIs, data models, and server logic.",
      tools: [
        { icon: SiNodedotjs, label: "Node.js", color: "#339933" },
        { icon: SiExpress, label: "Express", color: "#000000" },
        { icon: SiNestjs, label: "NestJS", color: "#E0234E" },
        { icon: SiDjango, label: "Django", color: "#092E20" },
        { icon: SiFastapi, label: "Fastapi", color: "#009688" },
        { icon: SiDotnet, label: ".NET", color: "#512BD4" },
        { icon: SiSpringboot, label: "Spring Boot", color: "#6DB33F" },
        { icon: SiGin, label: "Gin", color: "#00ADD8" },
      ],
    },
    {
      title: "Database",
      description: "Relational and document data for scalable applications.",
      tools: [
        { icon: SiPostgresql, label: "PostgreSQL", color: "#336791" },
        { icon: SiMysql, label: "MySQL", color: "#4479A1" },
        { icon: SiMongodb, label: "MongoDB", color: "#47A248" },
      ],
    },
    {
      title: "DevOps & Infrastructure",
      description: "CI/CD pipelines, containerization, and app operations.",
      tools: [
        { icon: SiDocker, label: "Docker", color: "#2496ED" },
        { icon: SiJenkins, label: "Jenkins", color: "#D24939" },
        { icon: SiLinux, label: "Linux", color: "#FCC624" },
      ],
    },
    {
      title: "Hardware & Robotics",
      description: "Low-level control, sensor integration, and 3D design.",
      tools: [
        { icon: SiRos, label: "ROS2", color: "#22314E" },
        { icon: SiNvidia, label: "Jetson Nano", color: "#76B900" },
        { icon: SiArduino, label: "Arduino", color: "#00979D" },
        { icon: SiAutodesk, label: "Fusion 360", color: "#0696D7" },
      ],
    },
  ];

  return (
    <section
      id="about"
      className="grid min-h-screen snap-start snap-always items-center px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-24"
    >
      <div className="grid w-full items-center gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.8fr)] lg:gap-16">
        <motion.div
          variants={slideFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="max-w-3xl"
        >
          <span className="text-primary text-sm font-black tracking-[0.25em] uppercase">
            About
          </span>
          <h2 className="mt-4 text-4xl leading-tight font-black sm:text-5xl">
            Building useful things where software meets hardware.
          </h2>
          <div className="text-foreground/50 my-4 flex flex-wrap gap-2">
            {languages.map(({ icon: LangIcon }, index) => (
              <LangIcon key={index} size={24} />
            ))}
          </div>
          <div className="text-muted mt-6 grid gap-5 text-base leading-7 sm:text-lg">
            <p>
              I love taking complex concepts and making them simple in good
              designed and working products. Since I work where full stack
              development meets physical devices, I care a great deal about
              simple, clean interfaces, powerful and stable APIs, accurate
              device functioning, and all the small details that make a system
              trustworthy and dependable.
            </p>
            <p>
              Whether I am building a modern web application, designing a
              scalable microservices architecture, or writing control logic for
              microcontrollers, I focus on creating solutions that are
              practical, readable, and easy to maintain over time.
            </p>
            <p>
              Currently, I am focusing on developing autonomous systems and
              medical robotics that integrate real-time data processing with
              physical control. I am always exploring new technologies and
              looking for challenging opportunities to bridge the gap between
              digital software and the physical world.
            </p>
            <div className="my-8">
              <p className="text-primary mb-4 text-sm font-black tracking-[0.25em] uppercase">
                Developer Tools
              </p>
              <div className="flex flex-wrap gap-3">
                {developerTools.map(({ icon: ToolIcon, label, color }) => (
                  <motion.div
                    variants={cardItem}
                    key={label}
                    className="group relative flex h-11 w-11 items-center justify-center rounded-sm border border-white/10 text-white shadow-sm shadow-black/10 transition-transform hover:-translate-y-0.5"
                    style={{ backgroundColor: color }}
                    title={label}
                    aria-label={label}
                  >
                    <ToolIcon className="text-xl" />
                    <span className="absolute top-12 w-fit rounded-sm bg-black px-2 py-1 text-xs text-nowrap opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={slideFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="w-full"
        >
          <span className="text-secondary text-sm font-black tracking-[0.25em] uppercase">
            Tech Stack
          </span>
          <motion.div variants={staggerList} className="mt-4 grid gap-4">
            {techStacks.map(({ title, description, tools }) => (
              <motion.div
                variants={cardItem}
                key={title}
                className="border-primary/20 bg-background/70 hover:border-secondary/60 group rounded-sm border p-5 transition-colors"
              >
                <div className="grid gap-3 sm:grid-cols-2 sm:items-start">
                  <div>
                    <h3 className="text-xl font-black">{title}</h3>
                    <p className="text-muted mt-2 text-sm leading-6">
                      {description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1 sm:justify-end">
                    {tools.map(({ icon: ToolIcon, label, color }) => (
                      <div
                        key={label}
                        className="flex items-center gap-2 rounded-sm border border-white/10 px-3 py-1.5 text-xs font-bold text-white shadow-sm shadow-black/10 transition-transform hover:-translate-y-0.5"
                        title={label}
                        style={{ backgroundColor: color }}
                      >
                        <ToolIcon className="text-base" />
                        <span>{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
