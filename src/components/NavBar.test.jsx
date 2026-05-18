import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "./NavBar";

// helper render
const renderNav = () =>
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );

test("renders all navigation links", () => {
  renderNav();

  expect(screen.getByText("Home")).toBeInTheDocument();
  expect(screen.getByText("Add Coffee")).toBeInTheDocument();
  expect(screen.getByText("Dashboard")).toBeInTheDocument();
});

test("links have correct routes", () => {
  renderNav();

  expect(screen.getByText("Home").closest("a")).toHaveAttribute("href", "/");
  expect(screen.getByText("Add Coffee").closest("a")).toHaveAttribute("href", "/add-product");
  expect(screen.getByText("Dashboard").closest("a")).toHaveAttribute("href", "/dashboard");
});

test("navbar has correct structure", () => {
  renderNav();

  const nav = screen.getByRole("navigation");
  expect(nav).toBeInTheDocument();
});