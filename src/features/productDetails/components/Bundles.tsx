import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";
import { TbEqual } from "react-icons/tb";

function Bundles() {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between bg-gray-50 p-4">
      <ul className="w-full flex-col lg:flex-row flex items-center justify-between gap-3 ">
        <li className="w-full lg:w-1/2 flex items-center justify-stretch gap-4 border shadow-sm p-3 capitalize">
          <figure className="w-20  rounded-md overflow-hidden">
            <img
              src="https://picsum.photos/450/550.webp"
              alt="product-preview-image.webp"
              className="grid max-w-full object-cover object-center cursor-pointer"
            />
          </figure>
          <span className="w-4/6 flex flex-col">
            <p className="text-gray-700">smartphone</p>
            <small className="text-sky-600 font-semibold mt-1 mb-3">
              Lorem ipsum dolor sit amet consectetur.
            </small>
            <b className="text-xl">$1,456</b>
          </span>
        </li>
        <span className="p-3">
          <AiOutlinePlus />
        </span>
        <li className="w-full lg:w-1/2 flex items-center justify-stretch gap-4 border shadow-sm p-3 capitalize">
          <figure className="w-20  rounded-md overflow-hidden">
            <img
              src="https://picsum.photos/450/551.webp"
              alt="product-preview-image.webp"
              className="grid max-w-full object-cover object-center cursor-pointer"
            />
          </figure>
          <span className="w-4/6 flex flex-col">
            <p className="text-gray-700">smartphone</p>
            <small className="text-sky-600 font-semibold mt-1 mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </small>
            <b className="text-xl">$1,456</b>
          </span>
        </li>
      </ul>
      <span className="p-3">
        <TbEqual />
      </span>
      <span className="w-full lg:w-1/4 flex flex-col gap-3 my-3">
        <b className="text-2xl mb-2">$ 1,453</b>
        <span className="mb-3">
          <button className="w-full flex items-center justify-center gap-3 px-3 py-2 bg-sky-600 capitalize text-gray-50 rounded-full hover:bg-sky-500">
            <p>add to cart</p>
            <BsFillCartPlusFill className="block text-xl" />
          </button>
        </span>
      </span>
    </div>
  );
}

export default Bundles;
