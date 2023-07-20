import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async ({ url, method, headers, body }, applyDataFn) => {
      try {
        setIsLoading(true);
        const response = await fetch(url, {
          method: method || "Get",
          headers: headers || { "Content-type": "application/json" },
          body: JSON.stringify(body) || null,
        });
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await response.json();
        applyDataFn(data);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    },
    []
  );
  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
