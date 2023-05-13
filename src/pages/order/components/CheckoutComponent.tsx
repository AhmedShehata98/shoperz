import FinalOrderReport from "@/pages/order/components/FinalOrderReport";
import UserAddressForm from "@/pages/order/components/UserAddressForm";
import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import {
  changeCurrentOrderComponent,
  handleAddToOrderData,
  handleMargefullOrderData,
} from "@/redux/slices/app.slice";

interface CheckoutProps {}
function CheckoutComponent() {
  return (
    <motion.section
      variants={{
        visible: { opacity: 1, translateX: "0px" },
        hidden: { opacity: 0, translateX: "-15px" },
      }}
      initial={"hidden"}
      animate={"visible"}
      className="container max-w-5xl mx-auto flex max-lg:flex-col items-start justify-start gap-3 max-lg:px-3"
    >
      <div className="w-full lg:w-auto flex flex-col pt-5">
        <header className="w-full py-6 flex items-center justify-between border-b-2 border-Grey-400">
          <h3 className="capitalize font-semibold text-xl">shipping</h3>
          <p className="text-gray-500">(4)</p>
        </header>
        <UserAddressForm />
      </div>
      <FinalOrderReport />
    </motion.section>
  );
}

export default CheckoutComponent;
