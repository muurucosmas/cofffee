import { useEffect, useState, useRef, useId, useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export default function Dashboard() {
  const { products, setProducts } = useContext(ProductContext);
  const [saving, setSaving] = useState(false);

  const inputRef = useRef(null);
  const id = useId();

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [products]);

  const handleChange = (id, field, value) => {
    const updatedProduct = products.find((p) => p.id === id);
    const newProduct = { ...updatedProduct, [field]: value };

    setProducts((prev) =>
      prev.map((p) => (p.id === id ? newProduct : p))
    );

    setSaving(true);

    fetch(`http://localhost:4000/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    }).then(() => setSaving(false));
  };

  return (
    <div className="pt-20 p-4">
      <h1 className="text-center">Admin Dashboard</h1>

      {saving && <p>Saving changes...</p>}

      {products.map((product, index) => (
        <div key={product.id} className="border p-4 mb-4">

          <input
            ref={index === 0 ? inputRef : null}
            value={product.type}
            onChange={(e) =>
              handleChange(product.id, "type", e.target.value)
            }
          />

          <input
            value={product.price}
            onChange={(e) =>
              handleChange(product.id, "price", Number(e.target.value))
            }
          />

          <input
            value={product.description}
            onChange={(e) =>
              handleChange(product.id, "description", e.target.value)
            }
          />

          <input
            value={product.origin}
            onChange={(e) =>
              handleChange(product.id, "origin", e.target.value)
            }
          />

        </div>
      ))}
    </div>
  );
}