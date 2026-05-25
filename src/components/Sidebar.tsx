"use client";

import Image from "next/image";
import { cn } from "@/lib/cn";
import { motion, Variants } from "motion/react";
import { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import * as Icons from "lucide-react";
import Link from "next/link";

export function Sidebar() {
  const items = [
    { label: "Home", section: "home", icon: "House" },
    { label: "About", section: "about", icon: "User" },
    { label: "Tech Stack & Skill", section: "skill", icon: "FolderGit2" },
    { label: "Project", section: "project", icon: "Cpu" },
    { label: "Experience", section: "experience", icon: "Briefcase" },
  ];

  const footer = [
    { href: "https://github.com/PortoStack", icon: FaGithub },
    // { href: "https://github.com/PortoStack", icon: FaInstagram },
    {
      href: "https://www.linkedin.com/in/porto-yospunya-00a3b13a1/",
      icon: FaLinkedin,
    },
  ];

  const onScrollToSection = (section: string) => {
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <aside className="sticky top-0 hidden w-64 flex-col gap-8 py-12 pl-12 md:flex lg:w-108 lg:py-24 lg:pl-16">
        <motion.div
          className="mx-auto flex flex-col gap-6 pr-16"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={"/images/profile.jpg"}
            alt="PT"
            loading="eager"
            width={128}
            height={128}
            className="mx-auto h-40 w-40 rounded-full object-cover"
          />
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold">Watcharapong Yospunya</h1>
            <p className="text-muted">@portostack</p>
          </div>
        </motion.div>
        <nav className="relative flex flex-1 flex-col">
          {items.map((item, i) => {
            const isActive = activeSection === item.section;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.25 }}
              >
                <button
                  onClick={() => onScrollToSection(item.section)}
                  className={cn(
                    "group flex w-full items-center gap-4 py-6 text-left text-xs font-black uppercase lg:text-base",
                    isActive ? "text-secondary" : "text-muted"
                  )}
                >
                  <span className="text-xl">{"</>"}</span>
                  <div
                    className={cn(
                      "h-0.75 w-0 rounded-lg transition-all group-hover:w-0 lg:group-hover:w-32",
                      isActive ? "bg-secondary w-0 lg:w-32" : "bg-muted w-0"
                    )}
                  />
                  {item.label}
                </button>
              </motion.div>
            );
          })}
        </nav>
        <div className="flex gap-8">
          {footer.map((f, i) => {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.5 }}
              >
                <Link href={f.href} target="_blank" rel="noopener noreferrer">
                  <f.icon
                    size={36}
                    className="hover:text-primary transition-colors"
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-muted"
        >
          &copy; {new Date().getFullYear()} PortoStack. All rights reserved.
        </motion.div>
      </aside>
      <div className="bg-accent absolute bottom-8 left-1/2 z-9999 flex -translate-x-1/2 gap-4 overflow-hidden rounded-lg p-2 md:hidden">
        {items.map((item, i) => {
          const isActive = activeSection === item.section;
          const Icon = Icons[
            item.icon as keyof typeof Icons
          ] as Icons.LucideIcon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.25 }}
            >
              <button
                onClick={() => onScrollToSection(item.section)}
                className={cn(
                  "group flex w-full items-center gap-4 rounded-sm p-2 text-left text-xs font-black uppercase lg:text-base",
                  isActive ? "text-secondary" : "text-muted"
                )}
              >
                <Icon />
              </button>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}
