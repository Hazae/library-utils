"use client";

import { useState } from "react";

const CounterButtons = () => {
  const [count, setCount] = useState(0);

  const decreaseCount = () => {
    setCount((prev) => Math.max(0, prev - 1));
  };

  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <button
        onClick={decreaseCount}
        disabled={count === 0}
        className="px-4 py-1 text-2xl rounded"
      >
        -
      </button>

      <span className="text-3xl min-w-[2rem] text-center font-bold">
        {count}
      </span>

      <button onClick={increaseCount} className="px-4 py-2 text-2xl rounded">
        +
      </button>
    </>
  );
};

const Counter = () => {
  return (
    <div className="flex items-center gap-5 justify-center my-3">
      <CounterButtons />
    </div>
  );
};

export default Counter;
