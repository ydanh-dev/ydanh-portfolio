"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { type MouseEvent, type PointerEvent, useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Asterisk,
  Braces,
  Check,
  Copy,
  Database,
  Gauge,
  Layers3,
  Menu,
  MoveUpRight,
  Network,
  RotateCcw,
  Smartphone,
  X,
} from "lucide-react";
import { projectsData, type Project } from "@/data/projects";
import styles from "./PortfolioExperience.module.css";

const ArchitectureScene = dynamic(() => import("./ArchitectureScene"), { ssr: false });

const rise = {
  hidden: { opacity: 0, y: 42, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: .72, ease: [0.22, 1, 0.36, 1] as const } },
};

const projectCopy = {
  hidden: {},
  show: { transition: { staggerChildren: .065, delayChildren: .16 } },
  exit: { transition: { staggerChildren: .025, staggerDirection: -1 } },
};

const projectLine = {
  hidden: { opacity: 0, y: 18, filter: "blur(7px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: .48, ease: [0.22, 1, 0.36, 1] as const } },
  exit: { opacity: 0, y: -10, filter: "blur(5px)", transition: { duration: .18 } },
};

const approachSteps = [
  {
    number: "01",
    label: "Understand",
    code: "problem → constraints",
    title: "Find the operational pressure.",
    description: "Map who is doing the work, where the flow breaks, and what must still work on a busy day.",
    output: ["User and role map", "Failure states", "Delivery boundary"],
  },
  {
    number: "02",
    label: "Shape",
    code: "flow → interface",
    title: "Make the complex flow legible.",
    description: "Turn dense business rules into a compact interface with clear decisions and progressive disclosure.",
    output: ["Task-first flow", "State model", "Interaction prototype"],
  },
  {
    number: "03",
    label: "Engineer",
    code: "UI ↔ state ↔ API",
    title: "Connect the whole product system.",
    description: "Design predictable state, resilient API contracts, device integrations, and performance budgets together.",
    output: ["API contracts", "State ownership", "Performance budget"],
  },
  {
    number: "04",
    label: "Release",
    code: "test → observe → improve",
    title: "Ship with evidence, not hope.",
    description: "Validate edge cases, release deliberately, observe real behavior, and feed the learning into the next iteration.",
    output: ["Release checklist", "Regression coverage", "Iteration signals"],
  },
];

const history = [
  ["2023 — NOW", "Apetech Solutions", "Mobile Engineer", "Product ownership", "Own mobile features from interface decisions through API integration, testing, release, and iteration."],
  ["2022 — 2023", "Apetech Solutions", "Software Tester", "Quality systems", "Built the quality instincts that now shape how every feature is designed and delivered."],
  ["2022", "Kyanon Digital", "Front-end Developer", "Interface systems", "Translated enterprise workflows into responsive, integrated interfaces."],
  ["2022", "NATA Vietnam", "Flutter Developer", "Mobile foundation", "Learned cross-platform fundamentals by shipping real application flows."],
];

const stack = ["React Native", "TypeScript", "Flutter", "Next.js", "React Query", "Zustand", "REST APIs", "Maps", "CI/CD", "Product thinking"];
const technicalSignals = [
  ["60 FPS", "Interaction budget", "Treat smoothness as a product constraint, not final polish.", Gauge],
  ["4 surfaces", "System thinking", "Work across mobile, web, API, and operational services.", Layers3],
  ["Offline-aware", "Field resilience", "Plan for older devices, weak networks, and imperfect data.", Smartphone],
  ["Typed contracts", "Integration discipline", "Keep state and API boundaries explicit and predictable.", Network],
];

export default function PortfolioExperience() {
  const [entering, setEntering] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [activeApproach, setActiveApproach] = useState(0);
  const [activeSection, setActiveSection] = useState("top");
  const [copied, setCopied] = useState(false);
  const project = projectsData[activeProject];
  const { scrollYProgress } = useScroll();

  useLayoutEffect(() => {
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    const previousBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    document.documentElement.style.scrollBehavior = previousBehavior;
  }, []);

  useEffect(() => {
    const timeout = window.setTimeout(() => setEntering(false), 1850);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const sections = ["top", "work", "approach", "history", "contact"];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)),
      { rootMargin: "-28% 0px -62%" },
    );
    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("duynguyen1bb@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  const scrollToWork = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = document.getElementById("work");
    if (!target) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const start = window.scrollY;
    const destination = target.getBoundingClientRect().top + start - 56;

    if (reducedMotion) {
      window.scrollTo(0, destination);
      return;
    }

    const distance = destination - start;
    const duration = 1450;
    const startedAt = performance.now();
    const previousBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";
    const easeInOutCubic = (progress: number) =>
      progress < .5 ? 4 * progress ** 3 : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    const step = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      window.scrollTo(0, start + distance * easeInOutCubic(progress));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        document.documentElement.style.scrollBehavior = previousBehavior;
      }
    };

    window.requestAnimationFrame(step);
  };

  return (
    <main className={styles.site}>
      <div className={styles.grain} />
      <AnimatePresence>
        {entering && (
          <motion.div
            className={styles.pageReveal}
            initial={{ opacity: 1 }}
            exit={{ y: "-100%", transition: { duration: 0.62, ease: [0.76, 0, 0.24, 1] } }}
          >
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .2 }} className={styles.revealMeta}>
              <span>{"// portfolio.init"}</span><span>session / 2026</span>
            </motion.div>
            <motion.div className={styles.bootLog} initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: .16, delayChildren: .12 } } }}>
              {[
                ["01", "loading product systems", "ready"],
                ["02", "mounting selected work", "04 projects"],
                ["03", "checking interaction budget", "60 fps"],
                ["04", "opening portfolio", "done"],
              ].map(([number, label, value]) => (
                <motion.div key={number} variants={rise}>
                  <span>{number}</span><p>{label}</p><b>{value}</b>
                </motion.div>
              ))}
            </motion.div>
            <div className={styles.revealTitle}>
              <motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: .72, delay: .65, ease: [0.22, 1, 0.36, 1] }}>NGUYEN</motion.span>
              <motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: .72, delay: .75, ease: [0.22, 1, 0.36, 1] }}>ANH DUY</motion.span>
            </div>
            <div className={styles.revealFooter}>
              <span>product engineer / vietnam</span>
              <motion.div className={styles.revealProgress} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.75, ease: [0.22, 1, 0.36, 1] }} />
              <span>100%</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <header className={styles.header}>
        <motion.div className={styles.scrollProgress} style={{ scaleX: scrollYProgress }} />
        <a href="#top" className={styles.brand}>
          <Braces size={16} />
          <span>DUY</span>
          <i>PRODUCT ENGINEER</i>
        </a>
        <nav className={styles.desktopNav}>
          {["work", "approach", "history", "contact"].map((item) => (
            <a key={item} href={`#${item}`} className={activeSection === item ? styles.activeNav : ""}>
              <span>{item}</span>
              {activeSection === item && <motion.i layoutId="nav-active" />}
            </a>
          ))}
        </nav>
        <div className={styles.headerEnd}>
          <span className={styles.available}><i /> Available</span>
          <button type="button" className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {menuOpen && (
          <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className={styles.mobileNav}>
            {["work", "approach", "history", "contact"].map((item) => (
              <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>{item}</a>
            ))}
          </motion.nav>
        )}
      </header>

      <section id="top" className={styles.hero}>
        <div className={styles.heroLabel}>
          <span>Portfolio / 2026</span>
          <span>Based in Vietnam</span>
        </div>
        <motion.div initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: .1, delayChildren: 2 } } }} className={styles.heroTitle}>
          <motion.p variants={rise}>{"// I design and engineer"}</motion.p>
          <h1>
            <motion.span variants={rise}>mobile systems</motion.span>
            <motion.em variants={rise}>that hold up in</motion.em>
            <motion.span variants={rise}>the real world.</motion.span>
          </h1>
        </motion.div>
        <ProductKernel active={activeApproach} onSelect={setActiveApproach} />
        <ScrollReveal className={styles.heroBottom} amount={.2}>
          <p>
            Nguyen Anh Duy is a mobile and front-end engineer focused on turning complicated
            operations into clear, production-ready products.
          </p>
          <motion.a
            href="#work"
            className={styles.roundLink}
            aria-label="Explore selected work"
            onClick={scrollToWork}
            whileTap={{ scale: .9 }}
          >
            <motion.span initial={false} whileHover={{ x: 3, y: 3 }} transition={{ type: "spring", stiffness: 320, damping: 18 }}>
              <ArrowDownRight size={26} />
            </motion.span>
          </motion.a>
          <div className={styles.heroMeta}>
            <span><b>03+</b> years shipping</span>
            <span><b>04</b> production systems</span>
            <span><b>60</b> target FPS</span>
          </div>
        </ScrollReveal>
        <div className={styles.heroCode}>{"{ product thinking × engineering discipline }"}</div>
      </section>

      <div className={styles.ticker} aria-hidden="true">
        <div>
          {[...stack, ...stack].map((item, index) => <span key={`${item}-${index}`}><Asterisk size={13} /> {item}</span>)}
        </div>
      </div>

      <section id="work" className={styles.work}>
        <SectionHead number="01" eyebrow="selected-systems" title="Work built for people who need it to work." />
        <ScrollReveal className={styles.projectStage} amount={.12}>
          <div className={styles.projectIndex}>
            {projectsData.map((item, index) => (
              <button key={item.id} type="button" onClick={() => setActiveProject(index)} className={index === activeProject ? styles.activeProject : ""}>
                {index === activeProject && <motion.i layoutId="project-active" className={styles.projectActiveRail} />}
                <span className={styles.projectListMark} style={{ position: "relative" }}>
                  {item.imageUrl && <Image src={item.imageUrl} alt="" fill sizes="40px" />}
                  <i>0{index + 1}</i>
                </span>
                <b>{item.title}</b>
                <small>{item.scope}</small>
                <MoveUpRight size={16} />
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <InteractiveProject key={project.id}>
              <ProjectVisual project={project} index={activeProject} />
              <motion.div className={styles.projectCopy} variants={projectCopy} initial="hidden" animate="show" exit="exit">
                <motion.div variants={projectLine}><span>{"// case-study."}0{activeProject + 1}</span><span>{project.year}</span></motion.div>
                <motion.h3 variants={projectLine}><ProjectTitle title={project.title} /></motion.h3>
                <motion.div variants={projectLine} className={styles.contextBlock}>
                  <span>{"// context"}</span>
                  <p>{project.longDescription}</p>
                </motion.div>
                <motion.div variants={projectLine} className={styles.outcomeBlock}>
                  <span>{"// outcome"}</span>
                  <strong>{project.outcome}</strong>
                </motion.div>
                <motion.ul variants={projectLine}>{project.highlights.map((item) => <li key={item}>{item}</li>)}</motion.ul>
                <motion.div variants={projectLine} className={styles.projectSurfaces}>{project.surfaces.map((surface) => <span key={surface}>{surface}</span>)}</motion.div>
                <motion.footer variants={projectLine}>{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</motion.footer>
              </motion.div>
            </InteractiveProject>
          </AnimatePresence>
        </ScrollReveal>
      </section>

      <section id="approach" className={styles.approach}>
        <SectionHead number="02" eyebrow="how-i-contribute" title="Not only code. The judgment around it." light gentle />
        <ScrollReveal className={styles.approachWorkbench} amount={.15} gentle>
          <div className={styles.approachRail}>
            <span>{"// select a stage"}</span>
            {approachSteps.map((step, index) => (
              <button key={step.number} type="button" onClick={() => setActiveApproach(index)} className={activeApproach === index ? styles.activeApproach : ""}>
                <b>{step.number}</b>
                <span>{step.label}</span>
                <small>{step.code}</small>
                <i />
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.article
              key={activeApproach}
              className={styles.approachDetail}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: .3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div><span>{"// working-method."}{approachSteps[activeApproach].number}</span><b>{approachSteps[activeApproach].code}</b></div>
              <h3>{approachSteps[activeApproach].title}</h3>
              <p>{approachSteps[activeApproach].description}</p>
              <footer>
                <span>Expected output</span>
                {approachSteps[activeApproach].output.map((item) => <strong key={item}>{item}</strong>)}
              </footer>
            </motion.article>
          </AnimatePresence>
        </ScrollReveal>
        <ScrollReveal className={styles.technicalLab} amount={.1} gentle>
          <div className={styles.technicalCopy}>
            <span>{"// technical-proof"}</span>
            <h3>Engineering decisions made visible.</h3>
            <p>These are the constraints I use to evaluate whether an interface is actually ready for production.</p>
            <div className={styles.signalGrid}>
              {technicalSignals.map(([value, label, description, Icon]) => (
                <article key={String(label)}>
                  <Icon size={18} />
                  <b>{String(value)}</b>
                  <span>{String(label)}</span>
                  <p>{String(description)}</p>
                </article>
              ))}
            </div>
          </div>
          <ArchitectureModel />
        </ScrollReveal>
        <ScrollReveal className={styles.statement} amount={.3} gentle>
          <span>My default question</span>
          <p>“What does this feel like on a busy day, on an older phone, with imperfect data?”</p>
          <Asterisk size={44} />
        </ScrollReveal>
      </section>

      <section id="history" className={styles.history}>
        <SectionHead number="03" eyebrow="professional-history" title="A quality-first path into product engineering." gentle />
        <ScrollReveal className={styles.historyGrid} amount={.1} gentle>
          <motion.aside initial={{ opacity: .7, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .35 }} transition={{ duration: .55, ease: [0.22, 1, 0.36, 1] }}>
            <span>Progression, not a title list</span>
            <h3>Mobile products for operational teams.</h3>
            <p>Testing built the quality lens. Front-end work built the interface lens. Mobile engineering brought both into end-to-end product ownership.</p>
            <div className={styles.progression}>
              <span>Quality</span><i /><span>Interface</span><i /><span>Ownership</span>
            </div>
            <div className={styles.stackCloud}>{stack.map((item) => <span key={item}>{item}</span>)}</div>
          </motion.aside>
          <div className={styles.timeline}>
            {history.map(([period, company, role, lens, description], index) => (
              <motion.article key={`${company}-${role}`} initial={{ opacity: .65, x: 7 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .48, delay: index * 0.035, ease: [0.22, 1, 0.36, 1] }}>
                <span>{period}</span>
                <div><small>{company}</small><h3>{role}</h3><em>{lens}</em><p>{description}</p></div>
                <b>0{history.length - index}</b>
              </motion.article>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section id="contact" className={styles.contact}>
        <ScrollReveal className={styles.contactTop} amount={.3}><span>04 / Start a conversation</span><span>Open to mobile & front-end opportunities</span></ScrollReveal>
        <motion.h2 initial={{ opacity: 0, y: 70, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: .4 }} transition={{ duration: .8, ease: [0.22, 1, 0.36, 1] }}>Have a hard product problem?</motion.h2>
        <ScrollReveal className={styles.contactAction} amount={.3}>
          <a href="mailto:duynguyen1bb@gmail.com">Let&apos;s work through it <ArrowUpRight size={28} /></a>
          <button type="button" onClick={copyEmail}>{copied ? <Check size={17} /> : <Copy size={17} />} {copied ? "Copied" : "Copy email"}</button>
        </ScrollReveal>
        <footer>
          <span>© {new Date().getFullYear()} Nguyen Anh Duy</span>
          <div><a href="https://github.com/ydanh-dev" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/duyna22/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
          <span>Designed with intent. Built with care.</span>
        </footer>
      </section>
    </main>
  );
}

function ProductKernel({ active, onSelect }: { active: number; onSelect: (index: number) => void }) {
  const inspectApproach = (index: number) => {
    onSelect(index);
    document.getElementById("approach")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={styles.kernelStage}>
      <span className={styles.kernelGuide}>{"// select a stage · click again to inspect"}</span>
      <span className={styles.systemMap}>
        <i className={styles.systemPath} />
        <motion.i className={styles.systemProgress} animate={{ scaleX: active / (approachSteps.length - 1) }} transition={{ duration: .48, ease: [0.22, 1, 0.36, 1] }} />
        {approachSteps.map((step, index) => (
          <motion.button
            type="button"
            key={step.label}
            className={`${styles.systemNode} ${index === active ? styles.systemNodeActive : ""} ${index < active ? styles.systemNodeDone : ""}`}
            onClick={() => active === index ? inspectApproach(index) : onSelect(index)}
            aria-label={`${step.label}: ${step.description}`}
          >
            <b>{step.number}</b>
            <strong>{step.label}</strong>
          </motion.button>
        ))}
      </span>
      <AnimatePresence mode="wait">
        <motion.span key={active} className={styles.kernelMode} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: .24 }}>
          <b>{approachSteps[active].label} / {approachSteps[active].number}</b>
          <i>{approachSteps[active].code}</i>
          <small>{approachSteps[active].description}</small>
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

function ProjectTitle({ title }: { title: string }) {
  const [name, suffix] = title.split(" — ");
  return (
    <>
      <span>{name}</span>
      {suffix && <span>— {suffix}</span>}
    </>
  );
}

function ArchitectureModel() {
  const [activeLayer, setActiveLayer] = useState(1);
  const [sceneVersion, setSceneVersion] = useState(0);
  const [sceneVisible, setSceneVisible] = useState(false);
  const [demoPaused, setDemoPaused] = useState(false);
  const sceneRef = useRef<HTMLDivElement>(null);
  const demoResume = useRef<number | null>(null);
  const reduceMotion = useReducedMotion();
  const layers = [
    { label: "Interface", detail: "React Native · responsive UI", responsibility: "Keep dense operational work clear, fast, and reachable on real devices.", tools: ["React Native", "Design systems", "Accessibility"], signals: ["Interaction FPS", "Task completion", "Input latency"], failure: "A polished screen that slows the actual job.", Icon: Smartphone },
    { label: "State", detail: "Predictable client state", responsibility: "Make server, workflow, and temporary UI state explicit instead of letting them drift together.", tools: ["React Query", "Zustand", "MobX"], signals: ["Cache correctness", "Render count", "Recovery paths"], failure: "Stale data and invisible state transitions.", Icon: Layers3 },
    { label: "Services", detail: "Typed APIs · integrations", responsibility: "Connect product surfaces through resilient contracts and observable integration boundaries.", tools: ["NestJS", "REST APIs", "Socket.IO"], signals: ["Error shape", "Retry behavior", "Contract stability"], failure: "Generic errors that hide the real operational cause.", Icon: Network },
    { label: "Data", detail: "Persistence · offline strategy", responsibility: "Preserve user intent through weak networks, interrupted tasks, and imperfect source data.", tools: ["PostgreSQL", "Offline queues", "Validation"], signals: ["Sync integrity", "Conflict handling", "Data quality"], failure: "Losing work when the environment is least reliable.", Icon: Database },
  ];
  const selected = layers[activeLayer];
  const SelectedIcon = selected.Icon;

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setSceneVisible(true);
        observer.disconnect();
      }
    }, { threshold: .35 });
    observer.observe(scene);
    return () => observer.disconnect();
  }, []);

  useEffect(() => () => {
    if (demoResume.current) window.clearTimeout(demoResume.current);
  }, []);

  const pauseDemo = () => {
    setDemoPaused(true);
    if (demoResume.current) window.clearTimeout(demoResume.current);
    demoResume.current = window.setTimeout(() => setDemoPaused(false), 4500);
  };

  const selectArchitectureLayer = (index: number) => {
    setActiveLayer(index);
    pauseDemo();
  };

  useEffect(() => {
    const resumeOutsideScene = (event: globalThis.PointerEvent) => {
      if (sceneRef.current?.contains(event.target as Node)) return;
      if (demoResume.current) window.clearTimeout(demoResume.current);
      setDemoPaused(false);
    };
    window.addEventListener("pointerdown", resumeOutsideScene);
    return () => window.removeEventListener("pointerdown", resumeOutsideScene);
  }, []);

  return (
    <div className={styles.architecture}>
      <div className={styles.architectureTop}>
        <span>{"// interactive architecture"}</span>
        <button type="button" onClick={() => setSceneVersion((version) => version + 1)}><RotateCcw size={13} /> Reset camera</button>
      </div>
      <div ref={sceneRef} className={styles.architectureScene}>
        <span className={styles.dragGuide}>{sceneVisible ? "Drag scene to orbit · scroll to zoom · select a layer" : "Initializing connected system"}</span>
        {sceneVisible && <ArchitectureScene key={sceneVersion} activeLayer={activeLayer} onSelect={setActiveLayer} onLayerSelect={selectArchitectureLayer} reduceMotion={Boolean(reduceMotion)} paused={demoPaused} />}
      </div>
      <AnimatePresence mode="wait">
        <motion.article className={styles.layerDetail} key={activeLayer} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}>
          <header><SelectedIcon size={18} /><div><b>{selected.label}</b><span>{selected.detail}</span></div><i>0{activeLayer + 1}</i></header>
          <p>{selected.responsibility}</p>
          <div><span>{"// tools"}</span>{selected.tools.map((item) => <strong key={item}>{item}</strong>)}</div>
          <div><span>{"// signals"}</span>{selected.signals.map((item) => <strong key={item}>{item}</strong>)}</div>
          <footer><span>{"// failure-mode"}</span><p>{selected.failure}</p></footer>
        </motion.article>
      </AnimatePresence>
    </div>
  );
}

function ProjectVisual({ project, index }: { project: Project; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imageX = useSpring(useTransform(x, [-0.5, 0.5], [-14, 14]), { stiffness: 150, damping: 22 });
  const imageY = useSpring(useTransform(y, [-0.5, 0.5], [-12, 12]), { stiffness: 150, damping: 22 });

  const move = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - .5);
    y.set((event.clientY - rect.top) / rect.height - .5);
  };

  return (
    <motion.div
      className={styles.projectVisual}
      onPointerMove={move}
      onPointerLeave={() => { x.set(0); y.set(0); }}
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      animate={{ clipPath: "inset(0 0% 0 0)" }}
      exit={{ clipPath: "inset(0 0 0 100%)" }}
      transition={{ duration: .62, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className={styles.projectGrid} />
      <motion.div className={styles.projectVisualHeading} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .18, duration: .5 }}>
        <span>{"// selected-system"}</span>
        <strong>{project.category}</strong>
      </motion.div>
      <motion.div className={styles.projectLogoFrame} style={{ x: imageX, y: imageY, position: "absolute" }}>
        {project.imageUrl ? <Image src={project.imageUrl} alt={`${project.title} logo`} fill sizes="(max-width: 900px) 70vw, 35vw" className={styles.projectImage} /> : <div className={styles.projectFallback}>APP / {project.year}</div>}
      </motion.div>
      <motion.div className={styles.projectAccentLine} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: .75, delay: .2, ease: [0.22, 1, 0.36, 1] }} />
      <div className={styles.projectVisualMeta}><span>0{index + 1} / 04</span><span>{project.surfaces.length} connected surfaces</span><span>{project.year}</span></div>
      <b className={styles.projectNumber}>0{index + 1}</b>
    </motion.div>
  );
}

function InteractiveProject({ children }: { children: React.ReactNode }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24, scale: .985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -18, scale: .99 }}
      transition={{ duration: .42, ease: [0.22, 1, 0.36, 1] }}
      className={styles.projectDetail}
    >
      {children}
    </motion.article>
  );
}

function SectionHead({ number, eyebrow, title, light = false, gentle = false }: { number: string; eyebrow: string; title: string; light?: boolean; gentle?: boolean }) {
  const headingRise = gentle
    ? { hidden: { opacity: .6, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: .55, ease: [0.22, 1, 0.36, 1] as const } } }
    : rise;

  return (
    <motion.header initial="hidden" whileInView="show" viewport={{ once: true, amount: .35 }} variants={{ show: { transition: { staggerChildren: gentle ? .045 : .09 } } }} className={`${styles.sectionHead} ${light ? styles.light : ""}`}>
      <motion.span variants={headingRise}>{number}</motion.span>
      <motion.p variants={headingRise}>{eyebrow}</motion.p>
      <motion.h2 variants={headingRise}>{title}</motion.h2>
      <motion.div variants={headingRise}><Asterisk size={22} /></motion.div>
    </motion.header>
  );
}

function ScrollReveal({ children, className, amount = .2, gentle = false }: { children: React.ReactNode; className?: string; amount?: number; gentle?: boolean }) {
  return (
    <motion.div
      className={className}
      initial={gentle ? { opacity: .72, y: 14 } : { opacity: 0, y: 48, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount }}
      transition={{ duration: gentle ? .58 : .72, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
