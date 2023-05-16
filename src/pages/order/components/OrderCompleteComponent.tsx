import ProductCard from "@/pages/order/components/ProductCard";
import React, { useMemo } from "react";
import { MdOutlineLocalShipping } from "react-icons/md";
import { motion } from "framer-motion";
import { SinglyLinkedList } from "@/utils/SinglyLinkedList";
import { useSelector } from "react-redux";
import { selectAppState } from "@/redux/slices/app.slice";
import { ICreditCard } from "@/models/shopperz.model";

interface OrderProps {
  // linkedlist: SinglyLinkedList;
  // setPathname: React.Dispatch<
  //   React.SetStateAction<"shopping-cart" | "checkout" | "order-complete">
  // >;
}

function OrderCompleteComponent() {
  const {
    orderData: { printTail },
    paymentMethod,
  } = useSelector(selectAppState);

  const transferMethod = useMemo(() => {
    return paymentMethod.find((method) => method.value === true);
  }, [paymentMethod]);

  return (
    <motion.section
      variants={{
        visible: { opacity: 1, translateX: "0px" },
        hidden: { opacity: 0, translateX: "-15px" },
      }}
      initial={"hidden"}
      animate={"visible"}
      className="container max-w-5xl mx-auto flex flex-col items-start justify-start gap-3 max-lg:px-3"
    >
      <span className="w-full flex justify-between items-center capitalize py-5 mt-4 border-b-2">
        <h3 className="text-2xl">your order</h3>
        {/* <span className="flex items-center gap-2 px-4 text-Success-700 text-xl font-medium">
          <BsFillPatchCheckFill />
          <p>paid</p>
        </span> */}
        <span className="flex items-center gap-2 px-4 text-orange-600 text-xl font-medium">
          <MdOutlineLocalShipping />
          <p>upon receipt</p>
        </span>
      </span>
      <ul className="w-full divide-y">
        {printTail?.data.cartItems.map((item: any) => {
          return <ProductCard product={item} />;
        })}
      </ul>
      <div className="w-full flex items-center justify-between capitalize text-xl py-5">
        <p>total</p>
        <b className="text-red-700">l.e {printTail?.data.total},00</b>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 items-start justify-between gap-12 max-md:gap-7">
        <ul>
          <li className="flex items-center justify-between gap-4 capitalize mb-3">
            <p className="text-Grey-600 text-sm font-medium">shipping</p>
            <b>{`${printTail?.data.userInformation?.city || "NA"} - ${
              printTail?.data.userInformation?.["country-or-regio"] || "NA"
            }`}</b>
          </li>
          <li className="flex items-center justify-between gap-4 capitalize mb-3">
            <p className="text-Grey-600 text-sm font-medium">
              mony transfer method
            </p>
            <b>{transferMethod?.id.split("-").join(" ").toLocaleUpperCase()}</b>
          </li>
          <li className="flex items-center justify-between gap-4 capitalize mb-3">
            <p className="text-Grey-600 text-sm font-medium">transfer info</p>
            <b>
              {`${"*".repeat(12)} ${transferMethod.paymentData[
                "card-number"
              ].slice(-4)}`}
            </b>
          </li>
        </ul>
        <ul>
          <li className="flex items-center justify-between gap-4 capitalize mb-3">
            <p className="text-Grey-600 text-sm font-medium">sub-total </p>
            <b>L.E {printTail?.data["sub-total"]},00</b>
          </li>
          <li className="flex items-center justify-between gap-4 capitalize mb-3">
            <p className="text-Grey-600 text-sm font-medium">discount</p>
            <b>l.e{printTail?.data.discount}</b>
          </li>
          <li className="flex items-center justify-between gap-4 capitalize mb-3">
            <p className="text-Grey-600 text-sm font-medium">shipping Cost </p>
            <b>L.E {printTail?.data.shippingCost}</b>
          </li>
        </ul>
      </div>
      <div className="w-full flex flex-col justify-center items-center mt-16 pb-14 gap-3">
        <p className="text-Grey-700">New Order, Click button bellow</p>
        <button className="rounded-full shadow-lg text-lg px-6 py-2 bg-Primary-600 text-white">
          shop now
        </button>
      </div>
    </motion.section>
  );
}

export default OrderCompleteComponent;
