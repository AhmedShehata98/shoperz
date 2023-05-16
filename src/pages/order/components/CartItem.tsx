import { ICart } from "@/models/shopperz.model";
import React, { useMemo } from "react";
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
        <span className="flex flex-col items-start">
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
        </span>
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
