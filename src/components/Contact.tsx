"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Mail, Phone, MapPin, Award, Copy, Check } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/ydanh-dev",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Gmail",
    href: "mailto:duynguyen1bb@gmail.com",
    icon: (
      <Mail className="w-5 h-5" />
    ),
  },
];

const certs = [
  { name: "Flutter & Dart – The Complete Guide", issuer: "Udemy", year: "2022" },
  { name: "React Native – The Practical Guide", issuer: "Udemy", year: "2023" },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("duynguyen1bb@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden bg-background dark:bg-[#06050b]">
      
      {/* Background SVG mesh and rotating laser rings to close the portfolio with a premium visual climax */}
      <svg 
        className="absolute inset-0 w-full h-full stroke-indigo-500/10 dark:stroke-indigo-500/5 fill-none pointer-events-none z-0" 
        viewBox="0 0 1200 800" 
        preserveAspectRatio="none"
      >
        <motion.circle 
          cx="600" 
          cy="400" 
          r="250" 
          strokeWidth="0.5" 
          strokeDasharray="10, 20" 
          animate={{ rotate: 360 }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          style={{ originX: "600px", originY: "400px" }}
        />
        <motion.circle 
          cx="600" 
          cy="400" 
          r="350" 
          strokeWidth="0.5" 
          strokeDasharray="5, 10" 
          animate={{ rotate: -360 }}
          transition={{ duration: 110, repeat: Infinity, ease: "linear" }}
          style={{ originX: "600px", originY: "400px" }}
        />
        <circle cx="600" cy="400" r="450" strokeWidth="0.25" />
      </svg>

      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/5 dark:bg-pink-950/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-12 left-1/4 w-[350px] h-[350px] bg-indigo-500/5 dark:bg-indigo-950/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
        
        {/* Title */}
        <AnimatedSection>
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
            Let&apos;s Build Something
            <br />
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(99,102,241,0.15)]">
              Amazing Together
            </span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto mb-16 leading-relaxed">
            I&apos;m currently open to new opportunities. Whether you have a project in mind, want to collaborate, or just want to say hi — feel free to connect with me!
          </p>
        </AnimatedSection>

        {/* Unified Glassmorphic Contact Cockpit */}
        <AnimatedSection delay={0.1}>
          <div className="relative bg-zinc-900/10 dark:bg-[#0b0914]/40 border border-zinc-200/10 dark:border-zinc-800/40 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.35)] overflow-hidden">
            {/* Ambient inner glows */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-[70px] pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-pink-500/10 dark:bg-pink-500/5 rounded-full blur-[70px] pointer-events-none" />

            {/* Email clipboard action */}
            <div className="relative group mb-6">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl opacity-10 group-hover:opacity-25 blur-md transition duration-500" />
              
              <button
                onClick={handleCopyEmail}
                className="relative w-full z-10 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-zinc-900/60 dark:bg-[#0c0a15]/90 border border-zinc-800/30 dark:border-zinc-800/60 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-4 text-left">
                  <div className="p-3.5 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mb-0.5">Primary Email</p>
                    <p className="text-base sm:text-lg font-bold text-foreground selection:bg-indigo-500/30">duynguyen1bb@gmail.com</p>
                  </div>
                </div>

                {/* Copy Status Badge */}
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800/40 hover:bg-zinc-800/80 dark:bg-zinc-800/40 dark:hover:bg-zinc-800/80 transition-colors text-xs font-semibold text-zinc-300 border border-zinc-700/20 dark:border-zinc-800/60">
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 opacity-75" />
                      <span>Copy Email</span>
                    </>
                  )}
                </div>
              </button>
            </div>

            {/* Phone & Location channels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {/* Phone channel */}
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-zinc-950/20 dark:bg-zinc-950/30 border border-zinc-800/30 dark:border-zinc-800/50 hover:border-emerald-500/20 dark:hover:border-emerald-500/20 transition-all duration-300">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest mb-0.5">Call / Zalo</p>
                  <a href="tel:+84937376797" className="text-sm font-semibold hover:text-emerald-400 transition-colors">(+84) 937 376 797</a>
                </div>
              </div>

              {/* Location channel */}
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-zinc-950/20 dark:bg-zinc-950/30 border border-zinc-800/30 dark:border-zinc-800/50 hover:border-pink-500/20 dark:hover:border-pink-500/20 transition-all duration-300">
                <div className="p-2.5 rounded-xl bg-pink-500/10 text-pink-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest mb-0.5">Location</p>
                  <p className="text-sm font-semibold text-zinc-300">Binh Duong, Vietnam</p>
                </div>
              </div>
            </div>

            {/* Certifications badge area */}
            <div className="pt-6 border-t border-zinc-200/5 dark:border-zinc-800/60">
              <h4 className="text-[10px] sm:text-xs uppercase tracking-widest font-extrabold text-zinc-400 flex items-center justify-center gap-2 mb-4">
                <Award className="w-4 h-4 text-yellow-400 animate-pulse" /> Verified Certifications
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certs.map((cert) => (
                  <motion.div
                    key={cert.name}
                    whileHover={{ y: -2 }}
                    className="flex flex-col items-start text-left p-4.5 rounded-2xl bg-zinc-950/20 dark:bg-[#0f0c1b]/30 border border-zinc-800/30 dark:border-zinc-800/50 hover:border-yellow-500/20 dark:hover:border-yellow-500/20 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between w-full mb-1.5">
                      <span className="text-[9px] px-2 py-0.5 rounded bg-yellow-500/10 text-yellow-500 font-extrabold uppercase tracking-widest">{cert.issuer} Verified</span>
                      <span className="text-[9px] text-muted-foreground font-mono bg-white/5 px-1.5 py-0.5 rounded">({cert.year})</span>
                    </div>
                    <p className="text-sm font-bold text-foreground leading-snug">{cert.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </AnimatedSection>

        {/* Social connections */}
        <AnimatedSection delay={0.18} className="mt-8">
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.name === "Gmail" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-zinc-900/20 dark:bg-zinc-950/40 border border-zinc-200/5 dark:border-zinc-800/50 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 hover:bg-indigo-500/5 dark:hover:bg-indigo-500/5 text-foreground transition-all duration-300 flex items-center justify-center"
                aria-label={link.name}
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </AnimatedSection>

        {/* Footer */}
        <AnimatedSection delay={0.25}>
          <div className="mt-20 pt-8 border-t border-zinc-200/5 dark:border-zinc-800/40">
            <p className="text-xs text-muted-foreground font-medium">
              &copy; {new Date().getFullYear()} Nguyen Anh Duy. Built with Next.js, Framer Motion & Tailwind CSS.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
