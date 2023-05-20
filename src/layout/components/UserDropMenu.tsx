import React from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BiLogOutCircle } from "react-icons/bi";
import { TiArrowSortedUp } from "react-icons/ti";
import { motion } from "framer-motion";
import Link from "next/link";

function UserDropMenu() {
  return (
    <div className="absolute z-10 top-full w-40 ">
      <motion.ul
        variants={{
          visible: { opacity: 1, translateY: 0, scaleY: 1 },
          hidden: { opacity: 0, translateY: "-25px", scaleY: 0.95 },
        }}
        initial={"hidden"}
        animate={"visible"}
        className="relative flex flex-col items-start justify-center bg-white shadow-xl border border-Grey-400 rounded-md py-2 px-1.5 mt-3"
      >
        <Link
          href={"my-account"}
          className="w-full flex items-center justify-start gap-2 py-1.5 px-1 font-medium cursor-pointer capitalize text-sm hover:bg-Grey-100"
        >
          <span className="text-xl">
            <MdOutlineSpaceDashboard />
          </span>
          <p>my account</p>
        </Link>
        <Link
          href={"logout"}
          className="w-full flex items-center justify-start gap-2 py-1.5 px-1 font-medium cursor-pointer capitalize text-red-600 text-sm hover:bg-red-300"
        >
          <span className="text-xl">
            <BiLogOutCircle />
          </span>
          <p>logout</p>
        </Link>
      </motion.ul>
    </div>
  );
}

export default UserDropMenu;
