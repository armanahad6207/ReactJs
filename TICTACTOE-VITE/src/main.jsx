import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Square from './components/Square.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Square value="./20" />
    <Square value="./heloo1" />
    <h1>this is helooo1 children</h1>
    <Square />
    <Square value="./world" />
    <Square value="./this" />
    <Square value="./version of react" />
  </>
);
