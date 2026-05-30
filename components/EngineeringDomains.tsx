"use client";

import { motion } from "framer-motion";
import {
  Server,
  Network,
  BrainCircuit,
  LineChart,
  Code2,
  ChevronRight,
  Crosshair
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const domains = [
  {
    title: "Enterprise Systems",
    icon: Network,
    accent: "from-blue-500/20 to-cyan-500/10",
    textAccent: "text-blue-400",
    border: "border-blue-500/30",
    glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
    skills: ["COBOL", "Unix", "Oracle SQL", "Autosys", "Gestab", "Jira", "Bitbucket"],
    appliedInTitle: "Applied In",
    appliedIn: [
      "BNP Paribas India Solutions",
      "Core Banking Workflows",
      "Issue Analysis",
      "Production Support",
      "Workflow Automation Exposure"
    ],
    currentFocus: "Enterprise Architecture & AI Integration"
  },
  {
    title: "Backend Engineering",
    icon: Server,
    accent: "from-purple-500/20 to-violet-500/10",
    textAccent: "text-purple-400",
    border: "border-purple-500/30",
    glow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]",
    skills: ["Python", "Java", "Spring Boot", "Django", "Flask", "REST APIs", "SQL"],
    appliedInTitle: "Applied In",
    appliedIn: [
      "Churn Prediction Platform",
      "Event Management System",
      "Backend Internship Projects",
      "Enterprise Workflow Development"
    ],
    currentFocus: "Scalable Backend Systems"
  },
  {
    title: "AI & Intelligent Systems",
    icon: BrainCircuit,
    accent: "from-orange-500/20 to-amber-500/10",
    textAccent: "text-orange-400",
    border: "border-orange-500/30",
    glow: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]",
    skills: ["Machine Learning", "TensorFlow", "XGBoost", "LangChain", "OpenAI APIs", "Prompt Engineering"],
    appliedInTitle: "Applied In",
    appliedIn: [
      "Viral Content Predictor",
      "Smart Learning Path Generator",
      "Mobile Communication Detector"
    ],
    currentFocus: "Agentic AI & Intelligent Automation"
  },
  {
    title: "Data & Analytics",
    icon: LineChart,
    accent: "from-emerald-500/20 to-teal-500/10",
    textAccent: "text-emerald-400",
    border: "border-emerald-500/30",
    glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    skills: ["Pandas", "NumPy", "SQL", "Data Analysis", "Visualization", "Feature Engineering"],
    appliedInTitle: "Applied In",
    appliedIn: [
      "Churn Prediction Analysis",
      "Viral Content Analytics",
      "Social Media Analytics"
    ],
    currentFocus: "Predictive Analytics & Decision Systems"
  }
];

export function EngineeringDomains() {
  return (
    <div className="w-full relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {domains.map((domain, idx) => (
          <motion.div
            key={domain.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={cn(
              "glass-card rounded-3xl border border-white/[0.08] bg-[#0b1120]/80 backdrop-blur-2xl p-6 md:p-8 flex flex-col relative overflow-hidden group transition-all duration-500 hover:-translate-y-1",
              domain.glow
            )}
          >
            {/* Ambient Accent Background */}
            <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-[0.08] bg-gradient-to-br pointer-events-none transition-opacity duration-500", domain.accent)} />

            {/* Header */}
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center border bg-[#0a0f1c]", domain.border)}>
                <domain.icon className={cn("w-5 h-5", domain.textAccent)} />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white">{domain.title}</h3>
            </div>

            {/* Capability Matrix Split Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 flex-1 mb-8 relative z-10">
              
              {/* Left Column: Skills & Stack */}
              <div className="md:pr-8 md:border-r border-white/[0.08] flex flex-col">
                <h4 className="text-[10px] md:text-xs font-mono text-muted uppercase tracking-widest mb-5 flex items-center gap-2">
                  <Code2 className="w-3.5 h-3.5" /> Skills & Stack
                </h4>
                <ul className="flex flex-col gap-3">
                  {domain.skills.map((skill) => (
                    <li key={skill} className="flex items-start gap-2 text-[13px] md:text-sm text-foreground/80 font-medium">
                      <span className={cn("w-1 h-1 rounded-full mt-2 shrink-0 opacity-70", domain.textAccent.replace('text-', 'bg-'))} />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Applied In / Evidence */}
              <div className="md:pl-8 flex flex-col pt-8 md:pt-0 border-t md:border-t-0 border-white/[0.08]">
                <h4 className="text-[10px] md:text-xs font-mono text-muted uppercase tracking-widest mb-5 flex items-center gap-2">
                  <Network className="w-3.5 h-3.5" /> {domain.appliedInTitle}
                </h4>
                <ul className="flex flex-col gap-3">
                  {domain.appliedIn.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[13px] md:text-sm text-foreground/70 leading-snug">
                      <ChevronRight className={cn("w-4 h-4 shrink-0 mt-[1px]", domain.textAccent)} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Footer: Current Focus */}
            <div className={cn("mt-auto p-4 md:p-5 rounded-2xl border bg-white/[0.02] flex items-center gap-3 relative z-10 transition-colors duration-300 group-hover:bg-white/[0.04]", domain.border)}>
              <Crosshair className={cn("w-4 h-4 shrink-0", domain.textAccent)} />
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-muted mb-0.5">Current Direction</p>
                <p className="text-sm font-semibold text-white tracking-tight">{domain.currentFocus}</p>
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </div>
  );
}
