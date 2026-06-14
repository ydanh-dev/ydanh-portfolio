"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowDownRight,
  Download,
  ArrowUpRight,
  Check,
  Code2,
  Radio,
  Smartphone,
  Terminal,
  View,
  Zap,
  Mail,
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
            <Code2 className="size-3.5" /> <TypewriterText text="NGUYEN ANH DUY - Mobile & Front-end Developer" />
          </p>
          <h1 className="hero-enter hero-delay-2 max-w-full text-[2.55rem] font-black leading-[0.98] tracking-[-0.06em] text-white min-[430px]:text-5xl sm:text-7xl lg:text-[5.35rem]">
            Building Production
            <span className="text-gradient text-gradient-live block"> Mobile & Web Systems.</span>
          </h1>
          <p className="hero-enter hero-delay-3 mt-6 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:mt-8 sm:text-lg sm:leading-8">
            I craft high-performance mobile applications and web experiences. Specialized in React Native, Flutter, and full-stack JavaScript. Focused on shipping production-ready systems with clean architecture and exceptional performance.
          </p>

          <div className="dev-command hero-enter hero-delay-3 mt-8 flex max-w-xl items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 font-mono text-[10px] sm:text-xs">
            <span className="text-emerald-300">$</span>
            <span className="text-zinc-500">npm run build</span>
            <span className="text-amber-300">--production</span>
            <span className="terminal-caret ml-1 h-3 w-1 bg-indigo-300" />
          </div>

          <div className="hero-enter hero-delay-4 mt-10 grid min-w-0 grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-2 sm:mt-10 sm:flex sm:flex-wrap sm:gap-3">
            <a href="#contact" className="magnetic-button group inline-flex min-w-0 items-center justify-center gap-2 rounded-xl bg-white px-2 py-3 text-center text-[11px] font-bold text-zinc-950 sm:px-5 sm:text-sm">
              <span className="font-mono">Get in touch</span>
              <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a href="/NGUYEN%20ANH%20DUY_DEVELOPER_CV.pdf" target="_blank" rel="noreferrer" className="group inline-flex min-w-0 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-2 py-3 text-[11px] font-semibold text-zinc-200 transition-colors hover:border-indigo-400/30 hover:bg-indigo-400/8 sm:px-5 sm:text-sm">
              <Download className="size-4 transition-transform group-hover:-translate-y-0.5" /> <span className="font-mono">Download CV</span>
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

          {/* Social Links */}
          <div className="hero-enter hero-delay-4 mt-7 flex items-center gap-3 border-t border-white/8 pt-5">
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Connect:</p>
            <a href="https://github.com/ydanh-dev" target="_blank" rel="noreferrer" className="group p-2 rounded-lg border border-white/10 hover:border-indigo-400/30 hover:bg-indigo-400/8 transition-colors">
              <svg className="size-4 text-zinc-400 group-hover:text-indigo-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/duyna22/" target="_blank" rel="noreferrer" className="group p-2 rounded-lg border border-white/10 hover:border-indigo-400/30 hover:bg-indigo-400/8 transition-colors">
              <svg className="size-4 text-zinc-400 group-hover:text-indigo-300" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.646h3.554v1.364c.429-.659 1.191-1.599 2.896-1.599 2.117 0 3.704 1.385 3.704 4.362v5.519zM5.337 9.432c-1.144 0-1.915-.758-1.915-1.704 0-.951.768-1.703 1.959-1.703 1.188 0 1.914.752 1.939 1.703 0 .946-.751 1.704-1.983 1.704zm1.586 11.02H3.73V9.806h3.193v10.646zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
            </a>
            <a href="mailto:duynguyen1bb@gmail.com" className="group p-2 rounded-lg border border-white/10 hover:border-indigo-400/30 hover:bg-indigo-400/8 transition-colors">
              <Mail className="size-4 text-zinc-400 group-hover:text-indigo-300" />
            </a>
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
          className="hero-3d-stage hero-enter hero-delay-3 relative mx-auto w-full min-w-0 max-w-[30rem]"
        >
          {/* Subtle elegant background glows */}
          <div className="absolute -inset-20 -z-10 rounded-full bg-indigo-500/10 blur-[100px]" />
          <div className="absolute right-0 top-0 -z-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-[80px]" />
          
          <motion.div
            style={{ background: interactiveGlow }}
            className="relative max-w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#030303]/90 p-1.5 shadow-[0_0_80px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
          >
            {/* Inner Border / Glossy Layer */}
            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.01] px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full border border-[#e0443e]/50 bg-[#ff5f57]" />
                  <span className="size-2.5 rounded-full border border-[#d89f2c]/50 bg-[#febc2e]" />
                  <span className="size-2.5 rounded-full border border-[#1aab29]/50 bg-[#28c840]" />
                </div>
                <div className="flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-zinc-400">
                  <Radio className="size-3 text-emerald-400" /> runtime.dev
                </div>
              </div>

              {/* Body */}
              <div className="p-4 sm:p-6">
                <div className="mb-6">
                  <h2 className="text-2xl font-black tracking-tight text-white">Production Ready</h2>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-zinc-500">{"// Architecture & Tech Stack"}</p>
                </div>

                <TerminalProcess logs={logs} />

                {/* Bottom CTA */}
                <a href="#contact" className="group mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs font-semibold text-zinc-200 transition-colors hover:bg-white/[0.08] hover:text-white">
                  Deploy System <ArrowUpRight className="size-4 text-zinc-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                </a>
              </div>
            </div>
          </motion.div>

          <FloatingBadge className="left-[-1rem] top-8 sm:left-[-2rem] sm:top-12" icon={<Smartphone />} label="React Native" />
          <FloatingBadge className="right-[-1rem] bottom-16 sm:right-[-2rem] sm:bottom-20" icon={<Check />} label="Production" delay="1.2s" />
          <div className="hero-depth-label pointer-events-none absolute -bottom-10 left-1/2 hidden -translate-x-1/2 items-center gap-2 whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600 sm:flex">
            <View className="size-3 text-indigo-300" /> interactive depth
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

function TypewriterText({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    let isDeleting = false;
    let timeout: NodeJS.Timeout;

    const type = () => {
      if (!isDeleting) {
        if (i <= text.length) {
          setDisplayedText(text.slice(0, i));
          i++;
          timeout = setTimeout(type, 50);
        } else {
          // Finished typing, wait 10s
          timeout = setTimeout(() => {
            isDeleting = true;
            type();
          }, 10000);
        }
      } else {
        if (i >= 0) {
          setDisplayedText(text.slice(0, i));
          i--;
          timeout = setTimeout(type, 20); // delete faster
        } else {
          isDeleting = false;
          timeout = setTimeout(type, 500);
        }
      }
    };

    timeout = setTimeout(type, 100);

    return () => clearTimeout(timeout);
  }, [text]);

  return (
    <span>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="inline-block w-[6px] h-[1em] bg-emerald-400 ml-[2px] align-middle"
      />
    </span>
  );
}

function TypewriterFormatted({ segments, startDelay = 0, onComplete, showCaret = false }: { segments: { text: string, className?: string }[], startDelay?: number, onComplete?: () => void, showCaret?: boolean }) {
  const totalChars = segments.reduce((sum, seg) => sum + seg.text.length, 0);
  const [chars, setChars] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let interval: NodeJS.Timeout;
    
    timeout = setTimeout(() => {
      setIsTyping(true);
      let current = 0;
      interval = setInterval(() => {
        current++;
        setChars(current);
        if (current >= totalChars) {
          clearInterval(interval);
          setIsTyping(false);
          if (onCompleteRef.current) onCompleteRef.current();
        }
      }, 40); // typing speed
    }, startDelay);
    
    return () => { clearTimeout(timeout); clearInterval(interval); };
  }, [totalChars, startDelay]);

  let renderedChars = 0;
  return (
    <>
      {segments.map((seg, i) => {
        if (renderedChars >= chars) return null;
        const charsToRender = Math.min(seg.text.length, chars - renderedChars);
        renderedChars += charsToRender;
        return <span key={i} className={seg.className}>{seg.text.slice(0, charsToRender)}</span>;
      })}
      {showCaret && isTyping && <span className="terminal-caret ml-1 inline-block h-3 w-1.5 bg-indigo-300 align-middle" />}
    </>
  );
}

function TerminalProcess({ logs }: { logs: Array<{time: string, label: string, value: string, tone: string}> }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step === 5) {
      const timer = setTimeout(() => setStep(6), 5000); // 2s wait + 3s for 3 output lines
      return () => clearTimeout(timer);
    }
    if (step === 6) {
      const timer = setTimeout(() => setStep(7), 2000); // FPS load duration
      return () => clearTimeout(timer);
    }
  }, [step]);

  const advance = useCallback(() => setStep(s => s + 1), []);

  return (
    <>
      <div className="hero-code relative mb-4 overflow-hidden rounded-2xl border border-white/5 bg-[#000]/40 p-3 shadow-inner sm:p-4">
        <div className="absolute right-3 top-3 font-mono text-[9px] text-zinc-600">app.tsx</div>
        <div className="space-y-2 font-mono text-[9px] sm:space-y-2.5 sm:text-[11px]">
          <CodeLine number="01">
            <TypewriterFormatted 
              startDelay={600} 
              onComplete={advance} 
              showCaret={step === 0}
              segments={[
                { text: "export ", className: "text-violet-300" },
                { text: "const ", className: "text-cyan-300" },
                { text: "developer = ", className: "" },
                { text: "{", className: "text-amber-200" }
              ]} 
            />
          </CodeLine>
          
          {step >= 1 && (
            <CodeLine number="02" indent>
              <TypewriterFormatted 
                startDelay={250}
                onComplete={advance} 
                showCaret={step === 1}
                segments={[
                  { text: "skills: ", className: "text-zinc-300" },
                  { text: '["React Native", "Flutter", "TypeScript"]', className: "text-emerald-300" },
                  { text: ",", className: "" }
                ]} 
              />
            </CodeLine>
          )}

          {step >= 2 && (
            <CodeLine number="03" indent>
              <TypewriterFormatted 
                startDelay={250}
                onComplete={advance} 
                showCaret={step === 2}
                segments={[
                  { text: "focus: ", className: "text-zinc-300" },
                  { text: '"production-ready systems"', className: "text-pink-300" },
                  { text: ",", className: "" }
                ]} 
              />
            </CodeLine>
          )}

          {step >= 3 && (
            <CodeLine number="04" indent>
              <TypewriterFormatted 
                startDelay={250}
                onComplete={advance} 
                showCaret={step === 3}
                segments={[
                  { text: "experience: ", className: "text-zinc-300" },
                  { text: "3", className: "text-amber-200" },
                  { text: " + ", className: "" },
                  { text: "years", className: "text-amber-200" },
                  { text: ",", className: "" }
                ]} 
              />
            </CodeLine>
          )}

          {step >= 4 && (
            <CodeLine number="05">
              <TypewriterFormatted 
                startDelay={250}
                onComplete={advance} 
                showCaret={step === 4}
                segments={[
                  { text: "}", className: "text-amber-200" },
                  { text: ";", className: "" }
                ]} 
              />
              {step >= 5 && <span className="terminal-caret ml-1 inline-block h-3 w-1.5 bg-indigo-300 align-middle animate-pulse" />}
            </CodeLine>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 min-[390px]:grid-cols-[1fr_auto]">
        <div className="rounded-2xl border border-white/5 bg-[#000]/40 p-3 shadow-inner">
          <div className="mb-3 flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-zinc-500">
            <Terminal className="size-3" /> Output
          </div>
          <div className="space-y-2 min-h-[64px]">
            {step >= 5 && logs.map((log, index) => (
              <motion.div
                key={log.label}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2 + index * 1 }}
                className="grid grid-cols-[auto_1fr_auto] items-center gap-2 font-mono text-[9px]"
              >
                <span className="text-zinc-600">{log.time}</span>
                <span className="text-zinc-400">{log.label}</span>
                <span className={log.tone}>{log.value}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex min-h-20 flex-row items-center justify-between rounded-2xl border border-white/5 bg-[#000]/40 p-3 shadow-inner min-[390px]:w-20 min-[390px]:flex-col min-[390px]:items-start">
          <Zap className="size-4 text-zinc-500" />
          <div className="mt-auto">
            {step < 7 ? (
              <div className="flex h-8 items-center gap-[3px] pb-1">
                <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0 }} className="size-[5px] rounded-full bg-zinc-600" />
                <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }} className="size-[5px] rounded-full bg-zinc-600" />
                <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.4 }} className="size-[5px] rounded-full bg-zinc-600" />
              </div>
            ) : (
              <motion.p initial={{ opacity: 0, scale: 0.8, filter: "blur(4px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} className="text-2xl font-black tracking-tight text-white">
                60
              </motion.p>
            )}
            <p className="font-mono text-[8px] uppercase text-zinc-500">target fps</p>
          </div>
        </div>
      </div>
    </>
  );
}
