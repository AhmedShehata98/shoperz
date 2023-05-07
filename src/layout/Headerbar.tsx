import React, { useState } from "react";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { BsFillHeartFill, BsSearch } from "react-icons/bs";
import Logo from "@/components/Logo";
import Link from "next/link";
import HeaderUpperbar from "@/components/HeaderUpperbar";
import HeaderCategorybar from "@/components/HeaderCategorybar";
import CartDrawer from "./CartDrawer";
import SlideMenu from "@/layout/SlideMenu";
import InputField from "@/components/InputField";
// interface MenuItem {
//   label: string;
//   href: string;
// }

// interface SlideableMenuProps {
//   items: MenuItem[];
// }
const Headerbar = () => {
  const [showCartDrawer, setShowCartDrawer] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="flex flex-col w-full h-fit bg-gray-100">
      {showCartDrawer && <CartDrawer setShowDrower={setShowCartDrawer} />}
      {showMenu && <SlideMenu setShowMenu={setShowMenu} />}

      <section className="container max-w-5xl mx-auto flex flex-col justify-between items-center gap-3">
        <HeaderUpperbar />
        <div className="w-full flex items-center  justify-between px-2 pb-4">
          <span className="flex items-center justify-center gap-8">
            <button
              onClick={() => setShowMenu(true)}
              className="text-2xl text-gray-600 lg:hidden"
            >
              <FiMenu />
            </button>
            <Logo />
          </span>
          <div className="max-lg:hidden">
            <InputField />
          </div>
          <span className="flex items-center justify-between gap-6 text-gray-600">
            <Link
              href={"register"}
              type="button"
              className="flex items-center gap-2"
            >
              <FaUserAlt />
              <p className="text-gray-500 text-xs uppercase">login</p>
            </Link>
            <button className="flex items-center gap-2">
              <BsFillHeartFill />
              <p className="text-gray-500 text-xs uppercase">1</p>
            </button>
            <button
              className="flex items-center gap-2"
              onClick={() => setShowCartDrawer(true)}
            >
              <FaShoppingCart />
              <p className="text-gray-500 text-xs uppercase"> 4</p>
            </button>
          </span>
        </div>
      </section>
      <div className="max-lg:hidden">
        <HeaderCategorybar />
      </div>
    </header>
  );
};

export default Headerbar;
