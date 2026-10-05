import { useState, type FormEvent } from "react";
import { contacts, services } from "../lib/data";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = [
      `Name: ${d.get("name")}`,
      `Phone: ${d.get("phone") || "-"}`,
      `Service: ${d.get("service")}`,
      "",
      String(d.get("message")),
    ].join("\n");
    const subject = `Project enquiry: ${d.get("service")}`;
    window.location.href = `mailto:${contacts.email}?cc=${contacts.emailAlt}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section id="contact" className="section">
      <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-20">
        <div>
          <h2 className="text-h2 font-normal tracking-[-0.015em]">Start a project</h2>
          <p className="mt-5 max-w-[42ch] text-body text-soft">
            Tell us about the land, the building, or the plan stuck in a drawer. We reply to every
            enquiry within one working day.
          </p>

          <dl className="mt-10 grid gap-x-8 gap-y-6 xs:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <div>
              <dt className="text-meta text-mute">Call or WhatsApp</dt>
              <dd className="mt-1 space-y-0.5 text-body">
                {contacts.phones.map((p) => (
                  <a key={p.href} href={p.href} className="link block w-fit">
                    {p.label}
                  </a>
                ))}
                <a href={contacts.whatsapp} target="_blank" rel="noopener noreferrer" className="link block w-fit text-navy">
                  Message us on WhatsApp
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-meta text-mute">Email</dt>
              <dd className="mt-1 space-y-0.5 text-body">
                <a href={`mailto:${contacts.email}`} className="link block w-fit break-all">{contacts.email}</a>
                <a href={`mailto:${contacts.emailAlt}`} className="link block w-fit break-all">{contacts.emailAlt}</a>
              </dd>
            </div>
            <div>
              <dt className="text-meta text-mute">Office</dt>
              <dd className="mt-1 text-body">
                <a href={contacts.mapsHref} target="_blank" rel="noopener noreferrer" className="link inline-block">
                  {contacts.address.map((l) => (
                    <span key={l} className="block">{l}</span>
                  ))}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-meta text-mute">Hours</dt>
              <dd className="mt-1 text-body text-soft">{contacts.hours}</dd>
            </div>
          </dl>
        </div>

        <div className="bg-mist p-[clamp(1.25rem,0.8rem+2vw,2.5rem)]">
          {sent ? (
            <div role="status">
              <p className="text-h3 font-medium">Your email app should now be open.</p>
              <p className="mt-3 text-body text-soft">
                Press send there to reach us. If nothing opened, email{" "}
                <a href={`mailto:${contacts.email}`} className="link">{contacts.email}</a> or call{" "}
                <a href={contacts.phones[0].href} className="link">{contacts.phones[0].label}</a>.
              </p>
              <button type="button" onClick={() => setSent(false)} className="link mt-6 text-body font-medium">
                Write another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-meta font-medium">Name</span>
                  <input required name="name" autoComplete="name" className="field" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-meta font-medium">
                    Phone <span className="font-normal text-mute">(optional)</span>
                  </span>
                  <input name="phone" type="tel" autoComplete="tel" className="field" placeholder="+263" />
                </label>
              </div>
              <label className="block">
                <span className="mb-1.5 block text-meta font-medium">What do you need?</span>
                <select required name="service" className="field" defaultValue="">
                  <option value="" disabled>Choose a service</option>
                  {services.map((s) => (
                    <option key={s.title}>{s.title}</option>
                  ))}
                  <option>Something else</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-1.5 block text-meta font-medium">About the project</span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="field resize-y"
                  placeholder="Location, size, timeline, budget. Anything helps."
                />
              </label>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                <button type="submit" className="btn btn-primary">
                  Send enquiry
                </button>
                <p className="text-meta text-mute">Opens your email app with these details filled in.</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
