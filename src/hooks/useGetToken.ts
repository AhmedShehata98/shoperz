import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function useGetToken() {
  const [token, setTokenState] = useState<string | undefined>(undefined);
  useEffect(() => {
    const token = document.cookie.split("=")[1];
    if (token) {
      setTokenState(token);
    } else {
      setTokenState(undefined);
    }
  }, []);

  return { token };
}

export default useGetToken;
