"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Server,
  Users,
  BrainCircuit,
  BriefcaseBusiness,
  Calendar,
  ChevronRight,
  Code2,
  CheckCircle2,
  Clock,
  Sparkles
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const milestones = [
  {
    id: "bnp",
    title: "BNP Paribas India Solutions",
    shortTitle: "BNP Paribas",
    role: "Developer Intern",
    fullRole: "Developer Intern • Core Banking Build & Development",
    date: "Jan 2026 – Present",
    desc: "Working within enterprise banking systems involving issue analysis, backend application maintenance, automation-driven engineering practices, and AI workflow optimization initiatives.",
    icon: Building2,
    accent: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-500/30",
    glow: "rgba(59,130,246,0.5)",
    textAccent: "text-blue-400",
    skills: ["COBOL", "Unix", "Autosys", "Oracle SQL", "Jira", "Bitbucket"],
    keyLearnings: ["Enterprise-scale Architecture", "Legacy System Maintenance", "Cross-functional Team Collaboration"],
    status: "ACTIVE",
    statusIcon: Sparkles
  },
  {
    id: "ai",
    title: "Enterprise AI & Automation",
    shortTitle: "AI & Systems",
    role: "Independent Research",
    fullRole: "Independent Learning & Research",
    date: "2024 – Present",
    desc: "Exploring Agentic AI, enterprise automation workflows, intelligent systems, and scalable backend integrations with the long-term goal of building AI-powered enterprise solutions.",
    icon: BrainCircuit,
    accent: "from-orange-500/20 to-yellow-500/10",
    border: "border-orange-500/30",
    glow: "rgba(249,115,22,0.5)",
    textAccent: "text-orange-400",
    skills: ["LangChain", "AI Agents", "Automation", "System Design"],
    keyLearnings: ["Agentic Workflow Design", "LLM Orchestration", "Scalable System Architecture"],
    status: "ONGOING",
    statusIcon: Clock
  },
  {
    id: "backend",
    title: "Backend Engineering Intern",
    shortTitle: "Backend Intern",
    role: "Developer Intern",
    fullRole: "Backend Developer Intern • Odenkirk Pvt Ltd",
    date: "Jun 2024 – Jul 2024",
    desc: "Worked on REST API development, scalable database design, deployment workflows, logging systems, exception handling, API testing, and AWS EC2 deployment practices.",
    icon: Server,
    accent: "from-emerald-500/20 to-green-500/10",
    border: "border-emerald-500/30",
    glow: "rgba(16,185,129,0.5)",
    textAccent: "text-emerald-400",
    skills: ["Python", "Flask", "AWS EC2", "Git", "REST APIs"],
    keyLearnings: ["High-throughput API Design", "Cloud Infrastructure (AWS)", "Database Query Optimization"],
    status: "COMPLETED",
    statusIcon: CheckCircle2
  },
  {
    id: "webapps",
    title: "WebApps Technical Community",
    shortTitle: "WebApps Manager",
    role: "Manager",
    fullRole: "Manager • KL University SAC",
    date: "May 2023 – Jul 2024",
    desc: "Led technical initiatives, workshops, collaborative projects, and development-focused events while working closely with student developers across multiple domains.",
    icon: Users,
    accent: "from-purple-500/20 to-pink-500/10",
    border: "border-purple-500/30",
    glow: "rgba(168,85,247,0.5)",
    textAccent: "text-purple-400",
    skills: ["Leadership", "Events", "Mentoring", "Web Development"],
    keyLearnings: ["Technical Leadership", "Event Management", "Public Speaking & Mentoring"],
    status: "COMPLETED",
    statusIcon: CheckCircle2
  },
];

// Reusable Inspector Component
const ExperienceInspector = ({ milestone }: { milestone: typeof milestones[0] }) => {
  const StatusIcon = milestone.statusIcon;
  
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="glass-card rounded-3xl border border-white/[0.08] bg-[#0b1120]/80 backdrop-blur-2xl p-6 lg:p-8 relative h-full flex flex-col shadow-2xl overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
    >
      {/* Background Ambient Glow */}
      <div 
        className={cn("absolute inset-0 opacity-[0.15] bg-gradient-to-br pointer-events-none transition-colors duration-500", milestone.accent)}
      />
      
      {/* Header */}
      <div className="relative z-10 flex flex-col gap-4 flex-1">
        
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center border bg-[#0a0f1c] shrink-0", milestone.border)}>
              <milestone.icon className={cn("w-6 h-6", milestone.textAccent)} />
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-white tracking-tight leading-tight">{milestone.title}</h3>
              <p className="text-accent font-medium mt-1 text-sm lg:text-base">{milestone.fullRole}</p>
            </div>
          </div>
          
          {/* Status Badge */}
          <div className={cn("flex items-center gap-2 px-3 py-1.5 rounded-full border bg-black/20 text-[10px] lg:text-xs font-semibold tracking-wider uppercase shrink-0", milestone.border, milestone.textAccent)}>
            <StatusIcon className="w-3.5 h-3.5" />
            {milestone.status}
          </div>
        </div>

        {/* Date & Desc */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-muted font-mono text-xs lg:text-sm">
            <Calendar className="w-4 h-4" />
            {milestone.date}
          </div>
          
          <p className="text-foreground/80 leading-relaxed text-sm lg:text-[15px]">
            {milestone.desc}
          </p>
        </div>

        {/* Technologies & Learnings Grid */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Technologies */}
          <div>
            <h4 className="text-[10px] lg:text-xs font-mono text-muted uppercase tracking-widest mb-4 flex items-center gap-2">
              <Code2 className="w-4 h-4" /> Technologies & Focus
            </h4>
            <div className="flex flex-wrap gap-2">
              {milestone.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 + (i * 0.05) }}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-[11px] lg:text-xs font-medium border bg-white/[0.02] transition-colors",
                    milestone.border,
                    milestone.textAccent
                  )}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Key Learnings */}
          <div>
            <h4 className="text-[10px] lg:text-xs font-mono text-muted uppercase tracking-widest mb-4 flex items-center gap-2">
              <BrainCircuit className="w-4 h-4" /> Key Learnings
            </h4>
            <ul className="flex flex-col gap-3">
              {milestone.keyLearnings.map((learning, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (i * 0.05) }}
                  className="flex items-start gap-2 text-[13px] lg:text-sm text-foreground/80 leading-snug"
                >
                  <ChevronRight className={cn("w-4 h-4 shrink-0 mt-[1px]", milestone.textAccent)} />
                  <span>{learning}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Progression Path */}
        <div className="mt-auto pt-5 border-t border-white/[0.05]">
          <h4 className="text-xs font-mono text-muted uppercase tracking-widest mb-4 flex items-center gap-2">
            Engineering Evolution
          </h4>
          
          <div className="flex flex-wrap items-center gap-2">
            {milestones.slice().reverse().map((m, i) => {
              const isPast = milestones.slice().reverse().findIndex(x => x.id === m.id) <= milestones.slice().reverse().findIndex(x => x.id === milestone.id);
              const isCurrent = m.id === milestone.id;
              
              return (
                <div key={m.id} className="flex items-center gap-2">
                  <div 
                    className={cn(
                      "text-[11px] font-medium px-3 py-1.5 rounded-lg border transition-all duration-300 flex items-center gap-2",
                      isCurrent 
                        ? cn("bg-white/10 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]", m.border)
                        : isPast
                          ? "bg-white/[0.02] border-white/10 text-foreground/70"
                          : "bg-transparent border-transparent text-muted/50"
                    )}
                  >
                    {isCurrent && <m.icon className={cn("w-3.5 h-3.5", m.textAccent)} />}
                    {m.shortTitle}
                  </div>
                  {i < milestones.length - 1 && (
                    <ChevronRight className={cn(
                      "w-4 h-4 shrink-0 transition-colors", 
                      isPast ? "text-white/30" : "text-white/10"
                    )} />
                  )}
                </div>
              );
            })}
            {/* Future Target */}
            <div className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 shrink-0 text-white/10" />
              <div className="text-[11px] font-medium px-3 py-1.5 rounded-lg border border-transparent bg-transparent text-muted/50 flex items-center gap-2 border-dashed border-white/10">
                <BrainCircuit className="w-3.5 h-3.5" />
                Enterprise Architect
              </div>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export function ExperienceTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full relative">
      {/* Mobile/Tablet View (Accordion Style) */}
      <div className="flex flex-col gap-4 lg:hidden">
        {milestones.map((milestone, idx) => {
          const isActive = activeIndex === idx;
          return (
            <div key={milestone.id} className="flex flex-col gap-2">
              <button
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "w-full flex items-center justify-between p-5 rounded-2xl border transition-all text-left",
                  isActive 
                    ? cn("bg-[#0a0f1c] shadow-lg", milestone.border)
                    : "bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.04]"
                )}
              >
                <div className="flex items-center gap-4">
                  <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center bg-[#05080f] border shrink-0", isActive ? milestone.border : "border-white/10")}>
                    <milestone.icon className={cn("w-5 h-5", isActive ? milestone.textAccent : "text-muted")} />
                  </div>
                  <div>
                    <h3 className={cn("font-semibold text-sm leading-tight", isActive ? "text-white" : "text-foreground/80")}>{milestone.title}</h3>
                    <p className="text-[10px] text-muted font-mono mt-1">{milestone.date}</p>
                  </div>
                </div>
                <ChevronRight className={cn("w-5 h-5 transition-transform shrink-0", isActive ? cn("rotate-90", milestone.textAccent) : "text-muted")} />
              </button>
              
              {/* Inline Inspector for Mobile */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-2 pb-4">
                      <ExperienceInspector milestone={milestone} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Desktop View (Explorer Grid) */}
      <div className="hidden lg:grid grid-cols-12 gap-8 lg:gap-10 items-start relative">
        
        {/* Left: Concise Timeline Cards (50%) */}
        <div className="col-span-6 flex flex-col gap-3 py-2 relative z-20">
          
          {/* Continuous Center Line Background */}
          <div className="absolute right-[-2rem] top-8 bottom-8 w-[2px] bg-white/[0.05] z-0" />
          
          {milestones.map((milestone, idx) => {
            const isActive = activeIndex === idx;
            
            return (
              <div 
                key={milestone.id}
                onMouseEnter={() => setActiveIndex(idx)}
                className={cn(
                  "relative z-10 flex items-center justify-end gap-6 p-4 rounded-2xl cursor-pointer transition-all duration-300 group border",
                  isActive 
                    ? cn("bg-white/[0.04] shadow-[0_0_30px_rgba(0,0,0,0.5)] scale-[1.02] -translate-x-2", milestone.border) 
                    : "bg-transparent border-transparent hover:bg-white/[0.02]"
                )}
              >
                {/* Active Indicator Bar on Left */}
                {isActive && (
                  <motion.div 
                    layoutId="activeTimelineIndicator"
                    className={cn("absolute left-0 top-1/4 bottom-1/4 w-1 rounded-r-full", milestone.accent.split(' ')[0].replace('from-', 'bg-'))}
                  />
                )}

                {/* Card Content (Right Aligned) */}
                <div className="flex flex-col text-right">
                  <h3 className={cn("text-lg font-bold tracking-tight transition-colors leading-tight", isActive ? "text-white" : "text-foreground/80 group-hover:text-white")}>
                    {milestone.title}
                  </h3>
                  <span className={cn("text-sm font-medium mt-1 transition-colors", isActive ? milestone.textAccent : "text-muted group-hover:text-foreground/60")}>
                    {milestone.role}
                  </span>
                  <span className="text-[10px] font-mono text-muted uppercase tracking-widest mt-2">
                    {milestone.date.split("–")[0].trim()}
                  </span>
                </div>

                {/* Horizontal Connector Line (Card to Node) */}
                <div className={cn(
                  "absolute -right-[2rem] w-[2rem] h-[2px] transition-colors duration-300",
                  isActive ? milestone.border : "bg-transparent"
                )} />

                {/* Timeline Node placed precisely on the center line */}
                <div 
                  className={cn(
                    "absolute -right-[3.25rem] w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 border z-10 bg-[#05080f]",
                    isActive 
                      ? cn("scale-125", milestone.border)
                      : "border-white/10 group-hover:border-white/20"
                  )}
                  style={{ boxShadow: isActive ? `0 0 20px ${milestone.glow}` : 'none' }}
                >
                  <milestone.icon className={cn("w-4 h-4 transition-colors", isActive ? milestone.textAccent : "text-muted group-hover:text-foreground/80")} />
                </div>
                
                {/* Visual Animated Beam Connecting to Inspector */}
                <div className={cn(
                  "absolute -right-[4.25rem] h-[2px] origin-left transition-all duration-500 z-0 flex items-center",
                  isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 w-0"
                )} style={{ width: 'calc(100% + 4.25rem)' }}>
                  <div className={cn("w-full h-full bg-gradient-to-r to-transparent", milestone.accent.split(' ')[0].replace('from-', 'from-'))} />
                  <div className={cn("w-8 h-[2px] absolute right-0 blur-[2px]", milestone.accent.split(' ')[0].replace('from-', 'bg-'))} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Experience Inspector Panel (50%) */}
        <div className="col-span-6 sticky top-24 h-[600px] z-10">
          <AnimatePresence mode="wait">
            <ExperienceInspector key={activeIndex} milestone={milestones[activeIndex]} />
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}