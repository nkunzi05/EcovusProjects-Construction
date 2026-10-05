import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "../utils/cn";
import { heroSlides, photo } from "../lib/data";

const INTERVAL = 6500;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useRef(false);
  const count = heroSlides.length;
  const slide = heroSlides[index];

  const go = useCallback((dir: number) => setIndex((i) => (i + dir + count) % count), [count]);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (paused || reduced.current) return;
    const t = window.setTimeout(() => go(1), INTERVAL);
    return () => window.clearTimeout(t);
  }, [index, paused, go]);

  return (
    <section id="top" className="pt-[var(--header-h)]">
      <div className="wrap-wide">
        <div className="intro grid gap-6 pb-8 pt-10 md:pt-14 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] lg:items-end lg:gap-16 lg:pb-10">
          <h1 className="max-w-[23ch] text-h1 font-normal tracking-[-0.02em] text-ink">
            Design, construction and planning for homes, businesses and towns across Zimbabwe.
          </h1>
          <div className="lg:pb-1.5">
            <p className="max-w-[42ch] text-lead text-soft">
              One Harare team, from the first drawing to the day you get the keys, built to the
              budget agreed at the start.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="btn btn-primary">
                Start a project
              </a>
              <a href="#projects" className="btn btn-ghost">
                See our work
              </a>
            </div>
          </div>
        </div>

        <div
          className="intro"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div
            className="hero-frame relative overflow-hidden bg-mist"
            role="region"
            aria-roledescription="carousel"
            aria-label="Recent Ecovus projects"
          >
            {heroSlides.map((s, i) => {
              const p = photo(s.img);
              return (
                <img
                  key={s.img}
                  src={p.src}
                  srcSet={p.srcSet}
                  sizes="(min-width: 1600px) 1600px, 100vw"
                  alt={s.alt}
                  aria-hidden={i !== index}
                  loading={i === 0 ? "eager" : "lazy"}
                  fetchPriority={i === 0 ? "high" : "auto"}
                  style={{ objectPosition: s.position }}
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out",
                    i === index ? "opacity-100" : "opacity-0"
                  )}
                />
              );
            })}
          </div>

          <div className="grid gap-4 border-b border-line py-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:gap-10">
            <div aria-live="polite" className="min-h-[4.5rem] md:min-h-0">
              <p className="text-h3 font-medium">{slide.title}</p>
              <p className="mt-1 text-body text-soft">{slide.desc}</p>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 md:justify-end">
              <ul className="flex flex-wrap gap-2" aria-label="Services">
                {slide.tags.map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-1">
                <span className="mr-2 text-meta tabular-nums text-mute">
                  {index + 1} / {count}
                </span>
                <button type="button" onClick={() => go(-1)} aria-label="Previous project" className="grid h-10 w-10 place-items-center border border-line transition-colors hover:border-navy hover:text-navy">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg>
                </button>
                <button type="button" onClick={() => go(1)} aria-label="Next project" className="grid h-10 w-10 place-items-center border border-line transition-colors hover:border-navy hover:text-navy">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
