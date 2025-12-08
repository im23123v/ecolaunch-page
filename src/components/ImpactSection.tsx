import { TreePine, Droplets, Factory, Users, TrendingUp, Leaf } from "lucide-react";

const impactStats = [
  {
    icon: TreePine,
    value: "2.5M+",
    label: "Trees Preserved",
    description: "Through paper & cardboard recycling",
    color: "text-primary",
  },
  {
    icon: Droplets,
    value: "50B",
    label: "Gallons Saved",
    description: "Water conservation impact",
    color: "text-blue-500",
  },
  {
    icon: Factory,
    value: "92%",
    label: "Landfill Diversion",
    description: "Materials recovered & recycled",
    color: "text-secondary",
  },
  {
    icon: Users,
    value: "10M+",
    label: "Lives Improved",
    description: "Communities positively impacted",
    color: "text-primary",
  },
];

const ImpactSection = () => {
  return (
    <section id="impact" className="py-32 gradient-section relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]" />
      
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
              <Leaf className="w-4 h-4" />
              Environmental Impact
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-foreground mb-6 leading-tight tracking-tight">
              Making a Measurable
              <span className="text-gradient block">Difference</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              Every partnership with EcoRecycle creates ripples of positive change. 
              Our impact is measured not just in tons processed, but in ecosystems 
              preserved and communities transformed.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 p-6 rounded-2xl bg-card border border-border">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full gradient-hero border-4 border-card flex items-center justify-center text-xs font-bold text-primary-foreground"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <p className="font-bold text-foreground">
                  500+ Enterprise Partners
                </p>
                <p className="text-sm text-muted-foreground">
                  Trusted by Fortune 500 companies worldwide
                </p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className="group p-6 lg:p-8 rounded-[2rem] gradient-card border border-border card-hover"
              >
                <div className={`w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`w-7 h-7 ${stat.color}`} />
                </div>
                <div className="text-3xl lg:text-4xl font-bold font-display text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-base font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Live Counter */}
        <div className="mt-20 p-8 rounded-[2rem] gradient-dark relative overflow-hidden">
          <div className="absolute inset-0 gradient-mesh opacity-20" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse" />
              <span className="text-lg text-primary-foreground/80">Live Impact Counter</span>
            </div>
            <div className="flex items-baseline gap-2">
              <TrendingUp className="w-8 h-8 text-secondary" />
              <span className="text-4xl md:text-5xl font-bold font-display text-primary-foreground">2,547,823</span>
              <span className="text-lg text-primary-foreground/60">tons processed this year</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
