"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import Image from "next/image";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Flutter/Dart", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { name: "React Native", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "JavaScript", level: "Proficient", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "HTML/CSS", level: "Proficient", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React Native", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Flutter", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { name: "Mendix", level: "Proficient", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mendix/mendix-original.svg" }, // Fallback if missing
    ],
  },
  {
    title: "State Management",
    skills: [
      { name: "Zustand", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Provider", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { name: "BLoC", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
      { name: "React Query", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git/GitHub", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "VS Code", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Android Studio", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
      { name: "Xcode", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg" },
      { name: "Postman", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
      { name: "SAP", level: "Proficient", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg" },
    ],
  },
  {
    title: "Methodologies",
    skills: [
      { name: "Agile/Scrum", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg" },
      { name: "RESTful APIs", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg" },
      { name: "Mobile Development", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-muted/5 border-y border-border overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-0 left-0 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-indigo-500/10 rounded-full blur-[100px] opacity-40 pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 lg:px-8 relative z-10">
        <AnimatedSection className="mb-16 max-w-2xl text-center mx-auto">
          <h2 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Skills & <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            The tools and technologies I use to craft seamless mobile and web experiences.
          </p>
        </AnimatedSection>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={category.title} delay={index * 0.1}>
              <div className="glass h-full rounded-3xl p-8 border border-border/50 hover:border-primary/50 transition-colors shadow-sm hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)]">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6">{category.title}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={`${skill.name}-${skillIndex}`}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="group flex flex-col items-center justify-center gap-3 rounded-2xl bg-background/50 border border-border/30 p-4 transition-all hover:bg-background/80 hover:border-primary/30 relative"
                    >
                      <div className="relative size-8 opacity-80 transition-opacity group-hover:opacity-100">
                        {/* Fallback to initials if icon URL fails to load or is a devicon generic */}
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          fill
                          className="object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 group-hover:filter-none transition-all duration-300"
                          unoptimized
                        />
                      </div>
                      <span className="text-center text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                        {skill.name}
                      </span>
                      {/* Tooltip */}
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 pointer-events-none opacity-0 transition-opacity group-hover:opacity-100 bg-foreground text-background text-[10px] font-bold px-2 py-1 rounded whitespace-nowrap z-20">
                        {skill.level}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-[4px] border-transparent border-t-foreground" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
