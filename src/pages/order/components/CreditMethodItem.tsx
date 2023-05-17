import Portal from "@/hooks/Protal";
import CardDataForm from "./CardDataForm";
import CreditCardItem from "./CreditCardItem";
import mastercardLogo from "../../../assets/icons/mastercard.svg";
import visaLogo from "../../../assets/icons/visa.png";
import { useCallback, useState } from "react";
import { ICreditCard } from "@/models/shopperz.model";
import { addPaymentData, selectAppState } from "@/redux/slices/app.slice";
import { useDispatch, useSelector } from "react-redux";

type CreditMethodProps = {
  selectPaymentMethod: (e: React.ChangeEvent) => void;
  value: any;
};
function CreditMethodItem({ value, selectPaymentMethod }: CreditMethodProps) {
  const dispatch = useDispatch();
  const { creditCardsList } = useSelector(selectAppState);
  const [paymentsCards, setPaymentsCards] = useState<Array<ICreditCard>>([]);
  const [showAddCartModal, setShowAddCartModal] = useState(false);
  const handleAddNewCardData = (cardData: ICreditCard) => {
    setPaymentsCards((cards) => [...cards, cardData]);
  };

  const handleAddPaymentData = useCallback(
    (e: React.ChangeEvent, paymentData: ICreditCard[]) => {
      if (paymentData.length > 0) {
        const target = e.target as HTMLInputElement;
        const selectedCard = paymentData.find((d) => d.isCurrent === true);
        dispatch(addPaymentData({ id: target.id, selectedCard }));
      }
    },
    [showAddCartModal]
  );

  return (
    <li className="flex flex-col items-center rounded-md shadow border bg-white p-3">
      <div className="w-full flex">
        <input
          type="checkbox"
          name="credit-card"
          id="credit-card"
          className="block m-3 accent-Primary-700"
          checked={value}
          onChange={(e: React.ChangeEvent) => {
            selectPaymentMethod(e);
            handleAddPaymentData(e, paymentsCards);
          }}
        />
        <label htmlFor="credit-card" className="basis-full flex flex-col p-3">
          <span className="flex items-center justify-between">
            <b className="capitalize"> Debit / credit card </b>
            <figure className="flex items-center justify-center gap-6">
              <img src={visaLogo.src} alt="visa.svg" />
              <img src={mastercardLogo.src} alt="mastercard.svg" />
            </figure>
          </span>
        </label>
      </div>
      <div className="w-full flex flex-col">
        <ul className="grid grid-flow-row gap-1">
          {creditCardsList.map((card) => (
            <CreditCardItem
              key={card["card-number"]}
              creditcard={card}
              setPaymentsCards={setPaymentsCards}
            />
          ))}
        </ul>
        <button
          type="button"
          className="block bg-Primary-600 text-white w-full p-2 capitalize hover:bg-Primary-500"
          onClick={() => setShowAddCartModal(true)}
        >
          add credit card
        </button>
      </div>
      {showAddCartModal ? (
        <Portal>
          <CardDataForm setIsShowing={setShowAddCartModal} />
        </Portal>
      ) : null}
    </li>
  );
}
export default CreditMethodItem;
