import React, { useMemo } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { IoTrashOutline } from "react-icons/io5";

interface CartItemProps {
  itemData?: CartProducts;
  total: number;
}
export default function CartItem({ total, itemData }: CartItemProps) {
  return (
    <li key={itemData?.productId._id} className="cart-item">
      <div className="cart-product-info">
        <figure className="w-16 rounded-md">
          <img
            src={itemData?.productId.thumbnail}
            alt="cart-item-image"
            className="w-full object-cover object-center"
          />
        </figure>
        <figcaption className="w-10/12 flex items-start justify-between">
          <div className="basis-2/3 flex items-start flex-col">
            <p className="text-sky-700 font-semibold capitalize m-0">
              {itemData?.productId.name}
            </p>
            <span className="flex items-center justify-center gap-4">
              <small className="text-gray-500">{itemData?.quantity}X</small>
              <span className="flex items-center justify-center gap-1 text-gray-500">
                <small className="font-mono ">
                  {Intl.NumberFormat("en-eg", {
                    style: "currency",
                    currency: "EGP",
                  }).format(itemData?.productId.price || 0)}
                </small>
              </span>
            </span>
          </div>
          <span className="basis-1/3 flex items-center max-lg:justify-end">
            <button className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-Grey-100">
              <AiOutlineMinus />
            </button>
            <label
              htmlFor=""
              className="px-3 py-2 bg-Grey-100 rounded-lg mx-1.5"
            >
              {itemData?.quantity}
            </label>
            <button className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-Grey-100">
              <AiOutlinePlus />
            </button>
          </span>
        </figcaption>
      </div>
      <div className="cart-product-pricing">
        <span className="w-16 flex max-lg:flex-row max-lg:gap-5 flex-col items-start justify-start flex-1">
          <p className="text-lg leading-5 font-semibold capitalize">total :</p>
          <span className="flex items-center justify-center gap-1">
            <p className="font-mono">
              {Intl.NumberFormat("en-eg", {
                style: "currency",
                currency: "EGP",
              }).format(total || 0)}
            </p>
          </span>
        </span>
        <button className="cart-rm-ntn">
          <IoTrashOutline />
        </button>
      </div>
    </li>
  );
}
