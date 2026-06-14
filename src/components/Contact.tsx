"use client";

import { useState } from "react";
import { ArrowUpRight, BriefcaseBusiness, Check, Code2, Copy, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const channels = [
  { label: "Phone", value: "(+84) 937 376 797", href: "tel:+84937376797", icon: Phone },
  { label: "LinkedIn", value: "connect", href: "https://linkedin.com", icon: BriefcaseBusiness },
  { label: "GitHub", value: "ydanh-dev", href: "https://github.com/ydanh-dev", icon: Code2 },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("duynguyen1bb@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="contact-zone relative overflow-hidden py-16 sm:py-32">
      <div className="profile-grid absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection className="mb-9 max-w-3xl sm:mb-12">
          <p className="section-kicker">start-a-conversation</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.055em] text-white min-[430px]:text-4xl sm:text-6xl">
            Have a problem worth <span className="text-gradient text-gradient-live">building for?</span>
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-400">I am open to mobile and frontend opportunities where thoughtful product work and dependable engineering matter.</p>
        </AnimatedSection>

        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <AnimatedSection direction="right">
            <div className="contact-terminal overflow-hidden rounded-[2rem] border border-white/10 bg-[#090912] shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
                <div className="flex gap-1.5"><i className="size-2 rounded-full bg-rose-400/70" /><i className="size-2 rounded-full bg-amber-300/70" /><i className="size-2 rounded-full bg-emerald-400/70" /></div>
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600">new-opportunity.ts</span>
              </div>
              <div className="contact-code overflow-hidden p-4 font-mono text-[9px] leading-6 sm:p-7 sm:text-xs sm:leading-7">
                <p><span className="text-violet-300">const</span> <span className="text-indigo-300">developer</span> <span className="text-zinc-500">=</span> {"{"}</p>
                <p className="pl-5"><span className="text-zinc-500">name:</span> <span className="text-emerald-300">&quot;Nguyen Anh Duy&quot;</span>,</p>
                <p className="pl-5"><span className="text-zinc-500">focus:</span> [<span className="text-emerald-300">&quot;mobile&quot;</span>, <span className="text-emerald-300">&quot;frontend&quot;</span>],</p>
                <p className="pl-3 sm:pl-5"><span className="text-zinc-500">status:</span> <span className="text-emerald-300">&quot;open_to_opportunities&quot;</span>,</p>
                <p className="pl-5"><span className="text-zinc-500">location:</span> <span className="text-emerald-300">&quot;Binh Duong, Vietnam&quot;</span></p>
                <p>{"};"}</p>
                <p className="mt-5 text-zinc-600"><span className="text-indigo-300">$</span> developer.connect()<span className="terminal-caret ml-1 inline-block h-3 w-1 bg-indigo-300" /></p>
              </div>
              <div className="border-t border-white/8 p-5 sm:p-7">
                <a href="mailto:duynguyen1bb@gmail.com" className="magnetic-button inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3 text-xs font-black text-zinc-950">
                  Send an email <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid gap-5">
            <AnimatedSection delay={0.06}>
              <button type="button" onClick={copyEmail} className="contact-channel group flex w-full items-center gap-4 rounded-[2rem] border border-white/10 bg-white/[0.025] p-5 text-left">
                <span className="flex size-11 items-center justify-center rounded-xl bg-indigo-400/10 text-indigo-300"><Mail className="size-5" /></span>
                <span className="min-w-0 flex-1"><small className="block font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600">Primary email</small><b className="mt-1 block truncate text-sm text-zinc-200">duynguyen1bb@gmail.com</b></span>
                {copied ? <Check className="size-4 text-emerald-300" /> : <Copy className="size-4 text-zinc-600 transition group-hover:text-indigo-300" />}
              </button>
            </AnimatedSection>
            {channels.map((channel, index) => (
              <AnimatedSection key={channel.label} delay={0.1 + index * 0.04}>
                <a href={channel.href} target={channel.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="contact-channel group flex items-center gap-4 rounded-[2rem] border border-white/10 bg-white/[0.025] p-5">
                  <span className="flex size-11 items-center justify-center rounded-xl border border-white/8 bg-black/25 text-zinc-400 transition group-hover:text-indigo-300"><channel.icon className="size-5" /></span>
                  <span className="min-w-0 flex-1"><small className="block font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600">{channel.label}</small><b className="mt-1 block truncate text-sm text-zinc-300">{channel.value}</b></span>
                  <span className="text-zinc-700 transition group-hover:translate-x-1 group-hover:text-indigo-300">→</span>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection delay={0.2} className="mt-24 border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-400 font-medium">
          <span>© {new Date().getFullYear()} Nguyen Anh Duy</span>
          <span className="flex items-center gap-2 transition-colors hover:text-indigo-300 cursor-default">
            <MapPin className="size-4 text-indigo-400" /> Binh Duong City, Vietnam
          </span>
        </AnimatedSection>
      </div>
    </section>
  );
}
