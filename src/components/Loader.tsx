import { useState, useEffect } from "react";
import { Progress } from "@nextui-org/react";

const Loader = () => {
  const [loadingValue, setLoadingValue] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingValue((prev) => {
        if (prev === 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
    return () => {
      setLoadingValue(0);
    };
  }, []);
  return (
    <>
    {loadingValue === 100 ? null : (
      <Progress size="sm" aria-label="loading..." value={loadingValue} />
    )}
    </>
  )
};

export default Loader;