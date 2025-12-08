import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { useState } from "react";

const CTASection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] gradient-dark p-12 md:p-20">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-secondary/10 blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your
              <span className="block text-secondary">Waste Strategy?</span>
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-10">
              Join hundreds of forward-thinking organizations making a positive
              environmental impact. Get a free consultation today.
            </p>

            {/* Newsletter Form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
            >
              <div className="relative flex-grow">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full h-14 pl-12 pr-4 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary backdrop-blur-sm"
                  required
                />
              </div>
              <Button variant="hero" size="lg" type="submit">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>

            <p className="text-sm text-primary-foreground/50 mt-6">
              Free consultation • No commitment • Response within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
