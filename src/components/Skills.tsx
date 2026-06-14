"use client";

import { Code2, Command, Cpu, Database, Layout, Network, Smartphone, Terminal } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const skillMatrix = [
  {
    category: "Mobile Architecture",
    description: "Building cross-platform mobile apps with native-like performance and complex state management.",
    icon: Smartphone,
    color: "text-indigo-400",
    bg: "bg-indigo-400/10",
    border: "border-indigo-400/20",
    items: ["React Native", "Flutter", "Dart", "Swift/iOS", "Kotlin/Android"],
  },
  {
    category: "Frontend Systems",
    description: "Developing responsive, accessible, and performant web interfaces with modern React ecosystems.",
    icon: Layout,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Data & State Flow",
    description: "Designing predictable state management and robust API integration layers.",
    icon: Database,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/20",
    items: ["Zustand", "React Query", "Redux Toolkit", "GraphQL", "REST APIs"],
  },
  {
    category: "Engineering Ops",
    description: "Maintaining code quality, version control, and smooth deployment pipelines.",
    icon: Terminal,
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    border: "border-rose-400/20",
    items: ["Git / GitHub", "CI/CD Actions", "Jest", "App Store Connect", "Play Console"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Background Grid */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #3f3f46 1px, transparent 1px),
            linear-gradient(to bottom, #3f3f46 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-3 mb-4 text-zinc-500 font-mono text-sm">
            <Command className="size-4" />
            <span>{`// src/core-competencies`}</span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
            Technical Stack & <br className="hidden sm:block" />
            <span className="text-zinc-500">Engineering Matrix.</span>
          </h2>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2">
          {skillMatrix.map((matrix, index) => {
            const Icon = matrix.icon;
            return (
              <AnimatedSection key={matrix.category} delay={index * 0.1}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-zinc-800 bg-[#0a0a0f] p-6 sm:p-8 transition-colors hover:border-zinc-700">
                  <div className={`mb-6 inline-flex size-12 items-center justify-center rounded-2xl border ${matrix.border} ${matrix.bg}`}>
                    <Icon className={`size-6 ${matrix.color}`} />
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-white">{matrix.category}</h3>
                  <p className="mb-8 text-sm leading-relaxed text-zinc-400">
                    {matrix.description}
                  </p>

                  <div className="mt-auto">
                    <div className="flex items-center gap-2 mb-4 text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                      <Network className="size-3" /> Stack Instances
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {matrix.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 font-mono text-[11px] text-zinc-300 transition-colors group-hover:border-zinc-700 group-hover:bg-zinc-800"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* System Fundamentals */}
        <AnimatedSection delay={0.4} className="mt-6">
          <div className="rounded-[2rem] border border-zinc-800 bg-[#0a0a0f] p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-6 text-[10px] font-mono uppercase tracking-wider text-zinc-500">
              <Cpu className="size-3" /> System Fundamentals
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                "Mobile-First Architecture",
                "State Management Patterns",
                "API Integration & REST Design",
                "Performance Optimization",
                "Cross-Platform Compilation",
                "Responsive UI/UX",
                "Agile / Scrum Methodologies",
                "Production Deployment"
              ].map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-xs font-medium text-zinc-300 transition-colors hover:border-zinc-700"
                >
                  <Code2 className="size-3 text-emerald-400" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
