import { Link } from "react-router-dom";
import { ArrowUpRight, BedDouble, CarFront, House, Check } from "lucide-react";
import { apartments, services } from "@/lib/estate";
import { Button } from "@/components/ui/button";
export function ApartmentCards() {
  return (
    <div className="apartment-grid">
      {apartments.map((apartment, index) => (
        <article className="apartment-card" key={apartment.name}>
          <img
            src={apartment.image}
            alt={`Jacob Mews Estate residential buildings — ${apartment.name}`}
            loading="lazy"
          />
          <div className="apartment-body">
            <div className="apartment-label">
              <h3>{apartment.name}</h3>
              <span className="apartment-number">0{index + 1} / RESIDENCES</span>
            </div>
            <ul className="apartment-features">
              <li>
                <BedDouble />
                {apartment.bedrooms} bedrooms, all ensuite
              </li>
              <li>
                <House />
                Self-contained BQ
              </li>
              <li>
                <CarFront />
                {apartment.parking} car parking spaces
              </li>
              <li>
                <Check />
                Flexible visitor parking
              </li>
            </ul>
            <Link to={`/contact?apartment=${apartment.type}`} className="apartment-action">
              Rent or lease <ArrowUpRight size={17} />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
export function ServicesGrid({ preview = false }: { preview?: boolean }) {
  return (
    <div className="services-grid">
      {(preview ? services.slice(0, 4) : services).map((service) => (
        <article className="service-item" key={service.name}>
          <service.icon className="service-icon" />
          <h3>{service.name}</h3>
          <p>{service.description}</p>
        </article>
      ))}
    </div>
  );
}
export function ContactBanner() {
  return (
    <section className="contact-banner">
      <div className="content-wrap contact-banner-inner">
        <div>
          <h2>Make yourself at home.</h2>
          <p>Leave us a message and we’ll get back to you within 48 hours.</p>
        </div>
        <Button asChild variant="inverse" size="estate">
          <Link to="/contact">
            Get in touch <ArrowUpRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}
