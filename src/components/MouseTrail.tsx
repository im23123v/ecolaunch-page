import { useEffect, useRef, useState } from "react";

interface TrailPoint {
  x: number;
  y: number;
  opacity: number;
  scale: number;
  id: number;
}

const MouseTrail = () => {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const trailIdRef = useRef(0);
  const animationRef = useRef<number>();
  const lastPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Only add new trail point if mouse moved enough
      const dx = e.clientX - lastPosRef.current.x;
      const dy = e.clientY - lastPosRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 8) {
        lastPosRef.current = { x: e.clientX, y: e.clientY };
        
        const newPoint: TrailPoint = {
          x: e.clientX,
          y: e.clientY,
          opacity: 1,
          scale: 1,
          id: trailIdRef.current++,
        };

        setTrail((prev) => [...prev.slice(-25), newPoint]);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  // Animate trail fade out
  useEffect(() => {
    const animate = () => {
      setTrail((prev) =>
        prev
          .map((point) => ({
            ...point,
            opacity: point.opacity * 0.92,
            scale: point.scale * 0.96,
          }))
          .filter((point) => point.opacity > 0.02)
      );
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Main cursor glow */}
      <div
        className="absolute w-8 h-8 rounded-full pointer-events-none transition-transform duration-75"
        style={{
          left: mousePos.x - 16,
          top: mousePos.y - 16,
          background: "radial-gradient(circle, hsl(162 72% 45% / 0.6) 0%, hsl(162 72% 38% / 0.3) 40%, transparent 70%)",
          boxShadow: "0 0 30px hsl(162 72% 45% / 0.5), 0 0 60px hsl(162 72% 38% / 0.3)",
        }}
      />

      {/* Inner cursor dot */}
      <div
        className="absolute w-3 h-3 rounded-full pointer-events-none"
        style={{
          left: mousePos.x - 6,
          top: mousePos.y - 6,
          background: "hsl(162 72% 55%)",
          boxShadow: "0 0 10px hsl(162 72% 50%), 0 0 20px hsl(162 72% 45% / 0.8)",
        }}
      />

      {/* Trail particles */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: point.x - 4 * point.scale,
            top: point.y - 4 * point.scale,
            width: 8 * point.scale,
            height: 8 * point.scale,
            opacity: point.opacity,
            background: `radial-gradient(circle, hsl(162 72% ${50 + index * 0.5}% / ${point.opacity}) 0%, hsl(38 92% 55% / ${point.opacity * 0.5}) 50%, transparent 100%)`,
            boxShadow: `0 0 ${10 * point.scale}px hsl(162 72% 45% / ${point.opacity * 0.6})`,
            transform: `scale(${point.scale})`,
          }}
        />
      ))}

      {/* Sparkle particles */}
      {trail
        .filter((_, i) => i % 3 === 0)
        .map((point) => (
          <div
            key={`sparkle-${point.id}`}
            className="absolute pointer-events-none"
            style={{
              left: point.x + (Math.random() - 0.5) * 20,
              top: point.y + (Math.random() - 0.5) * 20,
              width: 3,
              height: 3,
              opacity: point.opacity * 0.8,
              background: "hsl(38 92% 60%)",
              borderRadius: "50%",
              boxShadow: `0 0 6px hsl(38 92% 55%)`,
            }}
          />
        ))}
    </div>
  );
};

export default MouseTrail;