import { useState } from "react";
import { TiltCard } from "./TiltCard";
import { PROJECTS, PROJECT_FILTERS } from "./site-data";

const GRADIENTS = [
  "linear-gradient(140deg, #1d2430, #2f6f5e)",
  "linear-gradient(140deg, #12161c, #3f9683)",
  "linear-gradient(140deg, #1d2430, #e8a33d)",
  "linear-gradient(140deg, #181d25, #2f6f5e 90%)",
  "linear-gradient(140deg, #12161c, #6b7280)",
  "linear-gradient(140deg, #1d2430, #3f9683 85%)",
];

export function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const visible = PROJECTS.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="work" className="section-light py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="eyebrow text-teal">Selected projects</p>
        <h2 className="display mt-4 max-w-2xl text-4xl text-ink sm:text-5xl">
          Work that earned <em className="text-teal">enquiries</em>, not just likes.
        </h2>

        <div className="mt-9 flex flex-wrap gap-2">
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 font-mono text-[0.68rem] tracking-[0.14em] uppercase transition-colors ${
                filter === f
                  ? "border-ink bg-ink text-ivory"
                  : "border-ink/15 text-ink/60 hover:border-ink/40"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <TiltCard key={p.title} intensity={6}>
              <article
                className="relative flex h-72 flex-col justify-between overflow-hidden rounded-2xl border border-ink/10 p-6 shadow-lift"
                style={{ background: GRADIENTS[i % GRADIENTS.length] }}
              >
                <span className="w-fit rounded-full border border-ivory/25 bg-ink/40 px-3 py-1 font-mono text-[0.62rem] tracking-[0.16em] text-ivory uppercase backdrop-blur-sm">
                  {p.category}
                </span>
                <div>
                  <h3 className="display text-xl text-ivory">{p.title}</h3>
                  <p className="mt-2 font-mono text-[0.65rem] tracking-[0.18em] text-ivory/60 uppercase">
                    {p.year}
                  </p>
                </div>
              </article>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
