import React, { useEffect, useState } from "react";

function useGetToken() {
  const [token, setToken] = useState<string | undefined>(undefined);
  useEffect(() => {
    const token = document.cookie.split("=")[1];
    if (token) {
      setToken(token);
    } else {
      setToken(undefined);
    }
  }, []);

  return { token };
}

export default useGetToken;
