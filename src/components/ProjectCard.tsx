"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { SPRING_BOUNCY } from "@/lib/spring";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageSrc?: string;
  visualElement?: React.ReactNode;
  onClick?: () => void;
  delay?: number;
}

export default function ProjectCard({
  title,
  description,
  tags,
  imageSrc,
  visualElement,
  onClick,
  delay = 0,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const scale = useMotionValue(1);

  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateYVal = ((e.clientX - centerX) / (rect.width / 2)) * 12;
    const rotateXVal = -((e.clientY - centerY) / (rect.height / 2)) * 8;
    rotateX.set(rotateXVal);
    rotateY.set(rotateYVal);
    scale.set(1.03);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ ...SPRING_BOUNCY, delay }}
      style={{ perspective: 1000 }}
      className="group cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <motion.div
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          scale,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.15)" }}
        whileTap={{ scale: 0.98 }}
        transition={SPRING_BOUNCY}
        className="relative bg-zinc-900/10 dark:bg-[#0c0a15]/30 rounded-2xl overflow-hidden border border-zinc-200/5 dark:border-zinc-800/60 shadow-[0_10px_35px_rgba(0,0,0,0.25)] hover:border-indigo-500/20 dark:hover:border-indigo-500/30 transition-all duration-300"
      >
        {/* Visual area — when imageSrc or visualElement is provided */}
        {(imageSrc || visualElement) && (
          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-zinc-950/40 via-zinc-900/30 to-zinc-950/40 dark:from-[#0c0a15]/60 dark:via-[#16122c]/20 dark:to-[#0c0a15]/60 border-b border-zinc-200/5 dark:border-zinc-800/60 flex items-center justify-center p-6">
            {imageSrc ? (
              <div className="relative w-full h-full flex items-center justify-center">
                <motion.div
                  className="w-full h-full flex items-center justify-center"
                  animate={{ scale: isHovered ? 1.05 : 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={imageSrc}
                    alt={title}
                    className="max-h-[85%] max-w-[85%] object-contain rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.35)] border border-white/5 dark:border-zinc-800/50"
                  />
                </motion.div>
                {visualElement && (
                  <motion.div
                    className="absolute inset-0 bg-black/85 flex items-center justify-center pointer-events-none rounded-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {visualElement}
                  </motion.div>
                )}
              </div>
            ) : visualElement ? (
              <div className="w-full h-full relative overflow-hidden select-none">
                {visualElement}
              </div>
            ) : null}
          </div>
        )}

        {/* Content */}
        <div className="p-5 text-left">
          <h3 className="font-bold text-lg mb-1.5 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] sm:text-xs px-2.5 py-1 rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 text-indigo-500 dark:text-indigo-300 border border-indigo-500/10 dark:border-indigo-500/15 font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
