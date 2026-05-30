"use client";

import { useState, useEffect } from "react";
import { Search, Command, ChevronRight, MessageSquare, User as UserIcon } from "lucide-react";
import { motion } from "framer-motion";

export function SystemStatusBar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setMounted(true);
    
    const handleKeyDown = (e: KeyboardEvent) => {
      // Allow Cmd+K to visually trigger the terminal overlay.
      // Since TerminalOverlay already listens for Cmd+K, we don't strictly need logic here,
      // but we could focus the fake input or trigger an event if we wanted to couple them.
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 h-16 bg-[#030712]/90 backdrop-blur-md border-b border-white/[0.03] z-40 flex items-center justify-between px-6 pl-20 md:pl-72 transition-all duration-300"
    >
      
      {/* Search Bar */}
      <div className="flex-1 max-w-xl relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-muted group-focus-within:text-accent transition-colors" />
        </div>
        <input 
          type="text" 
          placeholder="Type a command or search..." 
          className="w-full bg-[#0a0f1c] border border-white/[0.05] rounded-xl py-2.5 pl-11 pr-16 text-sm text-foreground focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/40 transition-all shadow-[inset_0_1px_4px_rgba(0,0,0,0.5)]"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <div className="flex items-center gap-1 bg-[#151a2a] px-2 py-1 rounded-md border border-white/5 text-[10px] text-muted font-mono">
            <Command className="w-3 h-3" />
            <span>K</span>
          </div>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6 ml-6">
        
        {/* System Status */}
        <div className="hidden md:flex flex-col items-end mr-4">
          <span className="font-mono text-[9px] text-muted tracking-[0.2em] uppercase mb-1">System Status</span>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] text-green-400 tracking-widest uppercase shadow-green-500/20 drop-shadow-md">Operational</span>
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
          </div>
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-3">
          <button className="w-9 h-9 rounded-xl bg-[#0a0f1c] border border-white/[0.05] flex items-center justify-center text-muted hover:text-white hover:border-white/10 transition-colors">
            <ChevronRight className="w-4 h-4" />
          </button>
          <button className="w-9 h-9 rounded-xl bg-[#0a0f1c] border border-white/[0.05] flex items-center justify-center text-muted hover:text-white hover:border-white/10 transition-colors">
            <MessageSquare className="w-4 h-4" />
          </button>
          <button className="w-9 h-9 rounded-xl bg-[#0a0f1c] border border-white/[0.05] flex items-center justify-center text-muted hover:text-white hover:border-white/10 transition-colors">
            <span className="text-sm font-medium">S</span>
          </button>
        </div>
      </div>

    </motion.div>
  );
}
