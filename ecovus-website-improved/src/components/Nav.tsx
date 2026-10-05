import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { contacts, navLinks } from "../lib/data";
import { Logo } from "./Logo";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b bg-paper/95 backdrop-blur transition-colors",
        scrolled || open ? "border-line" : "border-transparent"
      )}
    >
      <div className="wrap-wide flex h-[var(--header-h)] items-center justify-between gap-6">
        <a href="#top" className="shrink-0" aria-label="Ecovus Projects & Construction, back to top">
          <Logo variant="compact" className="h-9 w-auto lg:h-11" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.slice(0, 4).map((l) => (
            <a key={l.href} href={l.href} className="text-meta text-soft transition-colors hover:text-navy">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href={contacts.phones[0].href}
            className="hidden text-meta text-soft transition-colors hover:text-navy xl:inline"
          >
            {contacts.phones[0].label}
          </a>
          <a href="#contact" className="btn btn-primary">
            Start a project
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="-mr-2 flex h-11 w-11 flex-col items-center justify-center gap-[6px] lg:hidden"
        >
          <span className={cn("h-[2px] w-6 bg-ink transition-transform", open && "translate-y-[8px] rotate-45")} />
          <span className={cn("h-[2px] w-6 bg-ink transition-opacity", open && "opacity-0")} />
          <span className={cn("h-[2px] w-6 bg-ink transition-transform", open && "-translate-y-[8px] -rotate-45")} />
        </button>
      </div>
    </header>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 bottom-0 top-[var(--header-h)] z-40 overflow-y-auto bg-paper transition-opacity lg:hidden",
          open ? "opacity-100" : "pointer-events-none invisible opacity-0"
        )}
      >
        <div className="wrap-wide flex min-h-full flex-col pb-10 pt-4">
          <nav className="flex flex-col" aria-label="Mobile">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 text-h2 font-normal tracking-tight"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto space-y-1 pt-10 text-body text-soft">
            {contacts.phones.map((p) => (
              <a key={p.href} href={p.href} className="block">
                {p.label}
              </a>
            ))}
            <a href={`mailto:${contacts.email}`} className="block break-all">
              {contacts.email}
            </a>
          </div>
          <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary mt-6 w-full">
            Start a project
          </a>
        </div>
      </div>
    </>
  );
}
