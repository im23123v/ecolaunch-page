import { Recycle, Leaf, TrendingUp, Shield, Zap, Globe } from "lucide-react";

const services = [
  {
    icon: Recycle,
    title: "Smart Recycling",
    description:
      "AI-powered sorting systems that maximize material recovery and minimize contamination rates.",
  },
  {
    icon: Leaf,
    title: "Organic Processing",
    description:
      "Converting organic waste into nutrient-rich compost and renewable biogas energy.",
  },
  {
    icon: TrendingUp,
    title: "Waste Analytics",
    description:
      "Real-time data insights to optimize waste streams and reduce operational costs.",
  },
  {
    icon: Shield,
    title: "Compliance Management",
    description:
      "Ensuring full regulatory compliance with automated reporting and documentation.",
  },
  {
    icon: Zap,
    title: "Energy Recovery",
    description:
      "Transforming non-recyclable waste into clean energy through advanced thermal processes.",
  },
  {
    icon: Globe,
    title: "Carbon Offsetting",
    description:
      "Verified carbon credit programs that turn waste reduction into climate action.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 gradient-section">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Our Solutions
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Waste Management
          </h2>
          <p className="text-lg text-muted-foreground">
            End-to-end sustainable solutions designed to transform how businesses
            and communities handle waste.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl gradient-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-medium hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
