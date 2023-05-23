import { Modal, Spinner } from "flowbite-react";

import React from "react";
import { motion } from "framer-motion";
function LoadingModal() {
  return (
    <div className="fixed inset-0 z-50 h-screen w-full flex items-center justify-center bg-Grey-500 bg-opacity-70">
      <motion.div
        variants={{
          hidden: { opacity: 0, translateY: "-25px" },
          visible: { opacity: 1, translateY: "0px" },
        }}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-3 items-center justify-center bg-white shadow-sm border border-Grey-500 rounded-lg py-5 px-4"
      >
        <span className="block w-12 h-12 border-4 border-Primary-700 border-t-transparent rounded-full animate-spin"></span>
        <b className="text-sm text-Grey-800 uppercase">wait a moment ..</b>
      </motion.div>
    </div>
  );
}

export default LoadingModal;
