import { useState } from "react";
import cashLogo from "../../assets/icons/cash-on-delivery.png";
import { useDispatch } from "react-redux";
import { ICreditCard } from "@/models/shopperz.model";
import { addPaymentData } from "@/redux/slices/app.slice";

type ChashMethodProps = {
  selectPaymentMethod: (e: React.ChangeEvent) => void;
  value: boolean;
};
function ChashMethodItem({ value, selectPaymentMethod }: ChashMethodProps) {
  const dispatch = useDispatch();
  const [feedAmount, setFeedAmount] = useState(15);

  const handleAddPaymentData = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    dispatch(addPaymentData({ id: target.id, feedAmount }));
  };

  return (
    <li className="flex flex-col items-center rounded-md border bg-white shadow p-3">
      <div className="w-full flex">
        <input
          type="checkbox"
          name="upon-receipt"
          id="upon-receipt"
          className="block m-3 accent-Primary-700"
          checked={value}
          onChange={(e: React.ChangeEvent) => {
            selectPaymentMethod(e);
            handleAddPaymentData(e);
          }}
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
