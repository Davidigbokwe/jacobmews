import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const links = [
  { label: "The estate", to: "/" },
  { label: "Gallery", to: "/gallery" },
  { label: "Apartments", to: "/apartments" },
  { label: "Services", to: "/services" },
];
export function Wordmark() {
  return (
    <Link to="/" className="wordmark" aria-label="Jacob Mews Estate home">
      <span className="wordmark-main">JACOB MEWS</span>
      <span className="wordmark-sub">ESTATE · LAGOS</span>
    </Link>
  );
}
export function EstateHeader() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);
  return (
    <header className="site-header">
      <Wordmark />
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map((link) => (
          <NavLink
            end
            key={link.to}
            to={link.to}
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            {link.label}
          </NavLink>
        ))}
        <Button asChild size="estate">
          <Link to="/contact">
            Get in touch <ArrowUpRight />
          </Link>
        </Button>
      </nav>
      <Button
        ref={menuButton}
        className="mobile-menu-button"
        variant="ghost"
        size="icon"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
      >
        {open ? <X /> : <Menu />}
      </Button>
      {open && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          {links.map((link) => (
            <NavLink
              end
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)}>
            Get in touch <ArrowUpRight size={14} />
          </Link>
        </nav>
      )}
    </header>
  );
}
export function EstateFooter() {
  return (
    <footer className="site-footer">
      <div className="content-wrap">
        <div className="footer-top">
          <Wordmark />
          <nav className="footer-links" aria-label="Footer navigation">
            <Link to="/gallery">Gallery</Link>
            <Link to="/apartments">Apartments</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Get in touch</Link>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} The Jacob Mews Residents Association</span>
          <span>Yaba, Lagos. A community since 2013.</span>
        </div>
      </div>
    </footer>
  );
}
