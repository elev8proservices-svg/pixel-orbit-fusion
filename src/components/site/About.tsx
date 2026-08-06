import portrait from "@/assets/faisal-portrait.jpg";
import { WireShape } from "./WireShape";
import { SKILLS, TIMELINE } from "./site-data";

export function About() {
  return (
    <section id="about" className="section-light py-16 sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-8">
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-ink/10 shadow-lift">
            <img
              src={portrait}
              alt="Faisal, digital marketing executive and creative designer"
              width={912}
              height={1200}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-6">
              <p className="display text-2xl text-ivory">Faisal</p>
              <p className="eyebrow mt-1 text-ivory/70">Marketing &amp; design consultant</p>
            </div>
          </div>
          <WireShape className="absolute -right-4 -top-10 h-28 w-28 sm:h-36 sm:w-36" />
        </div>

        <div>
          <p className="eyebrow text-teal">About</p>
          <h2 className="display mt-4 text-3xl text-ink sm:text-5xl">
            Design that moves. <em className="text-teal">Marketing that converts.</em>
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-slate-muted">
            I started out designing for hospitals and diagnostics brands, where trust matters more
            than trend. That discipline now goes into every account I take on — a clear offer, a
            consistent brand, and campaigns measured on enquiries rather than impressions. I work as
            a single point of contact: strategy, creative and reporting under one roof.
          </p>

          <ul className="mt-8 flex flex-wrap gap-2">
            {SKILLS.map((s) => (
              <li
                key={s}
                className="rounded-full border border-ink/15 bg-ivory/60 px-4 py-1.5 font-mono text-[0.68rem] tracking-[0.14em] text-ink/70 uppercase"
              >
                {s}
              </li>
            ))}
          </ul>

          <ol className="mt-12 border-l border-ink/15 pl-6">
            {TIMELINE.map((t) => (
              <li key={t.year} className="relative pb-9 last:pb-0">
                <span className="absolute -left-[1.9rem] top-1.5 h-2.5 w-2.5 rounded-full bg-teal ring-4 ring-ivory" />
                <p className="font-mono text-xs tracking-[0.2em] text-amber uppercase">{t.year}</p>
                <p className="mt-1.5 font-medium text-ink">{t.role}</p>
                <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-slate-muted">{t.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
