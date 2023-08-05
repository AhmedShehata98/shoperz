import React, { useCallback, useState } from "react";

import CreditMethodItem from "./CreditMethodItem";
import ChashMethodItem from "./ChashMethodItem";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAppState,
  setClientSecret,
  setOrder,
} from "@/redux/slices/app.slice";
import { useCreateOrderMutation } from "@/services/shoperzApi.service";
import useGetToken from "@/hooks/useGetToken";

export default function PaymentMethods() {
  const { token } = useGetToken();
  const dispatch = useDispatch();
  const { selectedAddressId } = useSelector(selectAppState);
  const [paymetnMethod, setPaymentMethod] = useState<"cod" | "card" | "none">(
    "none"
  );
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
    dispatch(setOrder({ order: orderResponse.data.order }));
    setPaymentMethod(method);
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
          value={paymetnMethod === "cod" ? true : false}
          isSendingOrder={isSendingOrder && paymetnMethod === "cod"}
          isOrderWasSentSuccess={
            isOrderWasSentSuccess && paymetnMethod === "cod"
          }
        />
        <CreditMethodItem
          onSelectPaymentMethod={() => handleCreateOrder("card")}
          value={paymetnMethod === "card" ? true : false}
          isSendingOrder={isSendingOrder && paymetnMethod === "card"}
          isOrderWasSentSuccess={
            isOrderWasSentSuccess && paymetnMethod === "card"
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
