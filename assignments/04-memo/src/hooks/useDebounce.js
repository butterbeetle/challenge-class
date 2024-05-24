import { useEffect, useState } from "react";

export default function useDebounce(value, delay = 500) {
  const [useDebounce, setUseDebounce] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setUseDebounce(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return useDebounce;
}
