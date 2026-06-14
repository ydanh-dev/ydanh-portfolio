"use client";

import AnimatedSection from "./AnimatedSection";
import { ArrowRight, Briefcase } from "lucide-react";

const releases = [
  {
    version: "v4.0",
    period: "Mar 2023 — Present",
    company: "Apetech Solutions",
    title: "Mobile Engineer · React Native",
    summary: "Shipping and evolving cross-platform products for real operational teams.",
    contributions: ["Own features from UI to API integration", "Improve responsiveness and runtime performance", "Collaborate through testing, release, and iteration"],
    tags: ["React Native", "TypeScript", "REST API", "iOS", "Android"],
  },
  {
    version: "v3.0",
    period: "Nov 2022 — Mar 2023",
    company: "Apetech Solutions",
    title: "Software Tester · Manual QA",
    summary: "Built the quality instincts that now shape every feature I deliver.",
    contributions: ["Designed functional and regression test cases", "Investigated edge cases across web and mobile", "Worked closely with developers to resolve defects"],
    tags: ["Test Cases", "Regression", "Cross-platform", "Agile"],
  },
  {
    version: "v2.0",
    period: "Aug 2022 — Nov 2022",
    company: "Kyanon Digital",
    title: "Front-end Developer · Mendix",
    summary: "Translated enterprise requirements into responsive, integrated interfaces.",
    contributions: ["Implemented UI from product designs", "Integrated frontend workflows with APIs", "Optimized interface usability and performance"],
    tags: ["Mendix", "JavaScript", "HTML/CSS", "REST API"],
  },
  {
    version: "v1.0",
    period: "Feb 2022 — May 2022",
    company: "NATA Vietnam JSC",
    title: "Mobile Developer · Flutter Intern",
    summary: "Started with cross-platform fundamentals and a strong appetite for shipping.",
    contributions: ["Built responsive Flutter screens", "Integrated RESTful APIs", "Applied Provider and BLoC state patterns"],
    tags: ["Flutter", "Dart", "Provider", "BLoC"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="engineering-section border-y border-white/5 py-16 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection className="mb-12 grid gap-5 sm:mb-16 sm:gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="section-kicker">work-history</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-white sm:text-5xl">
              Experience &
              <span className="block text-gradient text-gradient-live">professional journey.</span>
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            A timeline of roles, projects, and growth throughout my career as a mobile and frontend engineer.
          </p>
        </AnimatedSection>

        <div className="space-y-6">
          {releases.map((release, index) => (
            <AnimatedSection key={release.version} delay={index * 0.05}>
              <div className="release-card group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a13] p-6 sm:p-8 transition-all hover:border-white/20">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative flex flex-col gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="release-node size-2.5 rounded-full bg-amber-300" />
                        <span className="font-mono text-xs font-bold text-amber-300">{release.version}</span>
                      </div>
                      <span className="font-mono text-[9px] text-zinc-600">{release.period}</span>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase className="size-4 text-indigo-300" />
                        <h3 className="text-lg font-bold text-white">{release.title}</h3>
                      </div>
                      <p className="font-mono text-xs text-indigo-300 mb-2">{release.company}</p>
                      <p className="text-sm leading-6 text-zinc-400 max-w-2xl">{release.summary}</p>
                    </div>

                    <div className="mb-4">
                      <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600 mb-3">Key Contributions</p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {release.contributions.map((contrib) => (
                          <div key={contrib} className="flex items-center gap-2 text-xs text-zinc-300">
                            <ArrowRight className="size-3 text-emerald-400 flex-shrink-0" />
                            {contrib}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {release.tags.map((tag) => (
                        <span key={tag} className="rounded-lg border border-white/8 bg-white/[0.025] px-2.5 py-1 font-mono text-[9px] text-zinc-500">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
