export default function Product({ product }) {
  return (
    <div>
      <h1>
        {product.id} : {product.name}
      </h1>
      <p>price: {product.price}</p>
    </div>
  );
}
