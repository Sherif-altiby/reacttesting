import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);

  return (
    <div>
      <h1> {counter} </h1>
      <button onClick={() => setCounter((x) => x + 1)}>Increment</button>

      <input
        type="number"
        name="amount"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />

      <button onClick={() => setCounter(amount)} >Set</button>
      
    </div>
  );
};

export default Counter;
