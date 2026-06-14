"use client";

import { BookOpen, Award, ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const educations = [
  {
    institution: "FPT Greenwich University (UoG)",
    degree: "Bachelor of Science in Computing",
    period: "2018 — 2023",
    type: "Degree",
  },
  {
    institution: "Udemy",
    degree: "Flutter & Dart – The Complete Guide",
    period: "2022",
    type: "Certification",
  },
  {
    institution: "Udemy",
    degree: "React Native – The Practical Guide",
    period: "2023",
    type: "Certification",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 relative z-10">
        <AnimatedSection className="mb-16 max-w-2xl">
          <h2 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Education & <br/>
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Academic foundation and continuous learning that powers my engineering workflow.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {educations.map((item, index) => (
            <AnimatedSection key={`${item.institution}-${item.degree}`} delay={index * 0.1}>
              <div className="group glass h-full flex flex-col justify-between rounded-3xl p-8 border border-border/50 hover:border-primary/50 transition-all hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.05)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
                
                <div>
                  <div className="mb-6 flex items-start justify-between">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-background/50 border border-border/50 text-foreground transition-colors group-hover:bg-primary/20 group-hover:text-primary">
                      {item.type === "Degree" ? <BookOpen className="size-5" /> : <Award className="size-5" />}
                    </div>
                    <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-primary">
                      {item.period}
                    </span>
                  </div>
                  
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                    {item.institution}
                  </p>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                    {item.degree}
                  </h3>
                </div>
                
                <div className="mt-auto pt-6 flex justify-end">
                  <div className="flex size-8 items-center justify-center rounded-full border border-border/50 bg-background/50 text-muted-foreground transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary group-hover:-translate-y-1">
                    <ExternalLink className="size-3" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
