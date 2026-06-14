"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GitCommitHorizontal } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const releases = [
  {
    version: "v4.0",
    period: "Mar 2023 — Present",
    role: "Mobile Developer · React Native",
    company: "Apetech Solutions",
    summary: "Shipping and evolving cross-platform products for real operational teams.",
    contributions: ["Own features from UI to API integration", "Improve responsiveness and runtime performance", "Collaborate through testing, release, and iteration"],
    stack: ["React Native", "TypeScript", "REST API", "iOS", "Android"],
  },
  {
    version: "v3.0",
    period: "Nov 2022 — Mar 2023",
    role: "Software Tester · Manual",
    company: "Apetech Solutions",
    summary: "Built the quality instincts that now shape every feature I deliver.",
    contributions: ["Designed functional and regression test cases", "Investigated edge cases across web and mobile", "Worked closely with developers to resolve defects"],
    stack: ["Test Cases", "Regression", "Cross-platform", "Agile"],
  },
  {
    version: "v2.0",
    period: "Aug 2022 — Nov 2022",
    role: "Front-end Developer · Mendix",
    company: "Kyanon Digital",
    summary: "Translated enterprise requirements into responsive, integrated interfaces.",
    contributions: ["Implemented UI from product designs", "Integrated frontend workflows with APIs", "Optimized interface usability and performance"],
    stack: ["Mendix", "JavaScript", "HTML/CSS", "REST API"],
  },
  {
    version: "v1.0",
    period: "Feb 2022 — May 2022",
    role: "Mobile Developer · Flutter Intern",
    company: "NATA Vietnam JSC",
    summary: "Started with cross-platform fundamentals and a strong appetite for shipping.",
    contributions: ["Built responsive Flutter screens", "Integrated RESTful APIs", "Applied Provider and BLoC state patterns"],
    stack: ["Flutter", "Dart", "Provider", "BLoC"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="engineering-section border-y border-white/5 py-16 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-9 px-4 sm:gap-12 sm:px-6 lg:grid-cols-[0.72fr_1.28fr]">
        <AnimatedSection className="h-fit lg:sticky lg:top-28">
          <p className="section-kicker">release-history</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-white sm:text-5xl">
            Built through <span className="text-gradient">every layer.</span>
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-7 text-zinc-500">
            My path through testing, frontend, Flutter, and React Native gives me a practical view of the complete delivery lifecycle.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 font-mono text-[10px] text-zinc-400">
            <span className="status-pulse size-1.5 rounded-full bg-emerald-400" /> currently shipping at Apetech
          </div>
        </AnimatedSection>

        <div className="release-log relative space-y-5">
          {releases.map((release, index) => (
            <AnimatedSection key={release.version} delay={index * 0.06}>
              <motion.article whileHover={{ x: 5 }} transition={{ duration: 0.22 }} className="release-card group relative rounded-[2rem] border border-white/10 bg-[#0a0a13] p-5 sm:p-7">
                <span className="release-node absolute -left-[2.1rem] top-8 hidden size-3 rounded-full border-2 border-[#08080e] bg-indigo-400 shadow-[0_0_18px_rgba(129,140,248,0.7)] lg:block" />
                <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em]">
                    <span className="rounded-lg border border-indigo-400/20 bg-indigo-400/10 px-2.5 py-1 text-indigo-300">{release.version}</span>
                    <span className="text-zinc-600">{release.period}</span>
                  </div>
                  <GitCommitHorizontal className="size-4 text-zinc-700 transition-colors group-hover:text-indigo-300" />
                </div>
                <p className="text-xs font-bold text-indigo-300">{release.company}</p>
                <h3 className="mt-2 text-xl font-black tracking-tight text-white">{release.role}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-400">{release.summary}</p>
                <div className="mt-6 grid gap-2 sm:grid-cols-3">
                  {release.contributions.map((item) => <div key={item} className="rounded-xl border border-white/7 bg-white/[0.02] p-3 text-[10px] leading-5 text-zinc-500">{item}</div>)}
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-2">
                  {release.stack.map((item) => <span key={item} className="font-mono text-[9px] text-zinc-600">#{item.replaceAll(" ", "_")}</span>)}
                  <ArrowUpRight className="ml-auto size-4 text-zinc-700 transition group-hover:rotate-45 group-hover:text-indigo-300" />
                </div>
              </motion.article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
