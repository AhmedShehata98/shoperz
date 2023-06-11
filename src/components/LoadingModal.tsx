import { Modal, Spinner } from "flowbite-react";

import React from "react";
import { motion } from "framer-motion";
function LoadingModal() {
  return (
    <div className="loading-module">
      <motion.div
        variants={{
          hidden: { opacity: 0, translateY: "-25px" },
          visible: { opacity: 1, translateY: "0px" },
        }}
        initial="hidden"
        animate="visible"
        className="paragraph-circle"
      >
        <span className="loading-spiner"></span>
        <b className="text-xl text-Grey-900 uppercase">Loading ..</b>
        <b className="text-sm text-Grey-900 uppercase font-light">
          wait a moment
        </b>
      </motion.div>
    </div>
  );
}

export default LoadingModal;
