import { useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [view, setView] = useState("list");

  return (
    <div className="app-container">
      <h1 className="title">Product Management App</h1>

      <ProductForm products={products} setProducts={setProducts} />

      <div className="top-bar">
        <input
          type="text"
          placeholder="Search product by name..."
          onChange={(e) => {}}
        />

        <div className="view-buttons">
          <button
            className={view === "list" ? "active" : ""}
            onClick={() => setView("list")}
          >
            List View
          </button>
          <button
            className={view === "card" ? "active" : ""}
            onClick={() => setView("card")}
          >
            Card View
          </button>
        </div>
      </div>

      <ProductList
        products={products}
        setProducts={setProducts}
        view={view}
      />
    </div>
  );
}

export default App;
