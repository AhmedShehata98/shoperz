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
import OrderBoxItem from "./OrderBoxItem";

/**
 *
 * Need Optimaize
 *
 */

interface OrderReportProps {
  orders: CartItems;
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

  // useEffect(() => {
  //   const subTotal =
  //     orders?.reduce((prev, curr) => prev + curr.totalPrice, 0) || 0;
  //   const orderTotal = subTotal + shippingCost;
  //   setSubTotal(subTotal);
  //   setOrderTotal(orderTotal);
  // }, [orders]);

  const getNextPage = () => {
    if (loggedin) {
      let fullOrderData = {
        id: "shopping-order",
        cartItems: orders.products,
        "sub-total": orders.total,
        discount: orders.total - orders.discountedTotal,
        shippingCost,
        total: orders.discountedTotal,
      };

      dispatch(changeCurrentOrderComponent("checkout"));
      dispatch(handleAddToOrderData(fullOrderData));
    } else {
      setShowConfirmIsUser(true);
    }
  };
  const applyCoupon = (e: React.MouseEvent) => {
    const target = e.target as Element;
    const input = target.closest("form")?.firstElementChild as HTMLInputElement;
    const couponCode = input.value;
  };

  return (
    <ul className="order-report-box">
      <OrderBoxItem
        data={{
          title: "sub-title ",
          value: Intl.NumberFormat("en-EG", {
            style: "currency",
            currency: "EGP", // display price as country like => EGP , $
            currencySign: "accounting",
            notation: "standard", // displays price in title => 100K ,2M ,4B
          }).format(orders?.discountedTotal || 0),
        }}
      />
      <OrderBoxItem
        data={{
          title: "discount",
          value: Intl.NumberFormat("en-EG", {
            style: "currency",
            currency: "EGP", // display price as country like => EGP , $
            currencySign: "accounting",
            notation: "standard", // displays price in title => 100K ,2M ,4B
          }).format(orders?.discountedTotal - orders?.total || 0),
        }}
      />
      <OrderBoxItem
        data={{
          title: "shipping Cost",
          value: Intl.NumberFormat("en-EG", {
            style: "currency",
            currency: "EGP", // display price as country like => EGP , $
            currencySign: "accounting",
            notation: "standard", // displays price in title => 100K ,2M ,4B
          }).format(shippingCost),
        }}
      />

      <form action="" className="flex items-center justify-between gap-2 my-5">
        <input
          type="text"
          placeholder="discount code"
          className="px-3 py-1 border w-3/5 focus:outline-none focus:border-Primary-600"
        />
        <button
          className="bg-gray-900 text-white px-3 py-1.5 font-medium capitalize rounded-full text-sm"
          onClick={(e: React.MouseEvent) => applyCoupon(e)}
          type="button"
        >
          apply coupon
        </button>
      </form>
      <span className="capitalize text-Grey-700 text-sm">
        get free <b>shipping</b> for orders over{" "}
        <mark className="bg-transparent text-red-500 font-medium">
          EGP 1000
        </mark>{" "}
        <a href="/all-products" className="underline font-bold">
          continue shopping
        </a>
      </span>
      <button
        className="w-full flex items-center justify-center gap-4 px-4 py-3 rounded-md capitalize text-white bg-Primary-700 font-semibold mt-7 mb-3 hover:bg-Primary-600"
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
            <p>
              checkout |{" "}
              {Intl.NumberFormat("en-eg", {
                style: "currency",
                currency: "EGP",
              }).format(orders?.total || 0 + shippingCost)}
            </p>
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
