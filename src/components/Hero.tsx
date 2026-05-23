"use client";

import { SPRING_BOUNCY } from "@/lib/spring";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { Cpu, GitBranch, Layers, ShieldCheck } from "lucide-react";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import PhoneMockup from "./PhoneMockup";

const stagger = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: i * 0.12, ...SPRING_BOUNCY },
  }),
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax Scroll Tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Mouse Coordinate Tracking for 3D Parallax Tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 90 };

  // Smooth rotational spring coordinates
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

  // Counter tilt for text card
  const textRotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [-4, 4]), springConfig);
  const textRotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [4, -4]), springConfig);

  // Floating Parallax Depth offsets
  const depthFarX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);
  const depthFarY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-12, 12]), springConfig);

  const depthMidX = useSpring(useTransform(mouseX, [-0.5, 0.5], [20, -20]), springConfig);
  const depthMidY = useSpring(useTransform(mouseY, [-0.5, 0.5], [20, -20]), springConfig);

  const depthCloseX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-35, 35]), springConfig);
  const depthCloseY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-35, 35]), springConfig);

  // Dynamic Scroll-linked Laser flow & Parallax offsets
  const laserY1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const laserY2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const springLaserY1 = useSpring(laserY1, { stiffness: 80, damping: 25 });
  const springLaserY2 = useSpring(laserY2, { stiffness: 80, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = e.clientX - rect.left - width / 2;
    const y = e.clientY - rect.top - height / 2;
    mouseX.set(x / width);
    mouseY.set(y / height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 lg:py-0 select-none"
    >
      {/* Parallax Background Gradient */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-gradient-to-br from-indigo-50/40 via-purple-50/30 to-pink-50/20 dark:from-[#080710] dark:via-[#0c0a15] dark:to-[#090812] -z-20"
      />

      {/* Stunning Interactive SVG Tech Mesh & Laser Grid */}
      <svg
        className="absolute inset-0 w-full h-full stroke-indigo-500/10 dark:stroke-indigo-500/5 fill-none pointer-events-none z-0"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        {/* Subtle grid pattern */}
        <defs>
          <pattern id="grid-mesh" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeOpacity="0.05" strokeWidth="0.5" />
          </pattern>
          <linearGradient id="laser-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
            <stop offset="35%" stopColor="#6366f1" stopOpacity="0.35" />
            <stop offset="70%" stopColor="#d946ef" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#d946ef" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-mesh)" />

        {/* Flowing laser connections filling the whitespace gap */}
        <motion.path
          d="M 150,220 L 350,220 L 480,350 L 720,350 L 850,480 Q 980,480 980,350"
          stroke="url(#laser-grad)"
          strokeWidth="1.5"
          strokeDasharray="15, 20"
          animate={{ strokeDashoffset: [-150, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          style={{ y: springLaserY1 }}
        />
        <motion.path
          d="M 200,600 L 400,600 L 520,450 L 760,450 L 880,300"
          stroke="url(#laser-grad)"
          strokeWidth="1"
          strokeDasharray="8, 12"
          animate={{ strokeDashoffset: [150, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ y: springLaserY2 }}
        />
      </svg>

      {/* Decorative Blobs with Parallax shifting */}
      <motion.div
        style={{ x: depthFarX, y: depthFarY }}
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 45, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 right-12 w-80 h-80 bg-purple-400/20 dark:bg-purple-900/10 rounded-full blur-[90px] -z-10"
      />
      <motion.div
        style={{ x: depthMidX, y: depthMidY }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -45, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-16 left-12 w-[420px] h-[420px] bg-indigo-400/20 dark:bg-indigo-900/10 rounded-full blur-[100px] -z-10"
      />

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-6 py-20 lg:py-32 grid lg:grid-cols-12 gap-16 items-center"
      >
        {/* Left Content Card - Interactive 3D tilt */}
        <motion.div
          style={{ rotateX: textRotateX, rotateY: textRotateY }}
          className="lg:col-span-7 text-center lg:text-left relative z-10"
        >
          {/* Status Badge */}
          <motion.div
            custom={0}
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100/80 dark:bg-indigo-950/40 border border-indigo-200/30 dark:border-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-6 shadow-sm backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
            </span>
            Open to opportunities
          </motion.div>

          <motion.h1
            custom={1}
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-4"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(99,102,241,0.15)]">
              Nguyen Anh Duy
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="text-lg sm:text-xl font-medium text-foreground/80 dark:text-zinc-300 mb-2"
          >
            Mobile & Front-end Developer
          </motion.p>

          <motion.p
            custom={3}
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="text-sm sm:text-base text-muted-foreground/80 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
          >
            2+ years building mobile apps with Flutter & React Native. Passionate about crafting smooth, user-focused experiences that ship to production.
          </motion.p>

          {/* Action Links */}
          <motion.div
            custom={4}
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Glowing hover border inside button */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              View My Work
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-background/50 backdrop-blur-sm font-semibold hover:bg-muted transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Phone Mockup & Badges Container */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">

          {/* FLOATING GLASSMORPHIC TECH BADGES - Fills whitespace and moves with parallax */}

          {/* Badge 1: React Native (Top Left) */}
          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-6 -left-24 z-20 backdrop-blur-md bg-white/5 dark:bg-[#0d0c15]/40 border border-white/10 dark:border-white/5 rounded-2xl shadow-xl px-3 py-1.5 text-[10px] font-bold text-foreground flex items-center gap-2 hover:bg-white/10 dark:hover:bg-neutral-900/60 transition-colors cursor-pointer pointer-events-none sm:pointer-events-auto"
          >
            <Layers className="w-3.5 h-3.5 text-indigo-400 animate-spin" style={{ animationDuration: "10s" }} />
            React Native
          </motion.div>

          {/* Badge 2: Zustand (Bottom Left) */}
          <motion.div
            animate={{ y: [6, -6, 6] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-20 -left-28 z-20 backdrop-blur-md bg-white/5 dark:bg-[#0d0c15]/40 border border-white/10 dark:border-white/5 rounded-2xl shadow-xl px-3 py-1.5 text-[10px] font-bold text-foreground flex items-center gap-2 hover:bg-white/10 dark:hover:bg-neutral-900/60 transition-colors cursor-pointer pointer-events-none sm:pointer-events-auto"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
            </span>
            Zustand State
          </motion.div>

          {/* Badge 3: React Query (Top Right) */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            className="absolute top-10 -right-24 z-20 backdrop-blur-md bg-white/5 dark:bg-[#0d0c15]/40 border border-white/10 dark:border-white/5 rounded-2xl shadow-xl px-3 py-1.5 text-[10px] font-bold text-foreground flex items-center gap-2 hover:bg-white/10 dark:hover:bg-neutral-900/60 transition-colors cursor-pointer pointer-events-none sm:pointer-events-auto"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500" />
            </span>
            React Query
          </motion.div>

          {/* Badge 4: Axios HTTP (Bottom Right) */}
          <motion.div
            animate={{ y: [5, -5, 5] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
            className="absolute bottom-12 -right-24 z-20 backdrop-blur-md bg-white/5 dark:bg-[#0d0c15]/40 border border-white/10 dark:border-white/5 rounded-2xl shadow-xl px-3 py-1.5 text-[10px] font-bold text-foreground flex items-center gap-2 hover:bg-white/10 dark:hover:bg-neutral-900/60 transition-colors cursor-pointer pointer-events-none sm:pointer-events-auto"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Axios API
          </motion.div>

          {/* Badge 5: TypeScript (Middle Left) */}
          <motion.div
            animate={{ x: [-4, 4, -4] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="absolute top-1/2 -left-36 -translate-y-1/2 z-20 backdrop-blur-md bg-white/5 dark:bg-[#0d0c15]/40 border border-white/10 dark:border-white/5 rounded-2xl shadow-xl px-3 py-1.5 text-[9px] font-bold text-foreground flex items-center gap-2 pointer-events-none sm:pointer-events-auto"
          >
            <Cpu className="w-3.5 h-3.5 text-yellow-500" />
            <span>TypeScript</span>
          </motion.div>

          {/* Core Phone Mockup Container - 3D Mouse Parallax Spring Rotate */}
          <AnimatedSection direction="right" className="relative">
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              initial={{ opacity: 0, x: 60, rotateY: -20 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ ...SPRING_BOUNCY, delay: 0.4 }}
              className="relative relative-3d"
            >
              {/* Extra radial backdrop glow matching the stained glass palette */}
              <div className="absolute inset-[-40px] bg-gradient-to-tr from-indigo-500/10 via-purple-500/15 to-pink-500/10 rounded-full blur-[50px] -z-10 pointer-events-none" />

              <PhoneMockup
                width={240}
                height={480}
                className="drop-shadow-[0_25px_50px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_30px_60px_rgba(99,102,241,0.2)]"
              />

              {/* Hover highlight overlay effect */}
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
            </motion.div>
          </AnimatedSection>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
