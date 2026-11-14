import { useEffect, useRef, useState } from "react";
import {
  motion, useInView, useMotionValue, useSpring, useScroll, useReducedMotion, animate,
} from "framer-motion";

// ---------- Scroll progress bar ----------
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-accent via-accent2 to-[#9ec5f4]"
    />
  );
}

// ---------- Typewriter: types, pauses, deletes, next word ----------
export function Typewriter({ words, className = "" }) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [text, setText] = useState(reduce ? words[0] : "");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const word = words[i];
    let delay = deleting ? 45 : 85;
    if (!deleting && text === word) delay = 1600;
    if (deleting && text === "") delay = 300;
    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === "") { setDeleting(false); setI((i + 1) % words.length); }
      else setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, i, words, reduce]);

  return (
    <span className={className} aria-label={words.join(", ")}>
      <span aria-hidden>{text}</span>
      <span aria-hidden className="ml-0.5 inline-block w-[3px] animate-blink self-stretch bg-accent2 align-middle" style={{ height: "0.9em" }} />
    </span>
  );
}

// ---------- Count-up number ----------
// value like "100%", "0.733", "+72%", "20K+": animates the numeric part.
export function CountUp({ value, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const m = String(value).match(/^([^\d]*)([\d.]+)(.*)$/);
  const [prefix, num, suffix] = m ? [m[1], parseFloat(m[2]), m[3]] : ["", 0, value];
  const decimals = m && m[2].includes(".") ? m[2].split(".")[1].length : 0;
  const [display, setDisplay] = useState(reduce ? num : 0);

  useEffect(() => {
    if (!inView || reduce) { if (reduce) setDisplay(num); return; }
    const controls = animate(0, num, { duration: 1.6, ease: [0.16, 1, 0.3, 1], onUpdate: setDisplay });
    return () => controls.stop();
  }, [inView, num, reduce]);

  return (
    <span ref={ref} className={className} aria-label={value}>
      <span aria-hidden>{prefix}{display.toFixed(decimals)}{suffix}</span>
    </span>
  );
}

// ---------- Magnetic wrapper: element leans toward the cursor ----------
export function Magnetic({ children, strength = 0.25, className = "" }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 15, mass: 0.4 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 15, mass: 0.4 });
  const move = (e) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const leave = () => { x.set(0); y.set(0); };
  return (
    <motion.span ref={ref} onPointerMove={move} onPointerLeave={leave} style={{ x, y }} className={`inline-flex ${className}`}>
      {children}
    </motion.span>
  );
}

// ---------- Tilt + cursor spotlight card ----------
export function TiltCard({ children, className = "", max = 6, as = "div", ...rest }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const rx = useSpring(0, { stiffness: 160, damping: 18 });
  const ry = useSpring(0, { stiffness: 160, damping: 18 });
  const Comp = motion[as];
  const move = (e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
    if (reduce || e.pointerType !== "mouse") return;
    ry.set((px - 0.5) * max * 2);
    rx.set(-(py - 0.5) * max * 2);
  };
  const leave = () => { rx.set(0); ry.set(0); };
  return (
    <Comp
      ref={ref} onPointerMove={move} onPointerLeave={leave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className={`spotlight ${className}`} {...rest}
    >
      {children}
    </Comp>
  );
}

// ---------- Reveal on scroll (fade + rise), with optional stagger index ----------
export function FadeIn({ children, className = "", delay = 0, y = 24, as = "div", ...rest }) {
  const Comp = motion[as];
  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className} {...rest}
    >
      {children}
    </Comp>
  );
}

// Splits a heading into words that rise in one after another.
export function SplitHeading({ text, className = "", as = "h2" }) {
  const Comp = motion[as];
  const words = text.split(" ");
  return (
    <Comp
      className={className}
      initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
      variants={{ show: { transition: { staggerChildren: 0.06 } } }}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-1 align-bottom" aria-hidden>
          <motion.span
            className="inline-block"
            variants={{ hidden: { y: "110%" }, show: { y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
          >
            {w}{i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Comp>
  );
}
