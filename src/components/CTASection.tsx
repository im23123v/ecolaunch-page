import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Sparkles, Check } from "lucide-react";
import { useState } from "react";

const CTASection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setEmail("");
      setIsSubmitted(false);
    }, 3000);
  };

  const benefits = [
    "Free sustainability audit",
    "Custom implementation plan",
    "ROI projection report",
  ];

  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative rounded-[3rem] gradient-dark p-12 md:p-20 lg:p-24 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary/15 blur-[120px]" />
          <div className="absolute inset-0 gradient-mesh opacity-30" />
          
          {/* Animated Border */}
          <div className="absolute inset-0 rounded-[3rem] border border-primary-foreground/10" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect-dark mb-6">
                <Sparkles className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-primary-foreground">Limited Time Offer</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-primary-foreground mb-6 tracking-tight">
                Ready to Transform Your
                <span className="block text-secondary">Waste Strategy?</span>
              </h2>
              <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto">
                Join 500+ forward-thinking organizations already making a measurable 
                environmental impact with EcoRecycle.
              </p>
            </div>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-primary-foreground/80">
                  <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-secondary" />
                  </div>
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto"
            >
              <div className="relative flex-grow">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-foreground/40" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  className="w-full h-16 pl-14 pr-6 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent backdrop-blur-sm text-lg transition-all"
                  required
                  disabled={isSubmitted}
                />
              </div>
              <Button 
                variant="hero" 
                size="xl" 
                type="submit"
                disabled={isSubmitted}
                className="shrink-0"
              >
                {isSubmitted ? (
                  <>
                    <Check className="w-5 h-5" />
                    Submitted!
                  </>
                ) : (
                  <>
                    Get Free Audit
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </Button>
            </form>

            <p className="text-center text-sm text-primary-foreground/40 mt-6">
              No commitment required • Response within 24 hours • Enterprise-ready
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
