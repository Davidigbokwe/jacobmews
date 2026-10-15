import { useEffect } from "react";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { EstateHeader, EstateFooter } from "@/components/estate-shell";
import Home from "@/pages/Home";
import Apartments from "@/pages/Apartments";
import Gallery from "@/pages/Gallery";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
const originalSections: Record<string, string> = {
  "#gallery": "/gallery",
  "#apartments": "/apartments",
  "#services": "/services",
  "#js-form": "/contact",
};
const metadata: Record<string, [string, string]> = {
  "/": [
    "A family estate in mainland Lagos",
    "Founded in 2013, Jacob Mews is a community of 90 apartments in Yaba, Lagos. Discover our flats, condos, terraces and serviced family estate.",
  ],
  "/apartments": [
    "Our apartments",
    "Explore 3-bedroom flats and condos and 4-bedroom terraces at Jacob Mews Estate. All bedrooms ensuite, with self-contained BQ and parking.",
  ],
  "/gallery": [
    "The estate gallery",
    "Explore original photographs of Jacob Mews Estate, its residential buildings, streets and entrance in Yaba, Lagos.",
  ],
  "/services": [
    "Estate services",
    "Explore all twelve estate services, including electricity, security, swimming pools, playground, gym and fiber internet.",
  ],
  "/contact": [
    "Get in touch",
    "Enquire about renting or leasing at Jacob Mews Estate in Yaba, Lagos.",
  ],
};
export default function App() {
  const { pathname, hash } = useLocation();
  const originalPage = pathname === "/" ? originalSections[hash] : undefined;
  useEffect(() => {
    const [title, description] = metadata[pathname.replace(/\/$/, "") || "/"] ?? [
      "Page not found",
      "Find your way back to Jacob Mews Estate.",
    ];
    document.title = `${title} | Jacob Mews Estate`;
    for (const selector of ['meta[name="description"]', 'meta[property="og:description"]'])
      document.querySelector(selector)?.setAttribute("content", description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", document.title);
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  if (originalPage) return <Navigate to={originalPage} replace />;
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <EstateHeader />
      <div id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apartments" element={<Apartments />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <main className="content-wrap page-main">
                <header className="page-heading">
                  <div className="eyebrow">404</div>
                  <h1>Page not found.</h1>
                  <p className="section-description">
                    The page you’re looking for could not be found.
                  </p>
                </header>
                <Link className="text-link" to="/">
                  Back to the estate
                </Link>
              </main>
            }
          />
        </Routes>
      </div>
      <EstateFooter />
    </>
  );
}
