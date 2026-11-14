import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, SplitHeading, Magnetic } from "./Motion.jsx";
import { MailIcon, PhoneIcon, LinkedInIcon, FileIcon } from "./Icons.jsx";
import { profile } from "../data.js";

const SERVICE = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || import.meta.env.VITE_EMAIL_JS_ACCESS_TOKEN;
const formEnabled = Boolean(SERVICE && TEMPLATE && KEY);

const input = "w-full rounded-xl border border-line bg-raised px-4 py-3 text-ink placeholder:text-muted outline-none focus:border-accent";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!formEnabled) {
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent("Hello from your portfolio")}&body=${encodeURIComponent(`${form.message}\n\n${form.name} (${form.email})`)}`;
      return;
    }
    setStatus("sending");
    try {
      await emailjs.send(SERVICE, TEMPLATE, {
        from_name: form.name, to_name: "Sai Kiran", from_email: form.email,
        to_email: profile.email, message: form.message,
      }, { publicKey: KEY });
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const items = [
    { icon: <MailIcon />, label: profile.email, href: `mailto:${profile.email}` },
    { icon: <PhoneIcon />, label: profile.phone, href: profile.phoneHref },
    { icon: <LinkedInIcon />, label: "linkedin.com/in/saikirangopu", href: profile.linkedin },
  ];

  return (
    <section id="contact" className="section">
      <div className="grid gap-10 lg:grid-cols-2">
        <FadeIn>
          <p className="eyebrow">Contact</p>
          <SplitHeading text="Let's talk" className="h2" />
          <p className="mt-4 max-w-md leading-relaxed text-ink2">
            I'm looking for full-time Data Scientist, ML Engineer, and Data Analyst roles starting after December 2026. The fastest way to reach me is email.
          </p>
          <ul className="mt-8 space-y-3">
            {items.map((i) => (
              <li key={i.href}>
                <a href={i.href} target={i.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-ink hover:text-accent2">
                  <motion.span whileHover={{ rotate: -10, scale: 1.1 }} className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-surface text-accent2">{i.icon}</motion.span>
                  {i.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            {profile.resumes.map((r) => (
              <Magnetic key={r.href}><a href={r.href} target="_blank" rel="noopener noreferrer" className="btn-ghost"><FileIcon /> {r.label}</a></Magnetic>
            ))}
          </div>
        </FadeIn>

        <FadeIn as="form" delay={0.15} onSubmit={submit} className="card relative space-y-4 overflow-hidden p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium">Name</span>
              <input required name="name" value={form.name} onChange={update} className={input} placeholder="Your name" autoComplete="name" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium">Email</span>
              <input required type="email" name="email" value={form.email} onChange={update} className={input} placeholder="you@company.com" autoComplete="email" />
            </label>
          </div>
          <label className="block">
            <span className="mb-2 block text-sm font-medium">Message</span>
            <textarea required name="message" rows={6} value={form.message} onChange={update} className={input} placeholder="Hi Sai, I'd like to talk about a role on our team." />
          </label>
          <motion.button whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.97 }} type="submit" disabled={status === "sending"} className="btn-primary w-full justify-center py-3 disabled:opacity-60">
            {status === "sending" ? (
              <motion.span animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }} className="inline-block h-4 w-4 rounded-full border-2 border-white/40 border-t-white" />
            ) : formEnabled ? "Send message" : "Send via email app"}
          </motion.button>
          <p role="status" aria-live="polite" className="text-sm">
            {status === "sent" && <span className="text-[#0ca30c]">Message sent. I'll get back to you soon.</span>}
            {status === "error" && <span className="text-[#e66767]">Something went wrong. Please email me directly at {profile.email}.</span>}
          </p>
          <AnimatePresence>
            {status === "sent" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-0 grid place-items-center bg-surface/95 backdrop-blur" onClick={() => setStatus("idle")}>
                <div className="text-center">
                  <svg viewBox="0 0 52 52" className="mx-auto h-20 w-20" aria-hidden>
                    <motion.circle cx="26" cy="26" r="24" fill="none" stroke="#0ca30c" strokeWidth="3"
                      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6 }} />
                    <motion.path d="M15 27l7 7 15-16" fill="none" stroke="#0ca30c" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"
                      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 0.5 }} />
                  </svg>
                  <p className="mt-4 text-lg font-bold">Message sent!</p>
                  <p className="mt-1 text-sm text-ink2">Thanks for reaching out. I'll reply soon.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </FadeIn>
      </div>
    </section>
  );
}
