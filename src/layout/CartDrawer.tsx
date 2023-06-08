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
import CartDrowerItems from "./components/CartDrowerItems";
import CartItem from "./components/CartItem";

function CartDrawer() {
  const dispatch = useDispatch();

  const [token, setToken] = useState<string | undefined>(undefined);
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
    window.scrollBy({ top: 0, behavior: "smooth" });
    document.body.classList.add("prevent-scroll");

    return () => {
      document.body.classList.remove("prevent-scroll");
    };
  }, []);
  const handleHideCart = () => {
    dispatch(setShowCartDrawer(false));
  };

  // get token from cookie and set token state
  // this is important to get cart items
  useEffect(() => {
    const token = document.cookie.split("=")[1];
    if (token) {
      setToken(token);
    } else {
      setToken(undefined);
    }
  }, []);

  return (
    <div className="absolute z-20 bg-slate-700 inset-0 bg-opacity-60 flex flex-col md:flex-row items-start justify-start md:justify-end gap-2 overflow-hidden">
      <div className="w-max h-screen max-md:h-max max-md:w-full flex items-center justify-center">
        <button
          className="flex items-center justify-center bg-white w-11 h-11 rounded-full shadow-xl text-lg max-md:my-2"
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
        {cartItems?.userCart.items?.length! < 1 && errorFetchCartItems && (
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
              <Link
                href={{
                  pathname: routes.shoppingCart.order,
                  query: { to: routes.shoppingCart.cart },
                }}
                className="custom-button mb-4"
                onClick={handleHideCart}
              >
                <p>shopping cart</p>
              </Link>
            </div>
          )}
      </motion.article>
    </div>
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
