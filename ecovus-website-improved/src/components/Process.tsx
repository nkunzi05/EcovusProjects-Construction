import { process } from "../lib/data";

export default function Process() {
  return (
    <section id="process" className="section bg-mist">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-h2 font-normal tracking-[-0.015em]">How we work</h2>
          <p className="max-w-[40ch] text-body text-soft">
            Five stages, one accountable team. You always know what is happening, what it costs
            and what comes next.
          </p>
        </div>
        <ol className="mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-2 md:mt-12 lg:grid-cols-5">
          {process.map((s, i) => (
            <li key={s.name} className="border-t-2 border-navy pt-4">
              <span className="text-meta tabular-nums text-ochre-text">Stage {i + 1}</span>
              <h3 className="mt-1 text-h3 font-medium">{s.name}</h3>
              <p className="mt-2 text-body text-soft">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
