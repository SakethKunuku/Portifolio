"use client";

import { useState, useEffect } from "react";
import { Terminal, User, Briefcase, Code2, Cpu, Sparkles, Mail, Award, Hexagon, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#hero", icon: Hexagon },
  { name: "About", href: "#about", icon: User },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Projects", href: "#projects", icon: Code2 },
  { name: "Skills", href: "#skills", icon: Cpu },
  { name: "Current Exploration", href: "#exploration", icon: Sparkles },
  { name: "Contact", href: "#contact", icon: Mail },
];

export function Sidebar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(i => i.href.slice(1));
      let currentSection = sections[0];
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.aside 
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-0 top-0 h-screen w-20 md:w-[260px] bg-[#030712] border-r border-white/[0.03] flex flex-col py-6 z-50 transition-all duration-300"
    >
      {/* OS Logo */}
      <div className="px-6 mb-10 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent/20 to-accent-purple/20 border border-accent/30 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.2)]">
          <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-accent transform -translate-y-[1px]" />
        </div>
        <span className="hidden md:block font-bold tracking-widest text-sm text-white">SAKETH OS</span>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 w-full flex flex-col gap-1.5 px-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.href.slice(1);
          return (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                const targetId = item.href.slice(1);
                const element = document.getElementById(targetId);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                  history.pushState(null, '', item.href);
                }
              }}
              className={cn(
                "relative flex items-center gap-4 px-4 py-3 rounded-xl transition-all w-full group overflow-hidden",
                isActive ? "text-accent" : "text-foreground/60 hover:text-white hover:bg-white/[0.02]"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="activeSidebarTab"
                  transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.5 }}
                  className="absolute inset-0 bg-accent/[0.08] rounded-xl border border-accent/20"
                />
              )}
              {isActive && (
                <motion.div
                  layoutId="activeSidebarIndicator"
                  transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.5 }}
                  className="absolute left-0 top-2 bottom-2 w-1 bg-accent rounded-r-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                />
              )}
              <Icon className={cn("w-5 h-5 relative z-10 transition-colors", isActive ? "text-accent" : "group-hover:text-white")} />
              <span className={cn("hidden md:block text-[13px] font-medium tracking-wide relative z-10", isActive ? "text-white" : "")}>
                {item.name}
              </span>
            </a>
          );
        })}
      </nav>
      
      {/* Bottom Action */}
      <div className="mt-auto px-4 w-full">
        <button 
          onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
          className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-[#0a0f1c] border border-white/[0.05] text-foreground/60 hover:text-white hover:border-white/10 transition-all group"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-accent">{`>_`}</span>
            <span className="hidden md:block text-[13px] font-medium tracking-wide group-hover:text-white">Open Terminal</span>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1 shadow-[0_0_8px_rgba(34,197,94,0.5)] hidden md:block" />
        </button>
      </div>
    </motion.aside>
  );
}
