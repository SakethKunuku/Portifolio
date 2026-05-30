"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BrainCircuit,
  LineChart,
  Smartphone,
  Network,
  Database,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Clock,
  ArrowRight,
  Code2,
  TerminalSquare
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const projects = [
  {
    id: "viral",
    title: "Viral Content Predictor",
    domain: "Machine Learning",
    status: "Completed Prototype",
    summary: "Predicts content virality using social metadata and engagement signals.",
    problem: "Content creators often discover whether content performs well only after publishing.",
    solution: "Built a machine learning pipeline using social media engagement metrics and metadata to predict the likelihood of content becoming viral.",
    outcome: "Provides early insights into potential content performance and supports data-driven content planning.",
    keyLearnings: ["Feature Engineering", "Model Comparison", "Data Preprocessing", "Classification Techniques"],
    technologies: ["Python", "Scikit-Learn", "Pandas", "Streamlit"],
    architecture: ["Dataset", "Feature Engineering", "Model Training", "Prediction Engine", "Dashboard"],
    icon: LineChart,
    statusIcon: Sparkles,
    accent: "from-pink-500/20 to-rose-500/10",
    border: "border-pink-500/30",
    glow: "rgba(236,72,153,0.5)",
    textAccent: "text-pink-400"
  },
  {
    id: "learning-path",
    title: "Smart AI Learning Path Generator",
    domain: "Agentic AI",
    status: "In Development",
    summary: "AI-driven system that generates personalized learning roadmaps.",
    problem: "Learners often struggle to identify what to learn next and how to structure a learning journey.",
    solution: "Building an AI-driven system that analyzes user goals and generates personalized learning roadmaps with resource recommendations.",
    outcome: "Adaptive learning paths tailored to user skill gaps.",
    keyLearnings: ["LLM Integration", "Prompt Engineering", "Learning Recommendation Systems", "Agent Workflows"],
    technologies: ["LangChain", "OpenAI", "Python", "PostgreSQL"],
    architecture: ["User Input", "Skill Assessment", "AI Planner", "Resource Engine", "Learning Roadmap"],
    icon: BrainCircuit,
    statusIcon: Clock,
    accent: "from-blue-500/20 to-indigo-500/10",
    border: "border-blue-500/30",
    glow: "rgba(59,130,246,0.5)",
    textAccent: "text-blue-400"
  },
  {
    id: "mobile-detector",
    title: "Mobile Communication Detector",
    domain: "Computer Vision",
    status: "Research Prototype",
    summary: "Vision-based detection of active phone usage around fueling zones.",
    problem: "Mobile phone usage during fueling activities can create safety concerns.",
    solution: "Developing a computer vision-based detection system capable of identifying active phone usage around fueling zones.",
    outcome: "Supports automated monitoring and safety enforcement concepts.",
    keyLearnings: ["Object Detection", "Computer Vision Pipelines", "Real-Time Processing", "YOLO Concepts"],
    technologies: ["Python", "OpenCV", "PyTorch"],
    architecture: ["Video Stream", "Detection Model", "Event Identification", "Alert Engine"],
    icon: Smartphone,
    statusIcon: TerminalSquare,
    accent: "from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-500/30",
    glow: "rgba(16,185,129,0.5)",
    textAccent: "text-emerald-400"
  },
  {
    id: "churn",
    title: "Customer Churn Prediction",
    domain: "Predictive Analytics",
    status: "Completed",
    summary: "Predicts customer churn probability using historical behavior data.",
    problem: "Organizations often struggle to identify customers likely to discontinue services.",
    solution: "Developed a machine learning model that predicts customer churn probability using historical customer behavior data.",
    outcome: "Provides early indicators for customer retention strategies.",
    keyLearnings: ["Feature Importance Analysis", "Model Explainability", "Hyperparameter Tuning", "Business Analytics"],
    technologies: ["Python", "XGBoost", "Streamlit", "Pandas"],
    architecture: ["Customer Dataset", "Feature Engineering", "XGBoost Model", "Prediction Dashboard"],
    icon: Network,
    statusIcon: CheckCircle2,
    accent: "from-orange-500/20 to-amber-500/10",
    border: "border-orange-500/30",
    glow: "rgba(249,115,22,0.5)",
    textAccent: "text-orange-400"
  },
  {
    id: "events",
    title: "Event Management System",
    domain: "Backend Engineering",
    status: "Completed",
    summary: "Centralized platform supporting event workflows and participant tracking.",
    problem: "Managing events manually creates challenges around registrations and participant coordination.",
    solution: "Developed a centralized event management platform supporting event creation, registration workflows, and participant tracking.",
    outcome: "Improved event organization and management efficiency.",
    keyLearnings: ["CRUD Operations", "Database Design", "Backend Development", "System Architecture"],
    technologies: ["Django", "Python", "SQL"],
    architecture: ["User Interface", "Event Service", "Database Layer"],
    icon: Database,
    statusIcon: CheckCircle2,
    accent: "from-purple-500/20 to-violet-500/10",
    border: "border-purple-500/30",
    glow: "rgba(168,85,247,0.5)",
    textAccent: "text-purple-400"
  }
];

const IntelligenceConsole = ({ project }: { project: typeof projects[0] }) => {
  const StatusIcon = project.statusIcon;
  
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="glass-card rounded-3xl border border-white/[0.08] bg-[#0b1120]/80 backdrop-blur-2xl p-6 lg:p-8 relative h-full flex flex-col shadow-2xl overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
    >
      <div className={cn("absolute inset-0 opacity-[0.10] bg-gradient-to-br pointer-events-none transition-colors duration-500", project.accent)} />
      
      <div className="relative z-10 flex flex-col gap-6 flex-1">
        
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/[0.05] pb-6">
          <div className="flex items-center gap-4">
            <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center border bg-[#0a0f1c] shrink-0", project.border)}>
              <project.icon className={cn("w-6 h-6", project.textAccent)} />
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-white tracking-tight leading-tight">{project.title}</h3>
              <p className="text-accent font-medium mt-1 text-sm">{project.domain}</p>
            </div>
          </div>
          
          <div className={cn("flex items-center gap-2 px-3 py-1.5 rounded-full border bg-black/20 text-[10px] lg:text-xs font-semibold tracking-wider uppercase shrink-0", project.border, project.textAccent)}>
            <StatusIcon className="w-3.5 h-3.5" />
            {project.status}
          </div>
        </div>

        {/* Core Narrative */}
        <div className="space-y-5">
          <div>
            <h4 className="text-[10px] font-mono text-muted uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className={cn("w-1.5 h-1.5 rounded-full", project.accent.split(' ')[0].replace('from-', 'bg-'))} />
              Problem Statement
            </h4>
            <p className="text-foreground/80 leading-relaxed text-sm lg:text-[15px] pl-3.5 border-l border-white/[0.05]">
              {project.problem}
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] font-mono text-muted uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className={cn("w-1.5 h-1.5 rounded-full", project.accent.split(' ')[0].replace('from-', 'bg-'))} />
              Solution Approach
            </h4>
            <p className="text-foreground/80 leading-relaxed text-sm lg:text-[15px] pl-3.5 border-l border-white/[0.05]">
              {project.solution}
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-mono text-muted uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className={cn("w-1.5 h-1.5 rounded-full", project.accent.split(' ')[0].replace('from-', 'bg-'))} />
              Outcome
            </h4>
            <p className="text-foreground/80 leading-relaxed text-sm lg:text-[15px] pl-3.5 border-l border-white/[0.05]">
              {project.outcome}
            </p>
          </div>
        </div>

        {/* Tech & Learnings Grid */}
        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pt-6 border-t border-white/[0.05]">
          <div>
            <h4 className="text-[10px] lg:text-xs font-mono text-muted uppercase tracking-widest mb-4 flex items-center gap-2">
              <Code2 className="w-4 h-4" /> Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 + (i * 0.05) }}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-[11px] lg:text-xs font-medium border bg-white/[0.02] transition-colors",
                    project.border,
                    project.textAccent
                  )}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] lg:text-xs font-mono text-muted uppercase tracking-widest mb-4 flex items-center gap-2">
              <BrainCircuit className="w-4 h-4" /> Key Learnings
            </h4>
            <ul className="flex flex-col gap-2.5">
              {project.keyLearnings.map((learning, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (i * 0.05) }}
                  className="flex items-start gap-2 text-[13px] lg:text-sm text-foreground/80 leading-snug"
                >
                  <ChevronRight className={cn("w-4 h-4 shrink-0 mt-[1px]", project.textAccent)} />
                  <span>{learning}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Architecture Explorer */}
        <div className="mt-auto pt-6">
          <h4 className="text-[10px] lg:text-xs font-mono text-muted uppercase tracking-widest mb-4 flex items-center gap-2">
            <Network className="w-4 h-4" /> Architecture Flow
          </h4>
          <div className="flex flex-wrap items-center gap-2 bg-[#05080f]/50 p-4 rounded-xl border border-white/[0.05]">
            {project.architecture.map((node, i) => (
              <div key={node} className="flex items-center gap-2">
                <div className={cn("text-[11px] font-medium px-3 py-1.5 rounded-lg border bg-white/[0.02] text-foreground/80", project.border)}>
                  {node}
                </div>
                {i < project.architecture.length - 1 && (
                  <ArrowRight className={cn("w-4 h-4 shrink-0", project.textAccent)} />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export function SolutionPortfolio() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full relative">
      {/* Mobile/Tablet View */}
      <div className="flex flex-col gap-4 lg:hidden">
        {projects.map((project, idx) => {
          const isActive = activeIndex === idx;
          return (
            <div key={project.id} className="flex flex-col gap-2">
              <button
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "w-full flex items-center justify-between p-5 rounded-2xl border transition-all text-left",
                  isActive 
                    ? cn("bg-[#0a0f1c] shadow-lg", project.border)
                    : "bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.04]"
                )}
              >
                <div className="flex items-center gap-4">
                  <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center bg-[#05080f] border shrink-0", isActive ? project.border : "border-white/10")}>
                    <project.icon className={cn("w-5 h-5", isActive ? project.textAccent : "text-muted")} />
                  </div>
                  <div>
                    <h3 className={cn("font-semibold text-sm leading-tight", isActive ? "text-white" : "text-foreground/80")}>{project.title}</h3>
                    <p className="text-[10px] text-muted font-mono mt-1">{project.domain}</p>
                  </div>
                </div>
                <ChevronRight className={cn("w-5 h-5 transition-transform shrink-0", isActive ? cn("rotate-90", project.textAccent) : "text-muted")} />
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
                      <IntelligenceConsole project={project} />
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
        
        {/* Left: Project Cards */}
        <div className="col-span-6 flex flex-col gap-4 py-2 relative z-20">
          
          {projects.map((project, idx) => {
            const isActive = activeIndex === idx;
            
            return (
              <div 
                key={project.id}
                onMouseEnter={() => setActiveIndex(idx)}
                className={cn(
                  "relative z-10 flex flex-col gap-1 p-5 rounded-2xl cursor-pointer transition-all duration-300 border",
                  isActive 
                    ? cn("bg-white/[0.04] shadow-[0_0_30px_rgba(0,0,0,0.5)] scale-[1.02] translate-x-2", project.border) 
                    : "bg-transparent border-white/5 hover:bg-white/[0.02]"
                )}
              >
                {/* Active Indicator Bar */}
                {isActive && (
                  <motion.div 
                    layoutId="activeProjectIndicator"
                    className={cn("absolute left-0 top-1/4 bottom-1/4 w-1 rounded-r-full", project.accent.split(' ')[0].replace('from-', 'bg-'))}
                  />
                )}

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className={cn("text-lg font-bold tracking-tight transition-colors leading-tight", isActive ? "text-white" : "text-foreground/80 group-hover:text-white")}>
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-1.5">
                      <span className={cn("text-xs font-mono uppercase tracking-widest", isActive ? project.textAccent : "text-muted")}>
                        {project.domain}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-white/10" />
                      <span className="text-xs text-muted">
                        {project.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border bg-[#05080f] transition-colors duration-500", isActive ? project.border : "border-white/5 group-hover:border-white/10")}>
                    <project.icon className={cn("w-4 h-4", isActive ? project.textAccent : "text-muted")} />
                  </div>
                </div>

                <p className="text-sm text-foreground/60 mt-3 leading-relaxed">
                  {project.summary}
                </p>

                {/* Visual Animated Beam Connecting to Console */}
                <div className={cn(
                  "absolute -right-[2.5rem] h-[2px] origin-left transition-all duration-500 z-0 flex items-center top-1/2 -translate-y-1/2",
                  isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 w-0"
                )} style={{ width: 'calc(100% - 20px)' }}> {/* A subtle beam shooting right */}
                  <div className={cn("w-full h-full bg-gradient-to-r from-transparent via-transparent", project.accent.split(' ')[0].replace('from-', 'to-'))} />
                  <div className={cn("w-8 h-[2px] absolute right-[-20px] blur-[2px]", project.accent.split(' ')[0].replace('from-', 'bg-'))} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Intelligence Console */}
        <div className="col-span-6 sticky top-24 h-[650px] z-10">
          <AnimatePresence mode="wait">
            <IntelligenceConsole key={activeIndex} project={projects[activeIndex]} />
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
