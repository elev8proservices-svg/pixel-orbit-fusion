import { Check } from "lucide-react";
import { PRICING } from "./site-data";

export function Pricing() {
  return (
    <section id="pricing" className="section-light py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="eyebrow text-teal">Pricing</p>
        <h2 className="display mt-4 max-w-2xl text-3xl text-ink sm:text-5xl">
          Clear retainers. <em className="text-teal">No surprise invoices.</em>
        </h2>

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {PRICING.map((tier) => (
            <article
              key={tier.name}
              className={`relative rounded-3xl border p-8 ${
                tier.featured
                  ? "border-teal/40 bg-ink text-ivory shadow-lift lg:-mt-6 lg:pb-12"
                  : "border-ink/12 bg-ivory/70 text-ink"
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-amber px-3 py-1 font-mono text-[0.6rem] tracking-[0.16em] text-ink uppercase shadow-amber-glow">
                  Most popular
                </span>
              )}
              <p
                className={`eyebrow ${tier.featured ? "text-teal-bright" : "text-slate-muted"}`}
              >
                {tier.name}
              </p>
              <p className="display mt-4 text-4xl">
                {tier.price}
                <span className="font-mono text-sm tracking-widest opacity-60">/mo</span>
              </p>
              <p className={`mt-2 text-sm ${tier.featured ? "text-ivory/60" : "text-slate-muted"}`}>
                {tier.tag}
              </p>

              <ul className="mt-7 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm">
                    <Check
                      size={16}
                      className={`mt-0.5 shrink-0 ${tier.featured ? "text-teal-bright" : "text-teal"}`}
                    />
                    <span className={tier.featured ? "text-ivory/85" : "text-ink/75"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 block rounded-full px-6 py-3 text-center text-sm font-medium transition-transform hover:-translate-y-0.5 ${
                  tier.featured
                    ? "bg-teal-bright text-ink shadow-glow"
                    : "border border-ink/20 text-ink hover:border-teal"
                }`}
              >
                Choose {tier.name}
              </a>
            </article>
          ))}
        </div>

        <p className="mt-10 font-mono text-[0.68rem] tracking-[0.14em] text-slate-muted uppercase">
          Ad spend is billed separately, paid directly to Meta / Google.
        </p>
      </div>
    </section>
  );
}
