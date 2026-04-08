import { useEffect, useState } from "react";
import Product from "./Product";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);

  // You cant use async function in useEffect directly like -> " useEffect(async () => { })"
  // You have to create a function and call it inside useEffect
  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch("/product.json");
      const data = await response.json();
      setProducts(data);
    }

    console.log("load products");
    if (load) {
      fetchProduct();
    }
  }, [load]);

  return (
    <>
      <h1>Product Lissst</h1>
      <button onClick={() => setLoad(true)}>Load</button>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
}
