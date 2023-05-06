import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";

interface CartDrawerProps {
  setShowDrower: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems?: Array<Object>;
}
function CartDrawer({ setShowDrower, cartItems = [] }: CartDrawerProps) {
  return (
    <div className="absolute z-20 bg-slate-700 inset-0 bg-opacity-60 flex flex-col md:flex-row items-start justify-start md:justify-end">
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
          <p className="text-gray-500">(0)</p>
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
      </article>
    </div>
  );
}

export default CartDrawer;
