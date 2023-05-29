import React from "react";
import { AiOutlineCheck, AiOutlineShopping } from "react-icons/ai";
import { IoTicketOutline, IoWalletOutline } from "react-icons/io5";
import { HiOutlineTicket } from "react-icons/hi";

interface PaymentStatusbarProps {
  currentPage: "shopping-cart" | "checkout" | "order-complete";
}

function PaymentStatusbar({ currentPage }: PaymentStatusbarProps) {
  return (
    <header className="h-20 w-full flex items-center justify-center bg-Grey-100">
      <ul className="flex items-center justify-center gap-2">
        <li className="flex items-center justify-center gap-2 capitalize font-medium">
          {currentPage === "shopping-cart" && (
            <span className="w-10 flex items-center justify-center text-xl aspect-square rounded-full bg-Primary-700 text-white">
              <AiOutlineShopping />
            </span>
          )}
          {currentPage === "checkout" && (
            <span className="w-10 flex items-center justify-center text-2xl aspect-square rounded-full bg-Primary-200 text-Primary-800">
              <AiOutlineCheck />
            </span>
          )}
          {currentPage === "order-complete" && (
            <span className="w-10 flex items-center justify-center text-2xl aspect-square rounded-full bg-Primary-200 shadow text-Primary-800">
              <AiOutlineCheck />
            </span>
          )}
          {/*  */}
          {currentPage === "shopping-cart" && (
            <p className=" text-gray-950 text-sm md:text-base">shopping-cart</p>
          )}
          {currentPage === "checkout" && (
            <p className="hidden sm:block text-Primary-800 text-sm md:text-base">
              shopping-cart
            </p>
          )}
          {currentPage === "order-complete" && (
            <p className="hidden sm:block text-Primary-800 text-sm md:text-base">
              shopping-cart
            </p>
          )}

          {currentPage === "shopping-cart" && (
            <span className="w-10 md:w-24 h-1 bg-gray-300 rounded-full mx-2"></span>
          )}
          {currentPage === "checkout" && (
            <span className="w-10 md:w-24 h-1 bg-Primary-800 rounded-full mx-2"></span>
          )}
          {currentPage === "order-complete" && (
            <span className="w-10 md:w-24 h-1 bg-Primary-800 rounded-full mx-2"></span>
          )}
        </li>
        <li className="flex items-center justify-center gap-2 capitalize font-medium">
          {currentPage === "shopping-cart" && (
            <span className="w-10 flex items-center justify-center text-xl aspect-square rounded-full bg-white shadow text-Primary-800">
              <IoWalletOutline />
            </span>
          )}
          {currentPage === "checkout" && (
            <span className="w-10 flex items-center justify-center text-xl aspect-square rounded-full bg-Primary-700 text-white">
              <IoWalletOutline />
            </span>
          )}
          {currentPage === "order-complete" && (
            <span className="w-10 flex items-center justify-center text-2xl aspect-square rounded-full bg-Primary-200 shadow text-Primary-800">
              <AiOutlineCheck />
            </span>
          )}
          {/*  */}
          {currentPage === "shopping-cart" && (
            <p className="hidden sm:block text-gray-400 text-sm md:text-base">
              checkout
            </p>
          )}
          {currentPage === "checkout" && (
            <p className="text-Primary-800 text-sm md:text-base">checkout</p>
          )}
          {currentPage === "order-complete" && (
            <p className="hidden sm:block text-sm md:text-base text-Primary-800">
              checkout
            </p>
          )}
          {/*  */}
          {currentPage === "shopping-cart" && (
            <span className="w-10 md:w-24 h-1 bg-gray-300 rounded-full mx-2"></span>
          )}
          {currentPage === "checkout" && (
            <span className="w-10 md:w-24 h-1 bg-gray-300 rounded-full mx-2"></span>
          )}
          {currentPage === "order-complete" && (
            <span className="w-10 md:w-24 h-1 bg-Primary-800 rounded-full mx-2"></span>
          )}
        </li>
        <li className="flex items-center justify-center gap-2 capitalize font-medium">
          {currentPage === "shopping-cart" && (
            <span className="w-10 flex items-center justify-center text-xl aspect-square rounded-full bg-white shadow text-Primary-800">
              <HiOutlineTicket />
            </span>
          )}
          {currentPage === "checkout" && (
            <span className="w-10 flex items-center justify-center text-xl aspect-square rounded-full bg-white shadow text-Primary-800">
              <HiOutlineTicket />
            </span>
          )}
          {currentPage === "order-complete" && (
            <span className="w-10 flex items-center justify-center text-xl aspect-square rounded-full bg-Primary-700 text-white">
              <HiOutlineTicket />
            </span>
          )}
          {/*  */}
          {currentPage === "shopping-cart" && (
            <p className="hidden sm:block text-sm md:text-base text-gray-400 ">
              order-complete
            </p>
          )}
          {currentPage === "checkout" && (
            <p className="hidden sm:block text-sm md:text-base text-gray-400 ">
              order-complete
            </p>
          )}
          {currentPage === "order-complete" && (
            <p className="text-sm md:text-base text-Gray-900">order-complete</p>
          )}
          {/*  */}
        </li>
      </ul>
    </header>
  );
}

export default PaymentStatusbar;
