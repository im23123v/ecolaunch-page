import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Sparkles, Check, MapPin, Phone, Clock, Send, MessageSquare } from "lucide-react";
import { useState } from "react";

const CTASection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'newsletter' | 'contact'>('newsletter');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setEmail("");
      setName("");
      setMessage("");
      setIsSubmitted(false);
    }, 3000);
  };

  const benefits = [
    "Free sustainability audit",
    "Custom implementation plan",
    "ROI projection report",
  ];

  const contactInfo = [
    { icon: MapPin, label: "Location", value: "St. Peters Engineering College, Hyderabad" },
    { icon: Phone, label: "Phone", value: "+91 123 456 7890" },
    { icon: Clock, label: "Hours", value: "24/7 Support Available" },
  ];

  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative rounded-[3rem] gradient-dark p-8 md:p-16 lg:p-20 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[150px] animate-float" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary/15 blur-[120px] animate-float-delayed" />
          <div className="absolute inset-0 gradient-mesh opacity-30" />
          
          {/* Animated Border */}
          <div className="absolute inset-0 rounded-[3rem] border border-primary-foreground/10" />
          
          {/* Decorative Grid */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }} />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto">
            {/* Tab Switcher */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex p-1.5 rounded-2xl glass-effect-dark">
                <button
                  onClick={() => setActiveTab('newsletter')}
                  className={`px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                    activeTab === 'newsletter' 
                      ? 'bg-primary text-primary-foreground shadow-glow' 
                      : 'text-primary-foreground/60 hover:text-primary-foreground'
                  }`}
                >
                  <Mail className="w-4 h-4 inline-block mr-2" />
                  Newsletter
                </button>
                <button
                  onClick={() => setActiveTab('contact')}
                  className={`px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                    activeTab === 'contact' 
                      ? 'bg-primary text-primary-foreground shadow-glow' 
                      : 'text-primary-foreground/60 hover:text-primary-foreground'
                  }`}
                >
                  <MessageSquare className="w-4 h-4 inline-block mr-2" />
                  Contact Us
                </button>
              </div>
            </div>

            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect-dark mb-6 border border-secondary/30">
                <Sparkles className="w-4 h-4 text-secondary animate-pulse-slow" />
                <span className="text-sm font-medium text-primary-foreground">
                  {activeTab === 'newsletter' ? 'Join Our Community' : 'Get In Touch'}
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-primary-foreground mb-6 tracking-tight">
                {activeTab === 'newsletter' ? (
                  <>
                    Ready to Transform Your
                    <span className="block text-secondary">Waste Strategy?</span>
                  </>
                ) : (
                  <>
                    Let's Build a
                    <span className="block text-secondary">Sustainable Future</span>
                  </>
                )}
              </h2>
              <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto">
                {activeTab === 'newsletter' 
                  ? 'Join 500+ forward-thinking organizations already making a measurable environmental impact with EcoRecycle.'
                  : 'Have questions about our solutions? Our team is ready to help you start your sustainability journey.'
                }
              </p>
            </div>

            {activeTab === 'newsletter' ? (
              <>
                {/* Benefits */}
                <div className="flex flex-wrap justify-center gap-6 mb-12">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2 text-primary-foreground/80 group">
                      <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                        <Check className="w-3.5 h-3.5 text-secondary" />
                      </div>
                      <span className="text-sm font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Newsletter Form */}
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                  <div className="relative flex-grow group">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-foreground/40 group-focus-within:text-secondary transition-colors" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your work email"
                      className="w-full h-16 pl-14 pr-6 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent backdrop-blur-sm text-lg transition-all hover:border-primary-foreground/30"
                      required
                      disabled={isSubmitted}
                    />
                  </div>
                  <Button variant="hero" size="xl" type="submit" disabled={isSubmitted} className="shrink-0 group">
                    {isSubmitted ? (
                      <>
                        <Check className="w-5 h-5" />
                        Submitted!
                      </>
                    ) : (
                      <>
                        Subscribe
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </>
            ) : (
              <>
                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="glass-effect-dark rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 border border-primary-foreground/10">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-xs text-primary-foreground/50 uppercase tracking-wider mb-1">{info.label}</div>
                      <div className="text-sm text-primary-foreground font-medium">{info.value}</div>
                    </div>
                  ))}
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                      className="h-14 px-6 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent backdrop-blur-sm transition-all hover:border-primary-foreground/30"
                      required
                      disabled={isSubmitted}
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email"
                      className="h-14 px-6 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent backdrop-blur-sm transition-all hover:border-primary-foreground/30"
                      required
                      disabled={isSubmitted}
                    />
                  </div>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-6 py-4 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent backdrop-blur-sm transition-all resize-none hover:border-primary-foreground/30"
                    required
                    disabled={isSubmitted}
                  />
                  <Button variant="hero" size="xl" type="submit" disabled={isSubmitted} className="w-full group">
                    {isSubmitted ? (
                      <>
                        <Check className="w-5 h-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </>
            )}

            <p className="text-center text-sm text-primary-foreground/40 mt-6">
              {activeTab === 'newsletter' 
                ? 'No spam • Unsubscribe anytime • Weekly sustainability insights'
                : 'We typically respond within 24 hours • Team BitwiseBinary'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
