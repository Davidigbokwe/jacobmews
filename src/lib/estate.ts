import {
  Zap,
  Users,
  Trees,
  Waves,
  CalendarDays,
  Dumbbell,
  ShieldCheck,
  Lamp,
  Tv,
  Wifi,
  Trash2,
  ScanEye,
} from "lucide-react";
export const photos = [
  {
    src: "/images/estate-front.jpeg",
    caption: "A neighbourhood to call home",
    alt: "Residential apartment blocks and the paved street inside Jacob Mews Estate",
  },
  {
    src: "/images/estate-street.jpeg",
    caption: "A warm welcome, every day",
    alt: "Jacob Mews Estate entrance with palm trees and gated apartment blocks",
  },
  {
    src: "/images/estate-hero.jpg",
    caption: "Thoughtfully built for family life",
    alt: "Balconies and red roofs of the Jacob Mews apartment buildings",
  },
] as const;
export const apartments = [
  { name: "Flats", type: "Flat", bedrooms: 3, parking: 2, image: "/images/estate-front.jpeg" },
  { name: "Condos", type: "Condo", bedrooms: 3, parking: 2, image: "/images/estate-hero.jpg" },
  {
    name: "Terraces",
    type: "Terrace",
    bedrooms: 4,
    parking: 3,
    image: "/images/estate-street.jpeg",
  },
] as const;
export const services = [
  {
    name: "24-hour electricity",
    description: "Power is consistently supplied by an independent contractor.",
    icon: Zap,
  },
  {
    name: "Serviced facility",
    description: "A dedicated facility manager and full-time staff maintain the estate.",
    icon: Users,
  },
  {
    name: "Playground & turf",
    description: "A soccer turf and dedicated playground area for children.",
    icon: Trees,
  },
  {
    name: "Swimming pools",
    description: "Two heated swimming pools: one for adults and a separate pool for children.",
    icon: Waves,
  },
  {
    name: "Indoor hall",
    description: "A 100-seater indoor hall for residents to rent for personal events.",
    icon: CalendarDays,
  },
  {
    name: "Gym",
    description: "A subscription-based gym for residents to keep fit.",
    icon: Dumbbell,
  },
  {
    name: "Security",
    description: "A dedicated security committee works to keep the estate safe for all.",
    icon: ShieldCheck,
  },
  {
    name: "Street lighting",
    description: "Fully-lit streets throughout the estate at night.",
    icon: Lamp,
  },
  {
    name: "DSTV",
    description: "Centrally available DSTV connection for all apartments.",
    icon: Tv,
  },
  {
    name: "Fast internet",
    description: "Fiber connection of up to 50Mbps accessible to every apartment.",
    icon: Wifi,
  },
  {
    name: "Waste management",
    description: "Properly organized and regular refuse clearing.",
    icon: Trash2,
  },
  { name: "CCTV", description: "Full coverage of public spaces within the estate.", icon: ScanEye },
];
