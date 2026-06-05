import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Logo = ({ className, size = "md" }: LogoProps) => {
  const sizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl"
  };

  const ts = sizes[size];

  // Render animated letters
  const renderAnimatedText = (text: string, baseDelay: number, className: string) => {
    return text.split('').map((char, idx) => (
      <span
        key={idx}
        className={className}
        style={{
          animation: `letter-shimmer 3s ease-in-out infinite, letter-bounce 2s ease-in-out infinite`,
          animationDelay: `${(idx * 0.12) + baseDelay}s`,
          display: 'inline-block'
        }}
      >
        {char}
      </span>
    ));
  };

  return (
    <Link 
      to="/" 
      className={cn(
        "group flex items-center font-display w-fit transition-all hover:scale-[1.08] active:scale-[0.92] duration-300", 
        ts,
        className
      )}
    >
      {/* Premium Animated Liquid Glass Logo Icon */}
      <div className="relative w-[1.4em] h-[1.4em] mr-2.5 flex items-center justify-center" style={{
        animation: 'logo-container-orbit 12s ease-in-out infinite'
      }}>
        {/* Outer rotating ring - continuous rotation */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-300/50 via-purple-300/40 to-blue-300/30 backdrop-blur-lg border border-indigo-200/70 shadow-[0_0_20px_rgba(99,102,241,0.4),inset_-3px_-3px_12px_rgba(255,255,255,0.9),inset_3px_3px_12px_rgba(99,102,241,0.15)]" style={{
          animation: 'spin-logo 8s linear infinite'
        }} />
        
        {/* Inner layer - floating core with breathing effect */}
        <div className="absolute inset-1.5 rounded-full bg-gradient-to-br from-indigo-200/60 to-purple-200/40 blur-md border border-indigo-200/50 shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.8)]" style={{
          animation: 'float-logo-enhanced 4s ease-in-out infinite, breathe-logo 3s ease-in-out infinite'
        }} />
        
        {/* Center glowing dot - animated with color shift and intensity pulse */}
        <div className="absolute w-2.5 h-2.5 bg-gradient-to-br from-indigo-600 via-purple-500 to-blue-500 rounded-full shadow-[0_0_12px_rgba(99,102,241,0.8),0_0_24px_rgba(99,102,241,0.4)]" style={{
          animation: 'pulse-glow-enhanced 2s ease-in-out infinite, color-shift 6s linear infinite, core-intensity 3s ease-in-out infinite'
        }} />
        
        {/* Accent rings - multiple rotating elements */}
        <div className="absolute inset-3 rounded-full border border-indigo-400/30 shadow-[0_0_8px_rgba(99,102,241,0.2)]" style={{
          animation: 'rotate-slow 8s linear infinite'
        }} />
        
        {/* Secondary ring - counter rotation */}
        <div className="absolute inset-4 rounded-full border border-purple-300/20 shadow-[0_0_8px_rgba(168,85,247,0.15)]" style={{
          animation: 'rotate-slow-reverse 12s linear infinite'
        }} />

        {/* Enhanced outer glow for disk */}
        <div className="absolute -inset-0.5 rounded-full opacity-0" style={{
          animation: 'outer-glow-pulse 2.5s ease-in-out infinite',
          boxShadow: '0 0 15px rgba(99,102,241,0.3)'
        }} />

        {/* Floating particles around logo - enhanced with more dynamics */}
        <div className="absolute w-0.5 h-0.5 bg-indigo-400 rounded-full" style={{
          top: '10%',
          left: '50%',
          animation: 'orbit-particle-1 6s linear infinite'
        }} />
        <div className="absolute w-0.5 h-0.5 bg-purple-400 rounded-full" style={{
          top: '50%',
          right: '10%',
          animation: 'orbit-particle-2 7s linear infinite'
        }} />
        <div className="absolute w-0.5 h-0.5 bg-blue-400 rounded-full" style={{
          bottom: '10%',
          left: '50%',
          animation: 'orbit-particle-3 8s linear infinite'
        }} />
      </div>

      {/* Logo Text with Animated Letters */}
      <div className="flex items-baseline gap-0.5">
        <div className="font-bold text-slate-900 tracking-tight">
          {renderAnimatedText('Hire', 0, '')}
        </div>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 font-black tracking-tighter">
          {renderAnimatedText('Flow', 0.5, '')}
        </div>
      </div>

      <style>{`
        /* Disk Icon Animations */
        @keyframes spin-logo {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes rotate-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes float-logo-enhanced {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-3px) scale(1.05); }
        }
        
        @keyframes breathe-logo {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        
        @keyframes pulse-glow-enhanced {
          0%, 100% { 
            box-shadow: 0 0 12px rgba(99, 102, 241, 0.8), 0 0 24px rgba(99, 102, 241, 0.4);
            transform: scale(1);
          }
          50% { 
            box-shadow: 0 0 20px rgba(99, 102, 241, 1), 0 0 40px rgba(99, 102, 241, 0.8);
            transform: scale(1.2);
          }
        }
        
        @keyframes color-shift {
          0%, 100% { filter: hue-rotate(0deg); }
          33% { filter: hue-rotate(120deg); }
          66% { filter: hue-rotate(240deg); }
          100% { filter: hue-rotate(360deg); }
        }
        
        @keyframes core-intensity {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        @keyframes outer-glow-pulse {
          0%, 100% { opacity: 0; filter: drop-shadow(0 0 8px rgba(99,102,241,0.4)); }
          50% { opacity: 0.6; filter: drop-shadow(0 0 20px rgba(99,102,241,0.6)); }
        }
        
        @keyframes logo-container-orbit {
          0%, 100% { transform: rotateZ(0deg); }
          50% { transform: rotateZ(5deg); }
        }
        
        @keyframes orbit-particle-1 {
          0% { transform: translate(0, -30px) rotate(0deg); opacity: 1; }
          50% { opacity: 0.5; }
          100% { transform: translate(0, -30px) rotate(360deg); opacity: 1; }
        }
        
        @keyframes orbit-particle-2 {
          0% { transform: translate(30px, 0) rotate(0deg); opacity: 1; }
          50% { opacity: 0.5; }
          100% { transform: translate(30px, 0) rotate(360deg); opacity: 1; }
        }
        
        @keyframes orbit-particle-3 {
          0% { transform: translate(0, 30px) rotate(0deg); opacity: 1; }
          50% { opacity: 0.5; }
          100% { transform: translate(0, 30px) rotate(360deg); opacity: 1; }
        }

        /* Text Letter Animations */
        @keyframes letter-shimmer {
          0%, 100% { 
            text-shadow: 0 0 0px rgba(99, 102, 241, 0);
            color: inherit;
          }
          50% { 
            text-shadow: 0 0 8px rgba(99, 102, 241, 0.6), 0 0 12px rgba(168, 85, 247, 0.4);
            color: rgba(99, 102, 241, 1);
          }
        }
        
        @keyframes letter-bounce {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-2px) scale(1.08); }
        }
      `}</style>
    </Link>
  );
};
