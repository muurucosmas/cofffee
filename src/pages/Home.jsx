import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filtered = products.filter((p) =>
    p.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="pt-20 p-4">

      {/* SEARCH */}
      <input
        placeholder="Search coffee..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 w-full mb-4  border-black"
      />

      {/* LIST */}
      <div className="grid gap-4">
        {filtered.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="border border-amber-700 p-4 rounded"
          >
            <h2>{product.type}</h2>
            <p>{product.price}</p>
          </Link>
        ))}
      </div>

    </main>
  );
}