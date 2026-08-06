import { CONTACT } from "./site-data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left lg:px-8">
        <p className="font-mono text-[0.68rem] tracking-[0.14em] text-muted-foreground uppercase">
          © {new Date().getFullYear()} Faisal Media. All rights reserved.
        </p>
        <p className="font-mono text-[0.68rem] tracking-[0.14em] text-muted-foreground uppercase">
          {CONTACT.location}
        </p>
      </div>
    </footer>
  );
}
