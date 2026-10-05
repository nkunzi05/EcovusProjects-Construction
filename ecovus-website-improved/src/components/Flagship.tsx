import { photo } from "../lib/data";

export default function Flagship() {
  const p = photo("plans-on-site");
  return (
    <section className="bg-mist">
      <div className="wrap section grid items-center gap-10 md:grid-cols-2 lg:gap-16">
        <figure className="order-last md:order-first">
          <img
            src={p.src}
            srcSet={p.srcSet}
            sizes="(min-width: 768px) 45vw, 100vw"
            alt="Printed layout plans laid out on the ground for review on site"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover lg:aspect-[5/6]"
          />
          <figcaption className="mt-3 text-meta text-mute">Plans laid out for review on site.</figcaption>
        </figure>

        <div>
          <p className="text-meta font-medium text-ochre-text">Recent highlight</p>
          <h2 className="mt-3 text-h2 font-normal tracking-[-0.015em]">The Karoi Master Plan</h2>
          <p className="measure mt-6 text-body text-soft">
            Ecovus led the master plan for Karoi&apos;s next phase of growth: land use, movement,
            services and phasing for the whole town, worked out through a multi-stakeholder
            process.
          </p>
          <p className="measure mt-4 text-body text-soft">
            The plan was adopted by the Karoi Town Council and handed over for approval by the
            Minister, developed with the DDC, the Department of Spatial Planning and Development
            and the government ministries involved.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            <li className="tag bg-paper">Town planning</li>
            <li className="tag bg-paper">Master plan</li>
            <li className="tag bg-paper">Public sector</li>
          </ul>
          <a href="#contact" className="link mt-8 inline-block text-body font-medium">
            Ask us about planning work
          </a>
        </div>
      </div>
    </section>
  );
}
