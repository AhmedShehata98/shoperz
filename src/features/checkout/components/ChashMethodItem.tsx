import { useState } from "react";
import cashLogo from "@/assets/icons/cash-on-delivery.png";
import { useDispatch } from "react-redux";
import { CgSpinnerTwo } from "react-icons/cg";

type ChashMethodProps = {
  onSelectPaymentMethod: React.ChangeEventHandler;
  value: boolean;
  isSendingOrder: boolean;
  isOrderWasSentSuccess: boolean;
};
function ChashMethodItem({
  value,
  onSelectPaymentMethod,
  isSendingOrder,
}: ChashMethodProps) {
  const [feedAmount, setFeedAmount] = useState(15);

  return (
    <li className="flex flex-col items-center rounded-md border bg-white shadow p-3">
      <div className="w-full flex">
        <input
          type="checkbox"
          name="upon-receipt"
          id="upon-receipt"
          className="block m-3 accent-Primary-700"
          checked={value}
          onChange={onSelectPaymentMethod}
        />
        <label htmlFor="upon-receipt" className="basis-full flex flex-col p-3">
          <span className="flex items-center justify-between">
            <figcaption className="flex flex-col">
              <b className="capitalize"> Payment in cash upon receipt </b>
              <small className="capitalize">
                {" "}
                additonal fees :{" "}
                {Intl.NumberFormat("en-eg", {
                  style: "currency",
                  currency: "EGP",
                }).format(feedAmount)}
              </small>
            </figcaption>
            <span className="flex items-center justify-center w-10 h-10 me-auto ms-4">
              {isSendingOrder && (
                <CgSpinnerTwo className="inline-block text-3xl animate-spin text-Primary-800" />
              )}
            </span>
            <figure className="flex items-center justify-center gap-6">
              <img src={cashLogo.src} alt="cash.svg" />
            </figure>
          </span>
        </label>
      </div>
    </li>
  );
}

export default ChashMethodItem;
