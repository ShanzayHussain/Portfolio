
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import avatarNormal from "../assets/avatar-normal.png";
import avatarSkeleton from "../assets/avatar-skeleton.png";

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export default function Hero() {
  const stageRef = useRef<HTMLDivElement>(null);
  const avatarBoxRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const stage = stageRef.current;
    const avatarBox = avatarBoxRef.current;
    const mask = maskRef.current;
    const card = cardRef.current;
    if (!stage || !avatarBox || !mask) return;

    let target = { x: 50, y: 45 };
    let current = { x: 50, y: 120 };
    let radius = 0;
    let targetRadius = 0;
    let raf = 0;
    let t = 0;
    let intro = true;
    let dragging = false;

    const introStart = performance.now() + 600;

    // Mouse: track anywhere over the whole stage (desktop hover behavior)
    const onMouseMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return; // touch handled separately below
      intro = false;
      const r = stage.getBoundingClientRect();
      target = {
        x: ((e.clientX - r.left) / r.width) * 100,
        y: ((e.clientY - r.top) / r.height) * 100,
      };
      targetRadius = 34;
    };
    const onMouseLeave = () => {
      targetRadius = 0;
    };

    // Touch: only reveal while the finger is actively dragging on the avatar
    const updateFromTouch = (touch: Touch) => {
      const r = avatarBox.getBoundingClientRect();
      const x = ((touch.clientX - r.left) / r.width) * 100;
      const y = ((touch.clientY - r.top) / r.height) * 100;
      target = { x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) };
      targetRadius = 34;
    };

    const onTouchStart = (e: TouchEvent) => {
      intro = false;
      dragging = true;
      updateFromTouch(e.touches[0]);
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!dragging) return;
      e.preventDefault(); // stop page scroll while sliding on the avatar
      updateFromTouch(e.touches[0]);
    };
    const onTouchEnd = () => {
      dragging = false;
      targetRadius = 0;
    };

    const tick = (now: number) => {
      t += 0.016;

      // One-time auto-sweep on load so the effect is discoverable,
      // stops as soon as the user interacts.
      if (intro) {
        const p = Math.min(Math.max((now - introStart) / 2400, 0), 1);
        target = { x: 8 + p * 84, y: 42 + Math.sin(p * Math.PI * 2) * 12 };
        targetRadius = p > 0 && p < 1 ? 30 : 0;
        if (p >= 1) intro = false;
      }

      current.x = lerp(current.x, target.x, 0.12);
      current.y = lerp(current.y, target.y, 0.12);
      radius = lerp(radius, targetRadius, 0.1);

      const wobbleX = Math.sin(t * 1.7) * 2.2;
      const wobbleY = Math.cos(t * 1.3) * 2.2;

      mask.style.setProperty("--mx", `${current.x + wobbleX}%`);
      mask.style.setProperty("--my", `${current.y + wobbleY}%`);
      mask.style.setProperty("--r", `${radius + Math.sin(t * 2.1) * 1.4}%`);

      if (card) {
        card.style.transform = `perspective(1200px) rotateY(${(current.x - 50) / 18}deg) rotateX(${(50 - current.y) / 24}deg)`;
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    stage.addEventListener("pointermove", onMouseMove);
    stage.addEventListener("pointerleave", onMouseLeave);
    avatarBox.addEventListener("touchstart", onTouchStart, { passive: true });
    avatarBox.addEventListener("touchmove", onTouchMove, { passive: false });
    avatarBox.addEventListener("touchend", onTouchEnd);
    avatarBox.addEventListener("touchcancel", onTouchEnd);

    return () => {
      cancelAnimationFrame(raf);
      stage.removeEventListener("pointermove", onMouseMove);
      stage.removeEventListener("pointerleave", onMouseLeave);
      avatarBox.removeEventListener("touchstart", onTouchStart);
      avatarBox.removeEventListener("touchmove", onTouchMove);
      avatarBox.removeEventListener("touchend", onTouchEnd);
      avatarBox.removeEventListener("touchcancel", onTouchEnd);
    };
  }, [reduced]);

  return (
    <section
      id="about-top"
      ref={stageRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_50%_20%,rgba(79,217,219,0.10),transparent_60%)]" />

      {/* Stack on mobile, side-by-side from sm: up — fixes the name getting cut off */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-10 md:gap-16 w-full max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display font-semibold text-gradient text-[15vw] sm:text-6xl md:text-8xl leading-none tracking-tight"
        >
          Shanzay
        </motion.h1>

        <div
          ref={avatarBoxRef}
          className="relative w-[70vw] max-w-[300px] sm:w-[46vw] sm:max-w-[340px] md:max-w-[380px] aspect-[3/4] shrink-0"
          style={{ perspective: "1200px", touchAction: "none" }}
        >
          <div
            ref={cardRef}
            className="relative h-full w-full rounded-2xl overflow-hidden transition-transform duration-300 will-change-transform"
          >
            <img
              src={avatarNormal}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />

            <div
              ref={maskRef}
              className={reduced ? "absolute inset-0 opacity-100" : "absolute inset-0"}
              style={
                reduced
                  ? undefined
                  : ({
                      "--mx": "50%",
                      "--my": "120%",
                      "--r": "0%",
                      WebkitMaskImage:
                        "radial-gradient(circle at var(--mx) var(--my), #000 0%, #000 calc(var(--r) * 0.55), transparent var(--r))",
                      maskImage:
                        "radial-gradient(circle at var(--mx) var(--my), #000 0%, #000 calc(var(--r) * 0.55), transparent var(--r))",
                    } as React.CSSProperties)
              }
            >
              <img
                src={avatarSkeleton}
                alt="Shanzay Hussain"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="absolute inset-0 ring-1 ring-cyan/20 rounded-2xl pointer-events-none" />
          </div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display font-semibold text-gradient text-[15vw] sm:text-6xl md:text-8xl leading-none tracking-tight"
        >
          Hussain
        </motion.h1>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-10 text-center text-sm sm:text-base text-blue-soft/80 font-mono tracking-wide"
      >
        Software Engineering Undergraduate · Full-Stack Developer · AI-Integrated Application Developer
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.6 }}
        className="mt-8 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#projects"
          className="rounded-full bg-cyan px-6 py-2.5 text-sm font-medium text-ink transition-transform hover:scale-[1.04]"
        >
          View projects
        </a> 

        <a
          href="/Shanzay_Hussain_CV.pdf"
          download="Shanzay_Hussain_Resume.pdf"
          className="rounded-full border border-cyan/40 px-6 py-2.5 text-sm font-medium text-cyan transition-colors hover:bg-cyan/10"
        >
          Download résumé
        </a>
      </motion.div>

      <motion.a
        href="#contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 text-xs uppercase tracking-[0.3em] text-cyan/70 hover:text-cyan animate-float inline-block"
      >
        Scroll ↓
      </motion.a>
    </section>
  );
}