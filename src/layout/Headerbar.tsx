import React, { useState } from "react";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { BsFillHeartFill, BsSearch } from "react-icons/bs";
import Logo from "@/components/Logo";
import Link from "next/link";
import HeaderUpperbar from "@/components/HeaderUpperbar";
import HeaderCategorybar from "@/components/HeaderCategorybar";
import CartDrawer from "./CartDrawer";

const Headerbar = () => {
  const [showCartDrawer, setShowCartDrawer] = useState(false);
  return (
    <header className="flex flex-col w-full h-fit bg-gray-100">
      {showCartDrawer && <CartDrawer setShowDrower={setShowCartDrawer} />}
      <section className="container max-w-5xl mx-auto flex flex-col justify-between items-center gap-3">
        <HeaderUpperbar />
        <div className="w-full flex items-center justify-between px-2 pb-4">
          <span className="flex items-center justify-center gap-8">
            <button className="text-2xl text-gray-600">
              <FiMenu />
            </button>
            <Logo />
          </span>
          <form
            action=""
            className="flex h-9 w-fit border-2 border-sky-600 rounded-full overflow-hidden"
          >
            <input
              type="search"
              name="search-for-products"
              id="app-search-field"
              placeholder="search for products .."
              className="w-[70%] text-gray-600 bg-inherit h-full text-sm rounded-full px-3 focus:outline-none focus:bg-white"
            />
            <select
              name="select-category"
              id="categories"
              value={"all categories"}
              className="w-1/3 text-gray-500 uppercase text-sm bg-inherit accent-gray-700 focus:outline-none focus:border-sky-600"
            >
              <option value="all categories">all categories</option>
              <option value="electronics">electronics</option>
              <option value="ketchin">ketchin</option>
              <option value="garden">garden</option>
              <option value="sports">sports</option>
              <option value="mens">mens</option>
              <option value="womens">womens</option>
              <option value="computers & accessories">
                computers & accessories
              </option>
              <option value="mobiles & accessories">
                mobiles & accessories
              </option>
              <option value="helthey">helthey</option>
              <option value="gifts">gifts</option>
              <option value="toys">toys</option>
              <option value="TV & Audio">TV & Audio</option>
            </select>
            <button
              type="submit"
              id="search0btn"
              className="w-14 bg-sky-600 px-4 hover:bg-sky-500"
            >
              <BsSearch />
            </button>
          </form>
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
      <HeaderCategorybar />
    </header>
  );
};

export default Headerbar;
