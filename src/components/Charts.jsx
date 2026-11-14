import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const COLORS = { base: "#4a4a47", blue: "#3987e5", orange: "#d95926" };
const ease = [0.16, 1, 0.3, 1];

function Tooltip({ show, children }) {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 4 }}
      transition={{ duration: 0.15 }}
      className="pointer-events-none absolute z-10 whitespace-nowrap rounded-lg border border-line bg-raised px-3 py-2 text-xs text-ink shadow-xl"
      role="tooltip"
    >
      {children}
    </motion.div>
  );
}

function HBarChart({ chart, inView, reduce }) {
  const [hover, setHover] = useState(null);
  const max = chart.max ?? Math.max(...chart.bars.map((b) => b.value));
  return (
    <ul className="space-y-3.5">
      {chart.bars.map((b, i) => (
        <li key={b.label} className="grid grid-cols-[minmax(0,9.5rem)_1fr] items-center gap-3 sm:grid-cols-[minmax(0,11rem)_1fr]"
          onPointerEnter={() => setHover(i)} onPointerLeave={() => setHover(null)}>
          <span className="text-right text-xs leading-tight text-ink2 sm:text-[13px]">{b.label}</span>
          <div className="relative flex h-7 items-center gap-2">
            <motion.div
              className="h-full rounded-r-[4px]"
              style={{ background: COLORS[b.color] || COLORS.base, minWidth: 3 }}
              initial={{ width: reduce ? `${(b.value / max) * 58}%` : 0 }}
              animate={inView ? { width: `${(b.value / max) * 58}%` } : {}}
              transition={{ duration: 1.1, delay: 0.15 + i * 0.12, ease }}
            />
            <motion.span
              className="text-sm font-bold text-ink"
              initial={{ opacity: reduce ? 1 : 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 + i * 0.12 }}
            >
              {b.value}{chart.unit}
            </motion.span>
            {b.note && <span className="hidden whitespace-nowrap text-[11px] text-muted md:inline">{b.note}</span>}
            <div className="absolute left-1/3 top-[-2.6rem]"><Tooltip show={hover === i}>{b.label}: <b>{b.value}{chart.unit}</b>{b.note ? ` · ${b.note}` : ""}</Tooltip></div>
          </div>
        </li>
      ))}
    </ul>
  );
}

function VBarChart({ chart, inView, reduce }) {
  const [hover, setHover] = useState(null);
  const max = chart.max ?? Math.max(...chart.bars.map((b) => b.value));
  return (
    <div className="flex h-52 items-end justify-around gap-4 border-b border-line px-2 sm:h-60">
      {chart.bars.map((b, i) => (
        <div key={b.label} className="relative flex h-full w-full max-w-[110px] flex-col items-center justify-end"
          onPointerEnter={() => setHover(i)} onPointerLeave={() => setHover(null)}>
          {b.delta && (
            <motion.span className="mb-0.5 text-xs text-ink2"
              initial={{ opacity: reduce ? 1 : 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.9 + i * 0.15 }}>
              {b.delta}
            </motion.span>
          )}
          <motion.span className="mb-1.5 text-lg font-extrabold text-ink sm:text-xl"
            initial={{ opacity: reduce ? 1 : 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.7 + i * 0.15 }}>
            {b.value}{chart.unit}
          </motion.span>
          <motion.div
            className="w-full rounded-t-[4px]"
            style={{ background: COLORS[b.color] || COLORS.base }}
            initial={{ height: reduce ? `${(b.value / max) * 72}%` : 0 }}
            animate={inView ? { height: `${(b.value / max) * 72}%` } : {}}
            transition={{ duration: 1.1, delay: 0.15 + i * 0.15, ease }}
          />
          <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2"><Tooltip show={hover === i}>{b.label}: <b>{b.value}{chart.unit}</b></Tooltip></div>
        </div>
      ))}
    </div>
  );
}

export default function ProjectChart({ chart }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  return (
    <figure ref={ref} className="flex h-full flex-col justify-center gap-5 p-6 sm:p-8" aria-label={chart.title}>
      <figcaption>
        <p className="font-bold text-ink">{chart.title}</p>
        <p className="mt-1 text-xs text-muted">{chart.subtitle}</p>
      </figcaption>
      {chart.type === "hbar"
        ? <HBarChart chart={chart} inView={inView} reduce={reduce} />
        : <VBarChart chart={chart} inView={inView} reduce={reduce} />}
      {chart.type !== "hbar" && (
        <div className="-mt-3 flex justify-around gap-4 px-2">
          {chart.bars.map((b) => <span key={b.label} className="w-full max-w-[110px] text-center text-[11px] leading-tight text-ink2 sm:text-xs">{b.label}</span>)}
        </div>
      )}
      {chart.callout && (
        <motion.p className="self-start rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent2"
          initial={{ opacity: reduce ? 1 : 0, scale: reduce ? 1 : 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 1.4 }}>
          {chart.callout}
        </motion.p>
      )}
      <table className="sr-only">
        <caption>{chart.title}</caption>
        <tbody>{chart.bars.map((b) => <tr key={b.label}><th>{b.label}</th><td>{b.value}{chart.unit}</td></tr>)}</tbody>
      </table>
    </figure>
  );
}
