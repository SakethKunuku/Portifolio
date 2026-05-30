"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, Search, Cpu, Activity, Database } from "lucide-react";

interface HistoryItem {
  id: string;
  type: 'command' | 'response' | 'system' | 'error' | 'suggestion';
  content: string | React.ReactNode;
  isTyping?: boolean;
}

const VALID_COMMANDS = [
  "help", "ls", "pwd", "clear", "status", "uptime", "whoami",
  "cd about", "cd projects", "cd experience", "cd skills", "cd ai-lab", "cd contact",
  "open github", "open linkedin", "open resume",
  "run ai-agent", "show deployments", "show projects", "show skills", "show system-status",
  "sudo hire saketh", "coffee.exe", "launch future", "reveal mission"
];

const HELP_TEXT = (
  <div className="flex flex-col gap-2">
    <div className="text-accent font-semibold">AVAILABLE COMMANDS</div>
    <div><span className="text-foreground">Navigation:</span> cd [about | projects | experience | skills | ai-lab | contact]</div>
    <div><span className="text-foreground">System:</span> help, ls, pwd, clear, status, uptime, whoami</div>
    <div><span className="text-foreground">AI / Core:</span> run ai-agent, show [deployments | projects | skills | system-status]</div>
    <div><span className="text-foreground">Open:</span> open [github | linkedin | resume]</div>
    <div className="text-muted mt-2 text-[10px]">*Hint: Tab for autocomplete, Up/Down for history. Try finding easter eggs.</div>
  </div>
);

const TypewriterText = ({ text, onComplete }: { text: string; onComplete?: () => void }) => {
  const [displayed, setDisplayed] = useState("");
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayed(text.slice(0, i));
      i++;
      if (i > text.length) {
        clearInterval(timer);
        onComplete?.();
      }
    }, 10); // Fast typing for realism
    return () => clearInterval(timer);
  }, [text, onComplete]);

  return <span className="whitespace-pre-wrap">{displayed}</span>;
};

export function TerminalOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    { id: 'init', type: 'system', content: 'Saketh OS v1.1.0. Type "help" for a list of commands.' }
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const navigateToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Close terminal after a short delay so the user sees the transition
      setTimeout(() => setIsOpen(false), 800);
      return `Navigating to /${sectionId}... \n[Scrolling window]`;
    }
    return `Error: Section /${sectionId} not found.`;
  };

  const getSuggestions = (cmd: string) => {
    const tokens = cmd.split(" ");
    const matches = VALID_COMMANDS.filter(v => v.includes(tokens[0]) || (tokens[1] && v.includes(tokens[1])));
    return matches.slice(0, 3); // top 3 suggestions
  };

  const executeCommand = (cmd: string): { type: HistoryItem['type'], content: string | React.ReactNode } => {
    switch (cmd) {
      case "help": return { type: 'response', content: HELP_TEXT };
      case "ls": return { type: 'response', content: "drwxr-xr-x  about\ndrwxr-xr-x  projects\ndrwxr-xr-x  experience\ndrwxr-xr-x  skills\ndrwxr-xr-x  ai-lab\ndrwxr-xr-x  contact" };
      case "pwd": return { type: 'response', content: "/home/guest/portfolio" };
      case "status":
      case "show system-status": return { type: 'response', content: "System Status: OPERATIONAL\nCPU Load: 12%\nMemory Usage: 32%\nActive Nodes: 4" };
      case "uptime": return { type: 'response', content: "up 14 days, 3:24, 1 user, load averages: 0.14, 0.08, 0.05" };
      case "whoami": return { type: 'response', content: "guest_user_4092. Access level: Restricted (Read Only)." };
      
      case "cd about": return { type: 'response', content: navigateToSection('about') };
      case "cd projects": return { type: 'response', content: navigateToSection('projects') };
      case "cd experience": return { type: 'response', content: navigateToSection('experience') };
      case "cd skills": return { type: 'response', content: navigateToSection('skills') };
      case "cd ai-lab": return { type: 'response', content: navigateToSection('ai-lab') };
      case "cd contact": return { type: 'response', content: navigateToSection('contact') };
      
      case "show projects": return { type: 'response', content: "Active modules: Viral Content Predictor, Smart Learning Path, Mobile Comm Detector..." };
      case "show skills": return { type: 'response', content: "Primary stack: Python, TS, PyTorch, Kubernetes, AWS." };
      case "show deployments": return { type: 'response', content: "Connecting to cluster...\n1. Agentic_Framework_X [Live]\n2. Neural_Search_API [Live]\n3. Vision_Edge_Node [Beta]" };
      case "run ai-agent": return { type: 'response', content: "Spawning worker agent...\nAllocating shared memory buffer.\n[Task execution started in background]" };
      
      case "open github": return { type: 'response', content: "Opening GitHub repository profile... [Window pop-up blocked]" };
      case "open linkedin": return { type: 'response', content: "Opening LinkedIn professional network... [Window pop-up blocked]" };
      case "open resume": return { type: 'response', content: "Initiating download sequence... [Redirecting to resume.pdf]" };
      
      case "sudo hire saketh": return { type: 'response', content: "Authentication accepted. Root privileges granted.\nExcellent choice. Initializing onboarding sequence..." };
      case "coffee.exe": return { type: 'response', content: "Error 418: I'm a teapot. Cannot brew coffee over HTTP. Synthesizing caffeine..." };
      case "launch future": return { type: 'response', content: "Calculating trajectory...\nTrajectory set. Future is looking highly optimized." };
      case "reveal mission": return { type: 'response', content: "Mission: Build intelligence for the next era. Bridge the gap between research and scalable production." };
      
      default: {
        const suggestions = getSuggestions(cmd);
        if (suggestions.length > 0) {
          return { 
            type: 'error', 
            content: (
              <div>
                <div>Command not recognized: {cmd}</div>
                <div className="mt-1 text-muted">Did you mean:</div>
                <ul className="list-disc list-inside text-foreground/80 mt-1">
                  {suggestions.map(s => <li key={s}>{s}</li>)}
                </ul>
              </div>
            )
          };
        }
        return { type: 'error', content: `Command not recognized: ${cmd}. Type "help" for valid commands.` };
      }
    }
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    setCommandHistory(prev => [cmd, ...prev]);
    setHistoryIndex(-1);
    
    setHistory(prev => [...prev, { id: Date.now().toString(), type: 'command', content: input }]);
    setInput("");

    if (cmd === "clear") {
      setHistory([{ id: Date.now().toString(), type: 'system', content: 'Terminal cleared.' }]);
      return;
    }

    const res = executeCommand(cmd);
    
    setTimeout(() => {
      setHistory(prev => [...prev, { 
        id: Date.now().toString(), 
        type: res.type, 
        content: res.content,
        isTyping: typeof res.content === 'string' 
      }]);
    }, 100); // Slight delay for realism
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const nextIndex = historyIndex + 1;
        setHistoryIndex(nextIndex);
        setInput(commandHistory[nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInput(commandHistory[nextIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const match = VALID_COMMANDS.find(v => v.startsWith(input.toLowerCase()));
      if (match) setInput(match);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 glass-card p-3 rounded-full flex items-center justify-center text-muted hover:text-white hover:border-white/20 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all"
        title="Open System Console (Cmd+K)"
      >
        <TerminalIcon className="w-5 h-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", bounce: 0, duration: 0.7, opacity: { duration: 0.3 } }}
              className="fixed top-[15%] left-1/2 -translate-x-1/2 w-[90%] max-w-3xl z-50 bg-[#0a0a0c]/95 backdrop-blur-2xl rounded-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col"
              style={{ height: '65vh', maxHeight: '700px' }}
            >
              {/* Scanline overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 2px, 3px 100%' }} />
              
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <button onClick={() => setIsOpen(false)} className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
                    <button className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors" />
                    <button className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors" />
                  </div>
                  <span className="font-mono text-[10px] text-muted tracking-widest uppercase">system_console_v2</span>
                </div>
                
                {/* Diagnostics */}
                <div className="hidden md:flex items-center gap-6 font-mono text-[10px] text-muted tracking-widest uppercase">
                  <div className="flex items-center gap-2"><Cpu className="w-3 h-3 text-accent" /> CPU: 12%</div>
                  <div className="flex items-center gap-2"><Database className="w-3 h-3 text-accent-purple" /> MEM: 32%</div>
                  <div className="flex items-center gap-2"><Activity className="w-3 h-3 text-green-500" /> NET: OK</div>
                </div>
              </div>
              
              {/* Output Area */}
              <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 font-mono text-xs sm:text-sm scroll-smooth relative z-10">
                {history.map((item) => (
                  <div key={item.id} className="mb-4">
                    {item.type === 'command' && (
                      <div className="flex items-center text-foreground/80 mb-2">
                        <span className="text-accent mr-2">guest@saketh-os:~$</span>
                        <span>{item.content}</span>
                      </div>
                    )}
                    {item.type === 'response' && (
                      <div className="text-foreground/70 leading-relaxed text-[13px]">
                        {item.isTyping && typeof item.content === 'string' ? (
                          <TypewriterText text={item.content} />
                        ) : (
                          <span className="whitespace-pre-wrap">{item.content}</span>
                        )}
                      </div>
                    )}
                    {item.type === 'system' && (
                      <div className="text-muted text-[11px] uppercase tracking-widest border-l-2 border-accent/30 pl-3 py-1 bg-accent/5 rounded-r">
                        {item.content}
                      </div>
                    )}
                    {item.type === 'error' && (
                      <div className="text-red-400 text-[13px] bg-red-500/10 px-3 py-2 rounded-md border border-red-500/20">
                        {item.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="px-5 py-4 border-t border-white/5 bg-black/40 flex items-center relative z-10">
                <span className="text-accent mr-2 font-mono text-sm">guest@saketh-os:~$</span>
                <form onSubmit={handleCommand} className="flex-1">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    autoComplete="off"
                    spellCheck="false"
                    className="w-full bg-transparent border-none outline-none text-foreground font-mono text-sm placeholder:text-muted/50"
                  />
                </form>
                <div className="animate-pulse w-2 h-4 bg-foreground/60 ml-1" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
