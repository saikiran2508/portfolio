import { useEffect, useState } from "react";
import Reveal from "./Reveal.jsx";
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon, FileIcon, ArrowIcon, PinIcon, MenuIcon } from "./Icons.jsx";
import {
  profile, about, highlights, experience, featuredProjects, moreProjects, earlierWork,
  skills, education, certifications, research,
} from "../data.js";

const nav = [
  ["about", "About"], ["experience", "Experience"], ["projects", "Projects"],
  ["skills", "Skills"], ["education", "Education"], ["contact", "Contact"],
];

const ext = { target: "_blank", rel: "noopener noreferrer" };

function SectionHead({ eyebrow, title, children }) {
  return (
    <Reveal className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h2">{title}</h2>
      {children && <p className="mt-4 text-ink2 leading-relaxed">{children}</p>}
    </Reveal>
  );
}

function Tags({ items }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies">
      {items.map((t) => <li key={t} className="chip">{t}</li>)}
    </ul>
  );
}

function LinkRow({ links }) {
  if (!links?.length) return null;
  return (
    <div className="flex flex-wrap gap-4">
      {links.map((l) => (
        <a key={l.href} href={l.href} {...ext} className="inline-flex items-center gap-1 text-sm font-semibold text-accent2 hover:text-white">
          {l.label} <ArrowIcon />
        </a>
      ))}
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors ${scrolled || open ? "border-b border-line bg-page/85 backdrop-blur" : ""}`}>
      <nav className="mx-auto flex h-16 max-w-page items-center justify-between px-5 sm:px-8" aria-label="Main">
        <a href="#top" className="flex items-center gap-2 font-bold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent text-sm font-extrabold text-white">SK</span>
          <span className="hidden sm:inline">Sai Kiran Gopu</span>
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {nav.map(([id, label]) => (
            <li key={id}><a href={`#${id}`} className="text-sm text-ink2 hover:text-ink">{label}</a></li>
          ))}
        </ul>
        <a href={profile.resumes[0].href} {...ext} className="btn-primary hidden md:inline-flex">Resume</a>
        <button className="p-2 text-ink md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
          <MenuIcon open={open} />
        </button>
      </nav>
      {open && (
        <ul className="border-t border-line px-5 pb-5 pt-2 md:hidden">
          {nav.map(([id, label]) => (
            <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className="block py-3 text-ink2 hover:text-ink">{label}</a></li>
          ))}
          <li className="pt-2"><a href={profile.resumes[0].href} {...ext} className="btn-primary">Resume</a></li>
        </ul>
      )}
    </header>
  );
}

function Typed({ words }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % words.length), 2400);
    return () => clearInterval(t);
  }, [words.length]);
  return <span key={i} className="inline-block animate-[fade_.5s_ease] text-accent2">{words[i]}</span>;
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
      <div className="relative mx-auto grid max-w-page items-center gap-12 px-5 pb-16 pt-32 sm:px-8 sm:pt-40 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1 text-xs text-ink2">
            <span className="h-2 w-2 rounded-full bg-[#0ca30c]" aria-hidden /> {profile.status}
          </p>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
            Hi, I'm {profile.name.split(" ").slice(0, 2).join(" ")}.
          </h1>
          <p className="mt-3 text-2xl font-semibold text-ink2 sm:text-3xl">
            <Typed words={profile.roles} />
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink2">{profile.tagline}</p>
          <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted"><PinIcon /> {profile.location}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={profile.resumes[0].href} {...ext} className="btn-primary"><FileIcon /> Resume</a>
            <a href={profile.github} {...ext} className="btn-ghost"><GitHubIcon /> GitHub</a>
            <a href={profile.linkedin} {...ext} className="btn-ghost"><LinkedInIcon /> LinkedIn</a>
            <a href={`mailto:${profile.email}`} className="btn-ghost"><MailIcon /> Email</a>
          </div>
        </div>
        <div className="mx-auto w-56 sm:w-72 md:w-full md:max-w-xs">
          <div className="relative">
            <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-br from-accent to-accent2/20 opacity-70 blur" aria-hidden />
            <img src={profile.photo} alt={`Portrait of ${profile.name}`} width="600" height="900"
              className="relative aspect-[4/5] w-full rounded-3xl border border-line object-cover object-top" />
          </div>
        </div>
      </div>
      <div className="relative mx-auto max-w-page px-5 pb-8 sm:px-8">
        <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {highlights.map((h) => (
            <li key={h.value} className="card p-5">
              <p className="text-3xl font-extrabold tracking-tight text-ink">{h.value}</p>
              <p className="mt-1 text-sm font-semibold text-ink">{h.label}</p>
              <p className="mt-1 text-xs text-muted">{h.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="section">
      <div className="grid gap-10 md:grid-cols-[1fr_1.5fr]">
        <SectionHead eyebrow="About" title="Data scientist who cares whether the answer is right." />
        <Reveal className="space-y-4 text-lg leading-relaxed text-ink2">
          {about.map((p) => <p key={p}>{p}</p>)}
        </Reveal>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHead eyebrow="Experience" title="Where I've worked" />
      <ol className="mt-12 space-y-6">
        {experience.map((e) => (
          <Reveal as="li" key={e.company + e.role} className="card p-6 sm:p-8">
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
            <ul className="mt-5 space-y-3">
              {e.points.map((p) => (
                <li key={p} className="flex gap-3 leading-relaxed text-ink2">
                  <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-accent" aria-hidden />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6"><Tags items={e.tags} /></div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHead eyebrow="Projects" title="Selected work">
        Each project starts with a real question and ends with a measured result.
      </SectionHead>
      <div className="mt-12 space-y-8">
        {featuredProjects.map((p, idx) => (
          <Reveal as="article" key={p.title} className="card overflow-hidden">
            <div className={`grid items-stretch md:grid-cols-2 ${idx % 2 ? "md:[&>figure]:order-2" : ""}`}>
              <figure className="border-b border-line bg-[#161616] md:border-b-0">
                <img src={p.image} alt={`Chart: ${p.title} results`} className="h-full w-full object-contain" loading="lazy" width="1200" height="675" />
              </figure>
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
          </Reveal>
        ))}
      </div>

      <h3 className="mt-20 text-xl font-bold">More projects</h3>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {moreProjects.map((p) => (
          <Reveal as="article" key={p.title} className="card flex flex-col overflow-hidden transition-colors hover:border-muted">
            <img src={p.image} alt="" className="aspect-[16/10] w-full border-b border-line object-cover" loading="lazy" />
            <div className="flex flex-1 flex-col gap-4 p-5">
              <h4 className="text-lg font-bold">{p.title}</h4>
              <p className="text-sm leading-relaxed text-ink2">{p.summary}</p>
              <Tags items={p.tags} />
              <div className="mt-auto pt-1"><LinkRow links={p.links} /></div>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-8 text-sm text-muted">
        Earlier work:{" "}
        {earlierWork.map((w, i) => (
          <span key={w.href}>{i > 0 && " · "}<a href={w.href} {...ext} className="link">{w.title}</a></span>
        ))}
      </p>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHead eyebrow="Skills" title="Tools I use day to day" />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <Reveal key={s.group} className="card p-6">
            <h3 className="font-bold">{s.group}</h3>
            <div className="mt-4"><Tags items={s.items} /></div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="section">
      <SectionHead eyebrow="Education & credentials" title="Education, certifications, and research" />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Reveal className="space-y-4">
          {education.map((e) => (
            <div key={e.school} className="card flex items-start gap-4 p-6">
              <img src={e.logo} alt="" className="h-12 w-12 flex-none rounded-xl bg-white object-contain p-1" loading="lazy" />
              <div>
                <h3 className="font-bold">{e.degree}</h3>
                <p className="text-ink2">{e.school}</p>
                <p className="mt-1 font-mono text-sm text-muted">{e.dates}{e.detail && ` · ${e.detail}`}</p>
              </div>
            </div>
          ))}
        </Reveal>
        <Reveal className="space-y-4">
          <div className="card p-6">
            <h3 className="font-bold">Certifications</h3>
            <ul className="mt-4 divide-y divide-line">
              {certifications.map((c) => (
                <li key={c.name} className="flex items-center justify-between gap-4 py-3">
                  <div>
                    <p className="font-medium">{c.name}</p>
                    <p className="text-sm text-muted">{c.issuer} · {c.date}</p>
                  </div>
                  <a href={c.href} {...ext} className="inline-flex flex-none items-center gap-1 text-sm font-semibold text-accent2 hover:text-white">Verify <ArrowIcon /></a>
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-6">
            <h3 className="font-bold">Research</h3>
            <ul className="mt-3 space-y-2 text-ink2">
              {research.map((r) => (
                <li key={r} className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-accent" aria-hidden />{r}</li>
              ))}
            </ul>
          </div>
        </Reveal>
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
          <a href={profile.github} {...ext} aria-label="GitHub" className="hover:text-ink"><GitHubIcon /></a>
          <a href={profile.linkedin} {...ext} aria-label="LinkedIn" className="hover:text-ink"><LinkedInIcon /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-ink"><MailIcon /></a>
        </div>
      </div>
    </footer>
  );
}
