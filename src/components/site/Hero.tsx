import { OrbitScene } from "./OrbitScene";

const STATS = [
  { value: "50+", label: "Projects" },
  { value: "5+", label: "Years exp" },
  { value: "15+", label: "Clients" },
  { value: "6", label: "Verticals" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full opacity-40 blur-[120px]"
        style={{ background: "radial-gradient(circle, #2f6f5e, transparent 70%)" }}
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-teal-bright" />
            <span className="eyebrow text-teal-bright">Available for projects</span>
          </span>

          <h1 className="display mt-7 text-[19vw] leading-[0.85] uppercase sm:text-[13vw] lg:text-[9.5rem]">
            Faisal<span className="text-teal-bright">.</span>
          </h1>

          <p className="display mt-4 text-2xl text-foreground/90 sm:text-3xl">
            Digital Marketing Executive &amp; <em className="text-amber">Creative Designer</em>
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Five-plus years building brands and campaigns — starting in healthcare marketing, now
            working with retail, restaurants, salons, real estate, education and hospitality
            businesses. I handle the strategy, the design and the ads, so every rupee of budget has a
            job to do.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-teal-bright px-7 py-3 text-sm font-medium text-ink shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Start a project
            </a>
            <a
              href="#work"
              className="rounded-full border border-border px-7 py-3 text-sm font-medium text-foreground transition-colors hover:border-teal-bright/60 hover:text-teal-bright"
            >
              View my work
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-8 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="display text-3xl text-foreground sm:text-4xl">{s.value}</dt>
                <dd className="eyebrow mt-2 text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="order-first lg:order-last">
          <OrbitScene />
        </div>
      </div>
    </section>
  );
}
