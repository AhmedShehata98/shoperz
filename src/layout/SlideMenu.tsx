import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import HeaderCategorybar from "@/layout/components/HeaderCategorybar";
import InputField from "@/components/InputField";
import Logo from "@/components/Logo";
import { IoLocation, IoLanguageOutline } from "react-icons/io5";
import { AiFillYoutube, AiOutlineClose, AiFillSetting } from "react-icons/ai";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaShoppingBasket,
} from "react-icons/fa";
type Props = {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const SlideMenu = ({ setShowMenu }: Props) => {
  const slideMenuVariant = {
    hidden: { opacity: 0, translateX: "-25px" },
    visible: { opacity: 1, translateX: "0px" },
  };
  return (
    <div className="absolute lg:hidden z-20 bg-slate-700 inset-0 bg-opacity-60 flex flex-col md:flex-row items-start justify-start md:justify-start">
      <motion.article
        variants={slideMenuVariant}
        initial={"hidden"}
        animate={"visible"}
        className="w-full md:w-2/5 lg:w-1/3 h-full min-h-screen flex flex-col items-center justify-start bg-white px-5 md:px-3 py-1 md:py-0 rounded-t-3xl md:rounded-none"
      >
        <div className="py-4 flex justify-between items-center w-full">
          <h5 className="text-3xl font-medium">Welcome</h5>
          <div className=" flex items-center justify-center px-3 py-1 md:hidden">
            <button
              className="bg-white p-3 rounded-full shadow-lg text-lg"
              title="go back"
              onClick={() => setShowMenu(false)}
            >
              <AiOutlineClose />
            </button>
          </div>
        </div>
        <InputField />
        <HeaderCategorybar />
        <div className="mt-auto">
          <nav className="grid grid-cols-2 text-base gap-2 text-gray-600 px-2 divide-x-2 divide-gray-300">
            <a
              href="#"
              className="flex items-center justify-center gap-2 px-2 py-4 bg-Primary-600 text-white"
            >
              <IoLocation />
              <p className="text-xs uppercase text-white font-semibold">
                track order
              </p>
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-2 px-2 py-4 bg-Primary-600 text-white"
            >
              <FaShoppingBasket />
              <p className="text-xs uppercase text-white font-semibold">shop</p>
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-2 px-2 py-4 bg-Primary-600 text-white"
            >
              <AiFillSetting />
              <p className="text-xs uppercase text-white font-semibold">
                settings
              </p>
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-2 px-2 py-4 bg-Primary-600 text-white"
            >
              <p className="text-xs uppercase text-white font-semibold">faq</p>
            </a>
          </nav>
          <nav className="flex gap-16 text-2xl text-gray-600  p-6 ">
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
        </div>
      </motion.article>
      <div className="w-full md:w-min md:h-full flex items-center justify-center px-3 my-2 md:my-0">
        <button
          className="bg-white p-3 rounded-full shadow-lg text-lg"
          title="go back"
          onClick={() => setShowMenu(false)}
        >
          <IoIosArrowBack />
        </button>
      </div>
    </div>
  );
};

export default SlideMenu;
