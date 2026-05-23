"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Sparkles, GraduationCap, Code2, Award, Zap } from "lucide-react";

const skills = [
  {
    category: "Mobile",
    items: ["Flutter / Dart", "React Native", "iOS & Android", "Provider", "BLoC"],
    icon: <Zap className="w-4 h-4 text-cyan-400 animate-pulse" />,
  },
  {
    category: "Frontend",
    items: ["JavaScript", "HTML / CSS", "Mendix Low-code", "React.js", "Responsive UI"],
    icon: <Code2 className="w-4 h-4 text-indigo-400" />,
  },
  {
    category: "Backend & Tools",
    items: ["RESTful APIs", "Git / GitHub", "Postman", "VS Code", "Android Studio"],
    icon: <Award className="w-4 h-4 text-purple-400" />,
  },
  {
    category: "Testing & Process",
    items: ["Manual Testing", "Test Cases", "Agile / Scrum", "Regression Testing", "JIRA"],
    icon: <GraduationCap className="w-4 h-4 text-pink-400" />,
  },
];

const techHighlights = [
  { name: "Flutter", color: "bg-sky-500" },
  { name: "React Native", color: "bg-blue-500" },
  { name: "TypeScript", color: "bg-blue-600" },
  { name: "REST APIs", color: "bg-green-500" },
  { name: "Mendix", color: "bg-orange-500" },
  { name: "Firebase", color: "bg-yellow-500" },
  { name: "BLoC", color: "bg-purple-500" },
  { name: "Git", color: "bg-orange-600" },
];

// Interactive scroll-revealed counter component
function InViewCounter({ value, duration = 1500, suffix = "" }: { value: number; duration?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(progress * value);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return <span ref={ref}>{Math.floor(count)}{suffix}</span>;
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Motion values for mouse tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Smooth spring physics for 3D tilt
  const springConfig = { damping: 25, stiffness: 120 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), springConfig);
  
  // Counter-tilt for deep background glow to create depth
  const glowX = useSpring(useTransform(x, [-0.5, 0.5], [-25, 25]), springConfig);
  const glowY = useSpring(useTransform(y, [-0.5, 0.5], [-25, 25]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Dynamic Background SVG tech connections to eliminate whitespace */}
      <svg 
        className="absolute inset-0 w-full h-full stroke-indigo-500/10 dark:stroke-indigo-500/5 fill-none pointer-events-none z-0" 
        viewBox="0 0 1200 800" 
        preserveAspectRatio="none"
      >
        <path d="M 0,400 Q 300,500 600,400 T 1200,400" strokeWidth="1" strokeDasharray="5, 10" />
        <path d="M 150,100 L 250,200 L 100,300" strokeWidth="0.75" strokeDasharray="3, 6" />
        <path d="M 1050,700 L 950,600 L 1100,500" strokeWidth="0.75" strokeDasharray="3, 6" />
      </svg>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left: Interactive Visual - 5 cols */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <AnimatedSection direction="right" className="relative">
              <div 
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative group cursor-pointer py-8 px-4"
                style={{ perspective: "1000px" }}
              >
                {/* Pulsating Glowing Backdrop */}
                <motion.div
                  className="absolute inset-0 m-auto w-84 h-84 sm:w-[440px] sm:h-[440px] rounded-full blur-[60px] opacity-40 dark:opacity-50 -z-10 pointer-events-none"
                  style={{
                    x: glowX,
                    y: glowY,
                    backgroundImage: "conic-gradient(from 0deg, #6366f1, #a855f7, #ec4899, #6366f1)",
                  }}
                  animate={{ 
                    rotate: 360,
                    scale: [0.95, 1.05, 0.95]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                  }}
                />

                {/* Image Container with Custom Glow Shadows */}
                <motion.div
                  style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                  className="relative w-76 h-76 sm:w-[380px] sm:h-[380px] mx-auto rounded-full overflow-hidden shadow-[0_0_35px_rgba(99,102,241,0.3)] dark:shadow-[0_0_65px_rgba(168,85,247,0.45)] transition-all duration-500 hover:shadow-[0_0_85px_rgba(168,85,247,0.65)]"
                >
                  <img
                    src="/avatar.jpg"
                    alt="NAD Avatar"
                    className="w-full h-full rounded-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-1"
                  />
                  
                  {/* Vignette */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-black/10 to-black/60 opacity-80 pointer-events-none" />
                </motion.div>

                {/* Floating Glassmorphic Tech highlights */}
                {techHighlights.slice(0, 4).map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    animate={{ 
                      y: [0, -6, 0],
                    }}
                    style={{
                      top: `${12 + i * 22}%`,
                      right: i % 2 === 0 ? "-5%" : "auto",
                      left: i % 2 !== 0 ? "-5%" : "auto",
                    }}
                    className="absolute z-10 backdrop-blur-md bg-white/5 dark:bg-[#0d0c15]/40 border border-white/10 dark:border-white/5 rounded-2xl shadow-xl px-3.5 py-1.5 text-[10px] font-bold text-foreground flex items-center gap-1.5 hover:bg-white/10 dark:hover:bg-neutral-900/60 transition-colors"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${tech.color}`} />
                      <span className={`relative inline-flex rounded-full h-2 w-2 ${tech.color}`} />
                    </span>
                    {tech.name}
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Content - 7 cols */}
          <div className="lg:col-span-7">
            <AnimatedSection>
              <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">
                About Me
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Mobile Developer
                <br />
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Who Ships Great Experiences
                </span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8 text-sm sm:text-base">
                <p>
                  I&apos;m a passionate programmer with a strong foundation in mobile and web development. I graduated with a <strong className="text-foreground">Bachelor of Science in Computing</strong> from FPT Greenwich University and have spent 2+ years honing my craft in the industry.
                </p>
                <p>
                  I specialize in <strong className="text-foreground">Flutter and React Native</strong> for cross-platform mobile development, with solid experience in state management (Provider, BLoC) and REST API integration. I also have hands-on experience with front-end web development using Mendix for enterprise clients.
                </p>
                <p>
                  Beyond coding, I bring a unique edge from my time as a QA Tester — giving me a sharp eye for detail, clean code quality, and user experience. I thrive in collaborative environments and enjoy solving complex problems with simple, maintainable solutions.
                </p>
              </div>
            </AnimatedSection>

            {/* Stats row with Dynamic In-View Counting */}
            <AnimatedSection delay={0.15}>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { value: 2, suffix: "+", label: "Years Experience", colors: "from-cyan-400 to-indigo-500" },
                  { value: 3, suffix: "", label: "Companies", colors: "from-indigo-400 to-purple-500" },
                  { value: 10, suffix: "+", label: "Projects Shipped", colors: "from-purple-400 to-pink-500" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4.5 rounded-2xl bg-zinc-950/20 dark:bg-[#0c0a15]/30 border border-zinc-200/5 dark:border-zinc-800/60 backdrop-blur-xl hover:border-indigo-500/20 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
                    <div className={`text-2xl sm:text-3xl font-black bg-gradient-to-r ${stat.colors} bg-clip-text text-transparent font-mono`}>
                      <InViewCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-zinc-400 mt-2 font-bold font-mono tracking-wider uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Skills grid with elevated micro-glow cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {skills.map((group, i) => (
                <AnimatedSection key={group.category} delay={0.2 + i * 0.05}>
                  <div className="p-5 rounded-2xl bg-zinc-950/20 dark:bg-[#0c0a15]/30 border border-zinc-200/5 dark:border-zinc-800/60 hover:border-indigo-500/30 dark:hover:border-indigo-500/40 backdrop-blur-xl transition-all duration-300 group hover:shadow-[0_12px_30px_rgba(99,102,241,0.08)]">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-indigo-500/5 border border-indigo-500/20 group-hover:scale-105 group-hover:border-indigo-500/40 transition-all duration-300">
                        {group.icon}
                      </div>
                      <h4 className="font-bold text-sm sm:text-base text-zinc-100 group-hover:text-indigo-400 transition-colors duration-300">
                        {group.category}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="text-[10px] sm:text-xs px-2.5 py-1 rounded-lg bg-zinc-900/40 dark:bg-zinc-950/40 border border-zinc-200/5 dark:border-zinc-800/60 text-zinc-400 group-hover:text-zinc-200 group-hover:border-indigo-500/10 hover:!border-indigo-500/30 hover:!text-indigo-400 transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
