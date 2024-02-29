import { useState } from 'react';
import './style.scss';
import Board from './components/Board';
import { calculateWinner } from './winner';

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);
  const nextPlayer = isXNext ? 'X' : 'O';
  const winner = calculateWinner(squares);
  const winnerPlayer = winner
    ? `winner is ${winner}`
    : `next player is ${nextPlayer}`;

  const handleSquareClick = clickedPosition => {
    if (squares[clickedPosition] || winner) {
      return;
    }
    setSquares(curentSquares => {
      return curentSquares.map((squaresValue, position) => {
        console.log(clickedPosition, position);
        if (clickedPosition === position) {
          return isXNext ? 'X' : 'O';
        }
        return squaresValue;
      });
    });
    setIsXNext(currentXNext => !currentXNext);
  };
  return (
    <div className="app">
      <h1>{winnerPlayer}</h1>
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
};

export default App;
