import FinalOrderReport from "@/pages/order/components/FinalOrderReport";
import UserAddressForm from "@/pages/order/components/UserAddressForm";
import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCurrentOrderComponent,
  handleAddToOrderData,
  handleMargefullOrderData,
  selectAppState,
} from "@/redux/slices/app.slice";
import CartItem from "./CartItem";
import { ICart } from "@/models/shopperz.model";
import { IoIosCheckboxOutline } from "react-icons/io";
import { ImCheckboxUnchecked } from "react-icons/im";
import {
  RiCheckboxBlankFill,
  RiCheckboxCircleFill,
  RiCheckboxFill,
} from "react-icons/ri";
import Portal from "@/hooks/Protal";

interface CheckoutProps {}
function CheckoutComponent() {
  const { orderData } = useSelector(selectAppState);
  const shoppingCart = orderData.getById("shopping-order"),
    cartItems: Array<ICart> = shoppingCart["cartItems"],
    shippingCost = shoppingCart.shippingCost,
    discount = shoppingCart.discount,
    subTotal = shoppingCart["sub-total"];

  const handleSelectAddess = (e: React.ChangeEvent) => {
    let target = e.target as HTMLInputElement;
    let listItem = target.closest("li") as HTMLLIElement;
  };
  return (
    <motion.section
      variants={{
        visible: { opacity: 1, translateX: "0px" },
        hidden: { opacity: 0, translateX: "-15px" },
      }}
      initial={"hidden"}
      animate={"visible"}
      className="checkout-component "
    >
      <div className="basis-2/3 max-lg:w-full flex flex-col pt-5">
        {/* <header className="w-full py-6 flex items-center justify-between border-b-2 border-Grey-400">
          <h3 className="capitalize font-semibold text-xl">shipping</h3>
          <p className="text-gray-500">(4)</p>
        </header> */}
        <Portal>
          <UserAddressForm />
        </Portal>
      </div>
      <div className="basis-1/3 max-lg:basis-full flex flex-col items-center justify-between gap-2">
        <ul className="w-full flex flex-col mt-12 border border-Grey-300 shadow p-3">
          <h3 className="mb-6 text-xl font-medium capitalize">
            Review your order :
          </h3>
          {cartItems.map((item) => (
            <li className="flex items-start justify-center gap-3 mb-2">
              <span className="flex flex-col basis-1/4">
                <figure className="w-20 overflow-hidden">
                  <img
                    src={item?.thumbnail}
                    alt="product-image"
                    className="w-full object-cover"
                  />
                </figure>
                <p className="mt-2 text-Grey-600">{item.quantity}X</p>
              </span>
              <span className="basis-2/3 flex flex-col items-start justify-center ">
                <p className="text-Primary-700 capitalize text-sm">
                  {item.title}
                </p>
                <small className="text-sm text-Grey-600">
                  {Intl.NumberFormat("en-eg", {
                    style: "currency",
                    currency: "EGP",
                  }).format(item.price)}
                </small>
                <b className="flex gap-2 capitalize mt-3 text-sm">
                  total :
                  <p>
                    {Intl.NumberFormat("en-eg", {
                      style: "currency",
                      currency: "EGP",
                    }).format(item?.price * item?.quantity)}
                  </p>
                </b>
              </span>
            </li>
          ))}
        </ul>
        <FinalOrderReport
          subTotal={subTotal}
          shippingCost={shippingCost}
          discount={discount}
        />
      </div>
    </motion.section>
  );
}

export default CheckoutComponent;
