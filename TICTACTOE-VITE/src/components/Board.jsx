import { useState } from 'react';
import Square from './Square';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const handleSquareClick = clickedPosition => {
    setSquares(curentSquares => {
      return curentSquares.map((squaresValue, position) => {
        console.log(clickedPosition, position);
        if (clickedPosition === position) {
          return 'X';
        }
        return squaresValue;
      });
    });
  };
  const renderSquare = position => {
    return (
      <Square
        value={squares[position]}
        onClick={() => handleSquareClick(position)}
      />
    );
  };

  return (
    <>
      <div className="board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </>
  );
}

export default App;
