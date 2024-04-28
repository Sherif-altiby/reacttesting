import { useState } from "react";

const Counter = () => {

    const [counter, setCounter] = useState<number>(0)

  return <div>
    <h1> {counter} </h1>
    <button onClick={() => setCounter(x => x + 1)} >Increment</button>
  </div>;
};

export default Counter;
