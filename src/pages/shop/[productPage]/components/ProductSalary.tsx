import React from "react";
import { AiFillHeart, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";

function ProductSalary() {
  return (
    <div className="w-full lg:w-1/3 flex items-center justify-center gap-3 py-3 lg:py-0 mb-6 lg:mb-0">
      <ul className="w-full flex flex-col border shadow-sm rounded-md p-2">
        <span className="w-full flex justify-between items-center mb-3">
          <small className="text-gray-500 capitalize">delivery :</small>
          <small className="bg-emerald-300 text-emerald-700 rounded-md shadow-sm px-2 font-medium capitalize">
            free
          </small>
          {/* <small className="bg-blue-300 text-blue-700 rounded-md shadow-sm px-2 font-medium capitalize">
            25 $
          </small> */}
        </span>
        <span className="w-full flex justify-between items-center mb-3">
          <small className="text-gray-500 capitalize">stock :</small>
          <small className="bg-stone-300 text-stone-800 rounded-md shadow-sm px-2 font-medium capitalize">
            26
          </small>
        </span>
        <span className="w-full flex items-center justify-between mt-3">
          <button className="self-end w-1/2 flex items-center justify-center gap-4 rounded-full py-1 px-3 border-2 border-zinc-400 text-gray-600 capitalize">
            <p>whishlist</p>
            <AiFillHeart className="block text-xl" />
          </button>
        </span>
        <div className="w-full my-3">
          <b className="text-2xl ">$ 1,453</b>
          <span className="w-max flex items-center justify-between border border-zinc-300 rounded-full p-1 my-3">
            <button className="flex items-center justify-center p-1 leading-3 w-14 text-2xl text-gray-600 hover:bg-gray-200 rounded-full">
              <AiOutlinePlus />
            </button>
            <p className="w-max px-4">1</p>
            <button className="flex items-center justify-center p-1 leading-3 w-14 text-2xl text-gray-600 hover:bg-gray-200 rounded-full">
              <AiOutlineMinus />
            </button>
          </span>
        </div>
        <span className="mb-3">
          <button className="w-full flex items-center justify-center gap-3 px-3 py-2 bg-sky-600 capitalize text-gray-50 rounded-full hover:bg-sky-500">
            <p>add to cart</p>
            <BsFillCartPlusFill className="block text-xl" />
          </button>
        </span>
      </ul>
    </div>
  );
}

export default ProductSalary;
