import React, { useEffect, useRef } from "react";
import SidebarCategories from "./SidebarCategories";
import Brands from "./Brands";
import Price from "./Price";
import Colors from "./Colors";
type Props = {};

const Filters = (props: Props) => {
  const filter = useRef<HTMLDivElement | null>(null);
  //   useEffect(() => {
  //     document.body.classList.add("prevent-scroll");
  //     filter.current?.classList.contains("");
  //     return () => {
  //       document.body.classList.remove("prevent-scroll");
  //     };
  //   }, []);

  return (
    <div ref={filter} className="Filters">
      <SidebarCategories />
      <Brands />
      <Price />
      <Colors />
    </div>
  );
};

export default Filters;
