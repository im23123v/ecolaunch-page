import { Recycle, Leaf, TrendingUp, Shield, Zap, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Recycle,
    title: "Smart Recycling AI",
    description: "Machine learning algorithms that identify, sort, and process materials with 99.9% accuracy, maximizing recovery rates.",
    color: "from-primary to-primary/70",
    stats: "99.9% accuracy",
  },
  {
    icon: Leaf,
    title: "Organic Bioprocessing",
    description: "Convert organic waste into renewable biogas and premium compost through advanced anaerobic digestion systems.",
    color: "from-secondary to-secondary/70",
    stats: "Zero waste output",
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Real-time dashboards and AI predictions optimize waste streams, reduce costs, and improve sustainability metrics.",
    color: "from-primary to-secondary",
    stats: "45% cost reduction",
  },
  {
    icon: Shield,
    title: "Compliance Automation",
    description: "Automated regulatory compliance with real-time monitoring, reporting, and audit-ready documentation.",
    color: "from-primary/80 to-primary",
    stats: "100% compliance",
  },
  {
    icon: Zap,
    title: "Waste-to-Energy",
    description: "Transform non-recyclable materials into clean electricity through cutting-edge thermal conversion technology.",
    color: "from-secondary/80 to-secondary",
    stats: "50MW capacity",
  },
  {
    icon: Globe,
    title: "Carbon Intelligence",
    description: "Track, report, and offset carbon emissions with verified credits and transparent blockchain certification.",
    color: "from-primary to-secondary/80",
    stats: "1M+ tons offset",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 gradient-section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[100px]" />
      
      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Our Solutions
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-foreground mb-6 tracking-tight">
            Complete Waste
            <span className="text-gradient block">Management Suite</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Enterprise-grade solutions powered by AI and designed for maximum 
            environmental impact and operational efficiency.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 lg:p-10 rounded-[2rem] gradient-card border border-border card-hover glow-border"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 shadow-glow group-hover:scale-110 transition-all duration-500`}>
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              {/* Stats Badge */}
              <div className="absolute top-8 right-8 px-3 py-1 rounded-full bg-accent text-xs font-semibold text-accent-foreground">
                {service.stats}
              </div>
              
              <h3 className="text-xl lg:text-2xl font-bold font-display text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              
              <a href="#" className="inline-flex items-center gap-2 text-primary font-semibold group/link">
                Learn more
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="default" size="lg">
            Explore All Solutions
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
