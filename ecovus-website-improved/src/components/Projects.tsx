import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "../utils/cn";
import { categories, photo, projects, type Category } from "../lib/data";

type Filter = "All" | Category;

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const [open, setOpen] = useState<number | null>(null);
  const shown = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.cats.includes(filter))),
    [filter]
  );

  return (
    <section id="projects" className="section">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
          <div>
            <h2 className="text-h2 font-normal tracking-[-0.015em]">
              Our work <span className="text-mute">({shown.length})</span>
            </h2>
            <p className="mt-4 max-w-[48ch] text-body text-soft">
              Photos from our sites around Harare: structure, roofs, finishes and the drawings
              behind them.
            </p>
          </div>
          <div className="-mx-[var(--gutter)] w-[calc(100%+2*var(--gutter))] overflow-x-auto px-[var(--gutter)] sm:mx-0 sm:w-auto sm:px-0">
            <div className="flex gap-2" role="group" aria-label="Filter projects">
              {(["All", ...categories] as Filter[]).map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setFilter(c)}
                  aria-pressed={filter === c}
                  className={cn(
                    "tag min-h-10 cursor-pointer px-4 transition-colors",
                    filter === c ? "border-navy bg-navy text-white" : "hover:border-navy hover:text-navy"
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        <ul className="mt-10 grid gap-x-5 gap-y-9 sm:grid-cols-2 md:mt-12 lg:grid-cols-3 lg:gap-x-6">
          {shown.map((p, i) => {
            const img = photo(p.img);
            return (
              <li key={p.img}>
                <button
                  type="button"
                  onClick={() => setOpen(i)}
                  className="group block w-full text-left"
                  aria-label={`View photo: ${p.title}`}
                >
                  <div className="overflow-hidden bg-mist">
                    <img
                      src={`/images/${p.img}-800.webp`}
                      srcSet={img.srcSet}
                      sizes="(min-width: 1024px) 26rem, (min-width: 640px) 46vw, 100vw"
                      alt={p.alt}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </button>
                <p className="mt-3 text-h3 font-medium">{p.title}</p>
                <p className="mt-1 text-body text-soft">{p.desc}</p>
                <p className="mt-2 text-meta text-mute">{p.cats.join(", ")}</p>
              </li>
            );
          })}
        </ul>
      </div>

      {open !== null && <Lightbox items={shown} start={open} onClose={() => setOpen(null)} />}
    </section>
  );
}

function Lightbox({
  items,
  start,
  onClose,
}: {
  items: typeof projects;
  start: number;
  onClose: () => void;
}) {
  const [i, setI] = useState(start);
  const closeRef = useRef<HTMLButtonElement>(null);
  const go = useCallback((d: number) => setI((v) => (v + d + items.length) % items.length), [items.length]);
  const item = items[i];
  const img = photo(item.img);

  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      prev?.focus();
    };
  }, [go, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-[60] flex flex-col bg-ink/95 text-white"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="flex items-center justify-between px-[var(--gutter)] py-3">
        <span className="text-meta tabular-nums text-white/70">
          {i + 1} / {items.length}
        </span>
        <button ref={closeRef} type="button" onClick={onClose} className="grid h-11 w-11 place-items-center" aria-label="Close">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </div>
      <div className="relative flex min-h-0 flex-1 items-center justify-center px-[var(--gutter)]" onClick={(e) => e.target === e.currentTarget && onClose()}>
        <img src={img.src} srcSet={img.srcSet} sizes="100vw" alt={item.alt} className="max-h-full max-w-full object-contain" />
      </div>
      <div className="flex items-center justify-between gap-4 px-[var(--gutter)] py-4">
        <div className="min-w-0">
          <p className="text-h3 font-medium">{item.title}</p>
          <p className="text-meta text-white/70">{item.desc}</p>
        </div>
        <div className="flex shrink-0 gap-1">
          <button type="button" onClick={() => go(-1)} className="grid h-11 w-11 place-items-center border border-white/25 hover:border-white" aria-label="Previous photo">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg>
          </button>
          <button type="button" onClick={() => go(1)} className="grid h-11 w-11 place-items-center border border-white/25 hover:border-white" aria-label="Next photo">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
