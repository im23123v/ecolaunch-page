import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 2.5, suffix: "M+", label: "Tons Recycled Annually", prefix: "" },
  { value: 98.7, suffix: "%", label: "Material Recovery Rate", prefix: "" },
  { value: 500, suffix: "+", label: "Enterprise Clients", prefix: "" },
  { value: 45, suffix: "%", label: "Cost Reduction Average", prefix: "" },
];

const useCountUp = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!start) return;
    
    let startTime: number;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(progress * end);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);
  
  return count;
};

const StatItem = ({ stat, index, isVisible }: { stat: typeof stats[0]; index: number; isVisible: boolean }) => {
  const count = useCountUp(stat.value, 2000, isVisible);
  
  return (
    <div 
      className="relative group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="absolute inset-0 gradient-hero opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500" />
      <div className="relative p-8 md:p-10 text-center">
        <div className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-foreground mb-3 tracking-tight">
          {stat.prefix}
          {stat.value % 1 === 0 ? Math.floor(count) : count.toFixed(1)}
          <span className="text-primary">{stat.suffix}</span>
        </div>
        <div className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</div>
      </div>
    </div>
  );
};

const StatsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
