import { useEffect, useState } from "react";

export default function useDebounce(initialValue = "", duration = 1000) {
  const [debounceValue, setDebounceValue] = useState(initialValue);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(initialValue);
    }, duration);
    return () => {
      clearTimeout(timer);
    };
  }, [duration, initialValue]);
  return debounceValue;
}
