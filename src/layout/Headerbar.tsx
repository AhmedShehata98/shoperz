import React, { useState } from "react";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { BsFillHeartFill, BsSearch } from "react-icons/bs";
import Logo from "@/components/Logo";
import Link from "next/link";
import HeaderUpperbar from "@/layout/components/HeaderUpperbar";
import HeaderCategorybar from "@/layout/components/HeaderCategorybar";
import CartDrawer from "./CartDrawer";
import SlideMenu from "@/layout/SlideMenu";
import InputField from "@/components/InputField";
import HeaderControlsActions from "@/layout/components/HeaderControlsActions";
import { useSelector } from "react-redux";
import { selectAppState } from "@/redux/slices/app.slice";
// interface MenuItem {
//   label: string;
//   href: string;
// }

// interface SlideableMenuProps {
//   items: MenuItem[];
// }
const Headerbar = () => {
  const { showCartDrawer } = useSelector(selectAppState);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex flex-col w-full h-fit bg-white">
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
