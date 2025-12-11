import { useState } from "react";
import { Calculator, Leaf, Droplets, Wind, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const WasteCalculator = () => {
  const [wasteAmount, setWasteAmount] = useState<number>(100);
  const [wasteType, setWasteType] = useState<string>("mixed");
  const [showResults, setShowResults] = useState(false);

  const wasteTypes = [
    { id: "mixed", label: "Mixed Waste", recycleRate: 0.65 },
    { id: "plastic", label: "Plastic", recycleRate: 0.85 },
    { id: "paper", label: "Paper/Cardboard", recycleRate: 0.92 },
    { id: "organic", label: "Organic", recycleRate: 0.95 },
    { id: "electronic", label: "E-Waste", recycleRate: 0.78 },
    { id: "metal", label: "Metal", recycleRate: 0.98 },
  ];

  const selectedType = wasteTypes.find(t => t.id === wasteType) || wasteTypes[0];
  
  const calculations = {
    recycled: Math.round(wasteAmount * selectedType.recycleRate),
    co2Saved: Math.round(wasteAmount * selectedType.recycleRate * 2.5),
    waterSaved: Math.round(wasteAmount * selectedType.recycleRate * 15),
    energySaved: Math.round(wasteAmount * selectedType.recycleRate * 4.2),
    treesEquivalent: Math.round((wasteAmount * selectedType.recycleRate * 2.5) / 21),
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  const impactMetrics = [
    { icon: Leaf, label: "CO₂ Saved", value: `${calculations.co2Saved} kg`, color: "text-primary" },
    { icon: Droplets, label: "Water Saved", value: `${calculations.waterSaved} L`, color: "text-blue-500" },
    { icon: Wind, label: "Energy Saved", value: `${calculations.energySaved} kWh`, color: "text-secondary" },
    { icon: TrendingUp, label: "Trees Equivalent", value: `${calculations.treesEquivalent}`, color: "text-green-500" },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-section" />
      <div className="absolute inset-0 gradient-mesh opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-hero-subtle border border-primary/20 mb-6">
              <Calculator className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Environmental Impact Calculator</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-4 tracking-tight">
              Calculate Your
              <span className="text-gradient"> Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how much environmental impact you can make by recycling with EcoRecycle's advanced waste processing technology.
            </p>
          </div>

          {/* Calculator Card */}
          <div className="bg-card rounded-3xl shadow-large p-8 md:p-12 border border-border glow-border">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Input Section */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Waste Amount (kg/month)
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="10"
                      max="1000"
                      value={wasteAmount}
                      onChange={(e) => {
                        setWasteAmount(Number(e.target.value));
                        setShowResults(false);
                      }}
                      className="w-full h-3 rounded-full appearance-none cursor-pointer bg-muted"
                      style={{
                        background: `linear-gradient(to right, hsl(var(--primary)) ${(wasteAmount / 1000) * 100}%, hsl(var(--muted)) ${(wasteAmount / 1000) * 100}%)`,
                      }}
                    />
                    <div className="flex justify-between mt-2">
                      <span className="text-xs text-muted-foreground">10 kg</span>
                      <span className="text-lg font-bold text-primary">{wasteAmount} kg</span>
                      <span className="text-xs text-muted-foreground">1000 kg</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Waste Type
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {wasteTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => {
                          setWasteType(type.id);
                          setShowResults(false);
                        }}
                        className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                          wasteType === type.id
                            ? "bg-primary text-primary-foreground shadow-glow"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  variant="default"
                  size="lg"
                  onClick={handleCalculate}
                  className="w-full group"
                >
                  <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                  Calculate Impact
                </Button>
              </div>

              {/* Results Section */}
              <div className={`transition-all duration-500 ${showResults ? "opacity-100" : "opacity-50"}`}>
                <div className="h-full bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 border border-border">
                  <div className="text-center mb-6">
                    <div className="text-6xl font-bold font-display text-gradient mb-2">
                      {calculations.recycled}
                      <span className="text-2xl text-muted-foreground ml-1">kg</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Waste Successfully Recycled</p>
                    <div className="mt-2 text-xs text-primary font-medium">
                      {Math.round(selectedType.recycleRate * 100)}% recovery rate
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {impactMetrics.map((metric, index) => (
                      <div
                        key={index}
                        className="bg-background/50 rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300"
                      >
                        <metric.icon className={`w-5 h-5 mx-auto mb-2 ${metric.color}`} />
                        <div className="text-lg font-bold text-foreground">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {showResults && (
                    <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/20 text-center">
                      <p className="text-sm text-foreground">
                        🌱 That's equivalent to planting <span className="font-bold text-primary">{calculations.treesEquivalent} trees</span> this month!
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WasteCalculator;