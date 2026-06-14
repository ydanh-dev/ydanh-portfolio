"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Code2, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about", number: "01" },
  { label: "Skills", href: "#skills", number: "02" },
  { label: "Work", href: "#projects", number: "03" },
  { label: "Contact", href: "#contact", number: "04" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 });

  useEffect(() => {
    const sections = ["hero", ...navLinks.map((link) => link.href.slice(1))]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.25, 0.5] }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-2 z-50 px-2 sm:top-5 sm:px-3">
      <nav className="nav-shell relative mx-auto flex h-12 max-w-5xl items-center justify-between overflow-hidden rounded-xl border border-white/10 bg-[#090912]/88 px-2 shadow-[0_12px_45px_rgba(0,0,0,0.28)] backdrop-blur-md sm:h-14 sm:rounded-2xl sm:px-4">
        <motion.div style={{ scaleX: progress, transformOrigin: "0%" }} className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400" />

        <a href="#hero" className="group flex items-center gap-2 rounded-xl px-1.5 py-1.5 sm:px-2 sm:py-2">
          <span className="logo-mark relative flex size-7 items-center justify-center overflow-hidden rounded-lg bg-indigo-500 text-[10px] font-black text-white sm:size-8 sm:text-xs">
            <Code2 className="relative z-10 size-4 sm:size-5" />
          </span>
          <span className="font-mono text-xs font-semibold tracking-tight sm:text-sm">anh-duy.dev</span>
          <span className="hidden items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-emerald-300 sm:flex">
            <span className="status-pulse size-1.5 rounded-full bg-emerald-400" /> online
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = activeSection === link.href.slice(1);
            return (
              <a key={link.href} href={link.href} className={cn("group relative rounded-lg px-3 py-2 text-xs font-medium transition-colors", active ? "text-white" : "text-zinc-500 hover:text-white")}>
                {active && <motion.span layoutId="nav-active" className="absolute inset-0 rounded-lg border border-white/8 bg-white/[0.06]" transition={{ type: "spring", stiffness: 420, damping: 35 }} />}
                <span className="relative flex items-center gap-1.5">
                  <span className={cn("font-mono text-[8px] transition-colors", active ? "text-indigo-300" : "text-zinc-700 group-hover:text-indigo-300")}>{link.number}</span>
                  {link.label}
                </span>
              </a>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <a href="https://github.com/ydanh-dev" target="_blank" rel="noreferrer" className="group p-2 rounded-lg text-zinc-400 hover:text-indigo-300 transition-colors">
            <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
          </a>
          <a href="https://www.linkedin.com/in/duyna22/" target="_blank" rel="noreferrer" className="group p-2 rounded-lg text-zinc-400 hover:text-indigo-300 transition-colors">
            <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.646h3.554v1.364c.429-.659 1.191-1.599 2.896-1.599 2.117 0 3.704 1.385 3.704 4.362v5.519zM5.337 9.432c-1.144 0-1.915-.758-1.915-1.704 0-.951.768-1.703 1.959-1.703 1.188 0 1.914.752 1.939 1.703 0 .946-.751 1.704-1.983 1.704zm1.586 11.02H3.73V9.806h3.193v10.646zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" /></svg>
          </a>
          <a href="mailto:duynguyen1bb@gmail.com" className="group inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-xs font-bold text-zinc-950 transition-transform hover:-translate-y-0.5">
            <span className="font-mono">contact()</span> <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <button type="button" className="rounded-lg p-2 text-zinc-300 hover:bg-white/5 md:hidden" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label="Toggle navigation">
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -8, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: 0.98 }} transition={{ duration: 0.18 }} className="mx-auto mt-2 max-w-5xl rounded-2xl border border-white/10 bg-[#090912]/96 p-2 shadow-2xl backdrop-blur-md md:hidden">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-zinc-300 hover:bg-white/5 hover:text-white">
                <span className="font-mono text-[9px] text-indigo-300">{link.number}</span>{link.label}
              </a>
            ))}
            <div className="border-t border-white/10 mt-2 pt-2 flex items-center gap-2 px-4 py-3">
              <a href="https://github.com/ydanh-dev" target="_blank" rel="noreferrer" className="p-2 rounded-lg text-zinc-400 hover:text-indigo-300 transition-colors">
                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </a>
              <a href="https://www.linkedin.com/in/duyna22/" target="_blank" rel="noreferrer" className="p-2 rounded-lg text-zinc-400 hover:text-indigo-300 transition-colors">
                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.646h3.554v1.364c.429-.659 1.191-1.599 2.896-1.599 2.117 0 3.704 1.385 3.704 4.362v5.519zM5.337 9.432c-1.144 0-1.915-.758-1.915-1.704 0-.951.768-1.703 1.959-1.703 1.188 0 1.914.752 1.939 1.703 0 .946-.751 1.704-1.983 1.704zm1.586 11.02H3.73V9.806h3.193v10.646zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" /></svg>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
