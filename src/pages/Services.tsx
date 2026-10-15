import { ServicesGrid, ContactBanner } from "@/components/estate-sections";
export default function Services() {
  return (
    <main>
      <div className="content-wrap page-main">
        <header className="page-heading">
          <div className="eyebrow">Everyday, taken care of</div>
          <h1>Life, with less to worry about.</h1>
          <p className="section-description">
            Jacob Mews is a serviced estate maintained by an association of residents.
          </p>
        </header>
        <ServicesGrid />
      </div>
      <ContactBanner />
    </main>
  );
}
