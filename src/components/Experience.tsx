"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Briefcase, CheckCircle, GraduationCap, GitBranch, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Mobile Developer – React Native",
    company: "Apetech Solutions, Ho Chi Minh City",
    period: "Mar 2023 – Present",
    description:
      "Developed and maintained cross-platform mobile applications using React Native for iOS and Android. Integrated third-party APIs and libraries including payment gateways and push notifications. Collaborated with UI/UX designers to implement visually appealing interfaces. Optimized app performance for smooth experiences across devices.",
    technologies: ["React Native", "REST API", "iOS", "Android"],
    icon: <Briefcase className="w-4 h-4 text-cyan-400" />,
    color: "from-cyan-500/20 to-indigo-500/20",
    glow: "shadow-cyan-500/10",
  },
  {
    role: "Software Tester – Manual (Full-time)",
    company: "Apetech Solutions, Ho Chi Minh City",
    period: "Nov 2022 – Mar 2023",
    description:
      "Conducted manual testing for web and mobile applications to identify bugs, defects, and usability issues. Developed and executed detailed test cases and test scripts. Performed regression, functional, and cross-browser testing to validate updates. Collaborated with developers to reproduce and resolve bugs, ensuring high-quality releases.",
    technologies: ["Manual Testing", "Test Cases", "Regression Testing", "Agile"],
    icon: <CheckCircle className="w-4 h-4 text-emerald-400" />,
    color: "from-emerald-500/20 to-teal-500/20",
    glow: "shadow-emerald-500/10",
  },
  {
    role: "Front-end Developer – Mendix",
    company: "Kyanon Digital, Ho Chi Minh City",
    period: "Aug 2022 – Nov 2022",
    description:
      "Designed and developed responsive web applications using Mendix low-code platform for enterprise clients. Worked with UI/UX designers to translate wireframes and mockups into functional interfaces. Collaborated with backend developers for API integration and smooth data flow. Conducted performance testing and optimization for speed and scalability.",
    technologies: ["Mendix", "JavaScript", "HTML/CSS", "REST API"],
    icon: <GitBranch className="w-4 h-4 text-orange-400" />,
    color: "from-orange-500/20 to-amber-500/20",
    glow: "shadow-orange-500/10",
  },
  {
    role: "Mobile Developer (Flutter) – Internship",
    company: "NATA Vietnam JSC, Ho Chi Minh City",
    period: "Feb 2022 – May 2022",
    description:
      "Collaborated with a team of developers to design, develop, and maintain mobile applications using Flutter and Dart. Participated in daily stand-up meetings. Designed and implemented responsive UI screens for cross-platform apps. Integrated RESTful APIs. Applied state management using Provider and BLoC patterns.",
    technologies: ["Flutter", "Dart", "Provider", "BLoC", "REST API"],
    icon: <GraduationCap className="w-4 h-4 text-pink-400" />,
    color: "from-pink-500/20 to-rose-500/20",
    glow: "shadow-pink-500/10",
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of the entire timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Smooth scroll height animation for timeline path filling
  const fillY = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });

  return (
    <section id="experience" ref={containerRef} className="py-24 sm:py-32 relative overflow-hidden bg-secondary/10 dark:bg-[#07060d]">
      
      {/* Background radial soft light blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-950/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-indigo-500/5 dark:bg-indigo-950/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Title Section */}
        <AnimatedSection className="text-center mb-20">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">
            Career
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Work Experience
          </h2>
        </AnimatedSection>

        {/* Timeline track container */}
        <div className="relative">
          
          {/* Default Background Gray Track Line */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-[2px] bg-white/5 dark:bg-zinc-800/40 md:-translate-x-1/2 pointer-events-none" />
          
          {/* Animated Scroll-Filling Glow Line */}
          <motion.div
            style={{ scaleY: fillY, originY: 0 }}
            className="absolute left-4 md:left-1/2 top-2 bottom-2 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 md:-translate-x-1/2 pointer-events-none shadow-[0_0_12px_rgba(99,102,241,0.5)] z-20"
          />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                <div
                  className={`relative flex flex-col md:flex-row gap-8 md:gap-12 ${
                    i % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Timeline Dot Indicator */}
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-neutral-900 dark:bg-zinc-950 border-2 border-indigo-500 md:-translate-x-1/2 -translate-x-1/2 mt-2.5 z-30 flex items-center justify-center shadow-[0_0_10px_rgba(99,102,241,0.4)]"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 animate-pulse" />
                  </motion.div>

                  {/* Experience Card */}
                  <div
                    className={`flex-1 ml-10 md:ml-0 ${
                      i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02, y: -4 }}
                      transition={{ type: "spring", stiffness: 200, damping: 18 }}
                      className={`p-6 sm:p-7 rounded-2xl bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 hover:border-indigo-500/20 backdrop-blur-sm transition-all duration-300 shadow-sm hover:shadow-xl ${exp.glow}`}
                    >
                      {/* Period Badge */}
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r ${exp.color} text-[10px] sm:text-xs font-bold text-foreground mb-4`}>
                        <Calendar className="w-3 h-3 opacity-80" />
                        <span>{exp.period}</span>
                      </div>

                      {/* Header */}
                      <div className={`flex flex-col ${i % 2 === 0 ? "md:items-end" : "items-start"} gap-1 mb-4`}>
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                            {exp.icon}
                          </div>
                          <h3 className="text-base sm:text-lg font-bold tracking-tight">{exp.role}</h3>
                        </div>
                        <p className="text-xs sm:text-sm text-primary font-medium">
                          {exp.company}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5">
                        {exp.description}
                      </p>

                      {/* Technologies Pills */}
                      <div
                        className={`flex flex-wrap gap-1.5 ${
                          i % 2 === 0 ? "md:justify-end" : "justify-start"
                        }`}
                      >
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] px-2.5 py-1 rounded-lg bg-white/[0.02] border border-white/5 text-muted-foreground hover:text-foreground transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
