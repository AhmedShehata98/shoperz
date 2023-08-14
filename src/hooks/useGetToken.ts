import { useEffect, useState } from "react";

function useGetToken() {
  const [token, setTokenState] = useState<string | undefined>(undefined);
  useEffect(() => {
    const cookies = document.cookie.split(" ");
    const origin = document.location.origin;
    const token = cookies
      .find((cookie) => cookie.startsWith(origin))
      ?.split(`${origin}=`)
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
