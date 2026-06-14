"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about", number: "01" },
  { label: "Work", href: "#projects", number: "02" },
  { label: "Experience", href: "#experience", number: "03" },
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
            <span className="relative z-10 font-mono">~/</span>
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

        <a href="mailto:duynguyen1bb@gmail.com" className="group hidden items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-xs font-bold text-zinc-950 transition-transform hover:-translate-y-0.5 md:inline-flex">
          <span className="font-mono">contact()</span> <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>

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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
