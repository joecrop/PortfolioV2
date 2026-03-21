import { useEffect, useRef } from "react";

export default function AuroraBackground() {
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x1: -200, y1: -200, x2: 0, y2: 0 });
  const rafId = useRef(null);
  const initialized = useRef(false);

  useEffect(() => {
    // Set initial positions after mount so window is defined
    pos.current = {
      x1: window.innerWidth * 0.15,
      y1: window.innerHeight * 0.1,
      x2: window.innerWidth * 0.7,
      y2: window.innerHeight * 0.4,
    };
    mouse.current = {
      x: window.innerWidth * 0.5,
      y: window.innerHeight * 0.5,
    };
    initialized.current = true;

    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      const { x, y } = mouse.current;

      // Orb1 drifts toward mouse (offset so center of orb trails mouse)
      const target1x = x - 300;
      const target1y = y - 300;
      pos.current.x1 = lerp(pos.current.x1, target1x, 0.03);
      pos.current.y1 = lerp(pos.current.y1, target1y, 0.03);

      // Orb2 drifts away from mouse (opposite corner)
      const target2x = window.innerWidth - x - 250;
      const target2y = window.innerHeight - y - 250;
      pos.current.x2 = lerp(pos.current.x2, target2x, 0.02);
      pos.current.y2 = lerp(pos.current.y2, target2y, 0.02);

      if (orb1Ref.current) {
        orb1Ref.current.style.transform = `translate(${pos.current.x1}px, ${pos.current.y1}px)`;
      }
      if (orb2Ref.current) {
        orb2Ref.current.style.transform = `translate(${pos.current.x2}px, ${pos.current.y2}px)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div className="aurora-bg" aria-hidden="true">
      {/* Orb 1 — purple, mouse-following */}
      <div ref={orb1Ref} className="aurora-orb aurora-orb-1" />
      {/* Orb 2 — sky blue, counter-following */}
      <div ref={orb2Ref} className="aurora-orb aurora-orb-2" />
      {/* Orb 3 — pink, CSS float only */}
      <div className="aurora-orb aurora-orb-3" />
    </div>
  );
}
