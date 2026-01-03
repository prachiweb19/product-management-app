import { useState } from "react";

function ProductForm({ products, setProducts }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    description: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.price || !form.category) {
      setError("Name, Price and Category are required");
      return;
    }

    setProducts([...products, form]);
    setForm({
      name: "",
      price: "",
      category: "",
      stock: "",
      description: "",
    });
    setError("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add Product</h2>

      <input placeholder="Name*" value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })} />

      <input type="number" placeholder="Price*"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })} />

      <input placeholder="Category*"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })} />

      <input type="number" placeholder="Stock"
        value={form.stock}
        onChange={(e) => setForm({ ...form, stock: e.target.value })} />

      <textarea placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })} />

      {error && <p className="error">{error}</p>}

      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;
