import React, { useEffect, useMemo, useState } from "react";
import visaLogo from "../../../assets/icons/visa.png";
import mastercardLogo from "../../../assets/icons/mastercard.svg";
import paypalLogo from "../../../assets/icons/paypal.svg";

interface OrderReportProps {
  orders?: Array<{
    currency: string;
    image: string;
    price: number;
    productName: string;
    quantity: number;
  }>;
}
function FinalOrderReport({ orders }: OrderReportProps) {
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const [orderTotal, setOrderTotal] = useState(0);
  const shippingCost = 50;

  const calcTotal = useMemo(
    () => orders?.reduce((prev, curr) => prev + curr.price, 0),
    [orders]
  );

  const calcOrderTotal = useMemo(
    () => total + shippingCost,
    [total, shippingCost]
  );

  useEffect(() => {
    setTotal(calcTotal || 0);
    setOrderTotal(calcOrderTotal);
  }, [orders, total]);
  return (
    <ul className="w-full lg:w-1/3 border-2 border-Grey-100 rounded-md p-3 mt-6">
      <li className="flex items-center justify-between gap-4 capitalize mb-3">
        <p className="text-Grey-600 text-sm font-medium">sub-total </p>
        <b>L.E {total},00</b>
      </li>
      <li className="flex items-center justify-between gap-4 capitalize mb-3">
        <p className="text-Grey-600 text-sm font-medium">shipping</p>
        <b>alexsandria ,EG%</b>
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
      <span className="flex flex-col gap-3 p-3 capitalize text-Grey-700 text-sm">
        <p className="leading-4">
          I confirm that my address is 100% correct and WILL NOT hold Top Shelf
          BC liable if this shipment is sent to an incorrect address. *
        </p>
        <p className="leading-4">
          Sign me up to receive email updates and news (optional)
        </p>
      </span>
      <button className="w-full flex items-center justify-center gap-4 px-4 py-3 rounded-full capitalize text-white bg-Primary-700 font-semibold mt-7 mb-3 hover:bg-Primary-600">
        <p>checkout </p> <i>|</i> <p>L.E-{orderTotal}</p>
      </button>
      <div className="mt-8 mb-3">
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
