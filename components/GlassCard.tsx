import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = true }: GlassCardProps) {
  return (
    <motion.div 
      whileHover={hoverEffect ? { scale: 1.01, y: -4 } : {}}
      transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.5 }}
      className={cn(
        "glass-card rounded-2xl p-6 transition-colors duration-500",
        hoverEffect && "hover:border-accent/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:bg-white/5",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
