import { Check } from "lucide-react";

const AboutSection = () => {
  const features = [
    "ISO 14001 Environmental Management Certified",
    "Carbon-neutral operations since 2020",
    "100% renewable energy powered facilities",
    "Zero-waste-to-landfill processing centers",
  ];

  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual */}
          <div className="relative">
            <div className="aspect-square rounded-3xl gradient-card border border-border overflow-hidden relative">
              <div className="absolute inset-0 gradient-hero opacity-10" />
              <div className="absolute inset-8 rounded-2xl bg-card border border-border shadow-medium flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl md:text-8xl font-bold text-gradient mb-4">15+</div>
                  <p className="text-xl text-muted-foreground">Years of Excellence</p>
                </div>
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 p-6 rounded-2xl bg-card border border-border shadow-medium">
              <div className="text-2xl font-bold text-primary">B Corp</div>
              <p className="text-sm text-muted-foreground">Certified</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              About EcoVerde
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Pioneering Sustainability
              <span className="block text-gradient">Since 2009</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We started with a simple belief: waste is just a resource in the wrong
              place. Today, we're one of the leading sustainable waste management
              companies, serving over 150 cities and processing millions of tons of
              materials annually.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-3xl font-bold text-foreground">500+</div>
                <p className="text-sm text-muted-foreground">Expert Team Members</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">25+</div>
                <p className="text-sm text-muted-foreground">Countries Served</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">99.2%</div>
                <p className="text-sm text-muted-foreground">Material Recovery Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
