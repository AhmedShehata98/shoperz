import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaShoppingBasket,
  FaUserAlt,
  FaShoppingCart,
} from "react-icons/fa";
import { IoLocation, IoLanguageOutline } from "react-icons/io5";
import { ImEarth } from "react-icons/im";
import { AiFillSetting, AiFillYoutube } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { BsFillHeartFill, BsSearch } from "react-icons/bs";
import Logo from "@/components/Logo";
import Link from "next/link";

const Headerbar = () => {
  return (
    <header className="flex flex-col w-full h-fit bg-gray-100">
      <section className="container max-w-5xl mx-auto flex flex-col justify-between items-center gap-3">
        <div className="w-full flex items-center justify-between">
          <nav className="w-fit flex gap-3 py-2">
            <label
              htmlFor=""
              className="flex gap-1 items-center justify-center text-gray-700 text-sm font-medium capitalize px-2"
            >
              <IoLanguageOutline />
              <select
                name="language-list"
                id="language"
                className="bg-gray-100 focus:outline-none"
              >
                <option value="ar">ar</option>
                <option value="en">en</option>
              </select>
            </label>
            <label
              htmlFor=""
              className="flex gap-1 items-center justify-center text-gray-700 text-sm font-medium capitalize px-2"
            >
              <ImEarth />
              <select
                name="country-list"
                id="country"
                className="bg-gray-100 focus:outline-none"
              >
                <option value="Egypt">Egypt</option>
              </select>
            </label>
          </nav>
          <div className="flex gap-7 py-2 divide-x-2 divide-gray-300">
            <nav className="flex gap-4 text-lg text-gray-600">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <AiFillYoutube />
              </a>
            </nav>
            <nav className="flex text-base gap-2 text-gray-600 px-2 divide-x-2 divide-gray-300">
              <a
                href="#"
                className="flex items-center justify-center gap-2 px-2"
              >
                <IoLocation />
                <p className="text-xs uppercase text-gray-500">track order</p>
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-2 px-2"
              >
                <FaShoppingBasket />
                <p className="text-xs uppercase text-gray-500">shop</p>
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-2 px-2"
              >
                <AiFillSetting />
                <p className="text-xs uppercase text-gray-500">settings</p>
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-2 px-2"
              >
                <p className="text-xs uppercase text-gray-500">faq</p>
              </a>
            </nav>
          </div>
        </div>
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
            <button className="flex items-center gap-2">
              <FaShoppingCart />
              <p className="text-gray-500 text-xs uppercase"> 4</p>
            </button>
          </span>
        </div>
      </section>
    </header>
  );
};

export default Headerbar;
