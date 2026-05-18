import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleDelete = () => {
    fetch(`http://localhost:4000/products/${id}`, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  if (!product) return <h1>Loading...</h1>;

  return (
    <div className="pt-20 p-4 flex flex-col gap-4">

      <h1>{product.type}</h1>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <p>{product.origin}</p>

    <button onClick={() => navigate(-1)}>
        Go Back
      </button>

      <button onClick={handleDelete}>
        Delete Product
      </button>

    </div>
  );
}