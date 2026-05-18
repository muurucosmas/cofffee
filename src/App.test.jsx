import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

// ✅ TEST 1: Navbar renders
test("renders navbar links", () => {
  render(<App />);

  expect(screen.getByText("Home")).toBeInTheDocument();
  expect(screen.getByText("Add Coffee")).toBeInTheDocument();
  expect(screen.getByText("Dashboard")).toBeInTheDocument();
});

// ✅ TEST 2: Home route works
test("loads Home page", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/BrewVerse/i)).toBeInTheDocument();
});

// ✅ TEST 3: Dashboard route works
test("loads Dashboard page", () => {
  render(
    <MemoryRouter initialEntries={["/dashboard"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/Admin Dashboard/i)).toBeInTheDocument();
});

// ✅ TEST 4: Error route works
test("shows error page on wrong route", () => {
  render(
    <MemoryRouter initialEntries={["/wrong"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/error/i)).toBeInTheDocument();
});