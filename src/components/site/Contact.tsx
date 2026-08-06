import { useState } from "react";
import { Globe, Mail, MessageCircle, Phone } from "lucide-react";
import { CONTACT, SERVICES } from "./site-data";

const INFO = [
  { icon: Phone, label: "Call direct", value: CONTACT.phoneDisplay },
  { icon: Mail, label: "Email", value: CONTACT.email },
  { icon: MessageCircle, label: "WhatsApp", value: "Fastest reply, 9am – 9pm IST" },
  { icon: Globe, label: "Available for", value: "Remote work worldwide" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", contact: "", service: "", details: "" });

  const set = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      `Hi Faisal, I'd like to start a project.`,
      `Name: ${form.name}`,
      `Phone / Email: ${form.contact}`,
      `Service: ${form.service || "Not sure yet"}`,
      `Details: ${form.details}`,
    ].join("\n");
    window.open(`https://wa.me/${CONTACT.phoneRaw}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/4 h-[420px] w-[420px] rounded-full opacity-30 blur-[130px]"
        style={{ background: "radial-gradient(circle, #2f6f5e, transparent 70%)" }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <p className="eyebrow text-teal-bright">Contact</p>
          <h2 className="display mt-4 text-4xl sm:text-5xl">
            Let&apos;s build <em className="text-amber">something great</em>.
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
            Tell me what you sell, who you sell it to, and where growth has stalled. I&apos;ll come
            back with an honest read on what will move the needle — and whether I&apos;m the right
            person for it.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {INFO.map((i) => (
              <div key={i.label} className="rounded-2xl border border-border bg-ink-soft p-5">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-teal-bright/30 bg-teal-bright/10 text-teal-bright">
                  <i.icon size={16} />
                </span>
                <p className="eyebrow mt-4 text-muted-foreground">{i.label}</p>
                <p className="mt-1.5 text-sm text-foreground">{i.value}</p>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-border bg-ink-soft p-7 sm:p-9"
        >
          <div className="grid gap-5">
            <label className="block">
              <span className="eyebrow text-muted-foreground">Your name</span>
              <input
                required
                value={form.name}
                onChange={set("name")}
                placeholder="Faisal Ahmed"
                className="mt-2 w-full rounded-xl border border-input bg-ink px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-teal-bright"
              />
            </label>
            <label className="block">
              <span className="eyebrow text-muted-foreground">Phone or email</span>
              <input
                required
                value={form.contact}
                onChange={set("contact")}
                placeholder="+91 90000 00000"
                className="mt-2 w-full rounded-xl border border-input bg-ink px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-teal-bright"
              />
            </label>
            <label className="block">
              <span className="eyebrow text-muted-foreground">Service needed</span>
              <select
                value={form.service}
                onChange={set("service")}
                className="mt-2 w-full rounded-xl border border-input bg-ink px-4 py-3 text-sm text-foreground outline-none focus:border-teal-bright"
              >
                <option value="">Select a service</option>
                {SERVICES.map((s) => (
                  <option key={s.title} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </label>
            <label className="block">
              <span className="eyebrow text-muted-foreground">Project details</span>
              <textarea
                required
                rows={4}
                value={form.details}
                onChange={set("details")}
                placeholder="Business type, current channels, budget range and what you want to achieve."
                className="mt-2 w-full resize-none rounded-xl border border-input bg-ink px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-teal-bright"
              />
            </label>

            <button
              type="submit"
              className="rounded-full bg-teal-bright px-7 py-3.5 text-sm font-medium text-ink shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Send on WhatsApp
            </button>
            <p className="font-mono text-[0.62rem] tracking-[0.14em] text-muted-foreground uppercase">
              Opens WhatsApp with your details pre-filled.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
