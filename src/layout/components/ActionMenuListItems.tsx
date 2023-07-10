import { routes } from "@/constants/Routes";
import useLogout from "@/hooks/useLogout";
import { selectAppState } from "@/redux/slices/app.slice";
import Link from "next/link";
import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { IoLogOut, IoLocationSharp } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { RiAccountBoxFill, RiShoppingBasketLine } from "react-icons/ri";
import { useSelector } from "react-redux";

function ActionMenuListItems() {
  const { logout } = useLogout();
  const { isLoggedIn } = useSelector(selectAppState);
  return (
    <nav className="w-full grid grid-flow-row border divide-y bg-Grey-100 p-2">
      {isLoggedIn && (
        <>
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
        </>
      )}
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
      {isLoggedIn && (
        <button
          type="button"
          className="flex items-center justify-start gap-3 px-3 py-3 text-red-500 hover:bg-red-200 capitalize"
          onClick={logout}
        >
          <span className="!text-2xl text-red-800">
            <IoLogOut />
          </span>
          <p>logout</p>
        </button>
      )}
    </nav>
  );
}

export default ActionMenuListItems;
