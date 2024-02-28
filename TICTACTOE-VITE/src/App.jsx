import { useState } from 'react';
import './style.scss';
import Board from './components/Board';
import Square from './components/Square';

const App = () => {
  return (
    <div className="app">
      <Board />
      <Square />
    </div>
  );
};

export default App;
