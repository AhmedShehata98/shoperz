import FinalOrderReport from "@/pages/order/components/FinalOrderReport";
import UserAddressForm from "@/pages/order/components/UserAddressForm";
import React, { useState, useCallback } from "react";
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
import OrdersPreviewListProps from "./OrdersPreviewList";
import Portal from "@/hooks/Protal";
import PaymentMethods from "./PaymentMethods";
import UserAddress from "./UserAddress";

interface CheckoutProps {}

function CheckoutComponent() {
  const [showAddressForm, setShowAddressForm] = useState(false);
  const { orderData } = useSelector(selectAppState);
  const shoppingCart = orderData.getById("shopping-order"),
    cartItems: Array<ICart> = shoppingCart["cartItems"],
    shippingCost = shoppingCart.shippingCost,
    discount = shoppingCart.discount,
    subTotal = shoppingCart["sub-total"];

  const showAddressFormModel = useCallback((state: boolean) => {
    setShowAddressForm(state);
  }, []);

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

        <UserAddress />
        <PaymentMethods />
        {showAddressForm ? (
          <Portal>
            <UserAddressForm setIsShowing={showAddressFormModel} />
          </Portal>
        ) : null}
      </div>
      <div className="basis-1/3 max-lg:basis-full flex flex-col items-center justify-between gap-2">
        <OrdersPreviewListProps cartItems={cartItems} />
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
