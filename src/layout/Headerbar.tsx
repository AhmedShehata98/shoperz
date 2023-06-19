import React, { useLayoutEffect, useRef, useState } from "react";
import CartDrawer from "./CartDrawer";
import HeaderControlsActions from "@/layout/components/HeaderControlsActions";
import { useSelector } from "react-redux";
import { selectAppState } from "@/redux/slices/app.slice";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import QuickLoadingModul from "./QuickLoadingModul";
import { BsSearch } from "react-icons/bs";
import MobileSearchbar from "./components/MobileSearchbar";

const HeaderUpperbar = dynamic(
  () => import("@/layout/components/HeaderUpperbar"),
  { loading: () => <QuickLoadingModul /> }
);
const ActionMenu = dynamic(() => import("@/layout/ActionMenu"), {
  loading: () => <QuickLoadingModul />,
});
const HeaderCategorybar = dynamic(
  () => import("@/layout/components/HeaderCategorybar"),
  {
    loading: () => <QuickLoadingModul />,
  }
);

const Headerbar = () => {
  const { showCartDrawer } = useSelector(selectAppState);
  const headerbarRef = useRef<HTMLDivElement | null>(null);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header ref={headerbarRef} className="flex flex-col w-full h-fit bg-white">
      {showCartDrawer ? <CartDrawer /> : null}
      <AnimatePresence mode="wait">
        {showMenu && <ActionMenu setShowMenu={setShowMenu} />}
      </AnimatePresence>
      <section className="container max-w-5xl mx-auto flex flex-col justify-between items-center gap-3">
        <HeaderUpperbar />
        <HeaderControlsActions setShowMenu={setShowMenu} />
      </section>
      <div className="max-lg:hidden">
        <HeaderCategorybar />
      </div>
      <MobileSearchbar />
    </header>
  );
};

export default Headerbar;
