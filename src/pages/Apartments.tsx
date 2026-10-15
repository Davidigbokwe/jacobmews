import { ApartmentCards, ContactBanner } from "@/components/estate-sections";
export default function Apartments() {
  return (
    <main>
      <div className="content-wrap page-main">
        <header className="page-heading">
          <div className="eyebrow">Our residences</div>
          <h1>Room for your kind of life.</h1>
          <p className="section-description">
            Jacob Mews is a community of 90 apartments clustered into blocks of flats, condos and
            terraces.
          </p>
        </header>
        <ApartmentCards />
      </div>
      <ContactBanner />
    </main>
  );
}
