import React, { useLayoutEffect, useRef, useState } from "react";
import CartDrawer from "./CartDrawer";
import HeaderControlsActions from "@/layout/components/HeaderControlsActions";
import { useSelector } from "react-redux";
import { selectAppState } from "@/redux/slices/app.slice";
import dynamic from "next/dynamic";
import QuickLoadingModul from "./QuickLoadingModul";
import { useRouter } from "next/router";
const HeaderUpperbar = dynamic(
  () => import("@/layout/components/HeaderUpperbar"),
  { loading: () => <QuickLoadingModul /> }
);
const SlideMenu = dynamic(() => import("@/layout/SlideMenu"), {
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
  const { pathname } = useRouter();

  useLayoutEffect(() => {
    if (pathname === "/register") {
      headerbarRef.current?.classList.add("hidden");
    } else {
      headerbarRef.current?.classList.remove("hidden");
    }
  }, [pathname]);

  return (
    <header ref={headerbarRef} className="flex flex-col w-full h-fit bg-white">
      {showCartDrawer ? <CartDrawer /> : null}
      {showMenu && <SlideMenu setShowMenu={setShowMenu} />}
      <section className="container max-w-5xl mx-auto flex flex-col justify-between items-center gap-3">
        <HeaderUpperbar />
        <HeaderControlsActions setShowMenu={setShowMenu} />
      </section>
      <div className="max-lg:hidden">
        <HeaderCategorybar />
      </div>
    </header>
  );
};

export default Headerbar;
