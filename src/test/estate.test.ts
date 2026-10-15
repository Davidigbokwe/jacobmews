import { describe, expect, it } from "vitest";
import { apartments } from "@/lib/estate";

describe("Original apartment specifications", () => {
  it("keeps flats at 3 bedrooms and 2 parking spaces", () => {
    expect(apartments.find((apartment) => apartment.type === "Flat")).toMatchObject({
      bedrooms: 3,
      parking: 2,
    });
  });
  it("keeps condos at 3 bedrooms and 2 parking spaces", () => {
    expect(apartments.find((apartment) => apartment.type === "Condo")).toMatchObject({
      bedrooms: 3,
      parking: 2,
    });
  });
  it("keeps terraces at 4 bedrooms and 3 parking spaces", () => {
    expect(apartments.find((apartment) => apartment.type === "Terrace")).toMatchObject({
      bedrooms: 4,
      parking: 3,
    });
  });
});
