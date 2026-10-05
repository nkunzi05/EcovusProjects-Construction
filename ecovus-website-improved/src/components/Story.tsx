import { photo } from "../lib/data";

const reasons = [
  { title: "Built around you", desc: "Creativity and function are worked out for each client, not copied from the last job." },
  { title: "A range of styles", desc: "Contemporary, transitional or traditional, designed and built properly." },
  { title: "Safe sites", desc: "Site orientation for everyone, weekly inspections and only trained, certified crews." },
];

export default function Story() {
  const p = photo("team-roof-slab");
  return (
    <section id="about" className="section border-t border-line">
      <div className="wrap grid gap-10 md:grid-cols-2 lg:gap-16">
        <figure>
          <img
            src={p.src}
            srcSet={p.srcSet}
            sizes="(min-width: 768px) 45vw, 100vw"
            alt="Ecovus crew working on a roof slab, with the branded Ecovus pickup parked in front"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover md:sticky md:top-[calc(var(--header-h)+2rem)]"
          />
          <figcaption className="mt-3 text-meta text-mute">Our crew on a roof slab, Harare.</figcaption>
        </figure>

        <div>
          <h2 className="text-h2 font-normal tracking-[-0.015em]">About Ecovus</h2>
          <p className="measure mt-6 text-lead text-ink">
            Ecovus started in Harare in 2014 as a small team with one rule: finish what we say,
            on the day we say.
          </p>
          <p className="measure mt-4 text-body text-soft">
            We have since grown into a full design-and-build and planning practice, working with
            homeowners, private developers, institutions and government. A lot of that work is
            unglamorous (filings, surveys, approvals, inspections) and it is the difference between
            a project that stalls and one that moves.
          </p>

          <h3 className="mt-12 text-h3 font-medium">Why clients choose us</h3>
          <dl className="mt-4 border-b border-line">
            {reasons.map((r) => (
              <div key={r.title} className="grid gap-1 border-t border-line py-4 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-6">
                <dt className="text-body font-medium">{r.title}</dt>
                <dd className="text-body text-soft">{r.desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
