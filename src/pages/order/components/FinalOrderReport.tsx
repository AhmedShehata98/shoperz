import React, { useCallback, useEffect, useMemo, useState } from "react";
import visaLogo from "../../../assets/icons/visa.png";
import mastercardLogo from "../../../assets/icons/mastercard.svg";
import paypalLogo from "../../../assets/icons/paypal.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCurrentOrderComponent,
  handleMargefullOrderData,
  selectAppState,
} from "@/redux/slices/app.slice";
import OrderBoxItem from "./OrderBoxItem";

interface OrderReportProps {
  subTotal: number;
  shippingCost: number;
  discount: number;
}
function FinalOrderReport({
  subTotal,
  discount,
  shippingCost,
}: OrderReportProps) {
  const dispatch = useDispatch();

  // const subTotal = orderData.getById("shopping-order")["sub-price"];

  const getNextPage = useCallback(() => {
    dispatch(changeCurrentOrderComponent("order-complete"));
    dispatch(handleMargefullOrderData("order-complete"));
  }, []);

  return (
    <ul className="order-report-box w-full mt-1 mb-4">
      <OrderBoxItem
        data={{
          title: "sub-title ",
          value: Intl.NumberFormat("en-EG", {
            style: "currency",
            currency: "EGP", // display price as country like => EGP , $
            currencySign: "accounting",
            notation: "standard", // displays price in title => 100K ,2M ,4B
          }).format(subTotal || 0),
        }}
      />
      <OrderBoxItem data={{ title: "shipping ", value: "alexsandria - EG" }} />
      <OrderBoxItem data={{ title: "Discount ", value: discount }} />
      <OrderBoxItem data={{ title: "Shipping Cost ", value: shippingCost }} />
      <hr className="block my-4 py-2" />
      <form
        action=""
        className="w-full flex flex-col items-start justify-center gap-3"
      >
        <span className="w-full flex items-start justify-center gap-4">
          <input
            type="checkbox"
            name="confirmation"
            required
            id="confirmation"
            className="accent-Primary-700"
          />
          <label
            htmlFor="confirmation"
            className="leading-4 capitalize text-Grey-700 text-sm cursor-pointer"
          >
            I confirm that my address is 100% correct and WILL NOT hold Top
            Shelf BC liable if this shipment is sent to an incorrect address. *
          </label>
        </span>
        <span className="w-full flex items-start justify-center gap-4">
          <input
            type="checkbox"
            name="email-newsletter"
            id="email-newsletter"
            className="accent-Primary-700"
          />
          <label
            htmlFor="email-newsletter"
            className="leading-4 capitalize text-Grey-700 text-sm cursor-pointer"
          >
            Sign me up to receive email updates and news (optional)
          </label>
        </span>
      </form>
      <button
        className="w-full flex items-center justify-center gap-4 px-4 py-3 rounded-full capitalize text-white bg-Primary-700 font-semibold mt-7 mb-3 hover:bg-Primary-600"
        onClick={() => getNextPage()}
      >
        <p>
          checkout
          <i> - </i>
          {Intl.NumberFormat("en-EG", {
            style: "currency",
            currency: "EGP",
          }).format(subTotal || 0)}
        </p>
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

export default FinalOrderReport;
