"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { SPRING_CURSOR } from "@/lib/spring";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, SPRING_CURSOR);
  const springY = useSpring(mouseY, SPRING_CURSOR);

  useEffect(() => {
    setMounted(true);

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <>
      {/* Outer ring — spring physics for trailing effect */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="pointer-events-none fixed top-0 left-0 z-50 hidden md:block"
      >
        <motion.div
          animate={{ scale: 1 }}
          className="w-10 h-10 rounded-full border-2 border-foreground/60"
        />
      </motion.div>

      {/* Inner dot — instant follow */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="pointer-events-none fixed top-0 left-0 z-50 hidden md:block"
      >
        <div className="w-2 h-2 rounded-full bg-foreground" />
      </motion.div>
    </>
  );
}
