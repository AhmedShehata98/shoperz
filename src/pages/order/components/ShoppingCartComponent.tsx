import React, { useState, useEffect, useCallback } from "react";
import Portal from "../../../hooks/Protal";
import { AiOutlineTransaction } from "react-icons/ai";
import { BsBoxSeam } from "react-icons/bs";
import { MdOutlineLocalShipping } from "react-icons/md";
import OrderReport from "./OrderReport";
import Cart from "./Cart";
import { motion } from "framer-motion";
import { SinglyLinkedList } from "@/utils/SinglyLinkedList";
import AlertDialog from "./AlertDialog";

interface ShoppingCartComponentProps {
  cartItems: {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    totalPrice: number;
    currency: string;
    quantity: number;
    images: Array<string>;
  };
  // linkedlist: SinglyLinkedList;
  // setPathname: React.Dispatch<
  //   React.SetStateAction<"shopping-cart" | "checkout" | "order-complete">
  // >;
}
function ShoppingCartComponent({ cartItems }: ShoppingCartComponentProps) {
  const [showConfirmIsUser, setShowConfirmIsUser] = useState(false);

  ////////////////////
  //
  //
  let loggedin = true;
  //
  //
  ////////////////////

  return (
    <motion.article
      variants={{
        visible: { opacity: 1, translateX: "0px" },
        hidden: { opacity: 0, translateX: "-15px" },
      }}
      initial={"hidden"}
      animate={"visible"}
      className="w-full flex flex-col items-start justify-center gap-7"
    >
      <section className="container max-w-5xl mx-auto flex max-md:flex-col items-start justify-between gap-3 max-lg:px-3">
        <Cart cartItems={cartItems} />
        <OrderReport
          orders={cartItems}
          loggedin={loggedin}
          setShowConfirmIsUser={setShowConfirmIsUser}
        />
        {showConfirmIsUser && (
          <Portal>
            <AlertDialog setShowConfirmIsUser={setShowConfirmIsUser} />
          </Portal>
        )}
      </section>
      <section className="container max-w-5xl mx-auto flex flex-col items-start justify-start gap-3">
        <header className="w-full grid grid-cols-2 capitalize text-Primary-800 text-lg font-medium py-3 max-lg:px-3">
          <p>delivery</p>
          <p> free returns</p>
        </header>
        <ul className="my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-5 max-lg:px-4">
          <li className="flex flex-col items-start justify-start border rounded-md shadow p-4 transition-all duration-500 gap-4 hover:shadow-lg hover:-translate-y-4">
            <span className="my-4 p-3 bg-Primary-200 text-Primary-700 rounded-full text-4xl">
              <AiOutlineTransaction />
            </span>
            <h4 className="font-medium text-xl">
              Order by 10pm for free next day delivery on Orders overs $100
            </h4>
            <p className="text-Grey-700 text-xl">
              We deliver Monday to Saturday - excluding Holidays
            </p>
          </li>
          <li className="flex flex-col items-start justify-start border rounded-md shadow p-4 transition-all duration-500 gap-4 hover:shadow-lg hover:-translate-y-4">
            <span className="my-4 p-3 bg-Primary-200 text-Primary-700 rounded-full text-4xl">
              <BsBoxSeam />
            </span>
            <h4 className="font-medium text-xl">
              Free next day delivery to stores.
            </h4>
            <p className="text-Grey-700 text-xl">
              Home delivery is $4.99 for orders under $100 and is FREE for all
              orders over $100
            </p>
          </li>
          <li className="flex flex-col items-start justify-start border rounded-md shadow p-4 transition-all duration-500 gap-4 hover:shadow-lg hover:-translate-y-4">
            <span className="my-4 p-3 bg-Primary-200 text-Primary-700 rounded-full text-4xl">
              <MdOutlineLocalShipping />
            </span>
            <p className="text-Grey-700 text-xl">
              30 days to return it to us for a refund. We have made returns SO
              EASY - you can now return your order to a store or send it with
              FedEx FOR FREE
            </p>
          </li>
        </ul>
      </section>
    </motion.article>
  );
}

export default ShoppingCartComponent;
