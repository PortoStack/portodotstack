"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { experiences } from "@/data/experiences";

export function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen snap-start snap-always px-5 py-12 sm:px-5 sm:py-16 lg:px-16 lg:py-24"
    >
      <div className="flex w-full flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl"
        >
          <span className="text-primary text-sm font-black tracking-[0.25em] uppercase">
            Experience
          </span>
          <h2 className="mt-4 text-4xl leading-tight font-black sm:text-5xl">
            Timeline of work, projects, and practical builds.
          </h2>
        </motion.div>

        <div className="relative mr-8 grid gap-8 before:absolute before:top-0 before:bottom-0 before:left-4 before:w-px before:bg-white/10 lg:before:left-1/2">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative grid gap-5 pl-12 lg:grid-cols-2 lg:gap-10 lg:pl-0"
            >
              <div className="border-primary/60 bg-background absolute top-2 left-2 flex h-5 w-5 items-center justify-center rounded-full border lg:left-1/2 lg:-translate-x-1/2">
                <span className="bg-secondary h-2 w-2 rounded-full" />
              </div>

              <div
                className={
                  index % 2 === 0
                    ? "lg:pr-10 lg:text-right"
                    : "lg:col-start-2 lg:pl-10"
                }
              >
                <p className="text-primary text-sm font-black tracking-[0.25em] uppercase">
                  {experience.duration}
                </p>
                <h3 className="mt-3 text-2xl leading-tight font-black sm:text-3xl">
                  {experience.jobTitle}
                </h3>
                <p className="text-secondary mt-2 text-sm font-black tracking-[0.18em] uppercase">
                  {experience.organization}
                </p>
              </div>

              <div
                className={`border-primary/20 bg-background/70 rounded-sm border p-5 shadow-2xl shadow-black/10 ${
                  index % 2 === 0 ? "lg:col-start-2" : "lg:row-start-1"
                }`}
              >
                <ul className="text-muted grid gap-3 text-sm leading-6 sm:text-base">
                  {experience.description.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="bg-primary mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <p className="text-sm font-black tracking-[0.25em] uppercase">
                    Tech Stack
                  </p>
                  <div className="text-primary mt-4 flex flex-wrap gap-3">
                    {experience.technologies.map(({ icon: Icon, label }) => (
                      <span
                        key={label}
                        className="hover:text-secondary group relative flex h-9 w-9 items-center justify-center rounded-sm border border-white/10 bg-white/5 transition-colors"
                        title={label}
                        aria-label={label}
                      >
                        <Icon size={22} />
                        <span className="text-foreground absolute -bottom-8 w-fit rounded-sm bg-black px-2 py-1 text-xs text-nowrap opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          {label}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {experience.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary hover:bg-secondary hover:text-secondary-foreground flex items-center gap-2 rounded-sm px-3 py-2 text-sm font-bold transition-colors"
                    >
                      {link.label}
                      <ExternalLink size={16} />
                    </Link>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
