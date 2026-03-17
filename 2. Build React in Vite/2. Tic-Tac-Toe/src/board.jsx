import SquareElement from "./square";

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (squares[i] || checkWinner(squares)) return;

    const nextSquares = squares.slice();

    nextSquares[i] = xIsNext ? (nextSquares[i] = "X") : (nextSquares[i] = "O");

    onPlay(nextSquares);
  }

  const winner = checkWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div>{status}</div>
      <div className="board">
        {squares.map((square, index) => (
          // () => handleClick(index) is to make the function run manually
          // handleClick(0) -> this form will execute the function immediately (carefull! it might cause infinite loop)
          <SquareElement key={index} value={square} onSquareClick={() => handleClick(index)} />
        ))}
      </div>
    </>
  );
}

function checkWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return false;
}

export default Board;
