import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  const addElement = () => {
    if (counter === 20) {
      setCounter(counter);
    } else {
      setCounter(counter + 1);
    }
  };
  function removeElement() {
    if (counter === 0) {
      setCounter(counter);
    } else {
      setCounter(counter - 1);
    }
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
