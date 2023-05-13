import React, { useEffect, useMemo, useState, useCallback } from "react";
import visaLogo from "../../../assets/icons/visa.png";
import mastercardLogo from "../../../assets/icons/mastercard.svg";
import paypalLogo from "../../../assets/icons/paypal.svg";
import { useRouter } from "next/router";
import { SinglyLinkedList } from "@/utils/SinglyLinkedList";
import { useDispatch } from "react-redux";
import {
  changeCurrentOrderComponent,
  handleAddToOrderData,
  handleUpdateOrderData,
} from "@/redux/slices/app.slice";
import { IApiCallState } from "@/models/shopperz.model";

/**
 *
 * Need Optimaize
 *
 */

interface OrderReportProps {
  orders?: Array<{
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    totalPrice: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: Array<string>;
  }>;
  loggedin: boolean;
  setShowConfirmIsUser: React.Dispatch<React.SetStateAction<boolean>>;
  apiCallState: IApiCallState;
}
function OrderReport({
  orders,
  loggedin,
  setShowConfirmIsUser,
  apiCallState,
}: OrderReportProps) {
  const dispatch = useDispatch();
  const [discount, setDiscount] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [orderTotal, setOrderTotal] = useState(0);
  const shippingCost = 50;

  useEffect(() => {
    const subTotal =
      orders?.reduce((prev, curr) => prev + curr.totalPrice, 0) || 0;
    const orderTotal = subTotal + shippingCost;
    setSubTotal(subTotal);
    setOrderTotal(orderTotal);
  }, [orders]);

  const getNextPage = () => {
    if (loggedin) {
      let fullOrderData = {
        id: "shopping-order",
        cartItems: orders,
        "sub-total": subTotal,
        discount,
        shippingCost,
        total: orderTotal,
      };

      dispatch(changeCurrentOrderComponent("checkout"));
      dispatch(handleAddToOrderData(fullOrderData));
    } else {
      setShowConfirmIsUser(true);
    }
  };

  return (
    <ul className="w-full md:w-1/3 border-2 border-Grey-100 rounded-md p-3 mt-6">
      <li className="flex items-center justify-between gap-4 capitalize mb-3">
        <p className="text-Grey-600 text-sm font-medium">sub-total </p>
        <b>L.E {subTotal},00</b>
      </li>
      <li className="flex items-center justify-between gap-4 capitalize mb-3">
        <p className="text-Grey-600 text-sm font-medium">discount</p>
        <b>{discount}%</b>
      </li>
      <li className="flex items-center justify-between gap-4 capitalize mb-3">
        <p className="text-Grey-600 text-sm font-medium">shipping Cost </p>
        <b>L.E {shippingCost}</b>
      </li>
      <form action="" className="flex items-center justify-between gap-2 my-5">
        <input
          type="text"
          placeholder="discount code"
          className=" px-3 py-1.5 border w-3/5 focus:outline-none"
        />
        <button className="bg-Success-100 text-Success-700 px-3 py-1.5 font-medium capitalize rounded-full text-sm">
          apply coupon
        </button>
      </form>
      <span className="capitalize text-Grey-700 text-sm">
        get free <b>shipping</b> for orders over{" "}
        <mark className="bg-transparent text-red-500 font-medium">
          L.E 1000
        </mark>{" "}
        <a href="/all-products" className="underline font-bold">
          continue shopping
        </a>
      </span>
      <button
        className="w-full flex items-center justify-center gap-4 px-4 py-3 rounded-full capitalize text-white bg-Primary-700 font-semibold mt-7 mb-3 hover:bg-Primary-600"
        onClick={getNextPage}
      >
        {apiCallState.isLoading && (
          <>
            <span className="w-6 h-6 border-2 border-Gray-100 border-l-transparent rounded-full animate-spin"></span>
            loading...
          </>
        )}
        {!apiCallState.isLoading && (
          <>
            <p>checkout </p> <i>|</i> <p>L.E {orderTotal},00</p>
          </>
        )}
      </button>
      <div className="flex flex-col max-lg:items-center mt-8 mb-3">
        <p className="text-gray-400 font-medium text-sm">
          SECURE PAYMENTS PROVIDED BY
        </p>
        <span className="flex items-center gap-9 lg:gap-6">
          <img src={visaLogo.src} alt="payments-logo" />
          <img src={mastercardLogo.src} alt="payments-logo" />
          <img src={paypalLogo.src} alt="payments-logo" />
        </span>
      </div>
    </ul>
  );
}

export default OrderReport;
