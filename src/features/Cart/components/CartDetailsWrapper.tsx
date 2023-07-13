import { routes } from "@/constants/Routes";
import Link from "next/link";
import React, { ReactNode } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoCart } from "react-icons/io5";

type Props = {
  isAuth: boolean;
  cartItems: number;
  children?: ReactNode[];
};
function CartDetailsWrapper(props: Props) {
  const { shop } = routes;
  if (!props.isAuth || props.cartItems <= 0) {
    return (
      <div className="cart-isEmpty">
        <span className="flex bg-sky-100 text-6xl text-sky-700 rounded-full shadow p-7">
          <IoCart />
        </span>
        <p className="text-sky-700 capitalize mt-6">
          there is no items in your cart yet
        </p>
        <Link
          href={{ pathname: shop }}
          className="custom-button rounded-full mt-4 shadow-lg"
        >
          shopping now !
        </Link>
      </div>
    );
  } else {
    return <section className="cart-details-wrapper">{props.children}</section>;
  }
}

export default CartDetailsWrapper;
