"use client";

import { useState, useEffect } from "react";

interface CounterButtonsProps {
  place: string;
  onReset?: boolean;
  onSave?: boolean;
}

const CounterButtons = ({ place, onReset, onSave }: CounterButtonsProps) => {
  const [count, setCount] = useState(0);

  // 초기화 신호를 받으면 카운트를 0으로 설정
  useEffect(() => {
    if (onReset) {
      setCount(0);
    }
  }, [onReset, place]);

  // 저장 신호를 받으면 localStorage에 저장
  useEffect(() => {
    if (onSave) {
      const saveData = {
        count: count,
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem(`visitor_count_${place}`, JSON.stringify(saveData));
    }
  }, [onSave, count, place]);

  // 컴포넌트 마운트 시 저장된 값 불러오기
  useEffect(() => {
    const savedData = localStorage.getItem(`visitor_count_${place}`);
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        // 새로운 형식(객체)인 경우
        if (parsedData.count !== undefined) {
          setCount(parsedData.count);
        }
        // 이전 형식(숫자)인 경우
        else {
          setCount(parseInt(savedData));
        }
      } catch (e) {
        console.error("Error parsing saved data:", e);
      }
    }
  }, [place]);

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
