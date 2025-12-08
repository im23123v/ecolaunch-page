import { Scan, Cpu, Factory, BarChart3, ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Scan,
    title: "Smart Collection",
    description: "IoT-enabled bins and optimized route planning ensure efficient waste collection with minimal environmental impact.",
  },
  {
    step: "02",
    icon: Cpu,
    title: "AI Sorting",
    description: "Advanced computer vision and robotics sort materials at unprecedented speed and accuracy for maximum recovery.",
  },
  {
    step: "03",
    icon: Factory,
    title: "Advanced Processing",
    description: "State-of-the-art facilities transform sorted materials into high-quality recycled products and clean energy.",
  },
  {
    step: "04",
    icon: BarChart3,
    title: "Impact Analytics",
    description: "Comprehensive dashboards track environmental savings, compliance metrics, and ROI in real-time.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-32 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      
      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            How It Works
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-foreground mb-6 tracking-tight">
            From Waste to
            <span className="text-gradient block">Value in 4 Steps</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Our streamlined process ensures maximum material recovery while 
            providing complete visibility and control.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 z-10 text-border">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
                
                <div className="relative p-8 rounded-[2rem] gradient-card border border-border card-hover text-center lg:text-left">
                  {/* Step Number */}
                  <div className="text-7xl font-bold font-display text-muted/50 absolute top-4 right-6 select-none">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="relative w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center mb-6 mx-auto lg:mx-0 shadow-glow group-hover:scale-110 transition-transform duration-500">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-xl font-bold font-display text-foreground mb-3 relative">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed relative">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
