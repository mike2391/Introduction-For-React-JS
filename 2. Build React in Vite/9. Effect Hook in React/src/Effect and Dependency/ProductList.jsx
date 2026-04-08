import { useEffect, useState } from "react";
import Product from "./Product";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);

  // This is an empty dependency
  // Empty Dependency will make useEffect run only once, no matter how many times the component re-renders or the state value get changes.
  // Open the console and click the button (to trigger the useEffect), you will see this effect will run only once.
  useEffect(() => {
    console.info("this is empty dependency");
  }, []);

  useEffect(() => {
    if (load) {
      fetch("/product.json")
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }

    return () => {
      console.info("cleanup");
    };

    // [load] is a dependency. we use state as a dependency
    // We don't need to set some flags to stop the infinite loop.
    // dependencies will let useEffect run again only when state value is changed, and stop useEffect when there is no change in state value.
  }, [load]);

  return (
    <>
      <h1>Product List</h1>
      <button onClick={() => setLoad(true)}>Load</button>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
}