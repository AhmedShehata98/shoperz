import React, { useEffect, useMemo, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaCcMastercard, FaCcVisa } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { FaEquals } from "react-icons/fa";
interface CartDrawerProps {
  setShowDrower: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems?: Array<{
    currency: string;
    image: string;
    price: number;
    productName: string;
    quantity: number;
  }>;
}
function CartDrawer({ setShowDrower, cartItems = [] }: CartDrawerProps) {
  const [totalPrice, setTotalPrice] = useState(0);
  const cartVariants = {
    visible: { opacity: 1, translateX: "0px" },
    hidden: { opacity: 0, translateX: "-35px" },
  };
  const total = useMemo(
    () => cartItems.reduce((prev, curr) => prev + curr.price, 0),
    [cartItems]
  );
  useEffect(() => {
    setTotalPrice(total);
  }, [cartItems]);

  return (
    <motion.div
      variants={cartVariants}
      initial={"hidden"}
      animate={"visible"}
      className="absolute z-20 bg-slate-700 inset-0 bg-opacity-60 flex flex-col md:flex-row items-start justify-start md:justify-end overflow-hidden"
    >
      <div className="w-full md:w-min md:h-full flex items-center justify-center px-3 my-2 md:my-0">
        <button
          className="bg-white p-3 rounded-full shadow-lg text-lg"
          title="go back"
          onClick={() => setShowDrower(false)}
        >
          <IoIosArrowForward />
        </button>
      </div>
      <article className="w-full md:w-2/5 lg:w-1/3 h-full min-h-screen flex flex-col items-center justify-start bg-white px-5 md:px-3 py-1 md:py-0 rounded-t-3xl md:rounded-none">
        <header className="w-full py-4 flex items-center justify-between">
          <h3 className="capitalize font-semibold text-lg">your cart</h3>
          <p className="text-gray-500">({cartItems.length})</p>
        </header>
        {cartItems?.length < 1 && (
          <div className="w-full h-3/4 flex flex-col justify-center items-center">
            <span className="flex bg-sky-100 text-6xl text-sky-700 rounded-full shadow p-7">
              <HiOutlineShoppingBag />
            </span>
            <p className="text-sky-700 capitalize mt-2">
              no items in your cart
            </p>
            <button className="bg-sky-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-sky-600 mt-12">
              show products
            </button>
          </div>
        )}
        {cartItems.length > 0 && (
          <div className="w-full px-2 flex flex-col">
            <ul className="w-full grid grid-flow-row-dense gap-4 mb-5 mt-2">
              {cartItems.map((item) => (
                <li className="flex gap-3 items-center justify-between p-3 rounded-md hover:bg-gray-100">
                  <figure className="w-16 rounded-md">
                    <img
                      src={item?.image}
                      alt="cart-item-image"
                      className="w-full object-cover object-center"
                    />
                  </figure>
                  <div className="w-2/3 flex flex-col items-start justify-start gap-1">
                    <p className="text-sky-700 font-semibold capitalize m-0">
                      {item?.productName}
                    </p>
                    <span className="flex items-center justify-center gap-4">
                      <small className="text-gray-500">{item?.quantity}X</small>
                      <span className="flex items-center justify-center gap-1 text-gray-500">
                        <small>{`${item.currency}`}</small>
                        <small className="font-mono ">{`${
                          item.price * item.quantity
                        }`}</small>
                      </span>
                    </span>
                  </div>
                  <span className="w-16 flex flex-col items-start justify-center gap-1">
                    <button className="text-2xl text-red-200 hover:text-red-600">
                      <AiOutlineCloseCircle />
                    </button>
                    <span className="flex items-center justify-center gap-1">
                      <small className="text-gray-400">
                        {" "}
                        {`${item.currency}`}
                      </small>
                      <small className="font-mono ">{`${
                        item.price * item.quantity
                      }`}</small>
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <span className="w-full flex items-center justify-between capitalize my-4">
              <p className="ps-20 font-medium">total</p>
              <FaEquals />
              <span className="flex gap-1 items-end pe-4">
                <strong className="text-xl text-rose-600">{totalPrice}</strong>
                <p>EGP</p>
              </span>
            </span>
            <span className="w-full flex items-center justify-stretch mt-6 mb-3">
              <button className="w-1/2 flex items-center justify-center gap-3 px-3 py-2 bg-sky-600 capitalize text-gray-50 rounded-full hover:bg-sky-500">
                <p>checkout</p>
              </button>
            </span>
            <span className="w-full flex items-stretch justify-center flex-col gap-2 mt-6 mb-4">
              <p className="uppercase font-medium text-gray-500">
                secured payments provided by
              </p>
              <span className="self-start flex items-center justify-between gap-1 text-4xl">
                <FaCcVisa className="text-blue-700" />
                <FaCcMastercard className="text-[ #eb001b]" />
                <MdPayment className="text-emerald-700" />
              </span>
            </span>
          </div>
        )}
      </article>
    </motion.div>
  );
}

export default CartDrawer;
