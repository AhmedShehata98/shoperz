import { routes } from "@/constants/Routes";
import Link from "next/link";
import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { BsFillGearFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { RiAccountBoxFill, RiShoppingBasketLine } from "react-icons/ri";

function ActionMenuListItems() {
  return (
    <nav className="w-full grid grid-flow-row border divide-y bg-Grey-100 p-2">
      <Link
        className="flex items-center justify-start gap-3 px-3 py-3 hover:bg-Grey-200 capitalize"
        href={{
          pathname: routes.myAccount.account,
          query: { section: routes.myAccount.profile },
        }}
      >
        <span className="!text-2xl text-Grey-800">
          <MdOutlineAccountCircle />
        </span>
        <p>my account</p>
      </Link>
      <Link
        className="flex items-center justify-start gap-3 px-3 py-3 hover:bg-Grey-200 capitalize"
        href={{
          pathname: routes.myAccount.account,
          query: { section: routes.myAccount.myAddress },
        }}
      >
        <span className="!text-2xl text-Grey-800">
          <RiAccountBoxFill />
        </span>
        <p>Address</p>
      </Link>
      <Link
        className="flex items-center justify-start gap-3 px-3 py-3 hover:bg-Grey-200 capitalize"
        href={{
          pathname: routes.myAccount.account,
          query: { section: routes.myAccount.myOrders },
        }}
      >
        <span className="!text-2xl text-Grey-800">
          <BiShoppingBag />
        </span>
        <p>Orders</p>
      </Link>
      <Link
        className="flex items-center justify-start gap-3 px-3 py-3 hover:bg-Grey-200 capitalize"
        href={{
          pathname: routes.shop,
        }}
      >
        <span className="!text-2xl text-Grey-800">
          <RiShoppingBasketLine />
        </span>
        <p>shop</p>
      </Link>
      <Link
        className="flex items-center justify-start gap-3 px-3 py-3 hover:bg-Grey-200 capitalize"
        href={{
          pathname: routes.trackOrder,
        }}
      >
        <span className="!text-2xl text-Grey-800">
          <IoLocationSharp />
        </span>
        <p>track order</p>
      </Link>
      <Link
        className="flex items-center justify-start gap-3 px-3 py-3 hover:bg-Grey-200 capitalize"
        href={{
          pathname: routes.myAccount.account,
          query: { section: routes.myAccount.profile },
        }}
      >
        <span className="!text-2xl text-Grey-800">
          <BsFillGearFill />
        </span>
        <p>settings</p>
      </Link>
    </nav>
  );
}

export default ActionMenuListItems;
