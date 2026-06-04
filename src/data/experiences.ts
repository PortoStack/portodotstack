import React from "react";
import {
  SiArduino,
  SiDocker,
  SiFastapi,
  SiFirebase,
  SiFlutter,
  SiMqtt,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiRaspberrypi,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export interface ExperienceAttributes {
  id: string;
  jobTitle: string;
  organization: string;
  duration: string;
  description: string[];
  technologies: {
    label: string;
    icon: React.ElementType;
  }[];
  links: {
    label: string;
    href: string;
  }[];
}

export const experiences: ExperienceAttributes[] = [
  {
    id: "01",
    jobTitle: "Internship",
    organization: "J Ventures",
    duration: "April 2026 - June 2026",
    description: [
      "Designed and developed a comprehensive leave management system from the ground up.",
      "Created an intuitive user interface for seamless employee leave requests and approvals.",
      "Architected the backend services and designed the relational database schema to securely handle user workflows.",
    ],
    technologies: [
      { label: "Next.js", icon: SiNextdotjs },
      { label: "TypeScript", icon: SiTypescript },
      { label: "Tailwind CSS", icon: SiTailwindcss },
      { label: "Nest.js", icon: SiNestjs },
      { label: "PostgreSQL", icon: SiPostgresql },
    ],
    links: [],
  },
  {
    id: "02",
    jobTitle: "TESA 2025",
    organization: "NU-XEUS",
    duration: "Nov 2025",
    description: [
      "Developed a real-time web application to track and visualize the position of target drones on a map interface.",
      "Designed and implemented APIs utilizing WebSockets for low-latency, real-time frontend updates.",
      "Integrated MQTT protocols to establish reliable communication between IoT hardware and the main server.",
    ],
    technologies: [
      { label: "React", icon: SiReact },
      { label: "TypeScript", icon: SiTypescript },
      { label: "Tailwind CSS", icon: SiTailwindcss },
      { label: "Nest.js", icon: SiNestjs },
      { label: "PostgreSQL", icon: SiPostgresql },
      { label: "MQTT", icon: SiMqtt },
      { label: "Raspberry Pi", icon: SiRaspberrypi },
    ],
    links: [],
  },
  {
    id: "03",
    jobTitle: "Field Experience 2",
    organization: "Biophysics (IDMCAP)",
    duration: "Jun 2025",
    description: [
      "Built a web application for visualizing pandemic and disease outbreak data across different provinces.",
      "Integrated Machine Learning models to predict disease spread trends and display analytical reports.",
      "Developed an efficient backend API to process predictive data and serve it to the frontend.",
    ],
    technologies: [
      { label: "React", icon: SiReact },
      { label: "TypeScript", icon: SiTypescript },
      { label: "Tailwind CSS", icon: SiTailwindcss },
      { label: "Fastapi", icon: SiFastapi },
      { label: "MySQL", icon: SiMysql },
      { label: "Docker", icon: SiDocker },
    ],
    links: [],
  },
  {
    id: "04",
    jobTitle: "Field Experience 1",
    organization: "Science Program in Measurement Technology and Smart Systems",
    duration: "Jun 2024",
    description: [
      "Developed a cross-platform mobile application to monitor and control Smart Home devices remotely.",
      "Programmed and integrated Arduino microcontrollers to interface with physical sensors and home appliances.",
      "Bridged the gap between mobile software interfaces and low-level hardware control.",
    ],
    technologies: [
      { label: "Flutter", icon: SiFlutter },
      { label: "Arduino", icon: SiArduino },
      { label: "Firebase", icon: SiFirebase },
    ],
    links: [],
  },
];
