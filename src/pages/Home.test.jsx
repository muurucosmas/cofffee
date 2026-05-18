import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";

// ✅ mock fetch
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          { id: 1, type: "Latte", price: 300 },
          { id: 2, type: "Espresso", price: 200 },
        ]),
    })
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

// ✅ TEST 1: loads products
test("renders products", async () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  expect(await screen.findByText("Latte")).toBeInTheDocument();
  expect(screen.getByText("Espresso")).toBeInTheDocument();
});

// ✅ TEST 2: search works
test("filters products by search", async () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  const input = await screen.findByPlaceholderText("Search coffee...");

  fireEvent.change(input, { target: { value: "lat" } });

  expect(screen.getByText("Latte")).toBeInTheDocument();
  expect(screen.queryByText("Espresso")).toBeNull();
});

// ✅ TEST 3: links exist
test("renders product links", async () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  const item = await screen.findByText("Latte");
  expect(item.closest("a")).toHaveAttribute("href", "/product/1");
});