import React, { useCallback, useEffect, useMemo, useState } from "react";

interface OrderReportProps {
  orders?: Array<{
    currency: string;
    image: string;
    price: number;
    productName: string;
    quantity: number;
  }>;
}
function OrderReport({ orders }: OrderReportProps) {
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const [orderTotal, setOrderTotal] = useState(0);
  const shippingCost = 50;

  const calcTotal = useMemo(
    () => orders?.reduce((prev, curr) => prev + curr.price, 0),
    [orders]
  );

  useEffect(() => {
    setTotal(calcTotal || 0);
    setOrderTotal(total + shippingCost);
  }, [orders]);

  return (
    <ul className="w-1/3 border-2 border-Grey-100 rounded-md p-3 mt-6">
      <li className="flex items-center justify-between gap-4 capitalize mb-3">
        <p className="text-Grey-600 text-sm font-medium">sub-total </p>
        <b>L.E {total},00</b>
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
      <button className="w-full flex items-center justify-center gap-4 px-4 py-3 rounded-full capitalize text-white bg-Primary-700 font-semibold mt-7 mb-3 hover:bg-Primary-600">
        <p>checkout </p> <i>|</i> <p>L.E-{orderTotal}</p>
      </button>
    </ul>
  );
}

export default OrderReport;
