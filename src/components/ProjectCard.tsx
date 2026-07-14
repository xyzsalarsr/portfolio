"use client";

import Image from "next/image";
import { motion } from "motion/react";
import TechBadge from "./TechBadge";
import { ArrowUpRight } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  href: string;
}

// TODO: swap in your real projects. Landix and MenuVa are pre-filled since they're your current work.
export const projects: Project[] = [
  {
    title: "Landix",
    description:
      "A premium UI component library built on shadcn/ui, Next.js, and Motion. Freemium model with a one-time lifetime license, sold via Gumroad and validated through a self-hosted registry.",
    image: "/projects/landix.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Motion", "Laravel"],
    href: "https://landix.design",
  },
  {
    title: "MenuVa",
    description: "A Laravel-based product covering the full backend, from data modeling to API design.",
    image: "/projects/menuva.png",
    tech: ["Laravel", "PHP", "MySQL"],
    href: "#",
  },
  // Add more projects here, same shape as above.
];

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.a
      href={project.href}
      target={project.href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors hover:border-white/20"
    >
      <div className="relative aspect-video w-full overflow-hidden border-b border-white/10 bg-white/5">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between gap-2">
          <h4 className="font-semibold">{project.title}</h4>
          <ArrowUpRight className="h-4 w-4 shrink-0 text-secondary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
        </div>

        <p className="text-sm text-secondary">{project.description}</p>

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.tech.map((t) => (
            <TechBadge key={t} label={t} />
          ))}
        </div>
      </div>
    </motion.a>
  );
}
