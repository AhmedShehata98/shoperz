import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }: { children: ReactNode | ReactNode[] }) => {
  const [mounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    document.body.style.position = "fixed";
    document.body.style.top = "0px";
    document.body.style.left = "0px";
    document.body.style.width = "100%";
    document.body.style.height = "100vh";

    return () => {
      document.body.style.position = "initial";
      document.body.style.top = "initial";
      document.body.style.left = "initial";
      document.body.style.width = "auto";
      document.body.style.height = "auto";
      setIsMounted(false);
    };
  }, []);

  return mounted
    ? createPortal(
        children,
        document.getElementById("portalWindow") as HTMLElement
      )
    : null;
};

export default Portal;
