import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { photos } from "@/lib/estate";
import { ContactBanner } from "@/components/estate-sections";
export default function Gallery() {
  const [index, setIndex] = useState(0);
  const photo = photos[index] ?? photos[0];
  return (
    <main>
      <div className="content-wrap page-main">
        <header className="page-heading">
          <div className="eyebrow">Life at Jacob Mews</div>
          <h1>A little closer to home.</h1>
        </header>
        <div className="gallery-stage">
          <img src={photo.src} alt={photo.alt} />
        </div>
        <div className="gallery-meta">
          <span>{photo.caption}</span>
          <div className="gallery-controls">
            <span>0{index + 1} / 03</span>
            <Button
              variant="outline"
              size="icon"
              aria-label="Previous photograph"
              onClick={() => setIndex((index + photos.length - 1) % photos.length)}
            >
              <ArrowLeft />
            </Button>
            <Button
              variant="outline"
              size="icon"
              aria-label="Next photograph"
              onClick={() => setIndex((index + 1) % photos.length)}
            >
              <ArrowRight />
            </Button>
          </div>
        </div>
        <div className="gallery-thumbnails">
          {photos.map((item, i) => (
            <Button
              key={item.src}
              variant="ghost"
              className={`gallery-thumbnail ${i === index ? "selected" : ""}`}
              aria-label={`View photograph ${i + 1}`}
              aria-pressed={i === index}
              onClick={() => setIndex(i)}
            >
              <img src={item.src} alt={item.alt} />
            </Button>
          ))}
        </div>
      </div>
      <ContactBanner />
    </main>
  );
}
