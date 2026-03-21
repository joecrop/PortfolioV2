import { useEffect, useRef } from "react";

// Fluid aurora — canvas-based, mouse-reactive
// Each layer is a giant elliptical gradient; `screen` blending merges all
// layers into one seamless field of shifting colour.

const LAYERS = [
  // { baseX, baseY, sizeW, sizeH, color [r,g,b], drift speed, mouse weight, phase }
  { bx: 0.25, by: 0.25, sw: 1.1, sh: 0.85, c: [91,  33, 182], vx:  0.00018, vy:  0.00012, mw:  0.35, ph: 0.0, op: 0.75 },
  { bx: 0.70, by: 0.50, sw: 1.0, sh: 0.90, c: [14, 165, 233], vx: -0.00014, vy:  0.00018, mw:  0.25, ph: 1.5, op: 0.75 },
  { bx: 0.45, by: 0.80, sw: 0.95, sh: 1.0, c: [236, 72, 153], vx:  0.00011, vy: -0.00016, mw:  0.20, ph: 3.0, op: 0.28 },
  { bx: 0.80, by: 0.20, sw: 0.90, sh: 0.80, c: [139, 92, 246], vx: -0.00018, vy:  0.00010, mw:  0.15, ph: 4.5, op: 0.75 },
  { bx: 0.15, by: 0.65, sw: 0.85, sh: 0.95, c: [16, 185, 129], vx:  0.00009, vy: -0.00013, mw:  0.22, ph: 2.2, op: 0.75 },
];

export default function AuroraBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const lerpRef  = useRef({ x: 0.5, y: 0.5 });
  const layerPos = useRef(LAYERS.map((l) => ({ x: l.bx, y: l.by })));
  const rafId    = useRef(null);
  const tRef     = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let W, H;

    const resize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const onMouseMove = (e) => {
      mouseRef.current = { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight };
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    const lerp = (a, b, t) => a + (b - a) * t;

    const draw = () => {
      tRef.current += 0.004;
      const t = tRef.current;

      // Smooth mouse
      lerpRef.current.x = lerp(lerpRef.current.x, mouseRef.current.x, 0.04);
      lerpRef.current.y = lerp(lerpRef.current.y, mouseRef.current.y, 0.04);
      const mx = lerpRef.current.x - 0.5; // −0.5 … 0.5
      const my = lerpRef.current.y - 0.5;

      // Dark base
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "#06060f";
      ctx.fillRect(0, 0, W, H);

      // Blend all layers additively (screen = nice aurora glow)
      ctx.globalCompositeOperation = "screen";

      LAYERS.forEach((layer, i) => {
        const pos = layerPos.current[i];

        // Slow autonomous drift + sinusoidal wobble
        pos.x += layer.vx + Math.sin(t * 0.6 + layer.ph) * 0.00008;
        pos.y += layer.vy + Math.cos(t * 0.5 + layer.ph) * 0.00007;

        // Wrap
        if (pos.x < -0.4) pos.x = 1.4;
        if (pos.x >  1.4) pos.x = -0.4;
        if (pos.y < -0.4) pos.y = 1.4;
        if (pos.y >  1.4) pos.y = -0.4;

        // Mouse displacement (unique per layer)
        const cx = (pos.x + mx * layer.mw) * W;
        const cy = (pos.y + my * layer.mw) * H;

        // Ellipse via scale transform
        const rx = layer.sw * W * 0.55;
        const ry = layer.sh * H * 0.55;
        const r  = Math.max(rx, ry);

        ctx.save();
        ctx.translate(cx, cy);
        ctx.scale(rx / r, ry / r);

        const g = ctx.createRadialGradient(0, 0, 0, 0, 0, r);
        const [red, grn, blu] = layer.c;
        const op = layer.op;
        g.addColorStop(0,   `rgba(${red},${grn},${blu},${op})`);
        g.addColorStop(0.4, `rgba(${red},${grn},${blu},${(op * 0.47).toFixed(2)})`);
        g.addColorStop(0.75,`rgba(${red},${grn},${blu},0.1)`);
        g.addColorStop(1,   `rgba(${red},${grn},${blu},0)`);

        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      ctx.globalCompositeOperation = "source-over";
      rafId.current = requestAnimationFrame(draw);
    };

    rafId.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        display: "block",
      }}
    />
  );
}

