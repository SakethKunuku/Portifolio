"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, Sparkles, User, Mic } from "lucide-react";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  isTyping?: boolean;
};

const KNOWLEDGE_BASE: Record<string, string> = {
  "explain your ai projects": "I have engineered several AI systems, most notably the Viral Content Predictor (using TensorFlow for real-time metadata analysis) and the Smart Learning Path Generator (an LLM-powered engine using LangChain and PostgreSQL to generate personalized curriculums).",
  "what technologies does saketh specialize in": "My core stack sits at the intersection of AI and Backend engineering. I heavily use Python, PyTorch, and LangChain for ML systems, combined with Go, Node.js, Kubernetes, and AWS for scalable backend infrastructure.",
  "tell me about the backend internship": "During my Backend Engineering Internship in Summer 2023, I engineered robust API endpoints, optimized database query times by 40%, and implemented secure authentication flows alongside scalable data pipelines.",
  "what is currently being explored in ai lab": "The AI Lab currently focuses on agentic workflows and multidimensional latent space mapping. Specifically, I'm simulating autonomous agent swarms that utilize shared memory buffers to execute complex enterprise tasks.",
  "show engineering strengths": "My primary strengths lie in architecting distributed systems and deploying production-ready machine learning models. I focus on high-availability infrastructure, edge inference latency optimization, and robust CI/CD pipelines.",
  "what systems have been built": "I've deployed a Semantic Search Engine (Rust/Qdrant), a Vision-Language Analyzer for edge nodes (PyTorch/C++), a high-concurrency Event Management System (Go/Redis), and an ATS Recruitment Engine (Python/Spacy).",
  "default": "I am an intelligent agent designed to assist you in exploring this portfolio. You can ask me about specific projects, technical skills, or engineering experience. How can I assist your evaluation today?"
};

const CONTEXT_PROMPTS: Record<string, string[]> = {
  "projects": ["Explain your AI projects", "What systems have been built?"],
  "skills": ["What technologies does Saketh specialize in?", "Show engineering strengths"],
  "experience": ["Tell me about the backend internship"],
  "ai-lab": ["What is currently being explored in AI Lab?"],
  "default": ["Explain your AI projects", "What technologies does Saketh specialize in?", "Show engineering strengths"]
};

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
    }, 15); 
    return () => clearInterval(timer);
  }, [text, onComplete]);

  return <span>{displayed}</span>;
};

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { id: 'init', role: 'assistant', content: 'System connected. I am the AI engineering companion for this portfolio. How can I assist you with your evaluation?' }
  ]);
  const [activeContext, setActiveContext] = useState<string>("default");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll Spy for Contextual Prompts
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["projects", "skills", "experience", "ai-lab"];
      let currentContext = "default";
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentContext = section;
            break;
          }
        }
      }
      setActiveContext(currentContext);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    const query = text.trim();
    if (!query) return;

    setMessages(prev => [...prev, { id: Date.now().toString(), role: 'user', content: query }]);
    setInput("");
    setIsTyping(true);

    // Simple intent matching
    const normalizedQuery = query.toLowerCase().replace(/[^a-z0-9 ]/g, '');
    
    let matchedResponse = KNOWLEDGE_BASE["default"];
    for (const key of Object.keys(KNOWLEDGE_BASE)) {
      if (key !== "default" && (normalizedQuery.includes(key) || key.includes(normalizedQuery))) {
        matchedResponse = KNOWLEDGE_BASE[key];
        break;
      }
    }

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        role: 'assistant', 
        content: matchedResponse,
        isTyping: true
      }]);
    }, 600); // Simulate network latency
  };

  const currentPrompts = CONTEXT_PROMPTS[activeContext] || CONTEXT_PROMPTS["default"];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-20 md:bottom-8 md:right-24 z-40 glass-card p-3 rounded-full flex items-center justify-center text-accent hover:text-white hover:border-accent/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all"
        title="Initialize AI Assistant"
      >
        <Sparkles className="w-5 h-5" />
        <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-accent-purple rounded-full animate-ping opacity-75" />
        <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-accent-purple rounded-full" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", bounce: 0, duration: 0.7, opacity: { duration: 0.3 } }}
            className="fixed bottom-24 right-6 md:right-8 w-[90vw] max-w-[380px] z-50 bg-[#0a0a0c]/95 backdrop-blur-3xl rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col"
            style={{ height: '600px', maxHeight: '80vh' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/5 bg-gradient-to-r from-accent/5 to-transparent">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Bot className="w-5 h-5 text-accent-purple" />
                  <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-green-500 rounded-full border border-black" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-white tracking-tight">System.Agent</div>
                  <div className="text-[10px] font-mono text-muted uppercase tracking-widest flex items-center gap-1">
                    <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse" /> Online
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-muted hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-6 scroll-smooth">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border ${msg.role === 'user' ? 'bg-white/5 border-white/10 text-muted' : 'bg-accent-purple/10 border-accent-purple/20 text-accent-purple'}`}>
                    {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div className={`px-4 py-3 rounded-2xl max-w-[80%] text-[13px] leading-relaxed tracking-tight ${msg.role === 'user' ? 'bg-white/10 text-white rounded-tr-sm' : 'bg-black/40 border border-white/5 text-foreground/80 rounded-tl-sm'}`}>
                    {msg.isTyping ? <TypewriterText text={msg.content} onComplete={() => {
                      setMessages(prev => prev.map(m => m.id === msg.id ? { ...m, isTyping: false } : m));
                    }}/> : msg.content}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex gap-3 flex-row">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 border bg-accent-purple/10 border-accent-purple/20 text-accent-purple">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="px-4 py-3 rounded-2xl max-w-[80%] bg-black/40 border border-white/5 rounded-tl-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-accent/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-accent/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-accent/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
            </div>

            {/* Contextual Suggestions */}
            {!isTyping && (
              <div className="px-5 py-3 border-t border-white/5 bg-black/20 overflow-x-auto flex gap-2 no-scrollbar">
                {currentPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => handleSend(prompt)}
                    className="whitespace-nowrap px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-[11px] font-medium tracking-wide hover:bg-accent/10 transition-colors shrink-0"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 bg-black/40 border-t border-white/5 flex items-center gap-3">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 flex items-center gap-2 focus-within:border-accent/50 focus-within:bg-white/10 transition-all"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Query system intelligence..."
                  className="flex-1 bg-transparent border-none outline-none text-[13px] text-white placeholder:text-muted"
                />
                <button type="button" className="text-muted hover:text-accent transition-colors" title="Voice interaction (Placeholder)">
                  <Mic className="w-4 h-4" />
                </button>
              </form>
              <button 
                onClick={() => handleSend(input)}
                disabled={!input.trim()}
                className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center disabled:opacity-50 disabled:bg-white/10 disabled:text-muted transition-all shrink-0 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              >
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
