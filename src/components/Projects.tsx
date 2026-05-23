"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Layers, GitFork, CheckCircle2, Cpu, Server } from "lucide-react";
import { SPRING_SNAPPY } from "@/lib/spring";
import ProjectCard from "./ProjectCard";
import AnimatedSection from "./AnimatedSection";

// --- VISUAL COMPONENTS FOR THE PROJECTS ---

// 1. Shop App Visual (Flutter)
function ShopAppVisual() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-indigo-950/80 via-slate-900 to-zinc-950 flex items-center justify-center p-3 relative overflow-hidden select-none">
      {/* Background glowing circle */}
      <div className="absolute w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl -top-10 -left-10" />
      <div className="absolute w-48 h-48 bg-purple-500/10 rounded-full blur-2xl -bottom-10 -right-10" />

      {/* Mini App UI */}
      <div className="w-[180px] h-[130px] rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md p-2 flex flex-col justify-between shadow-2xl relative overflow-hidden">
        {/* Glowing glass accent */}
        <div className="absolute -top-12 -left-12 w-24 h-24 bg-indigo-400/20 blur-xl rounded-full" />
        
        {/* App Header */}
        <div className="flex justify-between items-center text-[8px] text-zinc-400 border-b border-white/5 pb-1">
          <span className="font-semibold text-[9px] text-white">Flutter Shop</span>
          <ShoppingBag className="w-2.5 h-2.5 text-indigo-400" />
        </div>

        {/* Product listing row */}
        <div className="flex gap-2 items-center my-1.5">
          {/* Mock product image using animated gradient */}
          <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-indigo-50 to-pink-500 p-0.5 shadow-md flex-shrink-0 relative overflow-hidden">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="w-full h-full bg-black/40 rounded-[6px] backdrop-blur-[1px] flex items-center justify-center"
            >
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500" />
            </motion.div>
          </div>
          {/* Mock product details */}
          <div className="flex-1 space-y-1">
            <div className="h-2 w-16 bg-white/20 rounded" />
            <div className="h-1.5 w-10 bg-white/10 rounded" />
            <div className="flex justify-between items-center">
              <span className="text-[9px] font-bold font-mono text-emerald-400">$120.00</span>
              <span className="text-[7px] text-yellow-400">★ 4.8</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="w-full py-1 rounded bg-gradient-to-r from-indigo-500 to-purple-500 text-center text-[7px] font-bold text-white shadow-md cursor-pointer hover:brightness-110 transition-all">
          Buy Now
        </div>
      </div>
    </div>
  );
}

// 2. BLoC/Provider Architecture Visual (Flutter & React Native)
function BlocArchitectureVisual() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-purple-950/80 via-slate-900 to-zinc-950 flex items-center justify-center p-3 relative overflow-hidden select-none">
      {/* Background glow */}
      <div className="absolute w-40 h-40 bg-purple-500/10 rounded-full blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      
      {/* Flow Diagram */}
      <div className="w-[200px] h-[130px] flex items-center justify-between relative px-2">
        {/* Laser particle stream using SVG paths */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 200 130">
          {/* Path from UI to BLoC */}
          <path d="M 40,65 Q 100,20 160,65" fill="none" stroke="rgba(168, 85, 247, 0.2)" strokeWidth="2" />
          {/* Path from BLoC to UI */}
          <path d="M 160,65 Q 100,110 40,65" fill="none" stroke="rgba(6, 182, 212, 0.2)" strokeWidth="2" />
          
          {/* Flowing particle UI -> BLoC */}
          <motion.circle r="3" fill="#c084fc"
            animate={{
              x: [35, 100, 165],
              y: [65, 30, 65],
              opacity: [0, 1, 0]
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Flowing particle BLoC -> UI */}
          <motion.circle r="3" fill="#22d3ee"
            animate={{
              x: [165, 100, 35],
              y: [65, 100, 65],
              opacity: [0, 1, 0]
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.25 }}
          />
        </svg>

        {/* Node 1: UI */}
        <div className="w-12 h-12 rounded-full bg-white/[0.02] border border-cyan-500/30 flex flex-col items-center justify-center shadow-lg backdrop-blur-md relative z-10">
          <div className="absolute inset-0 rounded-full bg-cyan-500/5 animate-ping opacity-75" />
          <Layers className="w-4 h-4 text-cyan-400" />
          <span className="text-[7px] text-cyan-300 font-bold mt-0.5">UI VIEW</span>
        </div>

        {/* Arrow / BLoC State */}
        <div className="flex flex-col items-center">
          <div className="text-[6px] font-mono text-purple-400 bg-purple-500/10 px-1 rounded border border-purple-500/20 mb-0.5 uppercase tracking-wider">
            Events
          </div>
          <div className="text-[6px] font-mono text-cyan-400 bg-cyan-500/10 px-1 rounded border border-cyan-500/20 mt-0.5 uppercase tracking-wider">
            State
          </div>
        </div>

        {/* Node 2: BLoC logic controller */}
        <div className="w-12 h-12 rounded-full bg-white/[0.02] border border-purple-500/30 flex flex-col items-center justify-center shadow-lg backdrop-blur-md relative z-10">
          <div className="absolute inset-0 rounded-full bg-purple-500/5 blur-[2px]" />
          <Cpu className="w-4 h-4 text-purple-400" />
          <span className="text-[7px] text-purple-300 font-bold mt-0.5">BLOC</span>
        </div>
      </div>
    </div>
  );
}

// 3. Mendix Web Application Visual (Enterprise API Integration)
function MendixIntegrationVisual() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-amber-950/20 via-slate-900 to-zinc-950 flex items-center justify-center p-3 relative overflow-hidden select-none">
      {/* Background Glow */}
      <div className="absolute w-40 h-40 bg-amber-500/5 rounded-full blur-3xl -top-10 -right-10" />

      {/* Integration Schema Flow */}
      <div className="w-[190px] h-[130px] rounded-xl bg-white/[0.02] border border-white/5 p-2.5 flex flex-col justify-between shadow-2xl backdrop-blur-md relative">
        <div className="flex justify-between items-center text-[7px] text-zinc-500 font-mono border-b border-white/5 pb-1">
          <span>Enterprise Integration</span>
          <span className="text-amber-500 font-bold">MENDIX CORE</span>
        </div>

        {/* Flow nodes */}
        <div className="flex justify-between items-center my-auto relative">
          {/* Visual flow path */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500/20 via-yellow-500/30 to-emerald-500/20 -translate-y-1/2 z-0" />

          {/* Node: DB */}
          <div className="w-10 h-10 rounded-lg bg-zinc-950/60 border border-amber-500/30 flex flex-col items-center justify-center relative z-10 shadow-md">
            <Server className="w-3.5 h-3.5 text-amber-500" />
            <span className="text-[6px] text-amber-300/80 font-bold mt-0.5">Data DB</span>
          </div>

          {/* Connectors */}
          <GitFork className="w-3.5 h-3.5 text-zinc-500 rotate-90 z-10 bg-slate-900 rounded p-0.5 border border-white/10" />

          {/* Node: Microflow REST */}
          <div className="w-12 h-10 rounded-lg bg-zinc-950/60 border border-emerald-500/30 flex flex-col items-center justify-center relative z-10 shadow-md">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-1 right-1 w-1.5 h-1.5 bg-emerald-400 rounded-full"
            />
            <span className="text-[7px] text-emerald-400 font-bold">Microflow</span>
            <span className="text-[5px] text-zinc-400 font-mono mt-0.5">REST API</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-[7px] text-zinc-400 font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>HTTP 200 - REST Client Connected</span>
        </div>
      </div>
    </div>
  );
}

// 4. Manual QA Testing Suite Visual (QA Metrics Dashboard)
function QATestingSuiteVisual() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-emerald-950/40 via-slate-900 to-zinc-950 flex items-center justify-center p-3 relative overflow-hidden select-none">
      {/* Background glow */}
      <div className="absolute w-44 h-44 bg-emerald-500/5 rounded-full blur-2xl -bottom-10 -left-10" />

      {/* QA Panel */}
      <div className="w-[190px] h-[130px] rounded-xl bg-white/[0.02] border border-white/5 p-2.5 flex flex-col justify-between shadow-2xl backdrop-blur-md relative overflow-hidden">
        <div className="flex justify-between items-center text-[7px] text-zinc-500 font-mono border-b border-white/5 pb-1">
          <span>Test Suite Executed</span>
          <span className="text-emerald-400 font-bold">QA PASS</span>
        </div>

        {/* Main Stats display */}
        <div className="flex justify-between items-center my-2">
          {/* Circular Progress */}
          <div className="relative w-12 h-12 flex items-center justify-center">
            {/* SVG circle */}
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="24" cy="24" r="20" fill="transparent" stroke="rgba(255,255,255,0.05)" strokeWidth="3" />
              <motion.circle cx="24" cy="24" r="20" fill="transparent" stroke="#10b981" strokeWidth="3"
                strokeDasharray="125"
                initial={{ strokeDashoffset: 125 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
            </svg>
            <div className="absolute text-[8px] font-bold font-mono text-emerald-400">100%</div>
          </div>

          {/* Text Indicators */}
          <div className="flex-1 pl-3 space-y-1 font-mono text-[6px]">
            <div className="flex items-center gap-1 text-zinc-300">
              <CheckCircle2 className="w-2 h-2 text-emerald-400" />
              <span>Functional: 64/64</span>
            </div>
            <div className="flex items-center gap-1 text-zinc-300">
              <CheckCircle2 className="w-2 h-2 text-emerald-400" />
              <span>Regression: Passed</span>
            </div>
            <div className="flex items-center gap-1 text-zinc-300">
              <CheckCircle2 className="w-2 h-2 text-emerald-400" />
              <span>Usability: Validated</span>
            </div>
          </div>
        </div>

        {/* Small logs marquee */}
        <div className="bg-black/40 rounded p-1 font-mono text-[5px] text-emerald-400/60 leading-none overflow-hidden h-5 flex flex-col justify-center">
          <div>$ npm run test:regression</div>
          <div className="text-white/60">✔ All 120 regression checkpoints passed.</div>
        </div>
      </div>
    </div>
  );
}

// --- END OF VISUAL COMPONENTS ---

import { projectsData, Project } from "@/data/projects";

// 5. Generic App Visual (Fallback for new user projects)
function GenericAppVisual({ title, tags }: { title: string; tags: string[] }) {
  return (
    <div className="w-full h-full bg-gradient-to-br from-indigo-950/40 via-slate-900 to-zinc-950 flex items-center justify-center p-3 relative overflow-hidden select-none">
      <div className="absolute w-36 h-36 bg-indigo-500/5 rounded-full blur-2xl -top-10 -right-10" />
      <div className="w-[180px] h-[130px] rounded-xl bg-white/[0.02] border border-white/5 p-2.5 flex flex-col justify-between shadow-2xl backdrop-blur-md relative">
        <div className="flex justify-between items-center text-[7px] text-zinc-500 font-mono border-b border-white/5 pb-1">
          <span>Active Application</span>
          <span className="text-indigo-400 font-bold uppercase">Dynamic</span>
        </div>
        <div className="my-auto space-y-1.5 text-left">
          <h5 className="text-[9px] font-bold text-zinc-200 line-clamp-1">{title}</h5>
          <div className="flex gap-1 flex-wrap">
            {tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-[6px] px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-300 font-semibold border border-indigo-500/10">{tag}</span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-[6px] text-zinc-400 font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Production Ready</span>
        </div>
      </div>
    </div>
  );
}

// --- END OF VISUAL COMPONENTS ---

function getProjectVisual(visualType?: string, title?: string, tags?: string[]) {
  switch (visualType) {
    case "shop":
      return <ShopAppVisual />;
    case "bloc":
      return <BlocArchitectureVisual />;
    case "mendix":
      return <MendixIntegrationVisual />;
    case "qa":
      return <QATestingSuiteVisual />;
    default:
      return <GenericAppVisual title={title || ""} tags={tags || []} />;
  }
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 sm:py-32 relative overflow-hidden bg-background dark:bg-[#07060c]">
      
      {/* Background glowing blobs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[110px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-[380px] h-[380px] bg-purple-500/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">
            My Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Mobile apps and web applications I&apos;ve built — from cross-platform Flutter apps to enterprise web solutions and quality-assured releases.
          </p>
        </AnimatedSection>
 
        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {projectsData.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.08}>
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                imageSrc={project.imageUrl}
                visualElement={getProjectVisual(project.visualType, project.title, project.tags)}
                onClick={() => setSelectedProject(project)}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Project detail modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={SPRING_SNAPPY}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-zinc-900/95 dark:bg-[#0b0914]/95 border border-zinc-200/10 dark:border-zinc-800/80 backdrop-blur-2xl rounded-3xl shadow-[0_30px_70px_rgba(0,0,0,0.5)] max-w-lg w-full max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-all z-10 border border-white/5"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="p-6">
                {/* Visual Preview in Modal too! */}
                <div className="h-44 w-full rounded-2xl overflow-hidden mb-6 bg-zinc-950/40 border border-zinc-200/5 dark:border-zinc-800/60 flex items-center justify-center select-none relative group">
                  {selectedProject.imageUrl ? (
                    <>
                      <img 
                        src={selectedProject.imageUrl} 
                        alt={selectedProject.title} 
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" 
                      />
                      {selectedProject.visualType && (
                        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          {getProjectVisual(selectedProject.visualType, selectedProject.title, selectedProject.tags)}
                        </div>
                      )}
                    </>
                  ) : (
                    getProjectVisual(selectedProject.visualType, selectedProject.title, selectedProject.tags)
                  )}
                </div>

                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">{selectedProject.title}</h3>
                  <span className="text-[10px] px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-400 font-extrabold border border-indigo-500/10">
                    {selectedProject.year}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed text-left">
                  {selectedProject.longDescription}
                </p>
                <div className="flex flex-wrap gap-2 mb-6 text-left">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] sm:text-xs px-2.5 py-1 rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 text-indigo-500 dark:text-indigo-300 border border-indigo-500/10 dark:border-indigo-500/15 font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {selectedProject.sourceUrl ? (
                    <a
                      href={selectedProject.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-sm font-bold text-center hover:brightness-110 shadow-lg shadow-indigo-500/20 transition-all duration-300"
                    >
                      View Source Code
                    </a>
                  ) : (
                    <button className="flex-1 py-3 rounded-xl bg-zinc-800 text-zinc-500 text-sm font-bold opacity-60 cursor-not-allowed border border-white/5">
                      Source Code Locked
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
