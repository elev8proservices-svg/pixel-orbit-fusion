import { PROCESS } from "./site-data";

export function Process() {
  return (
    <section id="process" className="bg-ink py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="eyebrow text-teal-bright">Process</p>
        <h2 className="display mt-4 max-w-2xl text-3xl sm:text-5xl">
          A simple way of <em className="text-amber">working together</em>.
        </h2>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p) => (
            <div key={p.step} className="border-t border-border pt-6">
              <p className="font-mono text-sm tracking-[0.2em] text-amber">{p.step}</p>
              <h3 className="display mt-4 text-2xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
