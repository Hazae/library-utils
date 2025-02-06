"use client";

import { useCounter } from "@/hooks/useCounter";

interface CounterButtonsProps {
  place: string;
  onReset?: boolean;
  onSave?: boolean;
}

const CounterButtons = ({ place, onReset, onSave }: CounterButtonsProps) => {
  const { count, decreaseCount, increaseCount } = useCounter({
    place,
    onReset,
    onSave,
  });

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

      <button onClick={increaseCount} className="px-3 py-1 text-2xl rounded">
        +
      </button>
    </>
  );
};

interface CounterProps {
  place: string;
  onReset?: boolean;
  onSave?: boolean;
}

const Counter = ({ place, onReset, onSave }: CounterProps) => {
  return (
    <div className="flex items-center gap-5 justify-center my-3">
      <CounterButtons place={place} onReset={onReset} onSave={onSave} />
    </div>
  );
};

export default Counter;
