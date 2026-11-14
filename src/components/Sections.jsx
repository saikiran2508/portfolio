import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useReducedMotion } from "framer-motion";
import GraphBackground from "./GraphBackground.jsx";
import ProjectChart from "./Charts.jsx";
import { Typewriter, CountUp, Magnetic, TiltCard, FadeIn, SplitHeading } from "./Motion.jsx";
import { GitHubIcon, LinkedInIcon, MailIcon, FileIcon, ArrowIcon, PinIcon, MenuIcon } from "./Icons.jsx";
import {
  profile, about, highlights, experience, featuredProjects, moreProjects, earlierWork,
  skills, marquee, education, certifications, research,
} from "../data.js";

const nav = [
  ["about", "About"], ["experience", "Experience"], ["projects", "Projects"],
  ["skills", "Skills"], ["education", "Education"], ["contact", "Contact"],
];
const ext = { target: "_blank", rel: "noopener noreferrer" };
const ease = [0.16, 1, 0.3, 1];

function SectionHead({ eyebrow, title, children }) {
  return (
    <div className="max-w-2xl">
      <FadeIn as="p" className="eyebrow" y={10}>{eyebrow}</FadeIn>
      <SplitHeading text={title} className="h2" />
      {children && <FadeIn as="p" delay={0.15} className="mt-4 leading-relaxed text-ink2">{children}</FadeIn>}
    </div>
  );
}

function Tags({ items }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies">
      {items.map((t) => <li key={t} className="chip transition-colors hover:border-accent/60 hover:text-ink">{t}</li>)}
    </ul>
  );
}

function LinkRow({ links }) {
  if (!links?.length) return null;
  return (
    <div className="flex flex-wrap gap-4">
      {links.map((l) => (
        <a key={l.href} href={l.href} {...ext} className="group inline-flex items-center gap-1 text-sm font-semibold text-accent2 hover:text-white">
          {l.label} <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"><ArrowIcon /></span>
        </a>
      ))}
    </div>
  );
}

// ---------------- Navbar: floating pill + active section ----------------
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on(); window.addEventListener("scroll", on, { passive: true });
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: "-45% 0px -50% 0px" });
    nav.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => { window.removeEventListener("scroll", on); io.disconnect(); };
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3"
    >
      <nav
        aria-label="Main"
        className={`flex w-full items-center justify-between transition-all duration-500 ${
          scrolled || open
            ? "max-w-4xl rounded-2xl border border-line bg-page/75 px-3 py-2 shadow-2xl shadow-black/40 backdrop-blur-xl"
            : "max-w-page px-2 py-3 sm:px-5"
        }`}
      >
        <a href="#top" className="flex items-center gap-2 font-bold tracking-tight">
          <motion.span whileHover={{ rotate: -8, scale: 1.08 }} className="grid h-8 w-8 place-items-center rounded-lg bg-accent text-sm font-extrabold text-white">SK</motion.span>
          <span className={`hidden transition-opacity sm:inline ${scrolled ? "lg:inline" : ""}`}>Sai Kiran Gopu</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {nav.map(([id, label]) => (
            <li key={id} className="relative">
              <a href={`#${id}`} className={`relative z-10 block rounded-lg px-3 py-1.5 text-sm transition-colors ${active === id ? "text-ink" : "text-ink2 hover:text-ink"}`}>
                {label}
              </a>
              {active === id && (
                <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-lg bg-raised ring-1 ring-line" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
              )}
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <Magnetic><a href={profile.resumes[0].href} {...ext} className="btn-primary">Resume</a></Magnetic>
        </div>
        <button className="p-2 text-ink md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
          <MenuIcon open={open} />
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="absolute inset-x-3 top-[4.25rem] rounded-2xl border border-line bg-page/95 p-4 backdrop-blur-xl md:hidden"
          >
            {nav.map(([id, label], i) => (
              <motion.li key={id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                <a href={`#${id}`} onClick={() => setOpen(false)} className={`block rounded-lg px-3 py-3 ${active === id ? "bg-raised text-ink" : "text-ink2"}`}>{label}</a>
              </motion.li>
            ))}
            <li className="pt-2"><a href={profile.resumes[0].href} {...ext} className="btn-primary">Resume</a></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

// ---------------- Hero ----------------
export function Hero() {
  const reduce = useReducedMotion();
  const container = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } };
  const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } };
  const photoRef = useRef(null);

  return (
    <section id="top" className="relative overflow-hidden">
      <GraphBackground className="absolute inset-0 h-full w-full" />
      <div className="pointer-events-none absolute -top-48 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-accent/20 blur-[130px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-page" />

      <div className="relative mx-auto grid max-w-page items-center gap-12 px-5 pb-14 pt-32 sm:px-8 sm:pt-40 md:grid-cols-[1.4fr_1fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1 text-xs text-ink2 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0ca30c] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0ca30c]" />
            </span>
            {profile.status}
          </motion.p>
          <motion.h1 variants={item} className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
            Hi, I'm <span className="text-shimmer">Sai Kiran</span>.
          </motion.h1>
          <motion.p variants={item} className="mt-3 flex h-10 items-center text-2xl font-semibold text-accent2 sm:text-3xl">
            <Typewriter words={profile.roles} className="inline-flex items-center" />
          </motion.p>
          <motion.p variants={item} className="mt-5 max-w-xl text-lg leading-relaxed text-ink2">{profile.tagline}</motion.p>
          <motion.p variants={item} className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted"><PinIcon /> {profile.location}</motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <Magnetic><a href={profile.resumes[0].href} {...ext} className="btn-primary shadow-lg shadow-accent/30"><FileIcon /> Resume</a></Magnetic>
            <Magnetic><a href={profile.github} {...ext} className="btn-ghost"><GitHubIcon /> GitHub</a></Magnetic>
            <Magnetic><a href={profile.linkedin} {...ext} className="btn-ghost"><LinkedInIcon /> LinkedIn</a></Magnetic>
            <Magnetic><a href={`mailto:${profile.email}`} className="btn-ghost"><MailIcon /> Email</a></Magnetic>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: reduce ? 0 : -3 }} animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.35, ease }}
          className="mx-auto w-56 sm:w-72 md:w-full md:max-w-xs"
        >
          <TiltCard max={10} className="animate-float rounded-[28px]">
            <div ref={photoRef} className="relative">
              <div className="glow-ring" aria-hidden />
              <img src={profile.photo} alt={`Portrait of ${profile.name}`} width="600" height="900"
                className="relative aspect-[4/5] w-full rounded-3xl border border-line object-cover object-top" />
            </div>
          </TiltCard>
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-page px-5 pb-10 sm:px-8">
        <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <FadeIn as="li" key={h.value} delay={0.6 + i * 0.1}>
              <TiltCard className="card h-full p-5" max={8}>
                <CountUp value={h.value} className="block text-3xl font-extrabold tracking-tight text-ink" />
                <p className="mt-1 text-sm font-semibold text-ink">{h.label}</p>
                <p className="mt-1 text-xs text-muted">{h.detail}</p>
              </TiltCard>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ---------------- About ----------------
export function About() {
  return (
    <section id="about" className="section">
      <div className="grid gap-10 md:grid-cols-[1fr_1.5fr]">
        <SectionHead eyebrow="About" title="Data scientist who cares whether the answer is right." />
        <div className="space-y-4 text-lg leading-relaxed text-ink2">
          {about.map((p, i) => <FadeIn as="p" key={p} delay={i * 0.12}>{p}</FadeIn>)}
        </div>
      </div>
    </section>
  );
}

// ---------------- Experience: scroll-drawn timeline ----------------
export function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });

  return (
    <section id="experience" className="section">
      <SectionHead eyebrow="Experience" title="Where I've worked" />
      <div ref={ref} className="relative mt-12">
        <div className="absolute bottom-0 left-[8px] top-0 w-px bg-line sm:left-[23px]" aria-hidden />
        <motion.div style={{ scaleY }} className="absolute bottom-0 left-[8px] top-0 w-px origin-top bg-gradient-to-b from-accent via-accent2 to-accent shadow-[0_0_12px_#3987e5] sm:left-[23px]" aria-hidden />
        <ol className="space-y-8">
          {experience.map((e, idx) => (
            <li key={e.company + e.role} className="relative pl-7 sm:pl-16">
              <motion.span
                initial={{ scale: 0.4, opacity: 0.3 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ margin: "-45% 0px -45% 0px" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute left-0 top-8 grid h-[18px] w-[18px] place-items-center rounded-full border-2 border-accent bg-page shadow-[0_0_14px_#3987e5] sm:left-[15px]" aria-hidden
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent2" />
              </motion.span>
              <FadeIn y={30} delay={0.05}>
                <TiltCard className="card p-6 sm:p-8" max={2}>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <img src={e.logo} alt="" className="h-12 w-12 flex-none rounded-xl bg-white object-contain p-1" loading="lazy" />
                      <div>
                        <h3 className="text-xl font-bold">{e.role}</h3>
                        <p className="text-ink2">{e.company} · {e.place}</p>
                      </div>
                    </div>
                    <p className="font-mono text-sm text-muted sm:text-right">{e.dates}</p>
                  </div>
                  <motion.ul className="mt-5 space-y-3" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
                    variants={{ show: { transition: { staggerChildren: 0.08 } } }}>
                    {e.points.map((p) => (
                      <motion.li key={p} variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0, transition: { duration: 0.5, ease } } }}
                        className="flex gap-3 leading-relaxed text-ink2">
                        <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-accent" aria-hidden />
                        <span>{p}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                  <div className="mt-6"><Tags items={e.tags} /></div>
                </TiltCard>
              </FadeIn>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// ---------------- Projects: filters + animated charts ----------------
const FILTERS = ["All", "GenAI", "ML", "Analytics"];

export function Projects() {
  const [filter, setFilter] = useState("All");
  const keep = (p) => filter === "All" || p.category === filter;
  const featured = featuredProjects.filter(keep);
  const more = moreProjects.filter(keep);

  return (
    <section id="projects" className="section">
      <SectionHead eyebrow="Projects" title="Selected work">
        Each project starts with a real question and ends with a measured result.
      </SectionHead>

      <FadeIn className="mt-8 inline-flex flex-wrap gap-1 rounded-2xl border border-line bg-surface p-1" role="tablist" aria-label="Filter projects">
        {FILTERS.map((f) => (
          <button key={f} role="tab" aria-selected={filter === f} onClick={() => setFilter(f)}
            className={`relative rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${filter === f ? "text-white" : "text-ink2 hover:text-ink"}`}>
            {filter === f && <motion.span layoutId="filter-pill" className="absolute inset-0 rounded-xl bg-accent" transition={{ type: "spring", stiffness: 400, damping: 32 }} />}
            <span className="relative">{f}</span>
          </button>
        ))}
      </FadeIn>

      <motion.div layout className="mt-10 space-y-8">
        <AnimatePresence mode="popLayout">
          {featured.map((p, idx) => (
            <motion.article
              layout key={p.title}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
              exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.6, ease }}
            >
              <TiltCard className="card overflow-hidden" max={2.5}>
                <div className={`grid items-stretch md:grid-cols-2 ${idx % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className="border-b border-line bg-[#111113] md:border-b-0">
                    <ProjectChart chart={p.chart} />
                  </div>
                  <div className="flex flex-col gap-5 p-6 sm:p-8">
                    <div>
                      <p className="eyebrow">{p.kicker}</p>
                      <h3 className="mt-2 text-2xl font-bold">{p.title}</h3>
                    </div>
                    <p className="leading-relaxed text-ink2">{p.summary}</p>
                    <ul className="space-y-2">
                      {p.results.map((r) => (
                        <li key={r} className="flex gap-3 text-sm text-ink">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-accent" aria-hidden />{r}
                        </li>
                      ))}
                    </ul>
                    <Tags items={p.tags} />
                    <div className="mt-auto flex flex-wrap items-center gap-4">
                      <LinkRow links={p.links} />
                      {p.note && <p className="text-xs text-muted">{p.note}</p>}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {more.length > 0 && <FadeIn as="h3" className="mt-20 text-xl font-bold">More projects</FadeIn>}
      <motion.div layout className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {more.map((p, i) => (
            <motion.article
              layout key={p.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}
              exit={{ opacity: 0, scale: 0.92 }} transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease }}
            >
              <TiltCard className="card group flex h-full flex-col overflow-hidden" max={7}>
                <div className="overflow-hidden border-b border-line">
                  <img src={p.image} alt="" className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" loading="lazy" />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-5">
                  <h4 className="text-lg font-bold">{p.title}</h4>
                  <p className="text-sm leading-relaxed text-ink2">{p.summary}</p>
                  <Tags items={p.tags} />
                  <div className="mt-auto pt-1"><LinkRow links={p.links} /></div>
                </div>
              </TiltCard>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {filter === "All" && (
        <FadeIn as="p" className="mt-8 text-sm text-muted">
          Earlier work:{" "}
          {earlierWork.map((w, i) => (
            <span key={w.href}>{i > 0 && " · "}<a href={w.href} {...ext} className="link">{w.title}</a></span>
          ))}
        </FadeIn>
      )}
    </section>
  );
}

// ---------------- Skills: marquee + cards ----------------
function MarqueeRow({ items, reverse, dur }) {
  const row = [...items, ...items];
  return (
    <div className="marquee overflow-hidden py-1.5">
      <ul className={`marquee-track ${reverse ? "reverse" : ""}`} style={{ "--dur": `${dur}s` }}>
        {row.map((t, i) => (
          <li key={i} aria-hidden={i >= items.length}
            className="whitespace-nowrap rounded-xl border border-line bg-surface px-5 py-3 text-base font-semibold text-ink transition-colors hover:border-accent hover:text-accent2">
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHead eyebrow="Skills" title="Tools I use day to day" />
      <FadeIn className="mt-10 space-y-3">
        <MarqueeRow items={marquee[0]} dur={45} />
        <MarqueeRow items={marquee[1]} reverse dur={50} />
      </FadeIn>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <FadeIn key={s.group} delay={(i % 3) * 0.1}>
            <TiltCard className="card h-full p-6" max={6}>
              <h3 className="font-bold">{s.group}</h3>
              <div className="mt-4"><Tags items={s.items} /></div>
            </TiltCard>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ---------------- Education ----------------
export function Education() {
  return (
    <section id="education" className="section">
      <SectionHead eyebrow="Education & credentials" title="Education, certifications, and research" />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          {education.map((e, i) => (
            <FadeIn key={e.school} delay={i * 0.1}>
              <TiltCard className="card flex items-start gap-4 p-6" max={5}>
                <img src={e.logo} alt="" className="h-12 w-12 flex-none rounded-xl bg-white object-contain p-1" loading="lazy" />
                <div>
                  <h3 className="font-bold">{e.degree}</h3>
                  <p className="text-ink2">{e.school}</p>
                  <p className="mt-1 font-mono text-sm text-muted">{e.dates}{e.detail && ` · ${e.detail}`}</p>
                </div>
              </TiltCard>
            </FadeIn>
          ))}
        </div>
        <div className="space-y-4">
          <FadeIn delay={0.1}>
            <TiltCard className="card p-6" max={3}>
              <h3 className="font-bold">Certifications</h3>
              <ul className="mt-4 divide-y divide-line">
                {certifications.map((c) => (
                  <li key={c.name} className="flex items-center justify-between gap-4 py-3">
                    <div>
                      <p className="font-medium">{c.name}</p>
                      <p className="text-sm text-muted">{c.issuer} · {c.date}</p>
                    </div>
                    <a href={c.href} {...ext} className="group inline-flex flex-none items-center gap-1 text-sm font-semibold text-accent2 hover:text-white">
                      Verify <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"><ArrowIcon /></span>
                    </a>
                  </li>
                ))}
              </ul>
            </TiltCard>
          </FadeIn>
          <FadeIn delay={0.2}>
            <TiltCard className="card p-6" max={3}>
              <h3 className="font-bold">Research</h3>
              <ul className="mt-3 space-y-2 text-ink2">
                {research.map((r) => (
                  <li key={r} className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-accent" aria-hidden />{r}</li>
                ))}
              </ul>
            </TiltCard>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-page flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:px-8">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex items-center gap-5">
          {[[profile.github, "GitHub", <GitHubIcon key="g" />], [profile.linkedin, "LinkedIn", <LinkedInIcon key="l" />], [`mailto:${profile.email}`, "Email", <MailIcon key="m" />]].map(([href, label, icon]) => (
            <Magnetic key={label} strength={0.4}>
              <a href={href} {...(href.startsWith("http") ? ext : {})} aria-label={label} className="block p-1 transition-colors hover:text-accent2">{icon}</a>
            </Magnetic>
          ))}
        </div>
      </div>
    </footer>
  );
}
