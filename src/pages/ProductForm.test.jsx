import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProductForm from "./ProductForm";

// mock navigate
const mockedNavigate = jest.fn();

// mock useNavigate
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

// mock fetch
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({}),
    })
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

test("renders form inputs", () => {
  render(
    <MemoryRouter>
      <ProductForm />
    </MemoryRouter>
  );

  expect(screen.getByPlaceholderText("Type")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Price")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Description")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Origin")).toBeInTheDocument();
});

// ✅ TEST 2: form updates + submit POST
test("submits form and calls API", async () => {
  render(
    <MemoryRouter>
      <ProductForm />
    </MemoryRouter>
  );

  fireEvent.change(screen.getByPlaceholderText("Type"), {
    target: { value: "Latte" },
  });

  fireEvent.change(screen.getByPlaceholderText("Price"), {
    target: { value: "300" },
  });

  fireEvent.change(screen.getByPlaceholderText("Description"), {
    target: { value: "Smooth coffee" },
  });

  fireEvent.change(screen.getByPlaceholderText("Origin"), {
    target: { value: "Kenya" },
  });

  fireEvent.click(screen.getByText("Add Product"));

  await waitFor(() => {
    expect(global.fetch).toHaveBeenCalledWith(
      "http://localhost:4000/products",
      expect.objectContaining({
        method: "POST",
      })
    );

    expect(mockedNavigate).toHaveBeenCalledWith("/dashboard");
  });
});