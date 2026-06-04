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
  SiLaravel,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiNvidia,
  SiPhp,
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

export const languages: { icon: React.ElementType }[] = [
  { icon: SiJavascript },
  { icon: SiTypescript },
  { icon: SiPython },
  { icon: SiGo },
  // { icon: SiPhp },
  // { icon: FaJava },
  { icon: SiCplusplus },
  { icon: SiRust },
];

export const developerTools: {
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

export const techStacks: {
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
      // { icon: SiLaravel, label: "Laravel", color: "#FF2D20" },
      { icon: SiDjango, label: "Django", color: "#092E20" },
      // { icon: SiFastapi, label: "Fastapi", color: "#009688" },
      // { icon: SiDotnet, label: ".NET", color: "#512BD4" },
      // { icon: SiSpringboot, label: "Spring Boot", color: "#6DB33F" },
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
      // { icon: SiJenkins, label: "Jenkins", color: "#D24939" },
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
