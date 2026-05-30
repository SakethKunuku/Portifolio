"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

export function CursorGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Apple-like fluid spring physics
  const springX = useSpring(mouseX, { damping: 40, stiffness: 300, mass: 0.5 });
  const springY = useSpring(mouseY, { damping: 40, stiffness: 300, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const background = useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(59, 130, 246, 0.08), transparent 40%)`;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 will-change-[background]"
      style={{ background }}
    />
  );
}
