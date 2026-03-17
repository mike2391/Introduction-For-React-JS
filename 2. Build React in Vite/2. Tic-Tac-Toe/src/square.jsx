function SquareElement({ value, onSquareClick }) {
  // Some attribute(s) name will be change if you use it in JSX(React). ex: class -> className
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default SquareElement;