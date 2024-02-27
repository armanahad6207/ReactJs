import { useState } from 'react';
import './style.scss';
import Board from './components/Board';
import Square from './components/Square';

const App = () => {
  let [counter, setCounter] = useState(1);
  const onBtnClick = () => {
    console.log('updating curen values');
    setCounter(curentValues => {
      return (curentValues += 1);
    });
  };
  return (
    <div className="app">
      <div>
        <button onClick={onBtnClick}>click me</button>
        <h1>{counter}</h1>
      </div>
    </div>
  );
};

export default App;
