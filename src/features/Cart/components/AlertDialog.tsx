import Link from "next/link";
import React from "react";
import { AiOutlineClose, AiOutlineLogin } from "react-icons/ai";
import { motion } from "framer-motion";
import { routes } from "@/constants/Routes";

interface AlertProps {
  setShowConfirmIsUser: React.Dispatch<React.SetStateAction<boolean>>;
}
function AlertDialog({ setShowConfirmIsUser }: AlertProps) {
  const { login, register } = routes.register;

  return (
    <div className="fixed top-0 inset-0 h-screen bg-Grey-900 bg-opacity-50 flex flex-col items-center justify-center">
      <motion.div
        variants={{
          hidden: { translateY: "-20px", opacity: 0 },
          visible: { translateY: "0px", opacity: 1 },
        }}
        initial={"hidden"}
        animate={"visible"}
        className="flex flex-col items-start justify-center w-2/4 max-lg:w-full h-fit bg-Grey-100 p-3 rounded-md shadow-md border-t-4 border-orange-500"
      >
        <header className="w-full flex items-center justify-between gap-3 capitalize">
          <button
            className="text-2xl p-2 bg-Grey-200 hover:bg-Grey-200"
            onClick={() => setShowConfirmIsUser(false)}
          >
            <AiOutlineClose />
          </button>
          <span className="flex items-center gap-2">
            <p className="text-lg">login alert</p>
            <AiOutlineLogin className="block text-lg" />
          </span>
        </header>
        <span className="p-3 mt-3">
          <p>
            To complete the purchase process, you must be a registered user on
            our site. Please log in first or create a new account
          </p>
        </span>
        <footer className="w-full flex max-sm:flex-col items-center justify-end gap-3 mt-4">
          <button
            className="w-1/4 max-lg:w-full px-3 py-1.5 bg-Grey-800 text-white capitalize rounded-md"
            onClick={() => setShowConfirmIsUser(false)}
          >
            cancel
          </button>
          <Link
            href={{ pathname: register, query: { target: login } }}
            className="block text-center w-1/4 max-lg:w-full px-3 py-1.5 bg-Success-700 text-white capitalize rounded-md"
            onClick={() => setShowConfirmIsUser(false)}
          >
            login
          </Link>
        </footer>
      </motion.div>
    </div>
  );
}

export default AlertDialog;
