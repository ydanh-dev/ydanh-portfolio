"use client";

import { motion } from "framer-motion";
import {
  ArrowDownRight,
  CheckCircle2,
  ChevronRight,
  FileCode2,
  FileJson2,
  FileText,
  Folder,
  GitBranch,
  Mail,
  Terminal,
} from "lucide-react";
import { useState } from "react";

type TabId = "readme" | "projects" | "activity";

const tabs: { id: TabId; label: string; icon: typeof FileText }[] = [
  { id: "readme", label: "README.md", icon: FileText },
  { id: "projects", label: "projects.ts", icon: FileCode2 },
  { id: "activity", label: "activity.log", icon: FileJson2 },
];

const files = [
  { label: "README.md", tab: "readme" as TabId, icon: FileText },
  { label: "projects.ts", tab: "projects" as TabId, icon: FileCode2 },
  { label: "activity.log", tab: "activity" as TabId, icon: FileJson2 },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState<TabId>("readme");

  return (
    <section id="hero" className="workspace-hero relative overflow-hidden px-3 pb-8 pt-17 sm:px-6 sm:pb-14 sm:pt-24">
      <div className="mx-auto max-w-7xl">
        <div className="workspace-window overflow-hidden border border-white/10 bg-[#090d11] shadow-[0_30px_100px_rgba(0,0,0,.4)]">
          <div className="workspace-titlebar flex h-11 items-center border-b border-white/10 bg-[#10151b] px-3">
            <div className="flex gap-1.5"><i className="size-2 rounded-full bg-rose-400/80" /><i className="size-2 rounded-full bg-amber-300/80" /><i className="size-2 rounded-full bg-emerald-400/80" /></div>
            <div className="mx-auto flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.1em] text-zinc-500 sm:text-[9px] sm:tracking-[0.15em]">
              <Folder className="size-3 text-amber-300" /> ydanh-portfolio / workspace
            </div>
            <span className="hidden font-mono text-[8px] text-emerald-400 sm:block">● ONLINE</span>
          </div>

          <div className="grid min-w-0 lg:grid-cols-[13rem_minmax(0,1fr)_17rem]">
            <aside className="workspace-sidebar hidden border-r border-white/10 bg-[#0d1217] p-3 lg:block">
              <p className="mb-3 px-2 font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-600">Explorer</p>
              <div className="mb-2 flex items-center gap-1.5 px-2 font-mono text-[10px] font-bold text-zinc-300"><ChevronRight className="size-3 rotate-90" /><Folder className="size-3 text-amber-300" /> ANH-DUY.DEV</div>
              <div className="space-y-0.5">
                {files.map((file) => (
                  <button key={file.tab} type="button" onClick={() => setActiveTab(file.tab)} className={`flex w-full items-center gap-2 px-5 py-1.5 text-left font-mono text-[10px] transition ${activeTab === file.tab ? "bg-white/[0.06] text-zinc-100" : "text-zinc-500 hover:bg-white/[0.03] hover:text-zinc-300"}`}>
                    <file.icon className={`size-3 ${file.tab === "projects" ? "text-sky-300" : file.tab === "activity" ? "text-amber-300" : "text-zinc-400"}`} /> {file.label}
                  </button>
                ))}
              </div>
              <div className="mt-6 border-t border-white/8 pt-4">
                <p className="mb-3 px-2 font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-600">Source control</p>
                <div className="flex items-center gap-2 px-2 font-mono text-[9px] text-zinc-500"><GitBranch className="size-3 text-emerald-400" /> master <span className="ml-auto text-emerald-400">clean</span></div>
              </div>
            </aside>

            <main className="min-w-0">
              <div className="flex overflow-x-auto border-b border-white/10 bg-[#0d1217]">
                {tabs.map((tab) => (
                  <button key={tab.id} type="button" onClick={() => setActiveTab(tab.id)} className={`relative flex shrink-0 items-center gap-2 border-r border-white/8 px-4 py-3 font-mono text-[9px] transition ${activeTab === tab.id ? "bg-[#090d11] text-zinc-200" : "text-zinc-600 hover:text-zinc-300"}`}>
                    <tab.icon className="size-3" /> {tab.label}
                    {activeTab === tab.id && <motion.span layoutId="editor-tab" className="absolute inset-x-0 top-0 h-px bg-amber-300" />}
                  </button>
                ))}
              </div>
              <div className="workspace-editor p-5 sm:min-h-[34rem] sm:p-8 lg:min-h-[39rem]">
                {activeTab === "readme" && <Readme />}
                {activeTab === "projects" && <ProjectsFile />}
                {activeTab === "activity" && <ActivityLog />}
              </div>
            </main>

            <aside className="workspace-terminal hidden border-t border-white/10 bg-[#080c10] md:block lg:border-l lg:border-t-0">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 font-mono text-[9px] uppercase tracking-[0.15em] text-zinc-500"><Terminal className="size-3" /> terminal</div>
              <div className="space-y-4 p-4 font-mono text-[9px] leading-5">
                <p><span className="text-emerald-400">duy@portfolio</span><span className="text-zinc-600">:</span><span className="text-sky-300">~</span><span className="text-zinc-500">$ whoami</span></p>
                <p className="text-zinc-300">mobile_product_engineer</p>
                <p><span className="text-emerald-400">duy@portfolio</span><span className="text-zinc-600">:</span><span className="text-sky-300">~</span><span className="text-zinc-500">$ status --short</span></p>
                <div className="space-y-2 border-l border-white/10 pl-3">
                  <TerminalLine label="React Native" value="production" />
                  <TerminalLine label="Flutter" value="ready" />
                  <TerminalLine label="TypeScript" value="strict" />
                  <TerminalLine label="target.fps" value="60" />
                </div>
                <p><span className="text-emerald-400">duy@portfolio</span><span className="text-zinc-600">:</span><span className="text-sky-300">~</span><span className="text-zinc-500">$ availability</span></p>
                <p className="text-amber-300">open_to_opportunities=true</p>
              </div>
            </aside>
          </div>

          <div className="workspace-statusbar flex items-center gap-4 overflow-x-auto bg-amber-400 px-3 py-1.5 font-mono text-[8px] font-bold uppercase text-[#161006]">
            <span className="flex items-center gap-1"><GitBranch className="size-3" /> master*</span>
            <span>0 errors</span><span>0 warnings</span><span className="ml-auto">TypeScript</span><span>UTF-8</span><span>Ln 1, Col 1</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Readme() {
  return (
    <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
      <p className="mb-5 font-mono text-[10px] italic text-zinc-600">{"// README.md — developer profile"}</p>
      <h1 className="font-mono text-3xl font-black leading-tight tracking-[-0.06em] text-zinc-100 sm:text-5xl lg:text-6xl">
        Nguyen Anh Duy<span className="text-amber-300">_</span>
      </h1>
      <p className="mt-3 max-w-2xl font-mono text-xs leading-5 text-emerald-400 sm:text-sm">Mobile Developer · Front-end Engineer · Product-minded</p>
      <p className="mt-7 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
        I build production mobile systems for operational teams: state-heavy workflows,
        API integrations, performance-sensitive interfaces, and releases that survive real users.
      </p>
      <div className="mobile-runtime mt-6 grid grid-cols-2 gap-2 font-mono sm:hidden">
        <p><span>runtime</span><strong>React Native</strong></p>
        <p><span>build</span><strong>passing</strong></p>
        <p><span>TypeScript</span><strong>strict</strong></p>
        <p><span>target.fps</span><strong>60</strong></p>
      </div>
      <div className="mt-8 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
        {[["03+", "years_shipping"], ["04", "production_systems"], ["60", "target_fps"]].map(([value, label]) => (
          <div key={label} className="bg-[#0b1015] p-4"><p className="font-mono text-2xl font-black text-amber-300">{value}</p><p className="mt-1 font-mono text-[9px] text-zinc-600">{label}</p></div>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#projects" className="inline-flex items-center gap-2 bg-amber-400 px-4 py-3 font-mono text-xs font-black text-[#161006]">▶ open projects.ts <ArrowDownRight className="size-4" /></a>
        <a href="mailto:duynguyen1bb@gmail.com" className="inline-flex items-center gap-2 border border-white/15 px-4 py-3 font-mono text-xs text-zinc-300"><Mail className="size-4" /> contact()</a>
      </div>
    </motion.div>
  );
}

function ProjectsFile() {
  const projects = ["GreenLeaf / fleet tracking", "Kim Tin / factory logistics", "NTSS / rental operations", "Flutter Shop / commerce"];
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-mono text-[11px] leading-7">
      <p><span className="text-violet-300">export const</span> <span className="text-sky-300">productionProjects</span> = {"["}</p>
      {projects.map((project, index) => <p key={project} className="pl-4 text-zinc-400"><span className="mr-3 select-none text-zinc-700">{String(index + 2).padStart(2, "0")}</span><span className="text-amber-200">&quot;{project}&quot;</span>,</p>)}
      <p>{"]"} <span className="text-zinc-600">as const;</span></p>
      <p className="mt-7 text-zinc-600">{"// Scroll to projects for architecture, scope and outcomes."}</p>
    </motion.div>
  );
}

function ActivityLog() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3 font-mono text-[10px]">
      {[
        ["HEAD", "feat", "ship React Native operational workflows"],
        ["a14f8e", "perf", "reduce rendering work on mobile"],
        ["891c2d", "test", "cover release-critical edge cases"],
        ["6b40aa", "refactor", "simplify API and state boundaries"],
      ].map(([hash, type, message]) => <div key={hash} className="grid grid-cols-[3.5rem_4rem_1fr] gap-3 border-b border-white/8 py-3"><span className="text-amber-300">{hash}</span><span className="text-emerald-400">{type}</span><span className="text-zinc-400">{message}</span></div>)}
    </motion.div>
  );
}

function TerminalLine({ label, value }: { label: string; value: string }) {
  return <p className="flex justify-between gap-4"><span className="text-zinc-500">{label}</span><span className="text-emerald-400"><CheckCircle2 className="mr-1 inline size-3" />{value}</span></p>;
}
