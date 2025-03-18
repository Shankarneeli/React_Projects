import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(7);

  let addValue = () => {
    if (count < 26) {
      // setCount(count + 1);
      setCount((prev)=> prev + 1);
      //Better way of writing optimized code, as it also supports Async React State
    }
  };
  let RemoveValue = () => {
    if (count > 0) {
      // setCount(count - 1);
      setCount((prev)=> prev - 1);
      //Better way of writing optimized code, as it also supports Async React State


    }
  };

  return (
    <>
        <h1>Welcome To The Counter App</h1>
      <div className="screen">
        <h2 className="count">{count}</h2>
        <div className="buttons">
          <button className="red" onClick={RemoveValue}>Remove ( - )</button>
          <button className="green" onClick={addValue}>Add ( + )</button>
        </div>
      </div>
      <h3>Thala* for a Reason...</h3>
    </>
  );
}

export default App;
