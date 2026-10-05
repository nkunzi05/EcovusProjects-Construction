import { services, trades } from "../lib/data";

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="wrap grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.9fr)] lg:gap-16">
        <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)] lg:self-start">
          <h2 className="text-h2 font-normal tracking-[-0.015em]">What we do</h2>
          <p className="mt-4 max-w-[36ch] text-body text-soft">
            Residential and commercial work, from a single extension to a planned town. Use one
            service or all of them.
          </p>
        </div>

        <div>
          <ul className="border-b border-line">
            {services.map((s) => (
              <li
                key={s.title}
                className="grid gap-1.5 border-t border-line py-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] md:gap-8 md:py-6"
              >
                <h3 className="text-h3 font-medium">{s.title}</h3>
                <p className="text-body text-soft">{s.desc}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <p className="text-meta text-mute">General construction work we also take on</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {trades.map((t) => (
                <li key={t} className="tag">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
