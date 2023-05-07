import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import HeaderCategorybar from "@/components/HeaderCategorybar";
import InputField from "@/components/InputField";
type Props = {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const SlideMenu = ({ setShowMenu }: Props) => {
  return (
    <div className="absolute z-20 bg-slate-700 inset-0 bg-opacity-60 flex flex-col md:flex-row items-start justify-start md:justify-start">
      <article className="w-full md:w-2/5 lg:w-1/3 h-full min-h-screen flex flex-col items-center justify-start bg-white px-5 md:px-3 py-1 md:py-0 rounded-t-3xl md:rounded-none">
        <InputField />
        <HeaderCategorybar />
      </article>
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
