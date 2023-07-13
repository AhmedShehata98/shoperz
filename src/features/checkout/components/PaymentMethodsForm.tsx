import React, { useCallback, useState } from "react";

import CreditMethodItem from "./CreditMethodItem";
import ChashMethodItem from "./ChashMethodItem";
import { useDispatch, useSelector } from "react-redux";
import { selectAppState, selectPatmentMethod } from "@/redux/slices/app.slice";

export default function PaymentMethodsForm() {
  const { paymentMethod } = useSelector(selectAppState);
  const dispatch = useDispatch();
  const handleSelectPaymentMethod = useCallback(
    (e: React.ChangeEvent) => {
      const target = e.target as HTMLInputElement;
      dispatch(selectPatmentMethod(target.id));
    },
    [dispatch]
  );

  // create payment method

  return (
    <div className="mt-6">
      <h3 className="mb-2 text-Grey-700 text-xl font-medium capitalize">
        Payments :
      </h3>
      <ul className="grid grid-flow-row gap-2 divide-y border border-Grey-200 bg-Grey-100 shadow-md p-2">
        <CreditMethodItem
          selectPaymentMethod={handleSelectPaymentMethod}
          value={paymentMethod[0].value}
        />
        <ChashMethodItem
          selectPaymentMethod={handleSelectPaymentMethod}
          value={paymentMethod[1].value}
        />
      </ul>
    </div>
    // <form action="" className="flex w-full h-full" onSubmit={handleSubmitPay}>
    //   <CardElement />
    //   <button type="submit">pay now</button>
    // </form>
  );
}
