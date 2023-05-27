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
import Link from "next/link";
import { routes } from "@/constants/Routes";

export default function HeaderUpperbar() {
  return (
    // where we need  to put language and country select
    <div className="w-full flex items-center justify-between">
      <nav className="w-fit flex gap-3 py-2 max-lg:justify-between max-lg:w-full">
        <label
          htmlFor=""
          className="flex  gap-1 items-center hover:text-Grey-600 text-gray-400 justify-center bg-white text-sm font-medium capitalize px-2"
        >
          <IoLanguageOutline className="text-gray-800" />
          <select
            name="language-list"
            id="language"
            placeholder="Currency"
            className="bg-white text-gray-800 focus:outline-none w-24 h-8"
          >
            <option value="ar">ar</option>
            <option value="en">en</option>
          </select>
        </label>
        <label
          htmlFor=""
          className="flex gap-1  items-center text-center justify-center text-gray-500 text-sm font-medium capitalize px-2"
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
        <nav className="flex gap-4 text-lg  text-gray-400 ">
          <a className="hover:text-Grey-700" href="#">
            <FaFacebookF />
          </a>
          <a className="hover:text-Grey-700" href="#">
            <FaInstagram />
          </a>
          <a className="hover:text-Grey-700" href="#">
            <FaTwitter />
          </a>
          <a className="hover:text-Grey-700" href="#">
            <AiFillYoutube />
          </a>
        </nav>
        <nav className="flex  text-base gap-2 text-gray-400 px-2 divide-x-2 divide-gray-300">
          <Link
            href={routes.trackOrder}
            className="flex group items-center  justify-center gap-2 px-2"
          >
            <IoLocation className="group-hover:text-Grey-800" />
            <p className="text-xs uppercase group-hover:text-Grey-800   text-gray-400">
              track order
            </p>
          </Link>
          <Link
            href={routes.shop}
            className="flex group hover:text-Grey-700 items-center justify-center gap-2 px-2"
          >
            <FaShoppingBasket className="group-hover:text-Grey-800" />
            <p className="text-xs uppercase group-hover:text-Grey-800  text-gray-400">
              shop
            </p>
          </Link>

          <Link
            href={{
              pathname: routes.myAccount.account,
              query: {
                section: routes.myAccount.profile,
              },
            }}
            className="flex group items-center justify-center gap-2 px-2"
          >
            <AiFillSetting className="group-hover:text-Grey-800" />
            <p className="text-xs uppercase group-hover:text-Grey-800  text-gray-400">
              settings
            </p>
          </Link>
          <Link
            href={routes.faq}
            className="flex group hover:text-Grey-700 items-center justify-center gap-2 px-2"
          >
            <p className="text-xs uppercase hover:text-Grey-800 text-gray-400">
              faq
            </p>
          </Link>
        </nav>
      </div>
    </div>
  );
}
