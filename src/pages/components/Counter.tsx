import React, { useState } from "react";
interface CounterProps {
  defaultCount: number;
  description: string;
}
const Counter = ({ description, defaultCount }: CounterProps) => {
  const [count, setCount] = useState(defaultCount);
  const [incrementor, setIncrementor] = useState<number>(1);
  return (
    <div>
      <h2>{description}</h2>
      <label>
        Incrementor:
        <input
          type="number"
          value={incrementor}
          onChange={(e) => {
            setIncrementor(parseInt(e.target.value) || 0);
          }}
        />
      </label>
      <button
        aria-label="Increment"
        onClick={() => setTimeout(() => setCount(count + incrementor), 200)}
      >
        +
      </button>
      Current counter: {count}
      <button onClick={() => setCount(count - incrementor)}>-</button>
    </div>
  );
};

export default Counter;
