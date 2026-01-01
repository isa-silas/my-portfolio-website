import { twMerge } from "tailwind-merge";
import { useEffect, useRef } from "react";

const rand = (min, max) => Math.random() * (max - min) + min;

export const GrassAnimatedBackground = ({
  className = "",
  bladeCount = 700,
  windStrength = 0.9,
}) => {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  const ctx = useRef(null);

  const blades = useRef([]);
  const time = useRef(0);
  const mouse = useRef({ x: 0, y: 0 });
  const size = useRef({ w: 0, h: 0 });

  /* ---------------- Setup ---------------- */

  useEffect(() => {
    ctx.current = canvasRef.current.getContext("2d");

    const resize = () => {
      size.current.w = wrapperRef.current.offsetWidth;
      size.current.h = wrapperRef.current.offsetHeight;

      canvasRef.current.width = size.current.w;
      canvasRef.current.height = size.current.h;

      generateGrass();
    };

    resize();
    window.addEventListener("resize", resize);

    window.addEventListener("mousemove", (e) => {
      const rect = canvasRef.current.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    });

    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  /* ---------------- Grass Generation ---------------- */

  const generateGrass = () => {
    blades.current = [];

    for (let i = 0; i < bladeCount; i++) {
      blades.current.push({
        x: Math.random() * size.current.w,
        y: Math.random() * size.current.h,
        height: rand(14, 28),
        width: rand(0.8, 1.4),
        phase: Math.random() * Math.PI * 2,
        swayOffset: rand(-0.3, 0.3),
        color: rand(0, 1) > 0.5 ? "#4F7F52" : "#6FAF74",
      });
    }
  };

  /* ---------------- Drawing ---------------- */

  const drawBlade = (b, wind) => {
    const wave =
      Math.sin(time.current * 0.015 + b.phase) * wind +
      Math.sin(time.current * 0.006 + b.phase * 2) * wind * 0.5;

    const sway = wave + b.swayOffset;

    const tipX = b.x + sway * b.height;
    const tipY = b.y - b.height;

    const ctrlX = b.x + sway * b.height * 0.6;
    const ctrlY = b.y - b.height * 0.5;

    ctx.current.strokeStyle = b.color;
    ctx.current.lineWidth = b.width;
    ctx.current.lineCap = "round";

    ctx.current.beginPath();
    ctx.current.moveTo(b.x, b.y);
    ctx.current.quadraticCurveTo(ctrlX, ctrlY, tipX, tipY);
    ctx.current.stroke();
  };

  /* ---------------- Animation ---------------- */

  const animate = () => {
    time.current += 1;

    ctx.current.clearRect(0, 0, size.current.w, size.current.h);

    const mx = mouse.current.x / size.current.w - 0.5;
    const my = mouse.current.y / size.current.h - 0.5;
    const wind =
      windStrength +
      mx * 1.2 +
      Math.sin(time.current * 0.002) * 0.6;

    blades.current.forEach((b) => drawBlade(b, wind));

    requestAnimationFrame(animate);
  };

  return (
    <div
      ref={wrapperRef}
      className={twMerge("pointer-events-none absolute inset-0", className)}
      aria-hidden
    >
      <canvas ref={canvasRef} className="size-full" />
    </div>
  );
};
