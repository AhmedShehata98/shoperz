import React, { useCallback, useState } from "react";

import CreditMethodItem from "./CreditMethodItem";
import ChashMethodItem from "./ChashMethodItem";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAppState,
  setClientSecret,
  setOrder,
  setPaymentMethod,
} from "@/redux/slices/app.slice";
import { useCreateOrderMutation } from "@/services/shoperzApi.service";
import useGetToken from "@/hooks/useGetToken";

export default function PaymentMethods() {
  const { token } = useGetToken();
  const dispatch = useDispatch();
  const { selectedAddressId, paymentMethod } = useSelector(selectAppState);

  const [
    createOrderResquest,
    { isLoading: isSendingOrder, isSuccess: isOrderWasSentSuccess },
  ] = useCreateOrderMutation();

  async function handleCreateOrder(method: "cod" | "card") {
    const orderResponse = await createOrderResquest({
      addressId: selectedAddressId,
      method,
      token,
    }).unwrap();
    if (method === "card") {
      dispatch(
        setClientSecret({ clientSecret: orderResponse.data.clientSecret })
      );
    }
    dispatch(
      setOrder({
        order:
          method === "card" ? orderResponse.data.order : orderResponse.data,
      })
    );
    dispatch(setPaymentMethod({ paymentMethod: method }));
  }

  // create payment method

  return (
    <div className="mt-6">
      <h3 className="mb-2 text-Grey-700 text-xl font-medium capitalize">
        Payments :
      </h3>
      <ul className="grid grid-flow-row gap-2 divide-y border border-Grey-200 bg-Grey-100 shadow-md p-2">
        <ChashMethodItem
          onSelectPaymentMethod={() => handleCreateOrder("cod")}
          value={paymentMethod === "cod" ? true : false}
          isSendingOrder={isSendingOrder && paymentMethod === "cod"}
          isOrderWasSentSuccess={
            isOrderWasSentSuccess && paymentMethod === "cod"
          }
        />
        <CreditMethodItem
          onSelectPaymentMethod={() => handleCreateOrder("card")}
          value={paymentMethod === "card" ? true : false}
          isSendingOrder={isSendingOrder && paymentMethod === "card"}
          isOrderWasSentSuccess={
            isOrderWasSentSuccess && paymentMethod === "card"
          }
        />
      </ul>
    </div>
    // <form action="" className="flex w-full h-full" onSubmit={handleSubmitPay}>
    //   <CardElement />
    //   <button type="submit">pay now</button>
    // </form>
  );
}
