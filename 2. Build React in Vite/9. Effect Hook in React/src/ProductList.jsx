import { useEffect, useRef, useState } from "react";
import Product from "./Product";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current === false) {
      fetch("/product.json")
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .then(() => (loaded.current = true));
    }
  });

  return (
    <>
      <h1>Product List</h1>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  )
}

// 