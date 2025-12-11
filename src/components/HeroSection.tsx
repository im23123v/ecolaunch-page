import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, ChevronDown, Leaf, Zap, BarChart3, Globe, Recycle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");
  const fullText = "Waste Economy";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const floatingIcons = [
    { icon: Leaf, top: "20%", left: "8%", delay: "0s", size: "w-8 h-8" },
    { icon: Recycle, top: "30%", right: "10%", delay: "1s", size: "w-10 h-10" },
    { icon: Zap, bottom: "35%", left: "15%", delay: "2s", size: "w-6 h-6" },
    { icon: Globe, bottom: "25%", right: "12%", delay: "0.5s", size: "w-9 h-9" },
    { icon: BarChart3, top: "60%", left: "5%", delay: "1.5s", size: "w-7 h-7" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 transition-transform duration-100"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          transform: `scale(1.1) translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/60 to-background" />
        <div className="absolute inset-0 gradient-mesh opacity-60" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Animated Orbs with Parallax */}
      <div 
        className="absolute top-1/4 left-[10%] w-72 h-72 rounded-full bg-primary/30 blur-[100px] animate-float"
        style={{ transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)` }}
      />
      <div 
        className="absolute bottom-1/4 right-[10%] w-96 h-96 rounded-full bg-secondary/30 blur-[120px] animate-float-delayed"
        style={{ transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)` }}
      />
      <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full bg-accent/20 blur-[80px] animate-morph" />
      
      {/* Spinning Circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-primary-foreground/5 animate-spin-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-primary-foreground/10 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-primary/20 animate-spin-slow" style={{ animationDuration: '30s' }} />

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <div
          key={index}
          className="absolute hidden lg:flex items-center justify-center w-16 h-16 rounded-2xl glass-effect-dark animate-float"
          style={{ 
            top: item.top, 
            left: item.left, 
            right: item.right, 
            bottom: item.bottom,
            animationDelay: item.delay,
          }}
        >
          <item.icon className={`${item.size} text-primary-foreground/60`} />
        </div>
      ))}

      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Hackathon Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect-dark mb-6 animate-fade-up border border-primary/30">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-semibold text-secondary uppercase tracking-wider">Live Project</span>
            </div>
            <div className="w-px h-4 bg-primary-foreground/20" />
            <span className="text-sm font-medium text-primary-foreground">
              St. Peters Engineering College Hackathon
            </span>
          </div>

          {/* AI Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-effect-dark mb-8 animate-fade-up group cursor-pointer hover:scale-105 transition-transform border border-secondary/30 hover:border-secondary/50">
            <Sparkles className="w-4 h-4 text-secondary animate-pulse-slow" />
            <span className="text-sm font-medium text-primary-foreground">
              AI-Powered Waste Intelligence Platform
            </span>
            <ArrowRight className="w-4 h-4 text-primary-foreground/60 group-hover:translate-x-1 transition-transform" />
          </div>

          {/* Main Heading with Typing Effect */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-primary-foreground leading-[0.95] mb-8 animate-fade-up tracking-tight">
            Reimagining
            <span className="block mt-2 bg-gradient-to-r from-secondary via-primary-foreground to-secondary bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/75 max-w-3xl mx-auto mb-12 animate-fade-up-delayed leading-relaxed">
            Transform your waste streams into valuable resources with our cutting-edge 
            recycling technology and data-driven sustainability solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delayed-2">
            <Button variant="hero" size="xl" className="group relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Explore Solutions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            <Button variant="hero-outline" size="xl" className="group">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center mr-2 group-hover:bg-primary-foreground/20 transition-colors group-hover:scale-110 duration-300">
                <Play className="w-4 h-4 ml-0.5" />
              </div>
              Watch Demo
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto animate-fade-up-delayed-2">
            {[
              { value: "99%", label: "Recycling Rate" },
              { value: "50K+", label: "Tons Processed" },
              { value: "24/7", label: "AI Monitoring" },
            ].map((stat, index) => (
              <div key={index} className="glass-effect-dark rounded-2xl p-4 hover:scale-105 transition-transform duration-300 cursor-default">
                <div className="text-2xl md:text-3xl font-bold font-display text-secondary">{stat.value}</div>
                <div className="text-xs text-primary-foreground/60 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Team Credit */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/10">
            <p className="text-sm text-primary-foreground/50 flex items-center justify-center gap-2">
              <span className="px-3 py-1 rounded-full glass-effect-dark text-xs font-medium">Team BitwiseBinary</span>
              <span className="text-primary-foreground/30">•</span>
              <span>Built with passion for sustainability</span>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#stats" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer">
        <span className="text-xs text-primary-foreground/40 uppercase tracking-widest group-hover:text-primary-foreground/60 transition-colors">Discover More</span>
        <div className="w-10 h-16 rounded-full border-2 border-primary-foreground/20 flex items-start justify-center p-3 group-hover:border-primary-foreground/40 transition-colors relative overflow-hidden">
          <ChevronDown className="w-4 h-4 text-primary-foreground/40 animate-bounce-gentle" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </a>

      {/* Decorative Corner Elements */}
      <div className="absolute top-24 left-6 w-24 h-24 border-l-2 border-t-2 border-primary-foreground/10 rounded-tl-3xl hidden lg:block" />
      <div className="absolute top-24 right-6 w-24 h-24 border-r-2 border-t-2 border-primary-foreground/10 rounded-tr-3xl hidden lg:block" />
    </section>
  );
};

export default HeroSection;
