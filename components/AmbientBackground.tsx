"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function AmbientBackground() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<any[]>([]);
  
  useEffect(() => {
    setMounted(true);
    setParticles([...Array(15)].map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      opacity: Math.random() * 0.5 + 0.1,
      yAnim: Math.random() * -100 - 50,
      xAnim: (Math.random() - 0.5) * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 10,
    })));
  }, []);

  if (!mounted) return <div className="fixed inset-0 z-[-1] bg-background pointer-events-none" />;

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-background pointer-events-none">
      {/* Moving Grid Texture */}
      <motion.div 
        animate={{
          backgroundPosition: ["0px 0px", "40px 40px"],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          width: '200%',
          height: '200%',
          left: '-50%',
          top: '-50%'
        }}
      />
      
      {/* Floating Particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-accent rounded-full blur-[1px]"
          initial={{
            x: p.x,
            y: p.y,
            opacity: p.opacity,
          }}
          animate={{
            y: [null, p.yAnim],
            x: [null, p.xAnim],
            opacity: [null, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: p.delay,
          }}
        />
      ))}
      
      {/* Neural Network SVG Lines (Abstract) */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
        <motion.path
          d="M 100 200 Q 300 100 500 400 T 900 300"
          stroke="white"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <motion.path
          d="M 200 800 Q 400 500 700 700 T 1200 400"
          stroke="white"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 2 }}
        />
      </svg>

      {/* Ambient glowing orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] bg-accent/20"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full blur-[150px] bg-accent-purple/20"
      />
    </div>
  );
}
