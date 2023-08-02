import { useEffect, useState } from "react";

function useGetToken() {
  const [token, setTokenState] = useState<string | undefined>(undefined);
  useEffect(() => {
    const cookies = document.cookie.split(" ");
    const hostname = document.location.hostname;
    const token = cookies
      .find((cookie) => cookie.startsWith(hostname))
      ?.split(`${hostname}=`)
      .at(1);

    if (token) {
      setTokenState(token);
    } else {
      setTokenState(undefined);
    }
  }, []);

  return { token };
}

export default useGetToken;
