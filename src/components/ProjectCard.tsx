"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageSrc?: string;
  visualElement?: React.ReactNode;
  onClick?: () => void;
  delay?: number;
}

export default function ProjectCard({
  title,
  description,
  tags,
  imageSrc,
  visualElement,
  onClick,
  delay = 0,
}: ProjectCardProps) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      whileHover={{ y: -7 }}
      className="project-card group relative w-full overflow-hidden rounded-3xl border border-white/8 bg-[#0b0b14] text-left shadow-[0_14px_45px_rgba(0,0,0,0.2)]"
    >
      <div className="project-card-glow pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative flex h-52 items-center justify-center overflow-hidden border-b border-white/8 bg-[#080810] p-7">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(99,102,241,0.14),transparent_65%)]" />
        <div className="project-scan pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 opacity-0 group-hover:opacity-100" />
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            width={560}
            height={320}
            className="relative h-full w-full rounded-2xl object-contain transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="relative h-full w-full">{visualElement}</div>
        )}
      </div>

      <div className="p-5 sm:p-6">
        <div className="mb-3 flex items-start justify-between gap-4">
          <h3 className="text-lg font-bold tracking-tight text-white">{title}</h3>
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/8 text-zinc-500 transition-all duration-300 group-hover:rotate-45 group-hover:border-indigo-400/30 group-hover:bg-indigo-400/10 group-hover:text-indigo-200">
            <ArrowUpRight className="size-4" />
          </span>
        </div>
        <p className="mb-5 text-sm leading-6 text-zinc-400">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 4).map((tag) => (
            <span key={tag} className="rounded-lg border border-white/8 bg-white/[0.025] px-2.5 py-1 font-mono text-[10px] text-zinc-400">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  );
}
