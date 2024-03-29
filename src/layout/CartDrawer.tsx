import React, { useEffect, useMemo, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaCcMastercard, FaCcVisa } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { FaEquals } from "react-icons/fa";
import Link from "next/link";
import { routes } from "../constants/Routes";
import { useGetCartItemsQuery } from "@/services/shoperzApi.service";
import { useDispatch } from "react-redux";
import { setShowCartDrawer } from "@/redux/slices/app.slice";
import CartDrowerItems from "@/features/header/components/CartDrowerItems";
import CartItem from "@/features/header/components/CartItem";
import useGetToken from "@/hooks/useGetToken";

function CartDrawer() {
  const dispatch = useDispatch();

  const { token } = useGetToken();
  const cartVariants = {
    visible: { opacity: 1, translateX: "0px" },
    hidden: { opacity: 0, translateX: "-35px" },
  };

  const {
    data: cartItems,
    isLoading: loadingCartItems,
    isSuccess: successFetchCartItems,
    isError: errorFetchCartItems,
  } = useGetCartItemsQuery(token!, { skip: !token ? true : false });

  useEffect(() => {
    const scrollY =
        window.pageYOffset || window.document.documentElement.scrollTop,
      scrollX =
        window.pageXOffset || window.document.documentElement.scrollLeft;
    function preventScroll() {
      window.scrollTo({ top: scrollY, left: scrollX });
    }
    window.addEventListener("scroll", preventScroll);
    return () => {
      window.removeEventListener("scroll", preventScroll);
    };
  }, []);
  const handleHideCart = () => {
    dispatch(setShowCartDrawer(false));
  };

  return (
    <motion.div
      initial={"hidden"}
      animate={"visible"}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      className="fixed top-0 left-0 z-30 bg-slate-700 inset-0 bg-opacity-60 flex flex-col md:flex-row items-start justify-start md:justify-end gap-2 overflow-hidden"
    >
      <div className="w-max h-screen max-md:h-max max-md:w-full flex items-center justify-center">
        <button
          className="flex items-center justify-center bg-red-600 text-white w-11 h-11 rounded-full shadow-xl text-lg max-md:my-2"
          title="go back"
          onClick={() => handleHideCart()}
        >
          <IoIosArrowForward />
        </button>
      </div>
      <motion.article
        variants={cartVariants}
        initial={"hidden"}
        animate={"visible"}
        className="w-full md:w-2/5 lg:w-1/3 h-full min-h-screen flex flex-col items-center justify-start bg-white px-5 md:px-3 py-1 md:py-0 rounded-t-3xl md:rounded-none"
      >
        <header className="w-full py-4 flex items-center justify-between">
          <h3 className="capitalize font-semibold text-lg">your cart</h3>
          <p className="text-gray-500">
            ( {cartItems?.userCart.items.length} )
          </p>
        </header>
        {cartItems?.userCart.items?.length! < 1 && (
          <div className="w-full h-3/4 flex flex-col justify-center items-center">
            <span className="flex bg-sky-100 text-6xl text-sky-700 rounded-full shadow p-7">
              <HiOutlineShoppingBag />
            </span>
            <p className="text-sky-700 capitalize mt-2">
              no items in your cart
            </p>
            <button className="bg-sky-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-sky-600 mt-12">
              show products
            </button>
          </div>
        )}
        {cartItems?.userCart.items?.length! > 0 &&
          !loadingCartItems &&
          successFetchCartItems && (
            <div className="w-full h-[90vh] max-md:h-[85vh] px-2 flex flex-col overflow-y-auto">
              <CartDrowerItems>
                {cartItems?.userCart.items.map((item: CartProducts) => (
                  <CartItem
                    key={item.productId._id}
                    product={item.productId}
                    quantity={item.quantity}
                  />
                ))}
              </CartDrowerItems>
              <TotalElement total={cartItems?.cartTotal} />
              <div className="w-full grid grid-cols-2 items-center justify-between gap-2">
                <Link
                  href={{
                    pathname: routes.shop,
                  }}
                  className="custom-button mb-4 text-xs"
                  onClick={handleHideCart}
                >
                  <p>Continue shopping</p>
                </Link>
                <Link
                  href={{
                    pathname: routes.shoppingCart,
                  }}
                  className="custom-button bg-Grey-800 mb-4 text-xs"
                  onClick={handleHideCart}
                >
                  <p>Purchase completion</p>
                </Link>
              </div>
            </div>
          )}
      </motion.article>
    </motion.div>
  );
}

export default CartDrawer;

type TotalElementProps = {
  total: number;
};
function TotalElement({ total }: TotalElementProps) {
  return (
    <span className="w-full flex items-center justify-between capitalize my-4">
      <p className="ps-20 font-medium">total</p>
      <FaEquals />
      <span className="flex gap-1 items-end pe-4">
        <strong className="text-xl text-rose-600">
          {Intl.NumberFormat("en-eg", {
            style: "currency",
            currency: "EGP",
          }).format(total)}
        </strong>
      </span>
    </span>
  );
}
