import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import Dashboard from "./Dashboard";

const mockProducts = [
  { id: 1, type: "Latte", price: 200, description: "milk coffee", origin: "Kenya" }
];

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockProducts),
    })
  );
});

test("renders dashboard products", async () => {
  render(
    <ProductContext.Provider value={{ products: mockProducts, setProducts: jest.fn() }}>
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    </ProductContext.Provider>
  );

  expect(await screen.findByDisplayValue("Latte")).toBeInTheDocument();
});

test("updates product input", async () => {
  const setProducts = jest.fn();

  render(
    <ProductContext.Provider value={{ products: mockProducts, setProducts }}>
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    </ProductContext.Provider>
  );

  const input = await screen.findByDisplayValue("Latte");

  fireEvent.change(input, { target: { value: "Espresso" } });

  expect(setProducts).toHaveBeenCalled();
});