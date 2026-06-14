"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import Image from "next/image";

const skillCategories = [
  {
    title: "Mobile Development",
    skills: [
      { name: "React Native", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Flutter", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { name: "Dart", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "TypeScript", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "React", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    ],
  },
  {
    title: "State & Data",
    skills: [
      { name: "Zustand", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "React Query", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "REST APIs", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git/GitHub", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "VS Code", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Android Studio", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-muted/5 border-y border-border overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-0 left-0 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-indigo-500/10 rounded-full blur-[100px] opacity-40 pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 lg:px-8 relative z-10">
        <AnimatedSection className="mb-16 max-w-2xl">
          <p className="section-kicker mb-4">tech-stack</p>
          <h2 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Technologies & <span className="text-gradient">Tools</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            The technologies I use to build high-performance mobile and web applications. Focused on modern tooling and production-ready systems.
          </p>
        </AnimatedSection>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={category.title} delay={index * 0.1}>
              <div className="glass h-full rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-colors shadow-sm hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)]">
                <h3 className="font-heading text-sm font-semibold text-foreground mb-6 uppercase tracking-wider text-zinc-400">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={`${skill.name}-${skillIndex}`}
                      whileHover={{ x: 4 }}
                      className="group flex items-center gap-3 rounded-lg p-3 transition-all hover:bg-white/5 cursor-default"
                    >
                      <div className="relative size-6 flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          fill
                          className="object-contain filter brightness-0 invert"
                          unoptimized
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold text-zinc-200">
                          {skill.name}
                        </p>
                        <p className="text-[10px] text-zinc-500 font-mono">
                          {skill.level}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <AnimatedSection delay={0.4} className="mt-16">
          <div className="rounded-2xl border border-border/50 bg-white/[0.025] p-8">
            <p className="section-kicker mb-6">expertise-areas</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Mobile-first architecture",
                "State management patterns",
                "API integration & REST design",
                "Performance optimization",
                "Cross-platform development",
                "Responsive UI/UX",
                "Testing & QA",
                "Agile/Scrum methodologies",
                "Production deployment",
              ].map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-3 rounded-lg border border-white/8 bg-white/[0.02] px-4 py-3 transition-colors hover:border-indigo-400/30 hover:bg-indigo-400/5"
                >
                  <div className="size-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                  <span className="text-sm text-zinc-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
