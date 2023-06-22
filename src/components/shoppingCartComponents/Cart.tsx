import { IApiCallState } from "@/models/shopperz.model";
import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import CartItem from "./CartItem";
import { nanoid } from "@reduxjs/toolkit";
import { ImSad } from "react-icons/im";
import Link from "next/link";
import { routes } from "@/constants/Routes";

interface CartProps {
  cartItems: Array<CartProducts>;
  apiCallState: IApiCallState;
  total: number;
}
export default function Cart({
  total,
  cartItems = [],
  apiCallState,
}: CartProps) {
  if (apiCallState?.isLoading) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-48 my-8">
        <span className="w-10 h-10 border-4 border-blue-700 rounded-full border-l-transparent animate-spin"></span>
        <br />
        <p>loading , please wait ...</p>
      </div>
    );
  }
  if (apiCallState?.isError) {
    return (
      <div className="flex flex-col justify-center items-center self-center my-6 mx-8">
        <span className="flex items-center justify-center text-5xl text-Danger-700 p-3">
          <ImSad />
        </span>
        <p className="mt-3 text-Grey-700">Oops error fetching cart data .</p>
      </div>
    );
  }
  return (
    <div className="cart-wrapper">
      <header className="w-full py-3 flex items-center justify-between border-b-2 border-Grey-200 mb-4">
        <h3 className="capitalize font-semibold text-lg">your cart</h3>
        <p className="text-gray-500">( {cartItems?.length} )</p>
      </header>
      {/* {cartItems?.length < 1 ? (
        <div className="cart-isEmpty">
          <span className="flex bg-sky-100 text-6xl text-sky-700 rounded-full shadow p-7">
            <HiOutlineShoppingBag />
          </span>
          <p className="text-sky-700 capitalize mt-2">no items in your cart</p>
          <Link
            href={{ pathname: routes.shop }}
            className="custom-button rounded-full mt-6"
          >
            show products
          </Link>
        </div>
      ) : null} */}

      {cartItems?.length > 0 && !apiCallState?.isLoading ? (
        <ul className="cart-items-list">
          {cartItems?.map((item) => (
            <CartItem
              key={nanoid(5)}
              quantity={item?.quantity}
              itemData={item?.productId}
            />
          ))}
        </ul>
      ) : null}
    </div>
  );
}
