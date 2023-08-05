import mastercardLogo from "@/assets/icons/mastercard.svg";
import visaLogo from "@/assets/icons/visa.png";
import { CgSpinnerTwo } from "react-icons/cg";

type CreditMethodProps = {
  onSelectPaymentMethod: React.ChangeEventHandler;
  value: boolean;
  isSendingOrder: boolean;
  isOrderWasSentSuccess: boolean;
};
function CreditMethodItem({
  value,
  onSelectPaymentMethod,
  isSendingOrder,
  isOrderWasSentSuccess,
}: CreditMethodProps) {
  return (
    <li className="flex flex-col items-center rounded-md shadow border bg-white p-3">
      <div className="w-full flex">
        <input
          type="checkbox"
          name="credit-card"
          id="credit-card"
          className="block m-3 accent-Primary-700"
          checked={value}
          onChange={onSelectPaymentMethod}
        />
        <label htmlFor="credit-card" className="basis-full flex flex-col p-3">
          <span className="flex items-center justify-between">
            <b className="capitalize"> Debit / credit card </b>
            <span className="flex items-center justify-center w-10 h-10 me-auto ms-4">
              {isSendingOrder && (
                <CgSpinnerTwo className="inline-block text-3xl animate-spin text-Primary-800" />
              )}
            </span>
            <figure className="flex items-center justify-center gap-6">
              <img src={visaLogo.src} alt="visa.svg" />
              <img src={mastercardLogo.src} alt="mastercard.svg" />
            </figure>
          </span>
        </label>
      </div>
      {/* <div className="w-full flex flex-col">
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
      </div> */}
      {/* {showAddCartModal ? (
        <Portal>
          <CardDataForm setIsShowing={setShowAddCartModal} />
        </Portal>
      ) : null} */}
    </li>
  );
}
export default CreditMethodItem;
