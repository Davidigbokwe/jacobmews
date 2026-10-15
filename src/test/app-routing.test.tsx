import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it } from "vitest";
import App from "@/App";

afterEach(cleanup);
function renderPage(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}
describe("React pages and navigation", () => {
  it.each([
    ["/", "Jacob Mews."],
    ["/apartments", "Room for your kind of life."],
    ["/gallery", "A little closer to home."],
    ["/services", "Life, with less to worry about."],
    ["/contact", "Your next chapter"],
    ["/missing", "Page not found."],
  ])("renders %s directly", (path, heading) => {
    renderPage(path);
    expect(screen.getByRole("heading", { level: 1 }).textContent).toContain(heading);
  });
  it("carries the selected apartment through to the enquiry page", () => {
    renderPage("/apartments");
    fireEvent.click(screen.getAllByRole("link", { name: /Rent or lease/i })[2]!);
    expect(screen.getByLabelText("Apartment type")).toHaveValue("Terrace");
  });
  it.each([
    ["/#gallery", "A little closer to home."],
    ["/#apartments", "Room for your kind of life."],
    ["/#services", "Life, with less to worry about."],
    ["/#js-form", "Your next chapter"],
  ])("keeps the original site's %s links working", (path, heading) => {
    renderPage(path);
    expect(screen.getByRole("heading", { level: 1 }).textContent).toContain(heading);
  });
  it("shows all twelve original estate services", () => {
    renderPage("/services");
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(12);
    expect(screen.getByText(/50Mbps/)).toBeInTheDocument();
  });
  it("closes the mobile menu after navigation and supports Escape", () => {
    renderPage("/");
    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
    const navigation = screen.getByRole("navigation", { name: "Mobile navigation" });
    fireEvent.click(within(navigation).getByRole("link", { name: "Gallery" }));
    expect(screen.queryByRole("navigation", { name: "Mobile navigation" })).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.getByRole("button", { name: "Open menu" })).toHaveFocus();
  });
  it("previews an enquiry without claiming it was sent", () => {
    renderPage("/contact?apartment=invalid");
    expect(screen.getByLabelText("Apartment type")).toHaveValue("Flat");
    fireEvent.submit(screen.getByRole("button", { name: /Preview enquiry/i }).closest("form")!);
    expect(screen.getByRole("status")).toHaveTextContent("no message has been sent");
  });
  it("wraps gallery controls in both directions", () => {
    renderPage("/gallery");
    fireEvent.click(screen.getByRole("button", { name: "Previous photograph" }));
    expect(screen.getByRole("button", { name: "View photograph 3" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    fireEvent.click(screen.getByRole("button", { name: "Next photograph" }));
    expect(screen.getByRole("button", { name: "View photograph 1" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  });
});
