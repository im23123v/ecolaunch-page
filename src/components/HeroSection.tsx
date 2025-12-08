import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-background" />
        <div className="absolute inset-0 gradient-mesh opacity-50" />
      </div>

      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-[10%] w-72 h-72 rounded-full bg-primary/20 blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-[10%] w-96 h-96 rounded-full bg-secondary/20 blur-[120px] animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary-foreground/5 animate-spin-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary-foreground/10 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />

      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-effect-dark mb-8 animate-fade-up group cursor-pointer hover:scale-105 transition-transform">
            <Sparkles className="w-4 h-4 text-secondary animate-pulse-slow" />
            <span className="text-sm font-medium text-primary-foreground">
              AI-Powered Waste Intelligence Platform
            </span>
            <ArrowRight className="w-4 h-4 text-primary-foreground/60 group-hover:translate-x-1 transition-transform" />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-primary-foreground leading-[0.95] mb-8 animate-fade-up tracking-tight">
            Reimagining
            <span className="block mt-2 bg-gradient-to-r from-secondary via-primary-foreground to-secondary bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
              Waste Economy
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/75 max-w-3xl mx-auto mb-12 animate-fade-up-delayed leading-relaxed">
            Transform your waste streams into valuable resources with our cutting-edge 
            recycling technology and data-driven sustainability solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delayed-2">
            <Button variant="hero" size="xl" className="group">
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero-outline" size="xl" className="group">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center mr-2 group-hover:bg-primary-foreground/20 transition-colors">
                <Play className="w-4 h-4 ml-0.5" />
              </div>
              Watch Demo
            </Button>
          </div>

          {/* Trusted By */}
          <div className="mt-20 pt-12 border-t border-primary-foreground/10">
            <p className="text-sm text-primary-foreground/40 uppercase tracking-widest mb-8">Trusted by industry leaders</p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60">
              {['Tesla', 'Microsoft', 'Google', 'Amazon', 'Apple'].map((company) => (
                <div key={company} className="text-xl md:text-2xl font-bold font-display text-primary-foreground/40 hover:text-primary-foreground/60 transition-colors cursor-pointer">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#stats" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer">
        <span className="text-xs text-primary-foreground/40 uppercase tracking-widest group-hover:text-primary-foreground/60 transition-colors">Discover More</span>
        <div className="w-10 h-16 rounded-full border-2 border-primary-foreground/20 flex items-start justify-center p-3 group-hover:border-primary-foreground/40 transition-colors">
          <ChevronDown className="w-4 h-4 text-primary-foreground/40 animate-bounce-gentle" />
        </div>
      </a>
    </section>
  );
};

export default HeroSection;
