import { Recycle, Twitter, Linkedin, Instagram, Youtube, Github, ArrowUpRight } from "lucide-react";

const footerLinks = {
  solutions: [
    { label: "Smart Recycling AI", href: "#" },
    { label: "Organic Bioprocessing", href: "#" },
    { label: "Predictive Analytics", href: "#" },
    { label: "Waste-to-Energy", href: "#" },
    { label: "Carbon Intelligence", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#", badge: "Hiring" },
    { label: "Press & Media", href: "#" },
    { label: "Partners", href: "#" },
    { label: "Investors", href: "#" },
  ],
  resources: [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Sustainability Report", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Security", href: "#" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Github, href: "#", label: "GitHub" },
];

const Footer = () => {
  return (
    <footer className="py-20 bg-card border-t border-border relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh opacity-10" />
      
      <div className="container mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-12 h-12 rounded-2xl gradient-hero flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                <Recycle className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold font-display text-foreground">EcoRecycle</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Sustainable Future</span>
              </div>
            </a>
            <p className="text-muted-foreground mb-8 max-w-sm leading-relaxed">
              Transforming waste into value with AI-powered solutions. Building a 
              circular economy for a sustainable tomorrow.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-11 h-11 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold font-display text-foreground mb-5">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold font-display text-foreground mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2 group"
                  >
                    {link.label}
                    {link.badge && (
                      <span className="px-2 py-0.5 text-[10px] font-semibold uppercase rounded-full bg-secondary text-secondary-foreground">
                        {link.badge}
                      </span>
                    )}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold font-display text-foreground mb-5">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold font-display text-foreground mb-5">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 EcoRecycle Technologies Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-muted-foreground">All systems operational</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Made with 💚 for a sustainable future
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
