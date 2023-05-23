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
import { BsCashStack, BsFillBoxSeamFill } from "react-icons/bs";
import { ImPriceTags } from "react-icons/im";
import { MdOutlineLocalShipping } from "react-icons/md";
import { TbBrandCashapp } from "react-icons/tb";
import CustomButton from "@/components/CustomButton";
import Link from "next/link";
import { routes } from "@/constants/Routes";

/**
 *
 * Need Optimaize
 *
 */

interface OrderSummeryProps {
  orders: CartItems;
  loggedin: boolean;
  setShowConfirmIsUser: React.Dispatch<React.SetStateAction<boolean>>;
  apiCallState: IApiCallState;
}
function OrderSummery({
  orders,
  loggedin,
  setShowConfirmIsUser,
  apiCallState,
}: OrderSummeryProps) {
  const dispatch = useDispatch();
  const shippingCost = 50;
  const { push } = useRouter();
  const { order, checkout } = routes.shoppingCart;
  const numberFormatOptions: Intl.NumberFormatOptions = {
    style: "currency",
    currency: "EGP", // display price as country like => EGP , $
    currencySign: "accounting",
    notation: "standard", // displays price in title => 100K ,2M ,4B
  };

  const getNextPage = () => {
    if (loggedin) {
      push({ pathname: order, query: { to: checkout } });
      let fullOrderData = {
        id: "shopping-order",
        cartItems: orders.products,
        "sub-total": orders.total,
        discount: orders.total - orders.discountedTotal,
        shippingCost,
        total: orders.discountedTotal,
      };
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
    <div className="order-summery-box">
      <h4 className="text-lg font-bold capitalize pt-2 pb-3 mb-3 border-b">
        summery
      </h4>
      <ul className="grid grid-flow-row px-1 py-2 border-b">
        <OrderBoxItem
          data={{
            title: "sub-price",
            value: orders?.discountedTotal,
          }}
          Icon={<BsCashStack />}
        />

        <OrderBoxItem
          data={{
            title: "discount",
            value: orders?.total - orders?.discountedTotal,
          }}
          Icon={<ImPriceTags />}
        />
        <OrderBoxItem
          data={{
            title: "shipping cost",
            value: shippingCost,
          }}
          Icon={<MdOutlineLocalShipping />}
        />
      </ul>
      <div className="flex items-center justify-between gap-6 my-2 pb-3 border-b px-1">
        <span className="flex items-center justify-center gap-2">
          <span className="block p-2 text-xl bg-Grey-200 text-Grey-800 rounded-md shadow-md">
            <BsFillBoxSeamFill />
          </span>
          <span className="flex flex-col text-sm capitalize">
            <b className="m-0">
              {Intl.NumberFormat("en-EG", {
                currencySign: "accounting",
                notation: "standard",
              }).format(orders?.totalQuantity || 0)}
            </b>
            <small className="leading-3 text-Grey-700">quantity</small>
          </span>
        </span>
        <span className="flex items-center justify-center gap-2">
          <span className="block p-2 text-xl bg-Grey-200 text-Grey-800 rounded-md shadow-md">
            <TbBrandCashapp />
          </span>
          <span className="flex flex-col text-sm capitalize">
            <b className="m-0">
              {Intl.NumberFormat("en-EG", numberFormatOptions).format(
                orders?.total || 0
              )}
            </b>
            <small className="leading-3 text-Grey-700 ">total</small>
          </span>
        </span>
      </div>
      <CustomButton
        onClick={getNextPage}
        type="button"
        extraClassName="w-full my-4"
      >
        checkout
      </CustomButton>
      <div className="flex flex-col max-lg:items-center mt-1 mb-3">
        <p className="text-gray-400 font-medium text-sm">
          SECURE PAYMENTS PROVIDED BY
        </p>
        <span className="flex items-center gap-9 lg:gap-6">
          <img src={visaLogo.src} alt="payments-logo" />
          <img src={mastercardLogo.src} alt="payments-logo" />
          <img src={paypalLogo.src} alt="payments-logo" />
        </span>
      </div>
    </div>
  );
}

export default OrderSummery;
