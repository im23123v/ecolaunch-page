import { useState, useEffect } from "react";
import { Menu, X, Recycle, Cpu, Zap } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Track active section
      const sections = ['services', 'process', 'impact', 'about', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Solutions", id: "services" },
    { href: "#process", label: "Process", id: "process" },
    { href: "#impact", label: "Impact", id: "impact" },
    { href: "#about", label: "About", id: "about" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-effect py-3 shadow-medium"
          : "bg-transparent py-6"
      }`}
    >
      {/* Hackathon Banner */}
      <div className={`absolute -top-8 left-0 right-0 h-8 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient flex items-center justify-center gap-3 transition-all duration-300 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <Cpu className="w-4 h-4 text-primary-foreground animate-pulse-slow" />
        <span className="text-xs font-medium text-primary-foreground tracking-wide">
          St. Peters Engineering College Hackathon • Team BitwiseBinary
        </span>
        <Zap className="w-4 h-4 text-primary-foreground animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-2xl gradient-hero flex items-center justify-center shadow-glow transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-glow-secondary">
            <Recycle className="w-6 h-6 text-primary-foreground transition-transform duration-500 group-hover:rotate-180" />
            <div className="absolute inset-0 rounded-2xl gradient-hero opacity-50 blur-xl group-hover:opacity-100 transition-opacity duration-500" />
            {/* Pulse ring */}
            <div className="absolute inset-0 rounded-2xl border-2 border-primary/50 animate-ping opacity-20" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold font-display text-foreground tracking-tight">EcoRecycle</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Sustainable Future
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1 p-1.5 rounded-2xl glass-effect">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative px-5 py-2.5 rounded-xl font-medium transition-all duration-300 group ${
                activeSection === link.id 
                  ? 'text-primary-foreground bg-primary shadow-glow' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              {link.label}
              {activeSection !== link.id && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-all duration-300" />
              )}
            </a>
          ))}
        </div>

        {/* Hackathon Badge */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl glass-effect border border-primary/20">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium text-muted-foreground">BitwiseBinary</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden relative p-2 text-foreground rounded-xl hover:bg-muted transition-colors overflow-hidden group"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl" />
          {isMobileMenuOpen ? <X className="w-6 h-6 relative z-10" /> : <Menu className="w-6 h-6 relative z-10" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 glass-effect border-t border-border animate-fade-up">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-2">
            {/* Mobile Hackathon Badge */}
            <div className="flex items-center justify-center gap-2 px-4 py-3 mb-4 rounded-xl gradient-hero-subtle border border-primary/20">
              <Cpu className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Team BitwiseBinary</span>
            </div>
            
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-foreground font-medium py-3 px-4 rounded-xl hover:bg-muted transition-all duration-300 ${
                  activeSection === link.id ? 'bg-primary/10 text-primary' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
