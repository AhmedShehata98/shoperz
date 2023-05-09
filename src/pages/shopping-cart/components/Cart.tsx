import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaCcMastercard, FaCcVisa, FaEquals } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoTrashOutline } from "react-icons/io5";
import { MdPayment } from "react-icons/md";

interface CartProps {
  cartItems?: Array<{
    currency: string;
    image: string;
    price: number;
    productName: string;
    quantity: number;
  }>;
}
export default function Cart({ cartItems = [] }: CartProps) {
  return (
    <div className="w-full md:w-3/5">
      <header className="w-full py-6 flex items-center justify-between border-b-2 border-Grey-400">
        <h3 className="capitalize font-semibold text-xl">your cart</h3>
        <p className="text-gray-500">({cartItems.length})</p>
      </header>
      {cartItems?.length < 1 && (
        <div className="w-full h-1/2 flex flex-col justify-center items-center my-auto">
          <span className="flex bg-sky-100 text-6xl text-sky-700 rounded-full shadow p-7">
            <HiOutlineShoppingBag />
          </span>
          <p className="text-sky-700 capitalize mt-2">no items in your cart</p>
          <button className="bg-sky-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-sky-600 mt-12">
            show products
          </button>
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="w-full flex flex-col">
          <ul className="w-full grid grid-flow-row-dense gap-4 mb-5 mt-2 divide-y">
            {cartItems.map((item) => (
              <li
                key={item.price}
                className="flex gap-3 items-center justify-start p-3 rounded-md hover:bg-gray-100"
              >
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
                <span className="w-16 flex flex-col items-start justify-start gap-1">
                  <p className="text-lg font-semibold capitalize">total</p>
                  <span className="flex items-center justify-center gap-1">
                    <p className="text-gray-400"> {`${item.currency}`}</p>
                    <p className="font-mono ">{`${
                      item.price * item.quantity
                    }`}</p>
                  </span>
                </span>
                <button className="flex items-center justify-center gap-2 bg-rose-300 text-white py-1.5 px-4 ms-4 rounded-sm hover:bg-red-500">
                  <IoTrashOutline />
                  delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
