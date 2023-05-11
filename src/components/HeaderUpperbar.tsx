import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaShoppingBasket,
} from "react-icons/fa";
import { IoLocation, IoLanguageOutline } from "react-icons/io5";
import { ImEarth } from "react-icons/im";
import { AiFillSetting, AiFillYoutube } from "react-icons/ai";

export default function HeaderUpperbar() {
  return (
    // where we need  to put language and country select
    <div className="w-full flex items-center justify-between">
      <nav className="w-fit flex gap-3 py-2 max-lg:justify-between max-lg:w-full">
        <label
          htmlFor=""
          className="flex gap-1 items-center justify-center bg-white text-sm font-medium capitalize px-2"
        >
          <IoLanguageOutline />
          <select
            name="language-list"
            id="language"
            className="bg-white focus:outline-none w-24 h-8"
          >
            <option value="ar">ar</option>
            <option value="en">en</option>
          </select>
        </label>
        <label
          htmlFor=""
          className="flex gap-1 items-center text-center justify-center text-gray-700 text-sm font-medium capitalize px-2"
        >
          <ImEarth />
          <select
            name="country-list"
            id="country"
            className="bg-white focus:outline-none w-24 h-8"
          >
            <option value="Egypt">Egypt</option>
          </select>
        </label>
      </nav>
      <div className="flex gap-7 py-2 divide-x-2 max-lg:hidden divide-gray-300">
        <nav className="flex gap-4 text-lg text-gray-600 ">
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
          <a href="#" className="flex items-center justify-center gap-2 px-2">
            <IoLocation />
            <p className="text-xs uppercase text-gray-500">track order</p>
          </a>
          <a href="#" className="flex items-center justify-center gap-2 px-2">
            <FaShoppingBasket />
            <p className="text-xs uppercase text-gray-500">shop</p>
          </a>
          <a href="#" className="flex items-center justify-center gap-2 px-2">
            <AiFillSetting />
            <p className="text-xs uppercase text-gray-500">settings</p>
          </a>
          <a href="#" className="flex items-center justify-center gap-2 px-2">
            <p className="text-xs uppercase text-gray-500">faq</p>
          </a>
        </nav>
      </div>
    </div>
  );
}
