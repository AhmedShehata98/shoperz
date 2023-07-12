import { useEffect, useState } from "react";

const useResize = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const width = window.document.documentElement.clientWidth;
    setScreenWidth(width);

    window.addEventListener("resize", handleResize);
    function handleResize(ev: UIEvent) {
      if (width) {
        setScreenWidth(width);
      }
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { screenWidth };
};

export default useResize;
