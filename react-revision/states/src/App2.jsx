import React, { useState } from "react";

// Example of saring state at top level 

function App2() {
  const [count, setCount] = useState(10);
  const handelClick = () => setCount(count + 1);
  const reset = () => setCount(0);
  return (
    <>
      <h1>Counter that updates togather</h1>
      <Button count={count} handelClick={handelClick} reset={reset} />
      <Button count={count} handelClick={handelClick} reset={reset} />
    </>
  );
}
export default App2;

function Button({count, handelClick, reset}) {
  return (
    <>
      <h1>Count is now {count}</h1>
      <button onClick={handelClick}>Increase</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
