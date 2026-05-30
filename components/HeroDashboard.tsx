"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, FolderGit2, BrainCircuit, Code2, Trophy, Mail, Terminal } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);
import { SystemOverview } from "./SystemOverview";
import { useState, useEffect } from "react";

// --- Typewriter Component ---
const Typewriter = ({ text, delay = 0, speed = 60, hideCursor = false }: { text: string, delay?: number, speed?: number, hideCursor?: boolean }) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [displayed, started, text, speed]);

  useEffect(() => {
    if (displayed.length === text.length) {
      const blink = setInterval(() => setCursorVisible(v => !v), 500);
      return () => clearInterval(blink);
    }
  }, [displayed, text]);

  return <span>{displayed}{!hideCursor && (displayed.length === text.length ? (cursorVisible ? "|" : <span className="opacity-0">|</span>) : "|")}</span>;
};

// --- Rotating Roles Component ---
const roles = [
  "Full Stack Developer",
  "Enterprise Systems Engineer",
  "AI Systems Explorer",
  "Software Engineer",
  "Backend Developer",
  "Agentic AI Enthusiast"
];

const RotatingRoleText = ({ delay = 0 }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [started, setStarted] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    const role = roles[currentRoleIndex] + "...!";
    
    let timer: NodeJS.Timeout;
    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(prev => prev.slice(0, -1));
        if (currentText.length <= 1) { // When it hits 0, flip to next
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }, 40); // Smooth erase
    } else {
      timer = setTimeout(() => {
        setCurrentText(role.slice(0, currentText.length + 1));
        if (currentText.length === role.length) {
          timer = setTimeout(() => setIsDeleting(true), 3000); // Hold the full text nicely
        }
      }, 80); // Smooth intentional typing
    }
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, started]);

  useEffect(() => {
    const blink = setInterval(() => setCursorVisible(v => !v), 500);
    return () => clearInterval(blink);
  }, []);

  if (!started) return null;

  return <span>{currentText}</span>;
};

export function HeroDashboard() {
  return (
    <div className="w-full flex flex-col px-6 md:px-8 max-w-[1600px] mx-auto gap-4">
      {/* Top Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        
        {/* Left & Center Wrapper */}
        <div className="lg:col-span-9 flex flex-col gap-6 lg:gap-12 w-full">
          
          {/* Top Row: Intro & Image */}
          <div className="grid grid-cols-1 lg:grid-cols-9 gap-6 lg:gap-8 items-end">
            
            {/* Left Column (Intro) */}
            <div className="lg:col-span-5 flex flex-col z-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mb-4"
          >
            <p className="text-accent font-mono text-sm tracking-widest h-6">
              <Typewriter text="Hello, I'm" delay={1200} speed={80} hideCursor={true} />
            </p>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-2 leading-tight h-[60px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 2.0 }}
          >
            <Typewriter text="Saketh Kunuku" delay={2000} speed={80} />
          </motion.h1>

          <motion.h2 
            className="text-3xl md:text-4xl font-bold tracking-tight text-accent mb-4 flex items-center h-[48px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 3.5 }}
          >
            <RotatingRoleText delay={3500} />
          </motion.h2>

          <motion.p 
            className="text-foreground/70 text-sm md:text-base leading-relaxed max-w-lg mb-8"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 4.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Engineering intelligent systems by combining enterprise technologies, backend architecture, and modern AI-driven development.
          </motion.p>

          <motion.div 
            className="flex flex-wrap items-center gap-4 mb-10"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 5.0, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="#projects" className="bg-accent hover:bg-accent/90 text-white px-5 py-2.5 rounded-xl font-medium tracking-wide transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] flex items-center gap-2 text-sm">
              Explore My Work <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="/resume.pdf" className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-5 py-2.5 rounded-xl font-medium tracking-wide transition-all flex items-center gap-2 text-sm">
              View Resume <Download className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Interactive Social/Action Icons replacing Trusted By Technologies */}
          <motion.div 
            className="flex items-center gap-6 -mt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 5.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {[
              { icon: LinkedinIcon, href: "https://www.linkedin.com/in/saketh-kunuku/", color: "text-[#0A66C2]", shadow: "drop-shadow-[0_0_12px_#0A66C2] hover:drop-shadow-[0_0_25px_#0A66C2]" },
              { icon: GithubIcon, href: "https://github.com/SakethKunuku", color: "text-white", shadow: "drop-shadow-[0_0_12px_#ffffff] hover:drop-shadow-[0_0_25px_#ffffff]" },
              { icon: Mail, href: "#contact", color: "text-[#EF4444]", shadow: "drop-shadow-[0_0_12px_#EF4444] hover:drop-shadow-[0_0_25px_#EF4444]" },
              { icon: Download, href: "/resume.pdf", color: "text-[#22C55E]", shadow: "drop-shadow-[0_0_12px_#22C55E] hover:drop-shadow-[0_0_25px_#22C55E]" },
              { icon: Terminal, onClick: () => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true })), color: "text-[#3B82F6]", shadow: "drop-shadow-[0_0_12px_#3B82F6] hover:drop-shadow-[0_0_25px_#3B82F6]" }
            ].map((item, i) => {
              const className = `p-2 transition-all duration-300 hover:scale-110 ${item.color} ${item.shadow}`;
              return item.href ? (
                <a 
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  className={className}
                >
                  <item.icon className="w-[22px] h-[22px]" />
                </a>
              ) : (
                <button 
                  key={i}
                  onClick={item.onClick}
                  className={className}
                >
                  <item.icon className="w-[22px] h-[22px]" />
                </button>
              );
            })}
          </motion.div>

          {/* Stats Grid 1 removed to be unified below */}

            </div>

            {/* Center Column (Cinematic Profile Image) */}
            <div className="lg:col-span-4 flex flex-col mt-8 lg:mt-0 z-10 items-center justify-center">
          
          {/* Image Container */}
          <div className="relative w-full max-w-[650px] h-[45vh] min-h-[350px] max-h-[500px] flex items-center justify-center pointer-events-none">
            {/* Subtle neural ambient rings & particles */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3, delay: 5.5, ease: "easeInOut" }}
            >
              <div className="absolute w-[80%] h-[80%] bg-accent/5 blur-[60px] rounded-full" />
              <div className="absolute w-[100%] h-[100%] rounded-full border border-white/[0.02] animate-[spin_60s_linear_infinite]" />
              <div className="absolute w-[85%] h-[85%] rounded-full border border-white/[0.03] border-t-accent/20 animate-[spin_40s_linear_infinite_reverse]" />
            </motion.div>
            
            {/* Cinematic Fade-in Profile Image */}
            <motion.div 
              className="absolute inset-x-0 bottom-0 top-[-10%] flex items-end justify-center overflow-hidden"
              initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.8, delay: 6.0, ease: [0.16, 1, 0.3, 1] }}
              style={{ 
                WebkitMaskImage: 'linear-gradient(to top, transparent 5%, black 25%)', 
                maskImage: 'linear-gradient(to top, transparent 5%, black 25%)' 
              }}
            >
              <div className="relative w-full h-full flex items-end justify-center">
                {/* Soft cinematic rim lighting behind image */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[50%] h-[60%] bg-accent/10 blur-[50px] z-0 rounded-full" />
                
                <img 
                  src="/profile.png" 
                  alt="Saketh Kunuku"
                  className="w-[115%] h-[115%] object-contain object-bottom filter brightness-[0.85] contrast-[1.15] saturate-[0.9] drop-shadow-[0_-5px_15px_rgba(59,130,246,0.1)] z-10"
                />
              </div>
            </motion.div>
          </div>

            </div>
          </div>

          {/* Unified Stats Grid (All 4 Stats on one line) */}
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 6.0, ease: [0.16, 1, 0.3, 1] }}
          >
            {[
              { icon: FolderGit2, value: "07+", label: "Systems Built", sub: "AI & Enterprise", color: "text-blue-500", bg: "bg-blue-500/10" },
              { icon: BrainCircuit, value: "02", label: "Engineering Domains", sub: "Backend & AI", color: "text-green-500", bg: "bg-green-500/10" },
              { icon: Code2, value: "15+", label: "Technologies", sub: "Enterprise & AI", color: "text-purple-500", bg: "bg-purple-500/10" },
              { icon: Trophy, value: "01", label: "Enterprise Internship", sub: "BNP Paribas", color: "text-yellow-500", bg: "bg-yellow-500/10" },
            ].map((stat, i) => (
              <div
                key={i}
                className="glass-card rounded-xl p-4 border border-white/[0.05] bg-[#0a0f1c]/50 flex items-center gap-4 hover:bg-white/[0.02] transition-colors"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${stat.bg}`}>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-end gap-1.5">
                    <span className="text-xl font-bold text-white tracking-tight leading-none">{stat.value}</span>
                  </div>
                  <span className="text-xs font-medium text-foreground/80 mt-1">{stat.label}</span>
                  <span className="font-mono text-[8px] text-muted tracking-widest uppercase mt-0.5">{stat.sub}</span>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

        {/* Right Column (System Overview) */}
        <motion.div 
          className="lg:col-span-3 hidden xl:flex justify-end z-20 -mt-10"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 6.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <SystemOverview />
        </motion.div>
      </div>
    </div>
  );
}
