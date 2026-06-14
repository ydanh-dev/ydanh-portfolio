"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const channels = [
  { label: "Phone", value: "(+84) 937 376 797", href: "tel:+84937376797", icon: Phone },
  { label: "LinkedIn", value: "connect", href: "https://linkedin.com", isSVG: true },
  { label: "GitHub", value: "ydanh-dev", href: "https://github.com/ydanh-dev", isSVG: true },
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
          <p className="section-kicker">get-in-touch</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.055em] text-white min-[430px]:text-4xl sm:text-6xl">
            Let's build something <span className="text-gradient text-gradient-live">great together.</span>
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-400">
            I'm open to mobile and frontend opportunities where thoughtful product work and dependable engineering matter. Let's connect and discuss how I can contribute to your team.
          </p>
        </AnimatedSection>

        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <AnimatedSection direction="right">
            <div className="contact-terminal overflow-hidden rounded-[2rem] border border-white/10 bg-[#090912] shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
                <div className="flex gap-1.5"><i className="size-2 rounded-full bg-rose-400/70" /><i className="size-2 rounded-full bg-amber-300/70" /><i className="size-2 rounded-full bg-emerald-400/70" /></div>
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600">contact.ts</span>
              </div>
              <div className="contact-code overflow-hidden p-4 font-mono text-[9px] leading-6 sm:p-7 sm:text-xs sm:leading-7">
                <p><span className="text-violet-300">const</span> <span className="text-indigo-300">developer</span> <span className="text-zinc-500">=</span> {"{"}</p>
                <p className="pl-5"><span className="text-zinc-500">name:</span> <span className="text-emerald-300">&quot;Nguyen Anh Duy&quot;</span>,</p>
                <p className="pl-5"><span className="text-zinc-500">expertise:</span> [<span className="text-emerald-300">&quot;mobile&quot;</span>, <span className="text-emerald-300">&quot;frontend&quot;</span>],</p>
                <p className="pl-5"><span className="text-zinc-500">status:</span> <span className="text-emerald-300">&quot;open_to_opportunities&quot;</span>,</p>
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
              <button type="button" onClick={copyEmail} className="contact-channel group flex w-full items-center gap-4 rounded-[2rem] border border-white/10 bg-white/[0.025] p-5 text-left transition-all hover:border-indigo-400/30 hover:bg-indigo-400/5">
                <span className="flex size-11 items-center justify-center rounded-xl bg-indigo-400/10 text-indigo-300 flex-shrink-0"><Mail className="size-5" /></span>
                <span className="min-w-0 flex-1"><small className="block font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600">Email</small><b className="mt-1 block truncate text-sm text-zinc-200">duynguyen1bb@gmail.com</b></span>
                {copied ? <Check className="size-4 text-emerald-300 flex-shrink-0" /> : <Copy className="size-4 text-zinc-600 transition group-hover:text-indigo-300 flex-shrink-0" />}
              </button>
            </AnimatedSection>
            {channels.map((channel, index) => (
              <AnimatedSection key={channel.label} delay={0.1 + index * 0.04}>
                <a href={channel.href} target={channel.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="contact-channel group flex items-center gap-4 rounded-[2rem] border border-white/10 bg-white/[0.025] p-5 transition-all hover:border-indigo-400/30 hover:bg-indigo-400/5">
                  <span className="flex size-11 items-center justify-center rounded-xl border border-white/8 bg-black/25 text-zinc-400 transition group-hover:text-indigo-300 flex-shrink-0">
                    {channel.isSVG ? (
                      channel.label === "LinkedIn" ? (
                        <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.646h3.554v1.364c.429-.659 1.191-1.599 2.896-1.599 2.117 0 3.704 1.385 3.704 4.362v5.519zM5.337 9.432c-1.144 0-1.915-.758-1.915-1.704 0-.951.768-1.703 1.959-1.703 1.188 0 1.914.752 1.939 1.703 0 .946-.751 1.704-1.983 1.704zm1.586 11.02H3.73V9.806h3.193v10.646zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
                      ) : (
                        <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      )
                    ) : (
                      <Phone className="size-5" />
                    )}
                  </span>
                  <span className="min-w-0 flex-1"><small className="block font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600">{channel.label}</small><b className="mt-1 block truncate text-sm text-zinc-300">{channel.value}</b></span>
                  <ExternalLink className="size-4 text-zinc-700 transition group-hover:translate-x-1 group-hover:text-indigo-300 flex-shrink-0" />
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection delay={0.2} className="mt-24 border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-400 font-medium">
          <span>© {new Date().getFullYear()} Nguyen Anh Duy. All rights reserved.</span>
          <span className="flex items-center gap-2 transition-colors hover:text-indigo-300 cursor-default">
            <MapPin className="size-4 text-indigo-400" /> Binh Duong City, Vietnam
          </span>
        </AnimatedSection>
      </div>
    </section>
  );
}
