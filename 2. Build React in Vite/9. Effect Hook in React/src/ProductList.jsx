import { useEffect, useRef, useState } from "react";
import Product from "./Product";

export default function ProductList() {
  // In React, components are expected to behave like pure functions.
  // This means they should only calculate UI from props and state,
  // without doing external actions such as fetching data.
  //
  // However, real applications often need to interact with the outside world,
  // for example loading data from a server, accessing DOM elements,
  // or running timers. These actions are called "side effects".
  //
  // React provides useEffect() to handle these side effects safely.
  // So instead of running fetch() directly during rendering,
  // we place it inside useEffect().
  //
  // In this example, useEffect() is used to fetch product data
  // after the component finishes rendering.

  const [products, setProducts] = useState([]);
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current === false) {
      fetch("/product.json")
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .then(() => (loaded.current = true));
    }

    // A cleanup function is a function returned from useEffect().
    //
    // It removes or stops side effects like event listeners,
    // timers, or subscriptions created by the effect.
    //
    // React runs cleanup before the effect runs again,
    // and also when the component unmounts.
    //
    // Cleanup is only needed if the effect creates something persistent.
    // Without cleanup, it may cause duplicated processes or memory leaks.

    // Effect runs → component updates → cleanup runs → effect runs again
    // OR
    // Effect runs → component unmounts → cleanup runs
    return () => {
      console.info("cleanup");
    };
  });

  return (
    <>
      <h1>Product List</h1>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
}


// DON'T WRITE useEffect LIKE THIS.
//
// If useEffect runs without a dependency array,
// it will execute after EVERY render.
//
// Inside this effect, setProducts() updates the state.
// Updating state triggers another render.
// Another render triggers useEffect again.
//
// This creates a loop: render → fetch → setState → render → fetch again.
//
// As a result, the component keeps fetching data repeatedly (infinite loop).

// export default function ProductList() {
//   const [products, setProducts] = useState([]);
//
//   useEffect(() => {
//       fetch("/product.json")
//         .then((response) => response.json())
//         .then((data) => setProducts(data))
//   });
//
//   return (
//     <>
//       <h1>Product List</h1>
//       {products.map((product) => (
//         <Product key={product.id} product={product} />
//       ))}
//     </>
//   )
// }
