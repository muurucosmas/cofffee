import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductForm() {
  const [formData, setFormData] = useState({
    type: "",
    price: "",
    description: "",
    origin: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      ...formData,
      price: Number(formData.price),
    };

    fetch("http://localhost:4000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then(() => {
        navigate("/dashboard");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add New Coffee Product</h1>

      <input
        name="type"
        placeholder="Type"
        value={formData.type}
        onChange={handleChange}
      />

      <input
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
      />

      <input
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />

      <input
        name="origin"
        placeholder="Origin"
        value={formData.origin}
        onChange={handleChange}
      />

      <button type="submit">Add Product</button>
    </form>
  );
}