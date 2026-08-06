import { INDUSTRIES } from "./site-data";

export function Marquee() {
  const items = [...INDUSTRIES, ...INDUSTRIES];
  return (
    <div className="border-y border-border bg-ink-soft py-5">
      <div className="flex overflow-hidden">
        <div className="flex w-max animate-marquee items-center">
          {items.map((name, i) => (
            <span key={`${name}-${i}`} className="flex items-center">
              <span className="display px-8 text-xl whitespace-nowrap text-foreground/70 sm:text-2xl">
                {name}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-amber/70" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
