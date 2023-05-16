import { ICart } from "@/models/shopperz.model";
import React, { useMemo } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { IoTrashOutline } from "react-icons/io5";

interface CartItemProps {
  itemData?: Partial<ICart>;
}
export default function CartItem({ itemData }: CartItemProps) {
  const totalPrice = useMemo(() => {
    if (itemData?.price && itemData?.quantity) {
      return itemData?.price * itemData?.quantity;
    }
  }, [itemData]);
  return (
    <li key={itemData?.title} className="cart-item">
      <div className="cart-product-info">
        <figure className="w-16 rounded-md">
          <img
            src={itemData?.thumbnail}
            alt="cart-item-image"
            className="w-full object-cover object-center"
          />
        </figure>
        <figcaption className="w-10/12 flex items-start justify-between">
          <div className="basis-2/3 flex items-start flex-col">
            <p className="text-sky-700 font-semibold capitalize m-0">
              {itemData?.title}
            </p>
            <span className="flex items-center justify-center gap-4">
              <small className="text-gray-500">{itemData?.quantity}X</small>
              <span className="flex items-center justify-center gap-1 text-gray-500">
                <small>{`${itemData?.currency}`}</small>
                <small className="font-mono ">{itemData?.price}</small>
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
        <span className="w-16 flex max-lg:flex-row max-lg:gap-5 flex-col items-start justify-start gap-1 flex-1">
          <p className="text-lg font-semibold capitalize">total :</p>
          <span className="flex items-center justify-center gap-1">
            <p className="text-gray-400"> {`${itemData?.currency}`}</p>
            <p className="font-mono ">{totalPrice}</p>
          </span>
        </span>
        <button className="cart-rm-ntn">
          <IoTrashOutline />
        </button>
      </div>
    </li>
  );
}
