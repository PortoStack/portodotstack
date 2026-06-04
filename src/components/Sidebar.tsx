"use client";

import Image from "next/image";
import { cn } from "@/lib/cn";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  Briefcase,
  Cpu,
  Ellipsis,
  House,
  LucideIcon,
  Send,
  Share2,
  User,
} from "lucide-react";
import Link from "next/link";

export function Sidebar() {
  const items: { label: string; section: string; icon: LucideIcon }[] = [
    { label: "Home", section: "home", icon: House },
    { label: "About", section: "about", icon: User },
    { label: "Project", section: "project", icon: Cpu },
    { label: "Experience", section: "experience", icon: Briefcase },
    { label: "Contact", section: "contact", icon: Send },
  ];

  const footer = [
    { href: "https://github.com/PortoStack", icon: FaGithub, label: "GitHub" },
    {
      href: "https://www.linkedin.com/in/porto-yospunya-00a3b13a1/",
      icon: FaLinkedin,
      label: "LinkedIn",
    },
    {
      href: "https://www.instagram.com/p.porto_o?igsh=MzBiMmoxdjBnYW56/",
      icon: FaInstagram,
      label: "Instagram",
    },
  ];

  const onScrollToSection = (section: string) => {
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const [activeSection, setActiveSection] = useState("home");
  const [isSocialOpen, setIsSocialOpen] = useState(false);

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
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col justify-between py-10 pl-8 md:flex lg:w-96 lg:py-20 lg:pl-16">
        <motion.div
          className="flex flex-col gap-8 pr-8 lg:pr-16"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center gap-5">
            <Image
              src="/images/profile.png"
              alt="Watcharapong Yospunya"
              loading="eager"
              width={128}
              height={128}
              className="border-primary/25 h-28 w-28 rounded-full border object-cover lg:h-36 lg:w-36"
            />
            <div className="grid gap-1">
              <h1 className="text-lg leading-tight font-black lg:text-xl">
                Watcharapong Yospunya
              </h1>
              <p className="text-muted text-center text-sm">@portostack</p>
            </div>
          </div>

          <nav className="relative flex flex-col gap-1">
            {items.map((item, i) => {
              const isActive = activeSection === item.section;
              const Icon = item.icon;

              return (
                <motion.button
                  key={item.section}
                  initial={{ opacity: 0, x: -32 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.55,
                    ease: "easeOut",
                    delay: 0.12 + i * 0.08,
                  }}
                  onClick={() => onScrollToSection(item.section)}
                  className={cn(
                    "group relative flex w-full items-center gap-4 rounded-sm px-3 py-4 text-left text-sm font-black uppercase transition-colors",
                    isActive
                      ? "text-secondary"
                      : "text-muted hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="desktop-active-section"
                      className="bg-secondary absolute inset-y-2 -left-2 w-1 rounded-full"
                      transition={{ duration: 0.35, ease: "easeOut" }}
                    />
                  )}
                  <Icon size={20} />
                  {item.label}
                </motion.button>
              );
            })}
          </nav>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
          className="grid gap-5 pr-8 lg:pr-16"
        >
          <div className="flex gap-2">
            {footer.map((f) => (
              <Link
                key={f.label}
                href={f.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={f.label}
                title={f.label}
                className="hover:text-secondary group relative flex h-12 w-12 items-center justify-center rounded-sm border border-white/10 bg-white/5 transition-colors"
              >
                <f.icon size={28} />
              </Link>
            ))}
          </div>
          <p className="text-muted text-xs leading-5">
            &copy; {new Date().getFullYear()} PortoStack. All rights reserved.
          </p>
        </motion.div>
      </aside>

      <motion.nav
        initial={{ opacity: 0, y: 32, x: "-50%" }}
        animate={{ opacity: 1, y: 0, x: "-50%" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="border-primary/20 bg-background/90 fixed bottom-5 left-1/2 z-50 flex gap-1 overflow-visible rounded-lg border p-2 shadow-2xl shadow-black/20 backdrop-blur md:hidden"
      >
        {items.map((item, i) => {
          const isActive = activeSection === item.section;
          const Icon = item.icon;

          return (
            <motion.button
              key={item.section}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.06 }}
              onClick={() => onScrollToSection(item.section)}
              className={cn(
                "relative flex h-11 w-11 items-center justify-center rounded-sm transition-colors",
                isActive
                  ? "text-background"
                  : "text-muted hover:text-foreground"
              )}
              aria-label={item.label}
              title={item.label}
            >
              {isActive && (
                <motion.span
                  layoutId="mobile-active-section"
                  className="bg-secondary absolute inset-0 rounded-sm"
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              )}
              <Icon className="relative z-10" size={20} />
            </motion.button>
          );
        })}
        <motion.div className="relative">
          <button
            type="button"
            onClick={() => setIsSocialOpen((current) => !current)}
            className={cn(
              "relative flex h-11 w-11 items-center justify-center rounded-sm border border-white/10 bg-white/5 transition-colors",
              isSocialOpen
                ? "bg-secondary text-background"
                : "text-muted hover:text-foreground"
            )}
            aria-label="Open social links"
            aria-expanded={isSocialOpen}
            title="Social links"
          >
            <Ellipsis size={20} />
          </button>

          <AnimatePresence>
            {isSocialOpen && (
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.96 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="border-primary/20 bg-background/95 absolute -right-2 bottom-12 mb-3 grid gap-1 rounded-lg border p-2 shadow-2xl shadow-black/20 backdrop-blur"
              >
                {footer.map((f) => (
                  <Link
                    key={f.label}
                    href={f.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={f.label}
                    title={f.label}
                    onClick={() => setIsSocialOpen(false)}
                    className="hover:text-secondary text-muted flex h-11 w-11 items-center justify-center rounded-sm border border-white/10 bg-white/5 transition-colors"
                  >
                    <f.icon size={24} />
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.nav>
    </>
  );
}
