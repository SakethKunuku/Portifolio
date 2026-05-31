"use client";

import { easeOut, motion } from "framer-motion";
import React from "react";

export function ReflectionDivider({ lines, label = "System Insight" }: { lines: React.ReactNode[], label?: string }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: easeOut } 
    }
  };

  const DividerWithDot = () => (
    <div className="relative w-full h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent my-10 md:my-14">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
    </div>
  );

  return (
    <div className="w-full py-12 md:py-16 flex flex-col items-center justify-center relative z-10">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20% 0px" }}
        className="flex flex-col items-center w-full max-w-4xl px-6"
      >
        {/* Static Frame (Fades in immediately) */}
        <motion.div 
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 1 } } }}
          className="w-full flex flex-col items-center"
        >
          <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted/60 mb-2">
            {label}
          </div>
          <DividerWithDot />
        </motion.div>

        {/* Sequential Text */}
        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 1.8, delayChildren: 0.4 }
            }
          }}
          className="flex flex-col items-center w-full"
        >
          {lines.map((line, i) => {
            const isLast = i === lines.length - 1;
            return (
              <motion.div 
                key={i}
                variants={itemVariants}
                className="flex flex-col items-center w-full"
              >
                {i > 0 && <div className="w-12 h-px bg-white/10 mb-8 md:mb-10" />}
                <div className={`text-center tracking-tight flex items-center justify-center gap-1 ${!isLast ? 'mb-8 md:mb-10' : ''} ${
                  isLast 
                    ? "text-3xl md:text-4xl lg:text-[40px] font-medium text-white/90" 
                    : "text-2xl md:text-3xl lg:text-[32px] font-normal text-white/60"
                }`}>
                  {line}
                  <span className="inline-block w-[3px] h-[1em] bg-white/40 animate-pulse ml-1" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Static Frame Bottom */}
        <motion.div 
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 1 } } }}
          className="w-full"
        >
          <DividerWithDot />
        </motion.div>
      </motion.div>
    </div>
  );
}
