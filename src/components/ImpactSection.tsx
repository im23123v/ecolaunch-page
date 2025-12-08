import { TreePine, Droplets, Factory, Users } from "lucide-react";

const impactStats = [
  {
    icon: TreePine,
    value: "500K+",
    label: "Trees Saved",
    description: "Through paper recycling programs",
  },
  {
    icon: Droplets,
    value: "10B",
    label: "Gallons Conserved",
    description: "Water saved via smart processing",
  },
  {
    icon: Factory,
    value: "85%",
    label: "Landfill Reduction",
    description: "Waste diverted from landfills",
  },
  {
    icon: Users,
    value: "2M+",
    label: "Lives Impacted",
    description: "Communities we've empowered",
  },
];

const ImpactSection = () => {
  return (
    <section id="impact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              Our Impact
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Making a Measurable
              <span className="text-gradient block">Difference</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every ton of waste we process, every community we partner with, and
              every innovation we implement brings us closer to a world where waste
              is a resource, not a problem.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-medium text-muted-foreground"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">500+</span> companies
                trust us
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-3xl gradient-card border border-border hover:shadow-medium transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
