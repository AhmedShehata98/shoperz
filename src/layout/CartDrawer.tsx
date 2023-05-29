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
import { useGetCartItemsQuery } from "@/services/dummyjson.service";
import { useDispatch } from "react-redux";
import { setCartLength, setShowCartDrawer } from "@/redux/slices/app.slice";
interface Props {}
function CartDrawer() {
  const dispatch = useDispatch();
  // const [totalPrice, setTotalPrice] = useState(0);
  const cartVariants = {
    visible: { opacity: 1, translateX: "0px" },
    hidden: { opacity: 0, translateX: "-35px" },
  };

  // useEffect(() => {
  //   setTotalPrice(total);
  // }, [cartItems]);

  const {
    data: cartItems,
    isLoading,
    isSuccess,
    isError,
  } = useGetCartItemsQuery();

  const memoziedCartItem = useMemo(() => {
    if (isSuccess) {
      let randomCartItem: number = Math.floor(
        Math.random() * cartItems.carts.length - 1
      );

      if (randomCartItem > cartItems.carts.length) {
        dispatch(
          setCartLength(cartItems?.carts[randomCartItem - 1]?.products.length)
        );
        return cartItems?.carts[randomCartItem - 1];
      } else {
        dispatch(
          setCartLength(cartItems?.carts[randomCartItem]?.products.length)
        );
        return cartItems?.carts[randomCartItem];
      }
    }
  }, [cartItems, isLoading]) as CartItems;

  const handleHideCart = () => {
    dispatch(setShowCartDrawer(false));
  };
  console.log(memoziedCartItem?.products);

  return (
    <div className="absolute z-20 bg-slate-700 inset-0 bg-opacity-60 flex flex-col md:flex-row items-start justify-start md:justify-end overflow-hidden">
      <div className="w-full md:w-min md:h-full flex items-center justify-center px-3 my-2 md:my-0">
        <button
          className="bg-white p-3 rounded-full shadow-lg text-lg"
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
          <p className="text-gray-500">({memoziedCartItem?.products.length})</p>
        </header>
        {memoziedCartItem?.products?.length < 1 && (
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
        {memoziedCartItem?.products.length > 0 && (
          <div className="w-full px-2 flex flex-col">
            <ul className="w-full grid grid-flow-row-dense gap-4 mb-5 mt-2">
              {memoziedCartItem?.products.map((item) => (
                <li
                  key={item.price}
                  className="flex gap-3 items-center justify-between p-3 rounded-md hover:bg-gray-100"
                >
                  {/* <figure className="w-16 rounded-md">
                    <img
                      src={item?.image}
                      alt="cart-item-image"
                      className="w-full object-cover object-center"
                    />
                  </figure> */}
                  <div className="w-2/3 flex flex-col items-start justify-start gap-1">
                    <p className="text-sky-700 font-semibold capitalize m-0">
                      {item?.title}
                    </p>
                    <span className="flex items-center justify-center gap-4">
                      <small className="text-gray-500">{item?.quantity}X</small>
                      <span className="flex items-center justify-center gap-1 text-gray-500">
                        <small className="font-mono ">
                          {Intl.NumberFormat("en-eg", {
                            style: "currency",
                            currency: "EGP",
                          }).format(item.price)}
                        </small>
                      </span>
                    </span>
                  </div>
                  <span className="w-16 flex flex-col items-start justify-center gap-1">
                    <button className="text-2xl text-red-200 hover:text-red-600">
                      <AiOutlineCloseCircle />
                    </button>
                    <span className="flex items-center justify-center gap-1">
                      <small className="font-mono ">
                        {Intl.NumberFormat("en-eg", {
                          style: "currency",
                          currency: "EGP",
                        }).format(item.total)}
                      </small>
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <span className="w-full flex items-center justify-between capitalize my-4">
              <p className="ps-20 font-medium">total</p>
              <FaEquals />
              <span className="flex gap-1 items-end pe-4">
                <strong className="text-xl text-rose-600">
                  {Intl.NumberFormat("en-eg", {
                    style: "currency",
                    currency: "EGP",
                  }).format(memoziedCartItem.total)}
                </strong>
              </span>
            </span>
            <span className="w-full flex flex-col sm:flex-row items-center justify-stretch gap-3 mt-6 mb-3">
              <Link
                href={routes.shoppingCart}
                className="w-full sm:w-1/2 flex items-center justify-center gap-3 px-3 py-2 capitalize bg-Primary-700 text-white rounded-full hover:bg-Primary-600"
              >
                <p>shopping cart</p>
              </Link>
            </span>
            <span className="w-full flex items-stretch justify-center flex-col gap-2 mt-6 mb-4">
              <p className="uppercase font-medium text-gray-500">
                secured payments provided by
              </p>
              <span className="self-start flex items-center justify-between gap-1 text-4xl">
                <FaCcVisa className="text-blue-700" />
                <FaCcMastercard className="text-[ #eb001b]" />
                <MdPayment className="text-emerald-700" />
              </span>
            </span>
          </div>
        )}
      </motion.article>
    </div>
  );
}

export default CartDrawer;
