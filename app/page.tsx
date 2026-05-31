"use client";

import { Section } from "@/components/Section";
import { GlassCard } from "@/components/GlassCard";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { SolutionPortfolio } from "@/components/SolutionPortfolio";
import { EngineeringDomains } from "@/components/EngineeringDomains";
import { DeploymentQueue } from "@/components/DeploymentQueue";
import { SystemEnd } from "@/components/SystemEnd";
import { ReflectionDivider } from "@/components/ReflectionDivider";
import { ExternalLink, GitBranch, Database, Terminal, Bot, Code, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HeroDashboard } from "@/components/HeroDashboard";

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col w-full"
    >
      <Section
  id="hero"
  className="scroll-mt-22 h-[calc(100vh-4rem)] pt-8 lg:pt-13 px-0 md:px-0 flex flex-col justify-start max-w-none overflow-hidden"
>
        <HeroDashboard />
      </Section>

      {/* 2. About Section */}
      <Section id="about" delay={0.1} className="max-w-7xl mx-auto px-8 md:px-10 w-full min-h-screen flex flex-col justify-center">
        
        {/* Section Header */}
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-sm tracking-[0.3em] uppercase text-accent">
              About Me
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.05]"
          >
            Balanced Engineer <br />
            <span className="text-accent">with AI Direction</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6 items-stretch">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-5"
          >

            {/* Main About Card */}
            <GlassCard className="p-5 relative overflow-hidden group">
              
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 ">
                
                <div className="flex items-center gap-3 mb-6">
                  <Terminal className="w-5 h-5 text-accent" />
                  <span className="font-mono text-xs tracking-[0.25em] uppercase text-muted">
                    Engineer Profile
                  </span>
                </div>

                <div className="space-y-4 text-foreground/75 leading-relaxed text-[14px] md:text-[15px]">

                <p className="leading-6">
                  I’m a software engineer currently building my foundation across enterprise systems, backend engineering, and intelligent automation workflows.
                </p>

                <p className="leading-6">
                  Through my ongoing internship at BNP Paribas India Solutions and previous backend development experience, I’m gaining exposure to enterprise application workflows, issue resolution systems, automation thinking, and scalable engineering practices.
                </p>

                <p className="leading-6">
                  My long-term direction is focused on combining enterprise architecture with AI-driven systems to build smarter workflows, intelligent automation solutions, and practical real-world applications powered by modern AI technologies.
                </p>

                <p className="leading-6">
                  I enjoy solving problems related to automation, reducing manual effort, workflow optimization, analytics, and AI integrations while continuously improving both my technical and system design skills.
                </p>

                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {[
                    "Enterprise Systems",
                    "Backend Engineering",
                    "AI Workflows",
                    "Automation",
                    "System Design",
                    "Agentic AI"
                  ].map((tag, i) => (
                    <motion.div
                      key={tag}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      viewport={{ once: true }}
                      className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.05] text-sm text-foreground/70 hover:border-accent/30 hover:text-white transition-all duration-300"
                    >
                      {tag}
                    </motion.div>
                  ))}
                </div>
              </div>
            </GlassCard>

            {/* Mini Highlights */}
            <div className="grid sm:grid-cols-3 gap-4">

              {[
                {
                  icon: Database,
                  title: "Enterprise",
                  desc: "Banking systems, workflows & backend operations"
                },
                {
                  icon: Sparkles,
                  title: "AI Direction",
                  desc: "Exploring intelligent automation & AI systems"
                },
                {
                  icon: Code,
                  title: "Engineering",
                  desc: "Building scalable applications & backend solutions"
                }
              ].map((item, i) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <GlassCard className="p-4 h-full group hover:border-accent/20 transition-all duration-300">
                      <Icon className="w-5 h-5 text-accent mb-4" />

                      <h3 className="text-white font-semibold mb-2">
                        {item.title}
                      </h3>

                      <p className="text-sm text-foreground/60 leading-relaxed">
                        {item.desc}
                      </p>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="sticky top-24"
          >

            <GlassCard className="overflow-hidden p-0 relative group">

              <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Terminal Header */}
              <div className="border-b border-white/[0.05] px-5 py-3 bg-white/[0.02] flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />

                <span className="ml-4 font-mono text-[10px] tracking-[0.25em] uppercase text-muted">
                  engineer.profile.ts
                </span>
              </div>

              {/* Code Block */}
              <div className="p-5 overflow-x-auto">
      <pre className="font-mono text-[12px] leading-6 text-foreground/65">
      {`const engineer = {
        name: "Saketh Kunuku",

        currentFocus: [
          "Enterprise Systems",
          "Backend Engineering",
          "AI Workflows",
          "Automation"
        ],

        workingWith: [
          "COBOL",
          "UNIX",
          "SQL",
          "Autosys",
          "Gestab"
        ],

        exploring: [
          "Agentic AI",
          "LangGraph",
          "Intelligent Systems"
        ],

        mindset: "Build. Learn. Improve."
      }`}
      </pre>
              </div>
            </GlassCard>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/SakethKunuku"
                target="_blank"
                className="flex-1"
              >
                <GlassCard className="p-4 flex items-center justify-center gap-3 hover:border-accent/20 transition-all duration-300 group">
                  <GitBranch className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
                  <span className="text-sm text-foreground/70 group-hover:text-white">
                    GitHub
                  </span>
                </GlassCard>
              </a>

              <a
                href="https://www.linkedin.com/in/saketh-kunuku/"
                target="_blank"
                className="flex-1"
              >
                <GlassCard className="p-4 flex items-center justify-center gap-3 hover:border-accent/20 transition-all duration-300 group">
                  <ExternalLink className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
                  <span className="text-sm text-foreground/70 group-hover:text-white">
                    LinkedIn
                  </span>
                </GlassCard>
              </a>
            </div>

          </motion.div>
        </div>
      </Section>

      {/* 3. Experience Timeline */}
      <Section
        id="experience"
        delay={0.1}
        className="max-w-7xl mx-auto px-8 md:px-14 w-full" 
      >
        <div className="mb-12">
          
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-accent">
            Enterprise & AI Journey
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">
            Engineering Evolution
          </h2>

          <p className="text-foreground/60 text-base md:text-lg max-w-2xl leading-relaxed">
            From backend foundations and student technical leadership to enterprise engineering exposure and AI-driven system direction.
          </p>

          <div className="h-1 w-24 bg-accent/80 rounded-full mt-6" />
        </div>

        <ExperienceTimeline />
      </Section>

      <ReflectionDivider 
        lines={[
          <span key={1}>The classroom explained the <span className="text-accent">concepts</span>.</span>,
          <span key={2}>The projects explained the <span className="font-bold text-white">trade-offs</span>.</span>
        ]}
      />

      {/* 4. Projects */}
      <Section id="projects" delay={0.1} className="max-w-6xl mx-auto px-6 md:px-8 w-full">
        <div className="mb-14">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4 flex items-center gap-4">
            <Bot className="w-8 h-8 text-accent" />
            Solution Portfolio
          </h2>
          <div className="h-1 w-24 bg-accent/80 rounded-full mb-6" />
          <p className="text-foreground/70 max-w-2xl text-sm md:text-base leading-relaxed">
            A collection of engineering projects focused on solving practical problems through backend systems, analytics, automation, and AI-driven approaches.
          </p>
        </div>
        
        <SolutionPortfolio />
      </Section>

      <ReflectionDivider 
        lines={[
          <span key={1}>Some projects taught <span className="text-accent">technologies</span>.</span>,
          <span key={2}>Others taught <span className="text-accent">patience</span>.</span>,
          <span key={3}>The best ones <span className="font-bold text-white">taught both</span>.</span>
        ]}
      />

      {/* 5. Skills */}
      <Section id="skills" delay={0.1} className="max-w-6xl mx-auto px-6 md:px-8 w-full">
        <div className="mb-14">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">Engineering Domains</h2>
          <div className="h-1 w-24 bg-accent/80 rounded-full mb-6" />
          <p className="text-foreground/70 max-w-2xl text-sm md:text-base leading-relaxed">
            Capabilities developed through enterprise exposure, backend engineering, AI exploration, and real-world problem solving.
          </p>
        </div>
        
        <EngineeringDomains />
      </Section>

      <ReflectionDivider 
        lines={[
          <span key={1}>The tools will <span className="text-accent">change</span>.</span>,
          <span key={2}>The curiosity behind learning them <span className="font-bold text-white">probably won't</span>.</span>
        ]}
      />

      {/* 6. Current Exploration */}
      <Section id="exploration" delay={0.1} className="max-w-6xl mx-auto px-6 md:px-8 w-full">
        <div className="mb-14">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4 flex items-center gap-4">
            <span className="relative flex h-8 w-8 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-20"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
            Current Exploration
          </h2>
          <div className="h-1 w-24 bg-accent/80 rounded-full mb-6" />
          <p className="text-foreground/70 max-w-2xl text-sm md:text-base leading-relaxed">
            The engineering roadmap representing active developments, ongoing research, and future trajectory.
          </p>
        </div>
        <DeploymentQueue />
      </Section>

      <ReflectionDivider 
        lines={[
          <span key={1}>Every project started with a <span className="text-accent">conversation</span>.</span>,
          <span key={2}>The next one <span className="font-bold text-white">probably will too</span>.</span>
        ]}
      />

      {/* 7. System End */}
      <Section id="contact" className="min-h-[90vh] justify-center items-center px-4 md:px-12 w-full pt-20" delay={0.1}>
        <SystemEnd />
      </Section>

    </motion.div>
  );
}
