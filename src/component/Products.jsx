import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h2>Products</h2>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map(p => (
          <div key={p.id} style={{ width: 200, margin: 10 }}>
            <img src={p.image} alt="" width="100%" />
            <h4>{p.title}</h4>
            <p>${p.price}</p>
            <p>{p.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
