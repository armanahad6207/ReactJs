import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  const addElement = () => {
    setCounter(counter + 1);
  };
  function removeElement() {
    setCounter(counter - 1);
  }
  return (
    <>
      <h1> this is counter : {counter}</h1>
      <button onClick={addElement}> add counter</button>
      <br />
      <button onClick={removeElement}> remove counter</button>
    </>
  );
}

export default App;
