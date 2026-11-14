import { useState } from "react";
import emailjs from "@emailjs/browser";
import Reveal from "./Reveal.jsx";
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
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="h2">Let's talk</h2>
          <p className="mt-4 max-w-md leading-relaxed text-ink2">
            I'm looking for full-time Data Scientist, ML Engineer, and Data Analyst roles starting after December 2026. The fastest way to reach me is email.
          </p>
          <ul className="mt-8 space-y-3">
            {items.map((i) => (
              <li key={i.href}>
                <a href={i.href} target={i.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-ink hover:text-accent2">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-surface text-accent2">{i.icon}</span>
                  {i.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            {profile.resumes.map((r) => (
              <a key={r.href} href={r.href} target="_blank" rel="noopener noreferrer" className="btn-ghost"><FileIcon /> {r.label}</a>
            ))}
          </div>
        </Reveal>

        <Reveal as="form" onSubmit={submit} className="card space-y-4 p-6 sm:p-8">
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
          <button type="submit" disabled={status === "sending"} className="btn-primary w-full justify-center py-3 disabled:opacity-60">
            {status === "sending" ? "Sending…" : formEnabled ? "Send message" : "Send via email app"}
          </button>
          <p role="status" aria-live="polite" className="text-sm">
            {status === "sent" && <span className="text-[#0ca30c]">✓ Message sent. I'll get back to you soon.</span>}
            {status === "error" && <span className="text-[#e66767]">Something went wrong. Please email me directly at {profile.email}.</span>}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
