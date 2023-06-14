import { ICreditCard } from "@/models/shopperz.model";
import { BsTrash } from "react-icons/bs";
import mastercardLogo from "../../../assets/icons/mastercard.svg";
import visaLogo from "../../../assets/icons/visa.png";
import { useDispatch } from "react-redux";
import { removeFromCreditCardsList } from "@/redux/slices/app.slice";

type creditCardItemProps = {
  creditcard: ICreditCard;
  setPaymentsCards: (value: React.SetStateAction<ICreditCard[]>) => void;
};
function CreditCardItem({ creditcard, setPaymentsCards }: creditCardItemProps) {
  const dispatch = useDispatch();
  const deleteCreditCard = (cardNumber: string) => {
    dispatch(removeFromCreditCardsList({ cardNumber }));
  };

  return (
    <li className="flex gap-6 px-2 py-2">
      <input
        type="checkbox"
        name="card-item"
        id="card-item"
        className="accent-Primary-300 ms-3"
        checked={creditcard?.isCurrent}
      />
      <label
        htmlFor="card-item"
        className="flex items-center justify-start gap-1"
      >
        <figure className="px-3 py-2 rounded-md shadow-md">
          {creditcard?.["card-number"].startsWith("4") ? (
            <img src={visaLogo.src} alt="card-type" />
          ) : null}
          {creditcard?.["card-number"].startsWith("2") ||
          creditcard?.["card-number"].startsWith("5") ? (
            <img src={mastercardLogo.src} alt="card-type" />
          ) : null}
        </figure>
        <span className="flex items-center gap-3">
          <p>card is ends with :</p>
          <code>{creditcard?.["card-number"].split("").splice(-4)}</code>
        </span>
      </label>
      <button
        className="w-8 h-8 flex items-center justify-center bg-red-200 rounded-full text-lg text-red-800 ms-auto hover:bg-red-400 hover:text-white"
        onClick={() => deleteCreditCard(creditcard?.["card-number"])}
      >
        <BsTrash />
      </button>
    </li>
  );
}

export default CreditCardItem;
