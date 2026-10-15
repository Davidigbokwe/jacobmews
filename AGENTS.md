Keep published Git history intact and the deployed branch in a working state.

## Application structure
- Keep public estate pages in src/pages with React Router and shared navigation in the root shell so all pages have consistent navigation.
- Keep estate facts and image references in src/lib/estate.ts and shared content displays in src/components/estate-sections.tsx to prevent conflicting apartment and service information.
- Enquiry forms are presentation-only and must never send or persist visitor data until explicitly requested.
- Define the visual system in src/styles.css and use semantic component variants to keep the estate design consistent.
