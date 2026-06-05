import { Link } from "react-router-dom";
import { Briefcase, Users, Target, ArrowRight, Sparkles, ChevronRight, Zap, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Logo } from "@/components/Logo";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({ opacity: 1, scale: 1, transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } }),
};

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-purple-50 relative selection:bg-purple-400/30 overflow-hidden">
      {/* Skeuomorphic Liquid Glass Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" />

        {/* Large liquid glass blob - Top Left */}
        <div className="absolute top-[-15%] -left-[10%] w-[800px] h-[800px] rounded-full animate-float-slow" style={{
          background: 'linear-gradient(135deg, rgba(229, 231, 235, 1) 0%, rgba(219, 234, 254, 0.85) 50%, rgba(225, 213, 255, 0.75) 100%)',
          boxShadow: 'inset -20px -20px 40px rgba(255, 255, 255, 0.9), inset 20px 20px 40px rgba(165, 180, 252, 0.35), 0 40px 80px rgba(99, 102, 241, 0.25)',
          backdropFilter: 'blur(10px)',
        }} />

        {/* Liquid glass blob - Top Right */}
        <div className="absolute top-[5%] -right-[15%] w-[700px] h-[700px] rounded-full animate-float-medium" style={{
          background: 'linear-gradient(135deg, rgba(244, 238, 255, 0.9) 0%, rgba(219, 234, 254, 0.75) 50%, rgba(248, 245, 250, 0.85) 100%)',
          boxShadow: 'inset -15px -15px 30px rgba(255, 255, 255, 0.85), inset 15px 15px 30px rgba(192, 132, 250, 0.3), 0 35px 70px rgba(168, 85, 247, 0.2)',
          backdropFilter: 'blur(8px)',
        }} />

        {/* Medium liquid glass blob - Center */}
        <div className="absolute top-[35%] left-[10%] w-[500px] h-[500px] rounded-full animate-float-slow-reverse" style={{
          background: 'linear-gradient(135deg, rgba(225, 243, 254, 0.9) 0%, rgba(232, 245, 233, 0.75) 50%, rgba(240, 230, 255, 0.85) 100%)',
          boxShadow: 'inset -15px -15px 30px rgba(255, 255, 255, 0.9), inset 15px 15px 30px rgba(51, 152, 219, 0.2), 0 30px 60px rgba(59, 130, 246, 0.18)',
          backdropFilter: 'blur(8px)',
        }} />

        {/* Small liquid glass blob - Bottom Right */}
        <div className="absolute bottom-[-10%] right-[5%] w-[600px] h-[600px] rounded-full animate-float-very-slow" style={{
          background: 'linear-gradient(135deg, rgba(243, 232, 255, 0.85) 0%, rgba(219, 234, 254, 0.7) 50%, rgba(229, 231, 235, 0.8) 100%)',
          boxShadow: 'inset -20px -20px 40px rgba(255, 255, 255, 1), inset 20px 20px 40px rgba(196, 181, 253, 0.25), 0 40px 80px rgba(139, 92, 246, 0.18)',
          backdropFilter: 'blur(12px)',
        }} />

        {/* Fine glass texture overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(165, 180, 252, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(196, 181, 253, 0.1) 0%, transparent 50%)
          `,
        }} />

        {/* Subtle noise for realistic glass texture */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" /%3E%3C/filter%3E%3Crect width="100" height="100" fill="white" filter="url(%23noise)"%3E%3C/rect%3E%3C/svg%3E")',
          backgroundSize: '100px 100px',
          mixBlendMode: 'overlay'
        }} />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Nav */}
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
          <div className="relative group">
            {/* Animated background blur effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-300/20 via-purple-300/20 to-blue-300/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Main navbar container */}
            <div className="relative bg-gradient-to-r from-white/40 via-white/35 to-white/40 backdrop-blur-3xl border border-white/70 rounded-2xl px-6 h-14 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.8)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.8)] transition-shadow duration-500">
              {/* Glow line at top */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent rounded-t-2xl" />
              
              <Logo size="md" />
              
              <div className="flex items-center gap-3">
                <Link to="/login">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="hidden sm:inline-flex text-slate-700 hover:bg-indigo-100/60 hover:text-indigo-900 transition-all duration-300 font-medium"
                  >
                    Log in
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button 
                    size="sm" 
                    className="rounded-full px-5 shadow-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 hover:from-indigo-600 hover:via-purple-600 hover:to-blue-600 text-white font-semibold hover:shadow-xl hover:shadow-purple-400/40 active:scale-95 transition-all duration-300"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16">
          <div className="container px-6 text-center max-w-4xl mx-auto">
            <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-100/80 to-pink-100/80 border border-purple-200/80 px-4 py-2 text-sm text-purple-700 mb-10 backdrop-blur-md">
                <Sparkles className="h-4 w-4 text-purple-600" />
                <span className="font-medium">AI-Powered Applicant Tracking</span>
                <ChevronRight className="h-3 w-3 text-purple-600/70 ml-1" />
              </div>
            </motion.div>

            <motion.h1 initial="hidden" animate="visible" custom={1} variants={fadeUp}
              className="font-display text-6xl md:text-[5.5rem] font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-8 text-balance"
            >
              Hire smarter,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 drop-shadow-sm pb-2 inline-block">not harder.</span>
            </motion.h1>

            <motion.p initial="hidden" animate="visible" custom={2} variants={fadeUp}
              className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              The modern ATS that helps fast-growing companies find the perfect candidates through
              AI matching, visual pipelines, and zero-friction applications.
            </motion.p>

            <motion.div initial="hidden" animate="visible" custom={3} variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/signup">
                <Button size="lg" className="gap-2 rounded-full px-8 h-14 text-base w-full sm:w-auto text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl active:scale-95 transition-all duration-300 relative overflow-hidden group" style={{
                  boxShadow: '0 0 0 0 rgba(139, 92, 246, 0.4)'
                }}>
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Rotating border effect on hover */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                    background: 'conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.5) 90deg, transparent 180deg)',
                    animation: 'spin-border 2s linear infinite',
                  }} />
                  
                  {/* Shine wave effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] opacity-0 group-hover:opacity-100" style={{
                    animation: 'slide-shine 1.2s ease-out infinite',
                  }} />
                  
                  {/* Pulsing aura on hover */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400/0 via-purple-400/30 to-pink-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                    animation: 'pulse-aura 2s ease-in-out infinite',
                  }} />
                  
                  <span className="relative z-10 flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                    Start Hiring Free <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
              <Link to="/signup">
                <Button size="lg" className="rounded-full px-8 h-14 text-base w-full sm:w-auto text-slate-900 font-semibold bg-white/50 backdrop-blur-sm border-2 border-slate-200/80 hover:bg-white/80 hover:border-slate-300 hover:shadow-lg active:scale-95 transition-all duration-300 hover:text-indigo-600">
                  Find a Job
                </Button>
              </Link>
            </motion.div>

            {/* Trust bar */}
            <motion.div initial="hidden" animate="visible" custom={5} variants={fadeUp}
              className="mt-20 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm font-medium text-slate-600"
            >
              <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-indigo-600" /> SOC2 Ready</span>
              <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-300" />
              <span className="flex items-center gap-2"><Zap className="h-4 w-4 text-amber-500" /> 99.9% Uptime</span>
              <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-300" />
              <span className="flex items-center gap-2"><Globe className="h-4 w-4 text-blue-600" /> Global Talent Pool</span>
            </motion.div>
          </div>
        </section>

        {/* Features – Bento Grid */}
        <section className="relative py-24 md:py-32">
          <div className="container mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-center mb-16 md:mb-24">
              <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-balance">
                Everything you need to scale
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-slate-600 max-w-2xl mx-auto text-lg">
                Built specifically for high-velocity startups that cannot afford to miss out on top-tier engineering and design talent.
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Briefcase, title: "Job Management", desc: "Post, edit, and manage job listings from a clean dashboard. Track open roles effortlessly.", color: "text-blue-600", bg: "bg-blue-100", border: "border-blue-200" },
                { icon: Users, title: "Kanban Pipeline", desc: "Move candidates through stages with an intuitive, drag-and-drop visual board.", color: "text-purple-600", bg: "bg-purple-100", border: "border-purple-200" },
                { icon: Target, title: "AI Match Score", desc: "Instantly see how well each candidate matches a role with our AI-powered 0–100% scoring.", color: "text-pink-600", bg: "bg-pink-100", border: "border-pink-200" },
              ].map(({ icon: Icon, title, desc, color, bg, border }, i) => (
                <motion.div
                  key={title}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  custom={i} variants={scaleIn}
                  className={`rounded-3xl bg-white/40 backdrop-blur-xl border ${border} p-8 shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] transition-all duration-300 group hover:bg-white/60`}
                >
                  <div className={`h-14 w-14 rounded-2xl ${bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-7 w-7 ${color}`} />
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-xl mb-3">{title}</h3>
                  <p className="text-slate-600 leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats – Seamless Glass */}
        <section className="relative py-20">
          <div className="container mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="rounded-[2.5rem] bg-white/60 backdrop-blur-2xl border border-white/80 p-12 md:p-20 max-w-5xl mx-auto shadow-[0_20px_60px_rgba(0,0,0,0.1)] relative overflow-hidden"
            >
              {/* Inner ambient glow */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-300/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />
              
              <div className="relative grid md:grid-cols-3 gap-12 md:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
                {[
                  { value: "500+", label: "Startups Hiring" },
                  { value: "2.4k", label: "Candidates Placed" },
                  { value: "87%", label: "Match Accuracy" },
                ].map(({ value, label }, i) => (
                  <motion.div key={label} custom={i} variants={fadeUp} className="pt-8 md:pt-0 first:pt-0">
                    <div className="font-display text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-purple-600 mb-3">{value}</div>
                    <div className="text-base text-slate-600 font-medium uppercase tracking-wider">{label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA - Vibrant App Block */}
        <section className="relative py-32 mb-10">
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
              className="relative rounded-[3rem] overflow-hidden p-14 md:p-24 text-center shadow-2xl"
            >
              {/* Dynamic CTA Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/90 via-purple-600/85 to-blue-600/80" />
              <div className="absolute inset-0 opacity-40">
                <div className="absolute inset-0 bg-[radial-gradient(at_20%_50%,rgba(236,72,153,0.3),transparent_50%),radial-gradient(at_80%_80%,rgba(34,211,238,0.2),transparent_50%)]" />
              </div>
              
              <div className="relative z-10">
                <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 text-balance tracking-tight">
                  Ready to build your dream team?
                </h2>
                <p className="text-white/95 max-w-2xl mx-auto mb-10 text-xl leading-relaxed">
                  Join hundreds of high-growth companies already using HireFlow to discover and hire elite talent.
                </p>
                <Link to="/signup">
                  <Button size="lg" className="rounded-full px-10 h-14 text-base bg-white text-indigo-600 active:scale-95 transition-all duration-300 font-semibold relative overflow-hidden group" style={{
                    boxShadow: 'box-shadow: 0 20px 40px rgba(255, 255, 255, 0.3)'
                  }}>
                    {/* Animated gradient background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 via-white to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Rotating border glow on hover */}
                    <div className="absolute -inset-0.5 rounded-full opacity-0 group-hover:opacity-75 transition-opacity duration-300" style={{
                      background: 'conic-gradient(from 0deg, rgba(255,255,255,0.8), rgba(99,102,241,0.4), transparent)',
                      animation: 'spin-border 2.5s linear infinite',
                    }} />
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform opacity-0 group-hover:opacity-100" style={{
                      animation: 'slide-shine 1.2s ease-out infinite',
                    }} />
                    
                    {/* Inner glow pulse */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-300/0 to-purple-300/0 opacity-0 group-hover:opacity-60 transition-opacity duration-300" style={{
                      animation: 'pulse-inner 2s ease-in-out infinite',
                    }} />
                    
                    <span className="relative z-10 flex items-center gap-2 group-hover:scale-110 transition-transform duration-300">
                      Start Hiring For Free <ArrowRight className="h-5 w-5 group-hover:translate-x-1.5 transition-transform" />
                    </span>
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Clean Minimal Footer */}
        <footer className="mt-auto border-t border-slate-200/50 py-8 relative z-10">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <Logo size="sm" />
            <span>© 2026 HireFlow. All rights reserved.</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
