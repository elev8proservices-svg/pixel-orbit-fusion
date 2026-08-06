import { OrbitScene } from "./OrbitScene";

const STATS = [
  { value: "50+", label: "Projects" },
  { value: "5+", label: "Years exp" },
  { value: "15+", label: "Clients" },
  { value: "6", label: "Verticals" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-[360px] w-[360px] rounded-full opacity-40 blur-[110px] sm:h-[520px] sm:w-[520px] sm:blur-[120px]"
        style={{ background: "radial-gradient(circle, #2f6f5e, transparent 70%)" }}
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-teal-bright" />
            <span className="eyebrow text-teal-bright">Available for projects</span>
          </span>

          <h1 className="display mt-6 text-[19vw] leading-[0.85] uppercase sm:mt-7 sm:text-[13vw] lg:text-[9.5rem]">
            Faisal<span className="text-teal-bright">.</span>
          </h1>

          <p className="display mt-4 text-xl text-foreground/90 sm:text-3xl">
            Digital Marketing Executive &amp; <em className="text-amber">Creative Designer</em>
          </p>

          <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground sm:mt-6 sm:text-base">
            Five-plus years building brands and campaigns — starting in healthcare marketing, now
            working with retail, restaurants, salons, real estate, education and hospitality
            businesses. I handle the strategy, the design and the ads, so every rupee of budget has a
            job to do.
          </p>

          <div className="mt-7 flex flex-wrap gap-3 sm:mt-9">
            <a
              href="#contact"
              className="flex-1 rounded-full bg-teal-bright px-7 py-3 text-center text-sm font-medium text-ink shadow-glow transition-transform hover:-translate-y-0.5 sm:flex-none"
            >
              Start a project
            </a>
            <a
              href="#work"
              className="flex-1 rounded-full border border-border px-7 py-3 text-center text-sm font-medium text-foreground transition-colors hover:border-teal-bright/60 hover:text-teal-bright sm:flex-none"
            >
              View my work
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-x-5 gap-y-7 border-t border-border pt-7 sm:mt-12 sm:grid-cols-4 sm:gap-x-6 sm:gap-y-8 sm:pt-8">
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
