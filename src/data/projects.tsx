import React from "react";
import {
  SiCss,
  SiDotnet,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";

interface ProjcetAttributes {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  sourceCodeUrl: string;
  demoUrl: string;
  technologies: {
    label: string;
    icon: React.ElementType;
  }[];
}

export const projects: ProjcetAttributes[] = [
  {
    id: "01",
    title: "Home Style",
    description:
      "This project is a simple e-commerce website built with React, Vite, and TailwindCSS. It is currently under development and not yet fully responsive.",
    imageUrl: "/images/projects/homestyle.png",
    sourceCodeUrl: "https://github.com/PortoStack/ecommerce-site",
    demoUrl: "https://portostack.github.io/ecommerce-site/",
    technologies: [
      { label: "React", icon: SiReact },
      { label: "Vite", icon: SiVite },
      { label: "TypeScript", icon: SiTypescript },
      { label: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    id: "02",
    title: "Logistics Tracking System",
    description:
      "A web-based logistics tracking system to manage parcels, routes, drivers, and delivery statuses. This system is built with:",
    imageUrl: "",
    sourceCodeUrl: "https://github.com/PortoStack/logistics-tracking-system",
    demoUrl: "",
    technologies: [
      { label: "HTML", icon: SiHtml5 },
      { label: "CSS", icon: SiCss },
      { label: "Javascript", icon: SiJavascript },
      { label: "ASP.NET", icon: SiDotnet },
      { label: "MSSQL", icon: TbSql },
    ],
  },
];
