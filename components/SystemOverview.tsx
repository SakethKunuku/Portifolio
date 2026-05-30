import { Expand, Code2, Sparkles, FileText, GitBranch, Users, ArrowRight, BrainCircuit, Network, Database, Cpu, Mail, FileBadge, TerminalSquare } from "lucide-react";
import { motion } from "framer-motion";

const MiniSparkline = ({ color, data, width = "w-24" }: { color: string, data: number[], width?: string }) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * 100;
    const y = 100 - ((d - min) / range) * 100;
    return `${x},${y}`;
  }).join(" ");

  return (
    <svg viewBox="0 -10 100 120" preserveAspectRatio="none" className={`${width} h-6 overflow-visible`}>
      <motion.polyline
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
        className="opacity-80"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.8 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 7.0 }} // Delayed to match parent stagger
      />
    </svg>
  );
};

export function SystemOverview() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-[320px]">
      
      {/* SECTION 1: ENGINEERING SNAPSHOT */}
      <div className="glass-card rounded-xl p-4 border border-white/[0.05] bg-[#0a0f1c]/50 relative overflow-hidden group hover:border-white/[0.1] transition-colors duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="flex items-center justify-between mb-5 relative z-10">
          <div className="flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-accent" />
            <span className="font-mono text-[9px] text-muted tracking-[0.2em] uppercase">Engineering Snapshot</span>
          </div>
          <Expand className="w-3 h-3 text-muted" />
        </div>
        
        <div className="space-y-4 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[11px] text-foreground/80 mb-1 flex items-center gap-1.5">
                <TerminalSquare className="w-3 h-3 text-muted" /> Projects Built
              </span>
              <span className="w-4 h-0.5 bg-blue-500/50 rounded-full" />
            </div>
            <MiniSparkline color="#3b82f6" data={[2, 4, 7, 10, 15, 20]} />
            <span className="font-mono text-xs font-semibold text-white">8+</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[11px] text-foreground/80 mb-1 flex items-center gap-1.5">
                <BrainCircuit className="w-3 h-3 text-muted" /> AI Workflow Systems
              </span>
              <span className="w-4 h-0.5 bg-purple-500/50 rounded-full" />
            </div>

            <MiniSparkline color="#a855f7" data={[5, 12, 22, 38, 55, 72]} />

            <span className="font-mono text-[10px] font-semibold text-white">
              BUILDING
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[11px] text-foreground/80 mb-1 flex items-center gap-1.5">
                <Network className="w-3 h-3 text-muted" /> Internships
              </span>
              <span className="w-4 h-0.5 bg-green-500/50 rounded-full" />
            </div>
            <div className="flex items-center gap-1 opacity-80 h-6">
              <motion.span className="w-1.5 h-3 bg-green-500/30 rounded-sm" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 7.2 }} />
              <motion.span className="w-1.5 h-4.5 bg-green-500/50 rounded-sm" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 7.4 }} />
              <motion.span className="w-1.5 h-6 bg-green-500/80 rounded-sm" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 7.6 }} />
            </div>
            <span className="font-mono text-xs font-semibold text-white tracking-tighter">02</span>
          </div>
          
          <div className="flex items-center justify-between pt-3 border-t border-white/[0.05]">
            <div className="flex flex-col">
               <span className="text-[10px] text-muted font-mono tracking-widest uppercase">CGPA</span>
            </div>
            <span className="font-mono text-sm font-bold text-accent shadow-blue-500/20 drop-shadow-md">9.6 / 10</span>
          </div>
        </div>
      </div>

      {/* SECTION 2: CURRENT FOCUS */}
      <div className="glass-card rounded-xl p-4 border border-white/[0.05] bg-[#0a0f1c]/50 relative overflow-hidden group">
        {/* Animated Background Graph */}
        <div className="absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-20">
          <svg viewBox="0 0 300 100" preserveAspectRatio="none" className="w-full h-full">
            <motion.path
              d="M0,100 C30,90 50,20 100,50 C150,80 200,10 300,40 L300,100 Z"
              fill="url(#focus-gradient)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 6.5 }}
            />
            <defs>
              <linearGradient id="focus-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="flex items-center gap-2 mb-3 relative z-10">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
          <span className="font-mono text-[9px] text-muted tracking-[0.2em] uppercase">Current Focus</span>
        </div>
        <p className="text-xs text-foreground/90 leading-relaxed mb-4 relative z-10 font-medium">
          Working across enterprise systems, backend engineering, and intelligent AI-driven workflows.
        </p>
        <div className="flex flex-col gap-2 relative z-10">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[9px] text-muted tracking-widest uppercase">Execution Progress</span>
            <span className="font-mono text-[9px] text-accent">ACTIVE</span>
          </div>
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-accent to-accent-purple relative" 
              initial={{ width: 0 }}
              animate={{ width: "85%" }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 7.0 }}
            >
               <motion.div 
                 className="absolute right-0 top-0 bottom-0 w-4 bg-white/50 blur-sm"
                 animate={{ x: [-100, 100] }}
                 transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
               />
            </motion.div>
          </div>
        </div>
      </div>

      {/* SECTION 3: CURRENTLY EXPLORING */}
      <div className="glass-card rounded-xl p-4 border border-white/[0.05] bg-[#0a0f1c]/50">
        <div className="flex items-center gap-2 mb-4">
          <Database className="w-3.5 h-3.5 text-accent-purple" />
          <span className="font-mono text-[9px] text-muted tracking-[0.2em] uppercase">Currently Exploring</span>
        </div>
        
        <div className="relative pl-3 space-y-3">
          {/* Vertical Connecting Line */}
          <div className="absolute left-[3px] top-1.5 bottom-1.5 w-[1px] bg-gradient-to-b from-accent-purple/50 via-white/10 to-transparent" />
          
          {[
            "Agentic AI & LangGraph",
            "Enterprise System Workflows",
            "Scalable Backend Architecture",
            "AI-Powered Automation",
            "Intelligent Workflow Systems"
          ].map((topic, i) => (
            <motion.div 
              key={i} 
              className="flex items-center gap-3 group"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 7.2 + (i * 0.1) }}
            >
              <div className="relative flex items-center justify-center -ml-[3.5px]">
                <div className="w-2 h-2 rounded-full bg-[#0a0f1c] border border-accent-purple/50 group-hover:border-accent group-hover:bg-accent/20 transition-all duration-300 z-10" />
                <motion.div 
                  className="absolute inset-0 rounded-full bg-accent blur-[4px] opacity-0 group-hover:opacity-100"
                  initial={false}
                />
              </div>
              <span className="text-xs text-muted group-hover:text-white transition-colors duration-300 font-medium cursor-default">
                {topic}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
