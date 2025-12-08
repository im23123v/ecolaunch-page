import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Recycle } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Solutions" },
    { href: "#process", label: "Process" },
    { href: "#impact", label: "Impact" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-effect py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-2xl gradient-hero flex items-center justify-center shadow-glow transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
            <Recycle className="w-6 h-6 text-primary-foreground" />
            <div className="absolute inset-0 rounded-2xl gradient-hero opacity-50 blur-xl group-hover:opacity-80 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold font-display text-foreground tracking-tight">EcoRecycle</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Sustainable Future</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors font-medium group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-1/2" />
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Button variant="ghost" size="default">
            Log In
          </Button>
          <Button variant="default" size="default">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground rounded-xl hover:bg-muted transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 glass-effect border-t border-border animate-fade-up">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground font-medium py-3 px-4 rounded-xl hover:bg-muted transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border">
              <Button variant="outline" size="lg">
                Log In
              </Button>
              <Button variant="default" size="lg">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
