"use client";

import { projectsData, type Project } from "@/data/projects";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import AnimatedSection from "./AnimatedSection";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-16 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection className="mb-9 grid gap-4 sm:mb-14 sm:gap-6 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <p className="section-kicker">featured-work</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-white sm:text-5xl">
              Production projects & <span className="text-gradient">case studies.</span>
            </h2>
          </div>
          <p className="text-sm leading-7 text-zinc-500">Detailed technical breakdowns of systems I&apos;ve architected and shipped to production.</p>
        </AnimatedSection>

        <div className="space-y-6">
          {projectsData.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.04}>
              <button type="button" onClick={() => setSelectedProject(project)} className="case-study group relative grid w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a13] text-left lg:grid-cols-[0.9fr_1.1fr]">
                <div className="case-visual relative min-h-52 overflow-hidden border-b border-white/8 bg-[#080810] p-4 sm:min-h-72 sm:p-6 lg:border-b-0 lg:border-r">
                  <div className="profile-grid absolute inset-0 opacity-60" />
                  <div className="absolute left-5 top-5 z-10 flex items-center gap-2 rounded-full border border-white/10 bg-black/45 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-400 backdrop-blur-sm">
                    <span className="status-pulse size-1.5 rounded-full bg-emerald-400" /> [ {project.year} ]
                  </div>
                  {project.imageUrl ? (
                    <Image src={project.imageUrl} alt={project.title} fill className="case-image object-contain p-7 pt-14 transition duration-700 group-hover:scale-[1.035] sm:p-10 sm:pt-16" sizes="(max-width: 1024px) 100vw, 45vw" />
                  ) : (
                    <div className="relative flex h-full min-h-60 items-center justify-center"><span className="text-gradient text-7xl font-black">0{index + 1}</span></div>
                  )}
                  <div className="case-scan pointer-events-none absolute inset-y-0 -left-1/3 w-1/3" />
                </div>
                <div className="relative flex flex-col p-5 sm:p-8">
                  <div className="mb-5 flex items-start justify-between gap-3 sm:mb-8 sm:gap-4">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-indigo-300">{"// project-"}0{index + 1} · {project.role}</p>
                      <h3 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl">{project.title}</h3>
                    </div>
                    <span className="case-arrow flex size-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-zinc-500"><ArrowUpRight className="size-4" /></span>
                  </div>
                  <p className="text-sm leading-7 text-zinc-400">{project.description}</p>
                  <div className="my-7 rounded-2xl border border-white/8 bg-white/[0.025] p-4">
                    <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600">[ technical-scope ]</p>
                    <p className="mt-2 text-xs font-semibold text-zinc-300">{project.scope}</p>
                  </div>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.slice(0, 5).map((tag) => <span key={tag} className="rounded-lg border border-white/8 px-2.5 py-1 font-mono text-[9px] text-zinc-500">{tag}</span>)}
                  </div>
                </div>
              </button>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md" onClick={() => setSelectedProject(null)}>
            <motion.article initial={{ opacity: 0, y: 24, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: 0.98 }} className="relative max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#0b0b14] p-6 sm:p-9" onClick={(event) => event.stopPropagation()}>
              <button type="button" onClick={() => setSelectedProject(null)} className="absolute right-5 top-5 rounded-xl border border-white/10 p-2 text-zinc-400 hover:text-white" aria-label="Close project details"><X className="size-4" /></button>
              <p className="section-kicker">project-details / {selectedProject.year}</p>
              <h3 className="mt-4 pr-12 text-3xl font-black tracking-tight text-white">{selectedProject.title}</h3>
              <p className="mt-6 text-sm leading-7 text-zinc-400">{selectedProject.longDescription}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/8 bg-white/[0.025] p-5">
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600">My Role</p>
                  <p className="mt-2 text-sm font-bold text-zinc-200">{selectedProject.role}</p>
                  <p className="mt-2 text-xs leading-6 text-zinc-500">{selectedProject.scope}</p>
                </div>
                <div className="rounded-2xl border border-indigo-400/15 bg-indigo-400/[0.04] p-5">
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-indigo-300">Business Outcome</p>
                  <p className="mt-2 text-xs leading-6 text-zinc-300">{selectedProject.outcome}</p>
                </div>
              </div>

              <div className="mt-8">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600 mb-4">Key Highlights</p>
                <div className="space-y-3">
                  {selectedProject.highlights.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-xs text-zinc-300">
                      <span className="flex size-5 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300 flex-shrink-0">
                        <Check className="size-3" />
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-white/8 bg-white/[0.025] p-5">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600 mb-4">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="rounded-lg border border-indigo-400/30 bg-indigo-400/10 px-3 py-1.5 font-mono text-[9px] text-indigo-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
