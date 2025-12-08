import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-primary/20 blur-2xl animate-float" />
      <div className="absolute bottom-1/3 right-20 w-32 h-32 rounded-full bg-secondary/30 blur-3xl animate-float-delayed" />

      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse-slow" />
            <span className="text-sm font-medium text-primary-foreground">
              Leading the Green Revolution
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up">
            Transforming Waste Into
            <span className="block mt-2 bg-gradient-to-r from-secondary via-primary-foreground to-secondary bg-clip-text text-transparent">
              Sustainable Future
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-up-delayed">
            Pioneering innovative waste management solutions that protect our planet,
            empower communities, and drive the circular economy forward.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delayed">
            <Button variant="hero" size="lg">
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="lg">
              <Play className="w-5 h-5" />
              Watch Our Story
            </Button>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-primary-foreground/10">
            {[
              { value: "2M+", label: "Tons Recycled" },
              { value: "150+", label: "Cities Served" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-xs text-primary-foreground/50 uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary-foreground/50 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
