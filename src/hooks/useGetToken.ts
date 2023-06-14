import { setToken } from "@/redux/slices/app.slice";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function useGetToken() {
  const [token, setTokenState] = useState<string | undefined>(undefined);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = document.cookie.split("=")[1];
    if (token) {
      setTokenState(token);
      dispatch(setToken({ token }));
    } else {
      setTokenState(undefined);
      dispatch(setToken({ token: undefined }));
    }
  }, []);

  return { token };
}

export default useGetToken;
