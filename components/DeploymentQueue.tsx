"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket,
  BrainCircuit,
  Building2,
  Workflow,
  Smartphone,
  ChevronRight,
  Activity,
  Wrench,
  Search,
  BookOpen,
  PauseCircle,
  Target,
  Code2,
  Lightbulb,
  ArrowRight
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const queueItems = [
  {
    id: "portfolio",
    title: "Portfolio Website Deployment",
    status: "ACTIVE",
    statusIcon: Activity,
    statusColor: "text-emerald-400",
    statusBg: "bg-emerald-500/20",
    statusBorder: "border-emerald-500/30",
    icon: Rocket,
    objective: "Finalize and deploy the next-generation engineering portfolio.",
    stage: "UI Refinements & Production Build",
    outcome: "A live, highly interactive showcase of engineering capabilities.",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    whyItMatters: "Establishes a strong personal brand and acts as a central hub for professional connections.",
    accent: "from-emerald-500/20 to-teal-500/10"
  },
  {
    id: "learning-path",
    title: "Smart Learning Path Generator",
    status: "BUILDING",
    statusIcon: Wrench,
    statusColor: "text-blue-400",
    statusBg: "bg-blue-500/20",
    statusBorder: "border-blue-500/30",
    icon: BrainCircuit,
    objective: "Create an AI-powered personalized learning roadmap generator.",
    stage: "Architecture & Feature Planning",
    outcome: "Adaptive AI Tutor System",
    tech: ["LangChain", "Python", "OpenAI", "Vector Databases"],
    whyItMatters: "Helps learners identify skill gaps and generate highly personalized learning journeys.",
    accent: "from-blue-500/20 to-cyan-500/10"
  },
  {
    id: "enterprise-ai",
    title: "Enterprise AI Workflow Assistant",
    status: "RESEARCH",
    statusIcon: Search,
    statusColor: "text-purple-400",
    statusBg: "bg-purple-500/20",
    statusBorder: "border-purple-500/30",
    icon: Building2,
    objective: "Enhance enterprise productivity through AI-assisted workflows.",
    stage: "Exploring Jira dependency analysis, ticket understanding, and automation use cases.",
    outcome: "Proof-of-concept AI agent for enterprise task management.",
    tech: ["Python", "LLMs", "API Integrations"],
    whyItMatters: "Bridges the gap between complex enterprise systems and intelligent automation.",
    accent: "from-purple-500/20 to-violet-500/10"
  },
  {
    id: "langgraph",
    title: "LangGraph & Agentic Systems",
    status: "LEARNING",
    statusIcon: BookOpen,
    statusColor: "text-orange-400",
    statusBg: "bg-orange-500/20",
    statusBorder: "border-orange-500/30",
    icon: Workflow,
    objective: "Deep exploration of multi-agent systems and enterprise AI workflows.",
    stage: "Studying orchestration patterns, memory management, and graph-based agent routing.",
    outcome: "Mastery of building resilient, stateful multi-agent architectures.",
    tech: ["LangGraph", "Python", "Prompt Engineering"],
    whyItMatters: "Multi-agent systems are the future of scalable AI deployment in enterprise environments.",
    accent: "from-orange-500/20 to-amber-500/10"
  },
  {
    id: "mobile-comm",
    title: "Mobile Communication Detection",
    status: "ON HOLD",
    statusIcon: PauseCircle,
    statusColor: "text-slate-400",
    statusBg: "bg-slate-500/20",
    statusBorder: "border-slate-500/30",
    icon: Smartphone,
    objective: "Detect mobile phone usage in restricted environments like fueling zones.",
    stage: "Computer vision system prototyping.",
    outcome: "Supports automated monitoring and safety enforcement concepts.",
    tech: ["Python", "OpenCV", "PyTorch"],
    whyItMatters: "Crucial for maintaining safety standards in high-risk operational areas.",
    accent: "from-slate-500/20 to-gray-500/10"
  }
];

const ConsolePanel = ({ item }: { item: typeof queueItems[0] }) => {
  const StatusIcon = item.statusIcon;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="glass-card rounded-3xl border border-white/[0.08] bg-[#0b1120]/80 backdrop-blur-2xl p-6 lg:p-8 relative h-full flex flex-col shadow-2xl overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
    >
      <div className={cn("absolute inset-0 opacity-[0.08] bg-gradient-to-br pointer-events-none transition-colors duration-500", item.accent)} />

      <div className="relative z-10 flex flex-col gap-6 flex-1">
        
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/[0.05] pb-6">
          <div className="flex items-center gap-4">
            <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center border bg-[#0a0f1c] shrink-0", item.statusBorder)}>
              <item.icon className={cn("w-6 h-6", item.statusColor)} />
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-white tracking-tight leading-tight">{item.title}</h3>
            </div>
          </div>
          
          <div className={cn("flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] lg:text-xs font-semibold tracking-wider uppercase shrink-0", item.statusBg, item.statusBorder, item.statusColor)}>
            <StatusIcon className="w-3.5 h-3.5" />
            {item.status}
          </div>
        </div>

        {/* Narrative Details */}
        <div className="space-y-6">
          <div>
            <h4 className="text-[10px] lg:text-xs font-mono text-muted uppercase tracking-widest mb-2 flex items-center gap-2">
              <Target className="w-3.5 h-3.5" /> Objective
            </h4>
            <p className="text-foreground/80 leading-relaxed text-sm lg:text-[15px] pl-3.5 border-l border-white/[0.1]">
              {item.objective}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-[10px] lg:text-xs font-mono text-muted uppercase tracking-widest mb-2 flex items-center gap-2">
                <Activity className="w-3.5 h-3.5" /> Current Stage
              </h4>
              <p className="text-foreground/80 leading-relaxed text-sm pl-3.5 border-l border-white/[0.1]">
                {item.stage}
              </p>
            </div>
            <div>
              <h4 className="text-[10px] lg:text-xs font-mono text-muted uppercase tracking-widest mb-2 flex items-center gap-2">
                <ArrowRight className="w-3.5 h-3.5" /> Expected Outcome
              </h4>
              <p className="text-foreground/80 leading-relaxed text-sm pl-3.5 border-l border-white/[0.1]">
                {item.outcome}
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] lg:text-xs font-mono text-muted uppercase tracking-widest mb-2 flex items-center gap-2">
              <Lightbulb className="w-3.5 h-3.5" /> Why It Matters
            </h4>
            <p className="text-foreground/80 leading-relaxed text-sm lg:text-[15px] pl-3.5 border-l border-white/[0.1] italic">
              &quot;{item.whyItMatters}&quot;
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-auto pt-6 border-t border-white/[0.05]">
          <h4 className="text-[10px] lg:text-xs font-mono text-muted uppercase tracking-widest mb-4 flex items-center gap-2">
            <Code2 className="w-4 h-4" /> Relevant Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {item.tech.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + (i * 0.05) }}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-[11px] lg:text-xs font-medium border bg-white/[0.02] transition-colors",
                  item.statusBorder,
                  item.statusColor
                )}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export function DeploymentQueue() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full relative">
      {/* Mobile/Tablet Accordion */}
      <div className="flex flex-col gap-4 lg:hidden">
        {queueItems.map((item, idx) => {
          const isActive = activeIndex === idx;
          const StatusIcon = item.statusIcon;
          
          return (
            <div key={item.id} className="flex flex-col gap-2">
              <button
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "w-full flex items-center justify-between p-5 rounded-2xl border transition-all text-left",
                  isActive 
                    ? cn("bg-[#0a0f1c] shadow-lg", item.statusBorder)
                    : "bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.04]"
                )}
              >
                <div className="flex items-center gap-4">
                  <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center border shrink-0", isActive ? cn(item.statusBg, item.statusBorder) : "bg-[#05080f] border-white/10")}>
                    <item.icon className={cn("w-5 h-5", isActive ? item.statusColor : "text-muted")} />
                  </div>
                  <div>
                    <h3 className={cn("font-semibold text-sm leading-tight", isActive ? "text-white" : "text-foreground/80")}>{item.title}</h3>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className={cn("w-1.5 h-1.5 rounded-full", item.statusColor.replace('text-', 'bg-'))} />
                      <p className="text-[10px] text-muted font-mono tracking-wider">{item.status}</p>
                    </div>
                  </div>
                </div>
                <ChevronRight className={cn("w-5 h-5 transition-transform shrink-0", isActive ? cn("rotate-90", item.statusColor) : "text-muted")} />
              </button>
              
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-2 pb-4">
                      <ConsolePanel item={item} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Desktop View (50/50 Split) */}
      <div className="hidden lg:grid grid-cols-12 gap-8 lg:gap-10 items-start relative">
        
        {/* Left: Queue List */}
        <div className="col-span-5 flex flex-col gap-3 py-2 relative z-20">
          {queueItems.map((item, idx) => {
            const isActive = activeIndex === idx;
            const StatusIcon = item.statusIcon;
            
            return (
              <div 
                key={item.id}
                onMouseEnter={() => setActiveIndex(idx)}
                className={cn(
                  "relative z-10 flex flex-col justify-center p-5 rounded-2xl cursor-pointer transition-all duration-300 border min-h-[90px]",
                  isActive 
                    ? cn("bg-white/[0.04] shadow-[0_0_30px_rgba(0,0,0,0.3)] scale-[1.02] translate-x-2", item.statusBorder) 
                    : "bg-transparent border-white/5 hover:bg-white/[0.02]"
                )}
              >
                {/* Active Glow Indicator */}
                {isActive && (
                  <motion.div 
                    layoutId="activeQueueIndicator"
                    className={cn("absolute left-0 top-1/4 bottom-1/4 w-1 rounded-r-full", item.statusColor.replace('text-', 'bg-'))}
                  />
                )}

                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {/* Status Dot Ring */}
                    <div className="relative flex items-center justify-center w-4 h-4 shrink-0">
                      <span className={cn("absolute inline-flex h-full w-full rounded-full opacity-20", item.statusColor.replace('text-', 'bg-'), isActive ? "animate-ping" : "")}></span>
                      <span className={cn("relative inline-flex rounded-full h-2 w-2", item.statusColor.replace('text-', 'bg-'))}></span>
                    </div>
                    
                    <div>
                      <h3 className={cn("text-base font-bold tracking-tight transition-colors leading-tight", isActive ? "text-white" : "text-foreground/80 group-hover:text-white")}>
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <StatusIcon className={cn("w-3 h-3", isActive ? item.statusColor : "text-muted")} />
                        <span className={cn("text-[10px] font-mono uppercase tracking-widest font-semibold", isActive ? item.statusColor : "text-muted")}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Animated Beam to Console */}
                <div className={cn(
                  "absolute -right-[2.5rem] h-[2px] origin-left transition-all duration-500 z-0 flex items-center top-1/2 -translate-y-1/2",
                  isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 w-0"
                )} style={{ width: 'calc(100% - 20px)' }}> 
                  <div className={cn("w-full h-full bg-gradient-to-r from-transparent via-transparent", item.accent.split(' ')[0].replace('from-', 'to-'))} />
                  <div className={cn("w-8 h-[2px] absolute right-[-20px] blur-[2px]", item.statusColor.replace('text-', 'bg-'))} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Detailed Console */}
        <div className="col-span-7 sticky top-24 h-[550px] z-10">
          <AnimatePresence mode="wait">
            <ConsolePanel key={activeIndex} item={queueItems[activeIndex]} />
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
