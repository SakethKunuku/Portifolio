"use client";

import { motion } from "framer-motion";
import { Mail, FileText, ExternalLink, Code2, Terminal as TerminalIcon } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function SystemEnd() {
  return (
    <div className="w-full relative flex flex-col items-center justify-center text-center">
      
      {/* 1. Top Status Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-mono text-[10px] md:text-xs text-accent tracking-[0.2em] uppercase mb-8 flex items-center gap-3 bg-accent/5 px-4 py-2 rounded-full border border-accent/10"
      >
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
        SYSTEM STATUS: ONLINE • READY FOR NEXT CHALLENGE
      </motion.div>

      {/* 2. Main Heading */}
      <motion.h2 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-tight"
      >
        Mission Brief <br className="md:hidden" />Complete.
      </motion.h2>

      {/* 3. Narrative Description */}
      <motion.p 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-foreground/70 text-base md:text-lg max-w-2xl mx-auto mb-16 leading-relaxed"
      >
        From enterprise systems and backend engineering to intelligent automation and AI exploration. 
        If an idea, project, opportunity, or engineering challenge brought you here, let&apos;s continue the conversation.
      </motion.p>

      {/* 4. Centerpiece Status Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="w-full max-w-3xl glass-card rounded-3xl border border-white/[0.08] bg-[#0b1120]/80 backdrop-blur-2xl p-8 md:p-10 mb-16 relative overflow-hidden text-left shadow-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
        
        <h3 className="font-mono text-xs text-muted tracking-[0.2em] uppercase border-b border-white/[0.05] pb-4 mb-6">
          Current Operational Status
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-6">
            <div>
              <p className="text-[10px] font-mono text-muted uppercase tracking-widest mb-1.5">Role</p>
              <p className="text-white font-medium text-lg">Enterprise Engineering Intern</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-muted uppercase tracking-widest mb-1.5">Focus</p>
              <p className="text-white font-medium text-lg">Enterprise Systems + Agentic AI</p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-[10px] font-mono text-muted uppercase tracking-widest mb-1.5">Current Direction</p>
              <p className="text-white font-medium text-lg leading-snug">Backend Engineering, Intelligent Automation, Enterprise Workflows</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-muted uppercase tracking-widest mb-1.5">Availability</p>
              <div className="flex flex-col gap-1">
                <p className="text-emerald-400 font-medium text-lg flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Open To Technical Discussions
                </p>
                <p className="text-[11px] text-muted/70 pl-3.5">Response Time: Usually within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Recruiter Shortcuts Label */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35 }}
        className="flex flex-col items-center mb-6 text-center"
      >
        <p className="font-mono text-[10px] text-muted uppercase tracking-[0.2em] mb-1.5">Recruiter Shortcuts</p>
        <p className="font-mono text-[10px] text-muted/50">Most visitors open the resume. The curious ones inspect the code.</p>
      </motion.div>

      {/* 5. Action Buttons Grid */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="flex flex-wrap items-center justify-center gap-4 mb-24 w-full max-w-4xl"
      >
        <a 
          href="mailto:hello@example.com" 
          className="flex items-center justify-center gap-3 px-8 py-4 w-full sm:w-auto bg-white text-black font-semibold tracking-wide text-sm rounded-xl hover:bg-white/90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] active:scale-95"
        >
          <Mail className="w-[18px] h-[18px]" /> Send Message
        </a>
        <a 
          href="#" 
          className="flex items-center justify-center gap-3 px-8 py-4 w-full sm:w-auto glass-card border border-white/[0.08] text-white font-medium tracking-wide text-sm rounded-xl hover:bg-white/[0.05] transition-all hover:border-white/20 active:scale-95"
        >
          <FileText className="w-[18px] h-[18px]" /> View Resume
        </a>
        <a 
          href="#" 
          className="flex items-center justify-center gap-3 px-8 py-4 w-full sm:w-auto glass-card border border-white/[0.08] text-white font-medium tracking-wide text-sm rounded-xl hover:bg-[#0077b5]/20 hover:text-[#0077b5] transition-all hover:border-[#0077b5]/50 active:scale-95 group"
        >
          <ExternalLink className="w-[18px] h-[18px] transition-colors" /> LinkedIn
        </a>
        <a 
          href="#" 
          className="flex items-center justify-center gap-3 px-8 py-4 w-full sm:w-auto glass-card border border-white/[0.08] text-white font-medium tracking-wide text-sm rounded-xl hover:bg-white/[0.05] transition-all hover:border-white/20 active:scale-95"
        >
          <Code2 className="w-[18px] h-[18px]" /> GitHub
        </a>
      </motion.div>

      {/* 6. System Summary Terminal */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="w-full max-w-md mx-auto bg-[#05080f] rounded-lg border border-white/[0.05] overflow-hidden text-left mb-12 shadow-xl"
      >
        <div className="bg-[#0a0f1c] px-4 py-2 border-b border-white/[0.05] flex items-center gap-2">
          <TerminalIcon className="w-3.5 h-3.5 text-muted" />
          <span className="text-[10px] font-mono text-muted uppercase tracking-wider">saketh-os.exe</span>
        </div>
        <div className="p-5 font-mono text-xs md:text-sm text-foreground/70 leading-relaxed">
          <p><span className="text-accent">saketh@os:~$</span> status</p>
          <br/>
          <p>experience: <span className="text-emerald-400">loaded</span></p>
          <p>projects: <span className="text-emerald-400">loaded</span></p>
          <p>skills: <span className="text-emerald-400">loaded</span></p>
          <p>enterprise_experience: <span className="text-emerald-400">active</span></p>
          <br/>
          <p>current_state: building</p>
          <p>next_target: intelligent_systems</p>
          <br/>
          <p>availability: online</p>
          <p className="mt-2 text-accent animate-pulse">_</p>
        </div>
      </motion.div>

      {/* Terminal Easter Egg */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
        className="w-full max-w-md mx-auto flex items-start justify-center gap-3 text-left mb-16"
      >
        <p className="font-mono text-[10px] text-muted uppercase tracking-widest pt-[2px]">Hint:</p>
        <p className="font-mono text-[10px] text-muted/50 leading-relaxed">
          Try asking about Agentic AI,<br/>
          Enterprise Systems,<br/>
          or Backend Engineering.
        </p>
      </motion.div>

      {/* 7. Signature Line */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="text-center pb-8"
      >
        <p className="font-mono text-[10px] md:text-xs text-muted uppercase tracking-[0.3em] mb-4">
          You&apos;ve reached the end of the portfolio.
        </p>
        <p className="text-sm md:text-base text-foreground/60 italic leading-relaxed">
          The next chapter is probably being discussed over a call,<br />
          a whiteboard, or a Jira ticket.
        </p>
      </motion.div>

    </div>
  );
}
