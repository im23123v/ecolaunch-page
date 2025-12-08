import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "EcoVerde transformed our waste management completely. We've reduced costs by 40% while becoming truly sustainable.",
    author: "Sarah Chen",
    role: "Sustainability Director",
    company: "TechCorp Global",
  },
  {
    quote:
      "Their innovative approach and dedicated team made the transition seamless. The impact data speaks for itself.",
    author: "Marcus Williams",
    role: "Operations Manager",
    company: "Metro Manufacturing",
  },
  {
    quote:
      "Finally, a partner who understands that environmental responsibility and business growth go hand in hand.",
    author: "Elena Rodriguez",
    role: "CEO",
    company: "GreenBuild Inc",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 gradient-section">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our partners say about working with EcoVerde.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-card border border-border hover:shadow-medium transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <Quote className="w-10 h-10 text-primary/30 mb-6" />
              <p className="text-foreground leading-relaxed mb-8 flex-grow">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
