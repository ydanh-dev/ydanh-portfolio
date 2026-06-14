import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import SignalStrip from "@/components/SignalStrip";

export default function AnhDuyPortfolio() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SignalStrip />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
