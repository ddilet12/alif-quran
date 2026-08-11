import { useEffect, useState } from "react";
import { Link, useLocation } from "@/lib/router-compat";
import { Menu, X, Phone } from "lucide-react";
import { PHONE_DISPLAY, TEL_HREF, WHATSAPP_URL } from "@/lib/contact";

const sectionLinks = [
  { label: "Курстар", href: "/#courses" },
  { label: "Форматтар", href: "/#formats" },
  { label: "Ұстаздар", href: "/#teachers" },
  { label: "Баға", href: "/#pricing" },
  { label: "Сұрақтар", href: "/#faq" },
];

const pageLinks = [
  { label: "Курстар каталогы", to: "/courses" },
  { label: "Ұстаздар", to: "/teachers" },
  { label: "Кабинет", to: "/dashboard" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On non-home routes, always show solid bar.
  const solid = scrolled || !isHome;

  const linkBase = solid
    ? "text-foreground hover:text-primary"
    : "text-primary-foreground/90 hover:text-primary-foreground";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid ? "bg-card/95 backdrop-blur-md shadow-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className={`font-bold text-lg sm:text-xl ${solid ? "text-primary" : "text-primary-foreground"}`}>
          ☪ Әліппе
        </Link>

        <div className="hidden lg:flex items-center gap-5">
          {isHome &&
            sectionLinks.map((l) => (
              <a key={l.href} href={l.href} className={`text-sm font-medium transition-colors ${linkBase}`}>
                {l.label}
              </a>
            ))}
          {pageLinks.map((l) => (
            <Link key={l.to} to={l.to} className={`text-sm font-medium transition-colors ${linkBase}`}>
              {l.label}
            </Link>
          ))}
          <a
            href={TEL_HREF}
            className={`hidden xl:inline-flex items-center gap-1.5 text-sm font-medium ${linkBase}`}
          >
            <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient text-accent-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Жазылу
          </a>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <X className={`w-6 h-6 ${solid ? "text-foreground" : "text-primary-foreground"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${solid ? "text-foreground" : "text-primary-foreground"}`} />
          )}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-card/98 backdrop-blur-md border-b border-border px-4 pb-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
          {isHome &&
            sectionLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-foreground hover:text-primary text-sm font-medium border-b border-border/50"
              >
                {l.label}
              </a>
            ))}
          {pageLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-foreground hover:text-primary text-sm font-medium border-b border-border/50"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={TEL_HREF}
            className="flex items-center gap-2 py-2.5 text-foreground text-sm font-medium border-b border-border/50"
          >
            <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3 gold-gradient text-accent-foreground px-5 py-3 rounded-lg text-sm font-semibold text-center"
          >
            📲 WhatsApp-қа жазу
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
