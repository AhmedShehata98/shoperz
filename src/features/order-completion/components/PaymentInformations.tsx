import React from "react";

type Props = {
  payment: { method: string; status: OrderStatus; _id: string } | undefined;
};
function PaymentInformations({ payment }: Props) {
  return (
    <ul className="grid grid-flow-dense gap-2">
      <li className="flex items-center justify-between gap-2">
        <h4 className="text-lg text-Grey-900 uppercase"> pay method : </h4>
        <code className="text-Primary-800 font-bold uppercase">
          {payment?.method?.split("_").join(" ") ?? "unknown"}
        </code>
      </li>
    </ul>
  );
}

export default PaymentInformations;
