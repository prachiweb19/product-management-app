import { useEffect, useState } from "react";
import Pagination from "./Pagination";

function ProductList({ products, view }) {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(products);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFiltered(
        products.filter((p) =>
          p.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }, 500);

    return () => clearTimeout(timer);
  }, [search, products]);

  return (
    <>
      <input
        className="search"
        placeholder="Search product..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {view === "list" ? (
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p, i) => (
              <tr key={i}>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.category}</td>
                <td>{p.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="grid">
          {filtered.map((p, i) => (
            <div className="card" key={i}>
              <h3>{p.name}</h3>
              <p>Price: {p.price}</p>
              <p>Category: {p.category}</p>
              <p>Stock: {p.stock}</p>
            </div>
          ))}
        </div>
      )}

      <Pagination />
    </>
  );
}

export default ProductList;
