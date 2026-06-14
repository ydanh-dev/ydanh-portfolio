import { ArrowRight, Code2, Target, Zap } from "lucide-react";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const disciplines = [
  { icon: Code2, label: "Architecture", value: "System design & scalability", level: "94%" },
  { icon: Zap, label: "Performance", value: "Optimization & responsiveness", level: "90%" },
  { icon: Target, label: "Quality", value: "Testing & production readiness", level: "86%" },
];

const workflow = ["Design", "Develop", "Test", "Deploy", "Monitor"];

export default function About() {
  return (
    <section id="about" className="engineering-section border-y border-white/5 py-16 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection className="mb-12 grid gap-5 sm:mb-16 sm:gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="section-kicker">about-me</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-white sm:text-5xl">
              Full-stack mobile
              <span className="block text-gradient text-gradient-live">& web engineer.</span>
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            I build production-ready systems from concept to deployment. Experienced in architecting scalable mobile apps, optimizing performance, and shipping features that users love.
          </p>
        </AnimatedSection>

        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <AnimatedSection direction="right">
            <article className="profile-console relative h-full min-h-[430px] overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a13] sm:min-h-[500px] sm:rounded-[2rem]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(99,102,241,0.18),transparent_42%)]" />
              <div className="profile-grid absolute inset-0 opacity-60" />
              <div className="relative flex items-center justify-between border-b border-white/8 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                <span>developer.profile</span>
                <span className="flex items-center gap-2 text-emerald-300"><i className="status-pulse size-1.5 rounded-full bg-emerald-400" /> ready</span>
              </div>
              <div className="relative mx-auto mt-8 size-40 sm:mt-10 sm:size-52">
                <div className="portrait-ring portrait-ring-one absolute left-1/2 top-1/2 size-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-300/20 sm:size-56" />
                <div className="portrait-ring portrait-ring-two absolute left-1/2 top-1/2 size-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-violet-300/15 sm:size-72" />
                <div className="relative size-full overflow-hidden rounded-full border border-white/15 bg-[#10101d]">
                  <Image src="/avatar.jpg" alt="Nguyen Anh Duy" fill className="object-cover object-top" sizes="208px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/60 to-transparent" />
                </div>
              </div>
              <div className="relative px-4 pb-5 pt-8 sm:px-6 sm:pb-6 sm:pt-11">
                <div className="mb-6 text-center">
                  <h3 className="text-2xl font-black tracking-tight text-white">Nguyen Anh Duy</h3>
                  <p className="mt-2 break-words font-mono text-[10px] text-indigo-300 sm:text-xs">Mobile Engineer • Product Developer</p>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {["Mobile", "Frontend", "Backend"].map((item, index) => (
                    <div key={item} className="rounded-xl border border-white/8 bg-black/25 p-3 text-center">
                      <p className="font-mono text-[10px] text-zinc-500">0{index + 1}</p>
                      <p className="mt-1 text-xs font-bold text-zinc-200">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </AnimatedSection>

          <div className="grid gap-5">
            <AnimatedSection>
              <article className="workflow-panel overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-5 sm:p-6">
                <div className="mb-7 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">{"// development-cycle"}</p>
                    <h3 className="mt-2 text-lg font-bold text-white">How I work</h3>
                  </div>
                  <Code2 className="size-5 text-indigo-300" />
                </div>
                <div className="workflow-track grid grid-cols-2 gap-3 sm:grid-cols-5">
                  {workflow.map((item, index) => (
                    <div key={item} className="workflow-step relative rounded-xl border border-white/8 bg-black/20 px-3 py-3">
                      <span className="font-mono text-[9px] text-indigo-300">step_{String(index + 1).padStart(2, '0')}</span>
                      <p className="mt-1 text-xs font-bold text-zinc-200">{item}</p>
                    </div>
                  ))}
                </div>
              </article>
            </AnimatedSection>

            <div className="grid gap-5 sm:grid-cols-[1.15fr_0.85fr]">
              <AnimatedSection delay={0.06}>
                <article className="h-full rounded-[2rem] border border-white/10 bg-white/[0.025] p-5">
                  <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">Core Competencies</p>
                  <div className="space-y-5">
                    {disciplines.map((item) => (
                      <div key={item.label}>
                        <div className="mb-2 flex items-center gap-3">
                          <item.icon className="size-4 text-indigo-300" />
                          <div className="min-w-0 flex-1">
                            <div className="flex justify-between gap-3 text-xs"><b className="text-zinc-200">{item.label}</b><span className="font-mono text-zinc-600">{item.level}</span></div>
                            <p className="mt-0.5 truncate text-[10px] text-zinc-500">{item.value}</p>
                          </div>
                        </div>
                        <div className="h-1 overflow-hidden rounded-full bg-white/5"><span className="capability-meter block h-full rounded-full" style={{ width: item.level }} /></div>
                      </div>
                    ))}
                  </div>
                </article>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <article className="stack-orbit relative h-full min-h-64 overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b15] p-5">
                  <p className="relative z-10 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">Primary Stack</p>
                  <div className="relative z-10 mt-7 flex flex-wrap gap-2">
                    {["React Native", "Flutter", "TypeScript", "Next.js", "Zustand", "REST APIs"].map((item) => <span key={item} className="stack-chip rounded-lg border border-white/8 bg-black/30 px-2.5 py-1.5 font-mono text-[10px] text-zinc-400">{item}</span>)}
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 flex items-center gap-2 font-mono text-[10px] text-emerald-300">
                    <span className="status-pulse size-1.5 rounded-full bg-emerald-400" /> actively shipping <ArrowRight className="ml-auto size-3" />
                  </div>
                </article>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
