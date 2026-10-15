import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ApartmentCards, ServicesGrid, ContactBanner } from "@/components/estate-sections";
import { photos, services } from "@/lib/estate";
const careNames = ["Security", "CCTV", "Street lighting", "Fast internet"] as const;
export default function Home() {
  return (
    <main>
      <section className="hero">
        <img src={photos[0].src} alt={photos[0].alt} className="hero-image" fetchPriority="high" />
        <div className="hero-content">
          <div className="eyebrow">A family estate in mainland Lagos</div>
          <h1>
            Jacob Mews.
            <br />
            <em>A place to belong.</em>
          </h1>
          <p className="hero-description">
            Founded in 2013, we’re a community of people working together to live well. Welcome to
            life in Yaba, Lagos.
          </p>
          <div className="hero-actions">
            <Button asChild variant="inverse" size="estate">
              <Link to="/apartments">
                Explore our homes <ArrowUpRight />
              </Link>
            </Button>
            <Button asChild variant="image" size="estate">
              <Link to="/gallery">
                View the estate <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>
        <div className="hero-bottom">
          <span className="location-tag">
            <MapPin size={13} /> Yaba · Lagos, Nigeria
          </span>
          <a href="#our-community" className="location-tag scroll-label">
            Discover Jacob Mews <ArrowDown size={15} />
          </a>
        </div>
      </section>
      <section className="intro-band" id="our-community">
        <div className="content-wrap intro-inner">
          <p className="intro-copy">
            More than a collection of homes.
            <br />A community built around living well.
          </p>
          <div className="stats">
            <div className="stat">
              <strong>2013</strong>
              <span>Our story began</span>
            </div>
            <div className="stat">
              <strong>90</strong>
              <span>Homes, one community</span>
            </div>
            <div className="stat">
              <strong>24/7</strong>
              <span>Serviced living</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section story-section" id="our-story">
        <div className="content-wrap story-inner">
          <figure className="story-figure">
            <img src={photos[2].src} alt={photos[2].alt} loading="lazy" />
            <figcaption className="photo-caption">
              <span>{photos[2].caption}</span>
              <span>03</span>
            </figcaption>
          </figure>
          <div className="story-copy">
            <div className="eyebrow">Our story</div>
            <h2>Built for family, kept by neighbours.</h2>
            <p className="section-description">
              Jacob Mews was founded in 2013 as a family estate in Alagomeji, Yaba, on the mainland
              of Lagos. Ninety apartments later, the idea is unchanged: homes looked after by the
              people who live in them, through an association of residents.
            </p>
          </div>
        </div>
      </section>
      <section className="section apartments-section">
        <div className="content-wrap">
          <div className="section-heading">
            <div>
              <div className="eyebrow">Our residences</div>
              <h2>Room for your kind of life.</h2>
              <p className="section-description">
                Jacob Mews is a community of 90 apartments clustered into blocks of flats, condos
                and terraces.
              </p>
            </div>
            <Link to="/apartments" className="text-link">
              Explore apartments <ArrowUpRight size={17} />
            </Link>
          </div>
          <ApartmentCards />
        </div>
      </section>
      <section className="section">
        <div className="content-wrap">
          <div className="section-heading">
            <div>
              <div className="eyebrow">Life at Jacob Mews</div>
              <h2>A little closer to home.</h2>
            </div>
            <Link to="/gallery" className="text-link">
              Discover the estate <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="gallery-preview">
            {[photos[1], photos[0]].map((photo, index) => (
              <figure key={photo.src}>
                <img src={photo.src} alt={photo.alt} loading="lazy" />
                <figcaption className="photo-caption">
                  <span>{photo.caption}</span>
                  <span>0{index + 1}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <section className="care-band">
        <div className="content-wrap">
          <div className="eyebrow">Day and night</div>
          <h2>Looked after, around the clock.</h2>
          <div className="care-grid">
            {careNames.map((name) => {
              const service = services.find((s) => s.name === name);
              if (!service) return null;
              const Icon = service.icon;
              return (
                <article className="care-item" key={name}>
                  <Icon />
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="content-wrap">
          <div className="section-heading">
            <div>
              <div className="eyebrow">Everyday, taken care of</div>
              <h2>Life, with less to worry about.</h2>
              <p className="section-description">
                Jacob Mews is a serviced estate maintained by an association of residents.
              </p>
            </div>
            <Link to="/services" className="text-link">
              All estate services <ArrowUpRight size={17} />
            </Link>
          </div>
          <ServicesGrid preview />
        </div>
      </section>
      <ContactBanner />
    </main>
  );
}
