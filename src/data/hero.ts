import { Brain, ClipboardCheck, Eye, RefreshCcw } from "lucide-react";
import React from "react";

export const heroCapabilities: {
  title: string;
  tools: string;
  icon: React.ElementType;
}[] = [
  {
    title: "Problem-Solving",
    tools: "Analytical Thinking",
    icon: Brain,
  },
  {
    title: "Adaptability",
    tools: "Continuous Learning",
    icon: RefreshCcw,
  },
  {
    title: "Attention to Detail",
    tools: "Careful, precise execution",
    icon: Eye,
  },
  {
    title: "Ownership",
    tools: "Project Management",
    icon: ClipboardCheck,
  },
];

export const codeLines: {
  text: string;
  tokens: { text: string; color: string }[];
}[] = [
  {
    text: "const porto = new Developer();",
    tokens: [
      { text: "const", color: "text-[#569CD6]" },
      { text: " porto", color: "text-[#9CDCFE]" },
      { text: " = ", color: "text-[#D4D4D4]" },
      { text: "new", color: "text-[#569CD6]" },
      { text: " Developer", color: "text-[#4EC9B0]" },
      { text: "();", color: "text-[#D4D4D4]" },
    ],
  },
  {
    text: "porto.stack = ['Frontend', 'Backend', 'Database', 'IoT'];",
    tokens: [
      { text: "porto", color: "text-[#9CDCFE]" },
      { text: ".", color: "text-[#D4D4D4]" },
      { text: "stack", color: "text-[#9CDCFE]" },
      { text: " = [", color: "text-[#D4D4D4]" },
      { text: "'Frontend'", color: "text-[#CE9178]" },
      { text: ", ", color: "text-[#D4D4D4]" },
      { text: "'Backend'", color: "text-[#CE9178]" },
      { text: ", ", color: "text-[#D4D4D4]" },
      { text: "'Database'", color: "text-[#CE9178]" },
      { text: ", ", color: "text-[#D4D4D4]" },
      { text: "'IoT'", color: "text-[#CE9178]" },
      { text: "];", color: "text-[#D4D4D4]" },
    ],
  },
  {
    text: "porto.connect(hardware, software);",
    tokens: [
      { text: "porto", color: "text-[#9CDCFE]" },
      { text: ".", color: "text-[#D4D4D4]" },
      { text: "connect", color: "text-[#DCDCAA]" },
      { text: "(", color: "text-[#D4D4D4]" },
      { text: "hardware", color: "text-[#9CDCFE]" },
      { text: ", ", color: "text-[#D4D4D4]" },
      { text: "software", color: "text-[#9CDCFE]" },
      { text: ");", color: "text-[#D4D4D4]" },
    ],
  },
  {
    text: "await porto.ship('clean solutions');",
    tokens: [
      { text: "await", color: "text-[#C586C0]" },
      { text: " porto", color: "text-[#9CDCFE]" },
      { text: ".", color: "text-[#D4D4D4]" },
      { text: "ship", color: "text-[#DCDCAA]" },
      { text: "(", color: "text-[#D4D4D4]" },
      { text: "'clean solutions'", color: "text-[#CE9178]" },
      { text: ");", color: "text-[#D4D4D4]" },
    ],
  },
];
