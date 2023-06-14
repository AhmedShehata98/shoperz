import React from "react";
import RatingStars from "./RatingStars";
import { FaCartPlus } from "react-icons/fa";

function ProductCard() {
  return (
    <li className="flex items-center justify-stretch bg-white mb-2 p-4 gap-4 border border-gray-300 rounded-md">
      <figure className="flex max-w-[5.5rem] ">
        <img
          src="https://picsum.photos/450/550.webp"
          alt="product-image"
          className="w-full object-cover"
        />
      </figure>
      <div className="w-2/3 flex flex-col gap-2 items-start">
        <h4 className="max-w-full h-10 overflow-hidden text-sky-600 font-semibold leading-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </h4>
        <RatingStars />
        <span className="w-full flex items-center justify-between gap-2">
          <p className="font-bold text-lg">$600.00</p>
          <button className="flex items-center justify-center w-9 h-9 bg-gray-300 shadow rounded-full p-1 text-lg">
            <FaCartPlus />
          </button>
        </span>
      </div>
    </li>
  );
}

export default ProductCard;
