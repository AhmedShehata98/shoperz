import { setIsLoggedIn } from "@/redux/slices/app.slice";
import React from "react";
import { useDispatch } from "react-redux";

const useLogout = () => {
  const dispatch = useDispatch();

  const [domainName, setDomainName] = React.useState<string | undefined>(
    undefined
  );
  React.useEffect(() => {
    const domain = document.location.hostname;
    if (domain) {
      setDomainName(domain);
    } else {
      setDomainName(undefined);
    }
  }, []);

  const logout = () => {
    document.cookie = `${domainName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    dispatch(setIsLoggedIn(false));
  };

  return { logout };
};

export default useLogout;
