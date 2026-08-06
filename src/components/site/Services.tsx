import {
  Film,
  Instagram,
  LayoutPanelTop,
  Palette,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { TiltCard } from "./TiltCard";
import { SERVICES } from "./site-data";

const ICONS: Record<string, LucideIcon> = {
  TrendingUp,
  Instagram,
  Palette,
  Target,
  LayoutPanelTop,
  Film,
};

export function Services() {
  return (
    <section id="services" className="relative bg-ink py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="eyebrow text-teal-bright">Services</p>
        <h2 className="display mt-4 max-w-2xl text-3xl sm:text-5xl">
          Everything a growing business needs, <em className="text-amber">without an agency</em>.
        </h2>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon] ?? TrendingUp;
            return (
              <TiltCard key={s.title}>
                <article className="group h-full rounded-2xl border border-border bg-ink-soft p-7 transition-colors hover:border-teal-bright/40">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-teal-bright/30 bg-teal-bright/10 text-teal-bright">
                    <Icon size={19} />
                  </span>
                  <h3 className="display mt-6 text-xl">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </article>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
