import React from "react";
import SidebarCategories from "./SidebarCategories";
import Brands from "./Brands";
import Price from "./Price";
import Colors from "./Colors";
import Rating from "./Rating";

function SideMenu() {
  return (
    <aside className="w-1/4 h-full flex flex-col items-start justify-start my-4 py-2">
      <SidebarCategories />
      <Brands />
      <Price />
      <Colors />
      <Rating />
    </aside>
  );
}

export default SideMenu;
