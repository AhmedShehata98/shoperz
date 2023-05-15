import React, { useCallback, useState } from "react";
import cashLogo from "../../../assets/icons/cash-on-delivery.png";
import mastercardLogo from "../../../assets/icons/mastercard.svg";
import visaLogo from "../../../assets/icons/visa.png";
import Portal from "@/hooks/Protal";
import CardDataForm from "./CardDataForm";
import { ICreditCard } from "@/models/shopperz.model";

type CreditMethodProps = {
  onChange: Function;
  value: any;
};
function CreditMethod({ value, onChange }: CreditMethodProps) {
  const [paymentsCards, setPaymentsCards] = useState<Array<ICreditCard>>([
    {
      "card-number": "2234567891234567",
      "expire-date": { asDate: new Date(), asString: "" },
      cvv: "445",
    },
  ]);

  const [showAddCartModal, setShowAddCartModal] = useState(true);

  const handleSetCard = useCallback((data: Object) => {
    // const target = e.target as HTMLInputElement,
    //   name = target.name,
    //   value = target.value;
  }, []);

  const handleAddNewCardData = (cardData: ICreditCard) =>
    setPaymentsCards((cards) => [...cards, cardData]);

  return (
    <li className="flex flex-col items-center rounded-md shadow hover:bg-Grey-100 p-1">
      <div className="w-full flex">
        <input
          type="checkbox"
          name="credit-card"
          id="credit-card"
          className="block m-3 accent-Primary-700"
          checked={value}
          onChange={(e: React.ChangeEvent) => onChange(e, paymentsCards)}
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
          {paymentsCards.map((card) => {
            console.log(typeof card["card-number"]);
            return (
              <li key={card["card-number"]} className="flex gap-6 px-4 py-2">
                <figure className="px-3 py-2 rounded-md shadow-md">
                  {card["card-number"].startsWith("4") ? (
                    <img src={visaLogo.src} alt="card-type" />
                  ) : null}
                  {card["card-number"].startsWith("2") ||
                  card["card-number"].startsWith("5") ? (
                    <img src={mastercardLogo.src} alt="card-type" />
                  ) : null}
                </figure>
                <span className="flex items-center gap-3">
                  <p>card is ends with :</p>
                  <code>{card["card-number"].split("").splice(-4)}</code>
                </span>
              </li>
            );
          })}
        </ul>
        <button
          type="button"
          className="block bg-Primary-600 text-white w-[99%] p-2 capitalize hover:bg-Primary-500 m-2"
          onClick={() => setShowAddCartModal(true)}
        >
          add card
        </button>
      </div>
      {showAddCartModal ? (
        <Portal>
          <CardDataForm
            setIsShowing={setShowAddCartModal}
            onChange={handleSetCard}
            handleAddNewCardData={handleAddNewCardData}
          />
        </Portal>
      ) : null}
    </li>
  );
}

type ChashMethodProps = {
  onChange: Function;
  value: any;
};
function ChashMethod({ value, onChange }: ChashMethodProps) {
  const [feedAmount, setFeedAmount] = useState(15);

  return (
    <li className="flex flex-col items-center rounded-md shadow hover:bg-Grey-100 p-1">
      <div className="w-full flex">
        <input
          type="checkbox"
          name="upon-receipt"
          id="upon-receipt"
          className="block m-3 accent-Primary-700"
          checked={value}
          onChange={(e: React.ChangeEvent) => onChange(e)}
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

export default function PaymentMethods() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState([
    {
      id: "credit-card",
      value: false,
      paymentData: {},
    },
    {
      id: "upon-receipt",
      value: false,
      paymentData: {},
    },
  ]);

  const handleSelectPaymentMethod = useCallback(
    (e: React.ChangeEvent, data: {}) => {
      const target = e.target as HTMLInputElement;

      setSelectedPaymentMethod((prev) =>
        prev.map((method) =>
          method.id === target.id
            ? { ...method, value: !method.value, paymentData: data }
            : method
        )
      );
    },
    []
  );

  return (
    <div className=" mt-6">
      <h3 className="mb-2 text-Grey-700 text-xl font-medium capitalize">
        Payments :
      </h3>
      <ul className="grid grid-flow-row gap-2 divide-y border border-Grey-200 shadow-md p-2">
        <CreditMethod
          onChange={handleSelectPaymentMethod}
          value={selectedPaymentMethod[0].value}
        />
        <ChashMethod
          onChange={handleSelectPaymentMethod}
          value={selectedPaymentMethod[1].value}
        />
      </ul>
    </div>
  );
}
