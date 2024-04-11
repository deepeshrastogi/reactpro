import { useState } from "react";
export default function StateChange() {
  const [count, changeCountState] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);
  function incrementCountState() {
    changeCountState(count + incrementBy);
  }
  function decrementCountState() {
    changeCountState(count - incrementBy);
  }

  function incremrntByValue() {
    setIncrementBy(incrementBy + 1);
  }
  function decrementByValue() {
    setIncrementBy(incrementBy - 1);
  }
  return (
    <div>
      <h2>Counter of value is : {count}</h2>
      <button onClick={incrementCountState}>Increment</button>
      <button onClick={decrementCountState}>Decrement</button>
      <h2>Increment by value is : {incrementBy}</h2>
      <button onClick={incremrntByValue}>Increase By Value</button>
      <button onClick={decrementByValue}>Decrease By Value</button>
    </div>
  );
}
