import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "./site-data";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-ink/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <span
            className="h-8 w-8 shrink-0 rounded-full"
            style={{
              background: "radial-gradient(circle at 30% 25%, #3f9683, #2f6f5e 55%, #e8a33d)",
              boxShadow: "0 0 22px -4px rgb(63 150 131 / 0.7)",
            }}
          />
          <span className="display truncate text-lg text-foreground">Faisal Media.</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[0.7rem] tracking-[0.18em] text-muted-foreground uppercase transition-colors hover:text-teal-bright"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-teal-bright/40 bg-teal-bright/10 px-5 py-2 text-sm font-medium text-teal-bright shadow-glow transition-colors hover:bg-teal-bright hover:text-ink"
          >
            Hire me
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-border p-2 text-foreground lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-ink/95 px-5 pb-6 pt-2 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-teal-bright px-5 py-3 text-center text-sm font-medium text-ink"
            >
              Hire me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
