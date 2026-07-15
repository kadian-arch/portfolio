import { useState, useEffect } from "react";
import { Shield, Menu, X } from "lucide-react";

const LINKS = [
  { label: "About",    href: "#about" },
  { label: "Work",     href: "#work" },
  { label: "Skills",   href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Writing",  href: "#writing" },
  { label: "Contact",  href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-base/80 backdrop-blur-xl border-b border-edge" : "bg-transparent"
      }`}
    >
      <nav className="container-x flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2 font-black tracking-tight">
          <Shield size={18} className="text-accent" />
          <span className="text-ink">Donalsien</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-semibold text-muted hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary !py-2 !px-4">Get in touch</a>
        </div>

        <button
          className="md:hidden text-ink"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-base/95 backdrop-blur-xl border-b border-edge">
          <div className="container-x py-4 flex flex-col gap-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-muted hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
