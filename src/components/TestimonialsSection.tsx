import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote: "EcoRecycle's AI-powered sorting technology increased our material recovery by 40%. The ROI was evident within the first quarter.",
    author: "Sarah Chen",
    role: "VP of Sustainability",
    company: "Microsoft",
    rating: 5,
    image: "SC",
  },
  {
    quote: "Their predictive analytics platform transformed how we manage waste across 200+ facilities. Exceptional technology and service.",
    author: "Marcus Williams",
    role: "Chief Operations Officer",
    company: "Amazon Logistics",
    rating: 5,
    image: "MW",
  },
  {
    quote: "The compliance automation alone saved us thousands of hours annually. EcoRecycle is an indispensable partner in our sustainability journey.",
    author: "Elena Rodriguez",
    role: "CEO",
    company: "Tesla Energy",
    rating: 5,
    image: "ER",
  },
  {
    quote: "From implementation to daily operations, their team has been phenomenal. We've achieved our zero-waste goals two years ahead of schedule.",
    author: "James Morrison",
    role: "Sustainability Director",
    company: "Unilever",
    rating: 5,
    image: "JM",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-32 gradient-section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      
      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-secondary text-secondary" />
            Client Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-foreground mb-6 tracking-tight">
            Trusted by
            <span className="text-gradient block">Industry Leaders</span>
          </h2>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative p-10 md:p-16 rounded-[3rem] bg-card border border-border shadow-large">
            <Quote className="absolute top-10 left-10 w-16 h-16 text-primary/10" />
            
            <div className="relative">
              {/* Stars */}
              <div className="flex gap-1 mb-8">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium font-display text-foreground leading-relaxed mb-10">
                "{testimonials[activeIndex].quote}"
              </blockquote>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center text-xl font-bold text-primary-foreground">
                    {testimonials[activeIndex].image}
                  </div>
                  <div>
                    <div className="text-lg font-bold text-foreground">
                      {testimonials[activeIndex].author}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                    </div>
                  </div>
                </div>
                
                {/* Navigation */}
                <div className="flex gap-3">
                  <button
                    onClick={prevTestimonial}
                    className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-primary"
                  : "w-2 bg-muted hover:bg-muted-foreground"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
