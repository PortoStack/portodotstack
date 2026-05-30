"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { SiGithub } from "react-icons/si";
import { projects } from "@/data/projects";

export function Project() {
  return (
    <section
      id="project"
      className="flex min-h-screen snap-start snap-always px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-24"
    >
      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="border-primary/45 group grid flex-col overflow-hidden lg:grid-cols-5 lg:flex-row"
          >
            <div className="hidden flex-col py-6 lg:flex lg:py-8 lg:pr-8">
              <p className="text-sm font-black tracking-[0.25em] uppercase">
                {project.title}
              </p>
              <p className="mt-3 text-7xl leading-none font-black sm:text-8xl">
                {project.id}
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-background/80 shadow-primary/10 col-span-2 w-full overflow-hidden"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-white/5">
                {project.demoUrl ? (
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block h-full w-full"
                  >
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      loading="lazy"
                    />
                  </Link>
                ) : (
                  <div className="from-primary/25 via-background to-secondary/20 flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,var(--tw-gradient-stops))]">
                    <span className="text-muted text-sm font-black tracking-[0.25em] uppercase">
                      Preview coming soon
                    </span>
                  </div>
                )}
              </div>
            </motion.div>

            <div className="col-span-2 flex gap-8 py-6 lg:py-8 lg:pl-8">
              <div className="flex max-w-full min-w-36 flex-col lg:hidden lg:pr-8">
                <p className="text-sm font-black tracking-[0.25em] uppercase">
                  {project.title}
                </p>
                <p className="mt-3 text-7xl leading-none font-black sm:text-8xl">
                  {project.id}
                </p>
              </div>
              <div className="flex flex-col gap-7">
                <div>
                  <p className="text-sm font-black tracking-[0.25em] uppercase">
                    Technologies
                  </p>
                  <div className="text-primary mt-4 flex flex-wrap gap-4">
                    {project.technologies.map(({ icon: Icon, label }) => (
                      <span
                        key={label}
                        className="hover:text-secondary flex h-8 w-8 items-center justify-center transition-colors"
                        title={label}
                        aria-label={label}
                      >
                        <Icon size={26} />
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-muted text-sm sm:text-base">
                  {project.description}
                </p>
                <div className="flex">
                  <Link
                    href={project.sourceCodeUrl}
                    target="__blank"
                    className="flex items-center gap-2 rounded-sm bg-black px-3 py-2"
                  >
                    <SiGithub />
                    Source code
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
