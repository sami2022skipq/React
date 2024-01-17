import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(10);

  // Increasing Function
  const addValue = () => setCount((prev) => prev + 1);
  // Decreasing Function
  const decreaseValue = () => setCount(count - 1);

  return (
    <>
      <h1>My name is Sami</h1>
      <h2>The value of the counter is {count}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={decreaseValue}>Decrease Value</button>
      <p>Footer {count}</p>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}

export default App;
