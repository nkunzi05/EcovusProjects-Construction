import { contacts, navLinks } from "../lib/data";
import { Logo } from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-mist">
      <div className="wrap py-[clamp(3rem,2.4rem+2.5vw,4.5rem)]">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_0.8fr]">
          <div>
            <a href="#top" aria-label="Ecovus Projects & Construction, back to top" className="inline-block">
              <Logo className="h-auto w-[11.5rem] md:w-[13rem]" />
            </a>
            <p className="mt-5 max-w-[26ch] text-body text-soft">A reliable partner in the built environment.</p>
          </div>

          <div>
            <p className="text-meta font-medium text-ink">Office</p>
            <a href={contacts.mapsHref} target="_blank" rel="noopener noreferrer" className="link mt-3 inline-block text-body text-soft">
              {contacts.address.map((l) => (
                <span key={l} className="block">{l}</span>
              ))}
            </a>
          </div>

          <div>
            <p className="text-meta font-medium text-ink">Contact</p>
            <ul className="mt-3 space-y-1 text-body text-soft">
              {contacts.phones.map((p) => (
                <li key={p.href}><a href={p.href} className="link">{p.label}</a></li>
              ))}
              <li><a href={`mailto:${contacts.email}`} className="link break-all">{contacts.email}</a></li>
            </ul>
          </div>

          <div>
            <p className="text-meta font-medium text-ink">Menu</p>
            <ul className="mt-3 space-y-1 text-body text-soft">
              {navLinks.map((l) => (
                <li key={l.href}><a href={l.href} className="link">{l.label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-between gap-3 border-t border-line pt-6 text-meta text-mute">
          <p>© {new Date().getFullYear()} Ecovus Projects &amp; Construction</p>
          <p>Harare, Zimbabwe</p>
        </div>
      </div>
    </footer>
  );
}
