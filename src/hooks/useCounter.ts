import { useState, useEffect } from "react";

interface UseCounterProps {
  place: string;
  onReset?: boolean;
  onSave?: boolean;
}

export const useCounter = ({ place, onReset, onSave }: UseCounterProps) => {
  const [count, setCount] = useState(0);

  // 초기화 처리
  useEffect(() => {
    if (onReset) {
      setCount(0);
      sessionStorage.setItem(`current_count_${place}`, "0");
    }
  }, [onReset, place]);

  // 저장 처리
  useEffect(() => {
    if (onSave) {
      const saveData = {
        count: count,
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem(`visitor_count_${place}`, JSON.stringify(saveData));
      sessionStorage.setItem(`current_count_${place}`, count.toString());
    }
  }, [onSave, count, place]);

  // 초기 데이터 로드
  useEffect(() => {
    const currentCount = sessionStorage.getItem(`current_count_${place}`);
    if (currentCount !== null) {
      setCount(parseInt(currentCount));
    } else {
      const savedData = localStorage.getItem(`visitor_count_${place}`);
      if (savedData) {
        try {
          const parsedData = JSON.parse(savedData);
          const savedCount =
            parsedData.count !== undefined
              ? parsedData.count
              : parseInt(savedData);
          setCount(savedCount);
          sessionStorage.setItem(
            `current_count_${place}`,
            savedCount.toString()
          );
        } catch (e) {
          console.error("Error parsing saved data:", e);
        }
      }
    }
  }, [place]);

  const decreaseCount = () => {
    const newCount = Math.max(0, count - 1);
    setCount(newCount);
    sessionStorage.setItem(`current_count_${place}`, newCount.toString());
  };

  const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    sessionStorage.setItem(`current_count_${place}`, newCount.toString());
  };

  return {
    count,
    decreaseCount,
    increaseCount,
  };
};
