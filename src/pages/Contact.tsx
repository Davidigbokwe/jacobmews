import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
export default function Contact() {
  const [searchParams] = useSearchParams();
  const requestedApartment = searchParams.get("apartment");
  const apartment = ["Flat", "Condo", "Terrace"].includes(requestedApartment ?? "")
    ? requestedApartment
    : "Flat";
  const [status, setStatus] = useState(false);
  return (
    <main className="content-wrap page-main">
      <div className="contact-layout">
        <div className="contact-details">
          <div className="eyebrow">Get in touch</div>
          <h1>
            Your next chapter
            <br />
            starts here.
          </h1>
          <p>Leave us a message and we’ll get back to you within 48 hours.</p>
          <div className="contact-location">
            <MapPin size={20} />
            <div>
              <strong>Jacob Mews Estate</strong>
              <p>
                Alagomeji, Yaba
                <br />
                Lagos Mainland, Nigeria
              </p>
            </div>
          </div>
        </div>
        <form
          className="enquiry-form"
          onSubmit={(event) => {
            event.preventDefault();
            setStatus(true);
          }}
        >
          <div className="form-field form-wide">
            <label htmlFor="enquiry">Enquiry type</label>
            <select id="enquiry" name="enquiryType">
              <option>Rent or lease</option>
              <option>Sales &amp; Others</option>
            </select>
          </div>
          <div className="form-field form-wide">
            <label htmlFor="name">Full name *</label>
            <Input
              id="name"
              name="name"
              autoComplete="name"
              required
              minLength={2}
              maxLength={120}
              placeholder="Your full name"
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email *</label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              placeholder="you@example.com"
            />
          </div>
          <div className="form-field">
            <label htmlFor="phone">Phone *</label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              minLength={7}
              maxLength={30}
              placeholder="+234"
            />
          </div>
          <div className="form-field form-wide">
            <label htmlFor="apartment">Apartment type</label>
            <select id="apartment" name="apartment" defaultValue={apartment ?? "Flat"}>
              <option>Flat</option>
              <option>Condo</option>
              <option>Terrace</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="profession">Profession</label>
            <Input
              id="profession"
              name="profession"
              maxLength={120}
              placeholder="Your profession"
            />
          </div>
          <div className="form-field">
            <label htmlFor="company">Company</label>
            <Input
              id="company"
              name="company"
              autoComplete="organization"
              maxLength={120}
              placeholder="Your company"
            />
          </div>
          <div className="form-field form-wide">
            <label htmlFor="note">Enquiry note *</label>
            <Textarea
              id="note"
              name="note"
              required
              maxLength={2000}
              placeholder="Tell us what you’re looking for…"
            />
          </div>
          <p className="form-note form-wide">
            Preview only. This form does not send or save your information.
          </p>
          {status && (
            <div className="form-status form-wide" role="status">
              Your enquiry is ready. Sending is not connected in this frontend preview; no message
              has been sent.
            </div>
          )}
          <Button type="submit" size="estate">
            Preview enquiry <ArrowUpRight />
          </Button>
        </form>
      </div>
    </main>
  );
}
