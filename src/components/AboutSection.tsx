import { Check, Award, Shield, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const features = [
    "ISO 14001 & 9001 Certified Operations",
    "Carbon-neutral company since 2020",
    "100% renewable energy powered",
    "Zero-waste-to-landfill facilities",
    "B Corp & Climate Neutral certified",
    "Science-based emission targets",
  ];

  const certifications = [
    { icon: Award, label: "B Corp", year: "2019" },
    { icon: Shield, label: "ISO 14001", year: "2018" },
    { icon: Leaf, label: "Carbon Neutral", year: "2020" },
  ];

  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square rounded-[3rem] gradient-card border border-border overflow-hidden relative">
              <div className="absolute inset-0 gradient-hero opacity-10" />
              
              {/* Central Element */}
              <div className="absolute inset-12 rounded-[2rem] bg-card border border-border shadow-large flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-7xl md:text-9xl font-bold font-display text-gradient mb-4">15</div>
                  <p className="text-xl md:text-2xl text-muted-foreground font-medium">Years of Excellence</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-8 left-8 w-20 h-20 rounded-2xl gradient-hero animate-float shadow-glow flex items-center justify-center">
                <Leaf className="w-10 h-10 text-primary-foreground" />
              </div>
              <div className="absolute bottom-8 right-8 w-16 h-16 rounded-xl bg-secondary animate-float-delayed shadow-glow-secondary flex items-center justify-center">
                <Award className="w-8 h-8 text-secondary-foreground" />
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 lg:-right-12 p-6 rounded-2xl bg-card border border-border shadow-large">
              <div className="flex items-center gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-2">
                      <cert.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-xs font-semibold text-foreground">{cert.label}</p>
                    <p className="text-[10px] text-muted-foreground">{cert.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
              About EcoRecycle
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-foreground mb-6 leading-tight tracking-tight">
              Pioneering Sustainability
              <span className="text-gradient block">Since 2009</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              What started as a vision to eliminate waste has grown into a global 
              movement. Today, we're one of the world's leading sustainable waste 
              management companies, serving enterprises across 25+ countries.
            </p>

            <ul className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full gradient-hero flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-8 mb-10 p-6 rounded-2xl bg-card border border-border">
              <div>
                <div className="text-4xl font-bold font-display text-foreground">500+</div>
                <p className="text-sm text-muted-foreground">Team Members</p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <div className="text-4xl font-bold font-display text-foreground">25+</div>
                <p className="text-sm text-muted-foreground">Countries</p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <div className="text-4xl font-bold font-display text-foreground">99.2%</div>
                <p className="text-sm text-muted-foreground">Recovery Rate</p>
              </div>
            </div>

            <Button variant="default" size="lg">
              Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
