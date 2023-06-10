import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import visaLogo from "../../../assets/icons/visa.png";
import mastercardLogo from "../../../assets/icons/mastercard.svg";
import paypalLogo from "../../../assets/icons/paypal.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCurrentOrderComponent,
  selectAppState,
} from "@/redux/slices/app.slice";
import OrderBoxItem from "./OrderBoxItem";
import { MdDiscount } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { IoIosCash } from "react-icons/io";

interface OrderReportProps {
  total: number;
  children: Array<React.ReactNode>;
}
function FinalOrderReport({ total, children }: OrderReportProps) {
  const dispatch = useDispatch();
  const { paymentMethod } = useSelector(selectAppState);
  const [isAgreement, setIsAgreement] = useState(false);
  const confirmationLabel = useRef<HTMLLabelElement | null>(null);

  const getNextPage = useCallback(() => {
    if (isAgreement === false) {
      confirmationLabel.current?.classList.add("text-red-700");
    } else {
      dispatch(changeCurrentOrderComponent("order-complete"));
    }
    if (isAgreement) {
      confirmationLabel.current?.classList.remove("text-red-700");
    }
  }, [isAgreement]);

  const handleAgreementCheck = useCallback(() => {
    setIsAgreement((prev) => !prev);
  }, [isAgreement]);

  return (
    <ul className="order-report-box w-full mt-1 mb-4">
      {children}
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
            checked={isAgreement}
            onChange={handleAgreementCheck}
          />
          <label
            htmlFor="confirmation"
            className="leading-4 capitalize text-Grey-700 text-sm cursor-pointer"
            ref={confirmationLabel}
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
          }).format(total || 0)}
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
