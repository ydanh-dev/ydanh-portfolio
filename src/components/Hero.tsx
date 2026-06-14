"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Code2,
  GitBranch,
  Radio,
  Smartphone,
  Terminal,
  View,
  Zap,
} from "lucide-react";

const stack = ["React Native", "Flutter", "TypeScript", "Next.js", "REST APIs"];
const logs = [
  { time: "09:41:03", label: "mobile.build", value: "ready", tone: "text-emerald-300" },
  { time: "09:41:08", label: "api.latency", value: "84ms", tone: "text-cyan-300" },
  { time: "09:41:12", label: "ui.fps", value: "60", tone: "text-violet-300" },
];

export default function Hero() {
  const visualRef = useRef<HTMLDivElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [3, -3]), { stiffness: 120, damping: 24 });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-4, 4]), { stiffness: 120, damping: 24 });
  const glowX = useTransform(pointerX, [-0.5, 0.5], ["30%", "70%"]);
  const glowY = useTransform(pointerY, [-0.5, 0.5], ["25%", "75%"]);
  const interactiveGlow = useTransform(
    [glowX, glowY],
    ([x, y]) => `radial-gradient(circle at ${x} ${y}, rgba(129,140,248,.16), transparent 42%)`
  );

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!visualRef.current || event.pointerType === "touch") return;
    const bounds = visualRef.current.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  return (
    <section id="hero" className="hero-grid relative flex min-h-0 items-center overflow-hidden pt-20 sm:min-h-screen sm:pt-24">
      <div className="hero-aurora pointer-events-none absolute inset-0 -z-10" />
      <div className="hero-beam pointer-events-none absolute left-1/2 top-0 -z-10 h-full w-px" />
      <div className="hero-orb hero-orb-one pointer-events-none absolute -left-24 top-1/3 -z-10 size-72 rounded-full" />
      <div className="hero-orb hero-orb-two pointer-events-none absolute -right-32 bottom-10 -z-10 size-96 rounded-full" />

      <div className="mx-auto grid w-full min-w-0 max-w-6xl grid-cols-[minmax(0,1fr)] gap-10 px-4 py-10 sm:gap-14 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
        <div className="min-w-0 max-w-3xl">
          <div className="hero-enter mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/5 px-3 py-1.5 text-[10px] font-semibold text-emerald-300 sm:mb-6 sm:text-xs">
            <span className="status-pulse relative size-1.5 rounded-full bg-emerald-400" />
            Available for product-focused teams
          </div>

          <p className="hero-enter hero-delay-1 mb-3 flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-indigo-300 sm:mb-4 sm:text-xs sm:tracking-[0.24em]">
            <Code2 className="size-3.5" /> Mobile and front-end developer
          </p>
          <h1 className="hero-enter hero-delay-2 max-w-full text-[2.55rem] font-black leading-[0.98] tracking-[-0.06em] text-white min-[430px]:text-5xl sm:text-7xl lg:text-[5.35rem]">
            I engineer apps with
            <span className="text-gradient text-gradient-live"> real momentum.</span>
          </h1>
          <p className="hero-enter hero-delay-3 mt-5 max-w-2xl text-sm leading-6 text-zinc-400 sm:mt-7 sm:text-lg sm:leading-7">
            Nguyen Anh Duy builds production mobile products, expressive interfaces,
            and the performance details that turn everyday workflows into good software.
          </p>

          <div className="dev-command hero-enter hero-delay-3 mt-6 flex max-w-xl items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 font-mono text-[10px] sm:text-xs">
            <span className="text-emerald-300">$</span>
            <span className="text-zinc-500">npx portfolio</span>
            <span className="text-amber-300">--ship-production</span>
            <span className="terminal-caret ml-auto h-3 w-1 bg-indigo-300" />
          </div>

          <div className="hero-enter hero-delay-4 mt-7 grid min-w-0 grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-2 sm:mt-8 sm:flex sm:flex-wrap sm:gap-3">
            <a href="#projects" className="magnetic-button group inline-flex min-w-0 items-center justify-center gap-2 rounded-xl bg-white px-2 py-3 text-center text-[11px] font-bold text-zinc-950 sm:px-5 sm:text-sm">
              <span className="font-mono">▶ run projects</span>
              <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a href="https://github.com/ydanh-dev" target="_blank" rel="noreferrer" className="group inline-flex min-w-0 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-2 py-3 text-[11px] font-semibold text-zinc-200 transition-colors hover:border-indigo-400/30 hover:bg-indigo-400/8 sm:px-5 sm:text-sm">
              <GitBranch className="size-4 transition-transform group-hover:-rotate-12" /> <span className="font-mono">[ GitHub ]</span>
            </a>
          </div>

          <div className="hero-enter hero-delay-4 mt-7 flex flex-wrap gap-1.5 sm:mt-10 sm:gap-2">
            {stack.map((item, index) => (
              <span key={item} style={{ animationDelay: `${index * -0.7}s` }} className="stack-chip rounded-lg border border-white/8 bg-white/[0.025] px-2.5 py-1.5 font-mono text-[9px] text-zinc-400 sm:px-3 sm:text-[11px]">
                {item}
              </span>
            ))}
          </div>

          <div className="hero-enter hero-delay-4 mt-7 grid grid-cols-3 gap-2 border-t border-white/8 pt-5">
            {[
              ["03+", "Years shipping"],
              ["04", "Product systems"],
              ["60", "Target FPS"],
            ].map(([value, label]) => (
              <div key={label} className="dev-metric">
                <p className="font-mono text-lg font-black text-amber-300 sm:text-xl">{value}</p>
                <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.12em] text-zinc-600 sm:text-[9px]">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          ref={visualRef}
          onPointerMove={handlePointerMove}
          onPointerLeave={() => {
            pointerX.set(0);
            pointerY.set(0);
          }}
          style={{ rotateX, rotateY, transformPerspective: 1200 }}
          className="hero-3d-stage hero-enter hero-delay-3 relative mx-auto w-full min-w-0 max-w-[29rem]"
        >
          <div className="runtime-halo pointer-events-none absolute -inset-8 -z-10 rounded-[3rem]" />
          <div className="hero-3d-orbit pointer-events-none absolute inset-6 rounded-[2.8rem]" />
          <div className="hero-cube-wrap pointer-events-none absolute right-3 top-3 block sm:-right-2 sm:-top-7">
            <div className="hero-cube">
              {["front", "back", "right", "left", "top", "bottom"].map((face) => (
                <span key={face} className={`hero-cube-face hero-cube-${face}`} />
              ))}
            </div>
          </div>
          <motion.div
            style={{ background: interactiveGlow }}
            className="hero-3d-panel relative max-w-full overflow-hidden rounded-[2rem] border border-white/12 bg-[#090913]/95 p-2 shadow-[0_35px_100px_rgba(0,0,0,0.48)] sm:p-3"
          >
            <div className="runtime-scan pointer-events-none absolute inset-x-0 top-0 h-32" />
            <div className="relative min-w-0 overflow-hidden rounded-[1.2rem] border border-white/8 bg-[#07070d] sm:rounded-[1.4rem]">
              <div className="flex items-center justify-between border-b border-white/8 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-rose-400/70" />
                  <span className="size-2 rounded-full bg-amber-300/70" />
                  <span className="size-2 rounded-full bg-emerald-400/70" />
                </div>
                <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-500">
                  <Radio className="size-3 text-emerald-400" /> runtime.live
                </div>
              </div>

              <div className="p-4 sm:p-5">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-indigo-300">{"// selected-environment"}</p>
                    <h2 className="mt-1 text-xl font-black tracking-tight text-white">Mobile product engine</h2>
                  </div>
                  <div className="signal-bars flex h-7 items-end gap-1">
                    <span /><span /><span /><span />
                  </div>
                </div>

                <div className="hero-code relative mb-4 overflow-hidden rounded-2xl border border-white/8 bg-white/[0.025] p-3 sm:p-4">
                  <div className="absolute right-3 top-3 font-mono text-[9px] text-zinc-600">build.tsx</div>
                  <div className="space-y-2 font-mono text-[9px] sm:space-y-2.5 sm:text-[11px]">
                    <CodeLine number="01"><span className="text-violet-300">const</span> product = <span className="text-cyan-300">createApp</span>({"{"}</CodeLine>
                    <CodeLine number="02" indent><span className="text-zinc-300">platform:</span> <span className="text-amber-200">&quot;mobile&quot;</span>,</CodeLine>
                    <CodeLine number="03" indent><span className="text-zinc-300">quality:</span> <span className="text-emerald-300">productionReady</span>,</CodeLine>
                    <CodeLine number="04" indent><span className="text-zinc-300">experience:</span> <span className="text-pink-300">delightful</span>,</CodeLine>
                    <CodeLine number="05">{"}"});<span className="terminal-caret ml-1 inline-block h-3 w-1.5 bg-indigo-300 align-middle" /></CodeLine>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 min-[390px]:grid-cols-[1fr_auto]">
                  <div className="rounded-2xl border border-white/8 bg-black/25 p-3">
                    <div className="mb-3 flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-zinc-500">
                      <Terminal className="size-3" /> Output
                    </div>
                    <div className="space-y-2">
                      {logs.map((log, index) => (
                        <div key={log.label} style={{ animationDelay: `${0.5 + index * 0.15}s` }} className="log-line grid grid-cols-[auto_1fr_auto] items-center gap-2 font-mono text-[9px]">
                          <span className="text-zinc-700">{log.time}</span>
                          <span className="text-zinc-400">{log.label}</span>
                          <span className={log.tone}>{log.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex min-h-20 flex-row items-center justify-between rounded-2xl border border-indigo-400/15 bg-indigo-400/6 p-3 min-[390px]:w-20 min-[390px]:flex-col min-[390px]:items-start">
                    <Zap className="size-4 text-indigo-300" />
                    <div>
                      <p className="text-2xl font-black tracking-tight text-white">60</p>
                      <p className="font-mono text-[8px] uppercase text-zinc-500">target fps</p>
                    </div>
                  </div>
                </div>

                <a href="#contact" className="group mt-4 flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.035] px-4 py-3 text-xs font-bold text-white transition-colors hover:border-indigo-400/30 hover:bg-indigo-400/8">
                  Start a conversation <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </motion.div>

          <FloatingBadge className="left-3 top-3 sm:-top-5 sm:left-5" icon={<Smartphone />} label="React Native" />
          <FloatingBadge className="bottom-3 right-3 sm:-bottom-5 sm:right-5" icon={<Check />} label="Production ready" delay="1.2s" />
          <div className="hero-depth-label pointer-events-none absolute -bottom-9 left-1/2 hidden -translate-x-1/2 items-center gap-2 whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600 sm:flex">
            <View className="size-3 text-indigo-300" /> move cursor to inspect depth
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CodeLine({ number, indent, children }: { number: string; indent?: boolean; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[1.25rem_1fr] gap-2">
      <span className="select-none text-zinc-700">{number}</span>
      <span className={indent ? "pl-3" : ""}>{children}</span>
    </div>
  );
}

function FloatingBadge({ className, icon, label, delay = "0s" }: { className: string; icon: React.ReactNode; label: string; delay?: string }) {
  return (
    <div style={{ animationDelay: delay }} className={`floating-badge pointer-events-none absolute z-30 hidden items-center gap-2 rounded-xl border border-white/10 bg-[#0b0b14]/95 px-3 py-2 text-[10px] font-bold text-zinc-300 shadow-xl backdrop-blur-md sm:flex ${className}`}>
      <span className="text-indigo-300 [&_svg]:size-3.5">{icon}</span>
      {label}
    </div>
  );
}
