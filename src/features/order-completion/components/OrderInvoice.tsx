import React from "react";

type Props = {
  discountedTotal: number;
  totalPrice: number;
};
function OrderInvoice({ discountedTotal, totalPrice }: Props) {
  return (
    <ul className="grid grid-flow-dense basis-full md:basis-1/2 gap-2">
      <li className="flex items-center justify-between gap-2">
        <h4 className="text-lg text-Grey-900 uppercase"> discounted Total </h4>
        <code className="text-Primary-800 font-bold">
          {discountedTotal?.toLocaleString("en-EG", {
            style: "currency",
            currency: "EGP",
          })}
        </code>
      </li>

      <li className="flex items-center justify-between gap-2">
        <h4 className="text-lg text-Grey-900 uppercase"> total </h4>
        <code className="text-Primary-800 font-bold">
          {totalPrice?.toLocaleString("en-EG", {
            style: "currency",
            currency: "EGP",
          })}
        </code>
      </li>
    </ul>
  );
}

export default OrderInvoice;
