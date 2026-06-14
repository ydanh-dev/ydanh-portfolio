"use client";

import Image from "next/image";
import { type MouseEvent, type PointerEvent, useEffect, useLayoutEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Asterisk,
  Braces,
  Check,
  Copy,
  Menu,
  MoveUpRight,
  X,
} from "lucide-react";
import { projectsData, type Project } from "@/data/projects";
import styles from "./PortfolioExperience.module.css";

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

const capabilities = [
  ["01", "Mobile systems", "React Native and Flutter products designed around complex operational workflows."],
  ["02", "Product engineering", "From an ambiguous requirement to a dependable feature that can be shipped and measured."],
  ["03", "Performance", "Responsive interfaces, predictable state, and fewer expensive renders on real devices."],
  ["04", "Integration", "APIs, maps, payments, device capabilities, and enterprise systems working as one product."],
];

const history = [
  ["2023 — NOW", "Apetech Solutions", "Mobile Engineer", "Own mobile features from interface decisions through API integration, testing, release, and iteration."],
  ["2022 — 2023", "Apetech Solutions", "Software Tester", "Built the quality instincts that now shape how every feature is designed and delivered."],
  ["2022", "Kyanon Digital", "Front-end Developer", "Translated enterprise workflows into responsive, integrated interfaces."],
  ["2022", "NATA Vietnam", "Flutter Developer", "Learned cross-platform fundamentals by shipping real application flows."],
];

const stack = ["React Native", "TypeScript", "Flutter", "Next.js", "React Query", "Zustand", "REST APIs", "Maps", "CI/CD", "Product thinking"];

export default function PortfolioExperience() {
  const [entering, setEntering] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
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
        <ProductKernel />
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
                <motion.h3 variants={projectLine}>{project.title}</motion.h3>
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
        <SectionHead number="02" eyebrow="how-i-contribute" title="Not only code. The judgment around it." light />
        <ScrollReveal className={styles.capabilityGrid} amount={.15}>
          {capabilities.map(([number, title, description], index) => (
            <motion.article key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: index * 0.05 }}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <i />
            </motion.article>
          ))}
        </ScrollReveal>
        <ScrollReveal className={styles.statement} amount={.3}>
          <span>My default question</span>
          <p>“What does this feel like on a busy day, on an older phone, with imperfect data?”</p>
          <Asterisk size={44} />
        </ScrollReveal>
      </section>

      <section id="history" className={styles.history}>
        <SectionHead number="03" eyebrow="professional-history" title="A quality-first path into product engineering." />
        <ScrollReveal className={styles.historyGrid} amount={.1}>
          <motion.aside initial={{ opacity: 0, rotate: -2, y: 30 }} whileInView={{ opacity: 1, rotate: 0, y: 0 }} viewport={{ once: true, amount: .35 }} transition={{ duration: .7, ease: [0.22, 1, 0.36, 1] }}>
            <span>Current focus</span>
            <h3>Mobile products for operational teams.</h3>
            <p>Cross-platform applications with dense business rules, connected services, and a high bar for clarity.</p>
            <div className={styles.stackCloud}>{stack.map((item) => <span key={item}>{item}</span>)}</div>
          </motion.aside>
          <div className={styles.timeline}>
            {history.map(([period, company, role, description], index) => (
              <motion.article key={`${company}-${role}`} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
                <span>{period}</span>
                <div><small>{company}</small><h3>{role}</h3><p>{description}</p></div>
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

function ProductKernel() {
  const [mode, setMode] = useState(0);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mapX = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 150, damping: 22 });
  const mapY = useSpring(useTransform(y, [-0.5, 0.5], [-6, 6]), { stiffness: 150, damping: 22 });
  const modes = [
    { name: "Understand", code: "problem → flow", description: "Turn real operational friction into a clear product direction." },
    { name: "Engineer", code: "UI ↔ state ↔ API", description: "Connect interface, application state, and services into one system." },
    { name: "Ship", code: "test → release", description: "Validate edge cases, release deliberately, and improve from feedback." },
  ];
  const nodes = [
    ["01", "Problem"],
    ["02", "Interface"],
    ["03", "API + State"],
    ["04", "Release"],
  ];
  const activeMode = modes[mode];

  const move = (event: PointerEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <button
      type="button"
      className={styles.kernelStage}
      onPointerMove={move}
      onPointerLeave={() => { x.set(0); y.set(0); }}
      onClick={() => setMode((current) => (current + 1) % modes.length)}
      aria-label={`Product lifecycle: ${activeMode.name}. Click for the next stage.`}
    >
      <span className={styles.kernelGuide}>{"// interactive system map"}</span>
      <motion.span className={styles.systemMap} style={{ x: mapX, y: mapY }}>
        <i className={styles.systemPath} />
        {nodes.map(([number, label], index) => (
          <motion.span
            key={label}
            className={`${styles.systemNode} ${index === mode + 1 ? styles.systemNodeActive : ""}`}
            animate={index === mode + 1 ? { scale: [1, 1.08, 1] } : { scale: 1 }}
            transition={{ duration: .55 }}
          >
            <b>{number}</b>
            <strong>{label}</strong>
          </motion.span>
        ))}
        <span className={styles.systemPulse} />
      </motion.span>
      <span className={styles.kernelMode}>
        <b>{activeMode.name} / 0{mode + 1}</b>
        <i>{activeMode.code}</i>
        <small>{activeMode.description}</small>
      </span>
    </button>
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
      <motion.div className={styles.projectScan} initial={{ x: "-120%" }} animate={{ x: "340%" }} transition={{ duration: 1.1, delay: .18, ease: [0.22, 1, 0.36, 1] }} />
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

function SectionHead({ number, eyebrow, title, light = false }: { number: string; eyebrow: string; title: string; light?: boolean }) {
  return (
    <motion.header initial="hidden" whileInView="show" viewport={{ once: true, amount: .35 }} variants={{ show: { transition: { staggerChildren: .09 } } }} className={`${styles.sectionHead} ${light ? styles.light : ""}`}>
      <motion.span variants={rise}>{number}</motion.span>
      <motion.p variants={rise}>{eyebrow}</motion.p>
      <motion.h2 variants={rise}>{title}</motion.h2>
      <motion.div variants={rise}><Asterisk size={22} /></motion.div>
    </motion.header>
  );
}

function ScrollReveal({ children, className, amount = .2 }: { children: React.ReactNode; className?: string; amount?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 48, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount }}
      transition={{ duration: .72, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
