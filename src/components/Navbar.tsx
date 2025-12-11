import { useState, useEffect, useRef } from "react";
import { Menu, X, Recycle, Cpu, Zap, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
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

  // Update indicator position
  useEffect(() => {
    const activeIndex = navLinks.findIndex(link => link.id === activeSection);
    const targetIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;
    
    if (targetIndex >= 0 && linkRefs.current[targetIndex]) {
      const link = linkRefs.current[targetIndex];
      if (link && navRef.current) {
        const navRect = navRef.current.getBoundingClientRect();
        const linkRect = link.getBoundingClientRect();
        setIndicatorStyle({
          left: linkRect.left - navRect.left,
          width: linkRect.width,
        });
      }
    }
  }, [hoveredIndex, activeSection]);

  const navLinks = [
    { href: "#services", label: "Solutions", id: "services" },
    { href: "#process", label: "Process", id: "process" },
    { href: "#impact", label: "Impact", id: "impact" },
    { href: "#about", label: "About", id: "about" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  return (
    <>
      {/* Floating Navbar */}
      <nav
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-out ${
          isScrolled
            ? "top-4 w-[95%] max-w-5xl"
            : "top-8 w-[98%] max-w-6xl"
        }`}
      >
        {/* Hackathon Banner - Only visible when not scrolled */}
        <div 
          className={`absolute -top-10 left-1/2 -translate-x-1/2 transition-all duration-500 ${
            isScrolled ? 'opacity-0 -translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'
          }`}
        >
          <div className="flex items-center gap-3 px-6 py-2 rounded-full bg-gradient-to-r from-primary/90 via-secondary/90 to-primary/90 bg-[length:200%_auto] animate-gradient shadow-glow backdrop-blur-sm">
            <Cpu className="w-3.5 h-3.5 text-primary-foreground animate-pulse-slow" />
            <span className="text-xs font-medium text-primary-foreground tracking-wide whitespace-nowrap">
              St. Peters Engineering College Hackathon • Team BitwiseBinary
            </span>
            <Zap className="w-3.5 h-3.5 text-primary-foreground animate-pulse-slow" />
          </div>
        </div>

        {/* Main Navbar Container */}
        <div 
          className={`relative rounded-[2rem] transition-all duration-700 ease-out overflow-hidden ${
            isScrolled 
              ? 'py-3 px-4 shadow-large' 
              : 'py-4 px-6 shadow-medium'
          }`}
          style={{
            background: isScrolled 
              ? 'rgba(255, 255, 255, 0.08)' 
              : 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* Animated gradient border */}
          <div className="absolute inset-0 rounded-[2rem] p-[1px] overflow-hidden">
            <div className="absolute inset-[-100%] bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-shimmer" />
          </div>

          {/* Floating orb decorations */}
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

          <div className="relative flex items-center justify-between gap-8">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative">
                {/* Outer glow ring */}
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-50 blur-lg transition-all duration-500" />
                
                {/* Logo container */}
                <div className="relative w-11 h-11 rounded-xl gradient-hero flex items-center justify-center shadow-glow transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-glow-secondary overflow-hidden">
                  <Recycle className="w-5 h-5 text-primary-foreground transition-all duration-700 group-hover:rotate-180 group-hover:scale-110" />
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </div>
                
                {/* Pulse rings */}
                <div className="absolute inset-0 rounded-xl border border-primary/40 animate-ping opacity-20" />
                <div className="absolute inset-0 rounded-xl border border-primary/20 animate-ping opacity-10" style={{ animationDelay: '0.5s' }} />
              </div>
              
              <div className="flex flex-col">
                <span className="text-lg font-bold font-display text-foreground tracking-tight transition-colors group-hover:text-primary">
                  EcoRecycle
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-1">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                  </span>
                  Sustainable Future
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div 
              ref={navRef}
              className="hidden lg:flex items-center gap-0.5 p-1.5 rounded-2xl relative"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              {/* Animated indicator */}
              <div 
                className="absolute top-1.5 h-[calc(100%-12px)] rounded-xl transition-all duration-300 ease-out"
                style={{
                  left: indicatorStyle.left,
                  width: indicatorStyle.width,
                  background: hoveredIndex !== null 
                    ? 'rgba(255, 255, 255, 0.1)' 
                    : 'linear-gradient(135deg, hsl(162 72% 38%), hsl(162 60% 45%))',
                  boxShadow: hoveredIndex !== null 
                    ? 'none' 
                    : '0 0 20px hsl(162 72% 38% / 0.4)',
                  opacity: indicatorStyle.width > 0 ? 1 : 0,
                }}
              />
              
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  ref={el => linkRefs.current[index] = el}
                  href={link.href}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 z-10 ${
                    activeSection === link.id && hoveredIndex === null
                      ? 'text-primary-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                </a>
              ))}
            </div>

            {/* Right side - Badge & Menu */}
            <div className="flex items-center gap-3">
              {/* Hackathon Badge */}
              <div 
                className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 cursor-default group"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(162, 255, 162, 0.2)',
                }}
              >
                <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse-slow" />
                <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  BitwiseBinary
                </span>
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden relative p-2.5 rounded-xl transition-all duration-300 overflow-hidden group"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-xl" />
                <div className="relative z-10 w-5 h-5 flex flex-col items-center justify-center gap-1.5">
                  <span className={`w-5 h-0.5 bg-foreground rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                  <span className={`w-5 h-0.5 bg-foreground rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-0' : ''}`} />
                  <span className={`w-5 h-0.5 bg-foreground rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden absolute top-full left-0 right-0 mt-3 rounded-2xl overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen 
              ? 'opacity-100 translate-y-0 pointer-events-auto' 
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15)',
          }}
        >
          <div className="p-6 flex flex-col gap-2">
            {/* Mobile Hackathon Badge */}
            <div className="flex items-center justify-center gap-2 px-4 py-3 mb-4 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
              <Cpu className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Team BitwiseBinary</span>
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </div>
            </div>
            
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium py-3 px-4 rounded-xl transition-all duration-300 ${
                  activeSection === link.id 
                    ? 'bg-primary text-primary-foreground shadow-glow' 
                    : 'text-foreground hover:bg-white/5'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ 
                  transitionDelay: `${index * 50}ms`,
                  transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                  opacity: isMobileMenuOpen ? 1 : 0,
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
