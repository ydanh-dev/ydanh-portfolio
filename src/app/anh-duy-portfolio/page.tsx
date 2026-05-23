import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import SmoothScroll from "@/components/SmoothScroll";

export default function AnhDuyPortfolio() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
