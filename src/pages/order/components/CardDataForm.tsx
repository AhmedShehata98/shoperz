import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiFillCloseSquare } from "react-icons/ai";
import visaLogo from "../../../assets/icons/visa.png";
import mastercardLogo from "../../../assets/icons/mastercard.svg";
import creditCardLogo from "../../../assets/icons/credit-card.png";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GoCreditCard } from "react-icons/go";
import { ICreditCard } from "@/models/shopperz.model";

interface CardDataFormProps {
  onChange: Function;
  setIsShowing: (state: boolean) => void;
  handleAddNewCardData: (cardData: ICreditCard) => void;
}
export default function CardDataForm({
  onChange,
  setIsShowing,
  handleAddNewCardData,
}: CardDataFormProps) {
  const [formData, setFormData] = useState<ICreditCard>({
    "card-number": "",
    "expire-date": { asDate: new Date(), asString: "" },
    cvv: "",
  });
  const [cardProviderImage, setCardProviderImage] = useState<any>({ src: "" });
  const handleGetValue = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const name = target.name;
    const value = target.value;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "card-number") {
      let cardTypeImage = { src: "" };
      if (value.startsWith("4")) {
        setCardProviderImage(visaLogo);
      } else if (value.startsWith("2") || value.startsWith("5")) {
        setCardProviderImage(mastercardLogo);
      } else {
        setCardProviderImage(creditCardLogo);
      }
    }
  };

  return (
    <div className="absolute z-10 inset-0 flex items-center justify-center bg-Grey-800 bg-opacity-60">
      <motion.form
        action=""
        variants={{
          hidden: { opacity: 0, translateY: "20px" },
          visible: { opacity: 1, translateY: "-0px" },
        }}
        initial={"hidden"}
        animate={"visible"}
        className="flex flex-col items-stretch justify-start w-full md:w-3/6 bg-white p-3 rounded-md"
      >
        <header className="flex items-center justify-between pb-2 my-2 border-b-2 border-Primary-700">
          <h3 className="text-lg font-semibold uppercase">add card :</h3>
          <button
            className="text-rose-700 text-3xl m-3"
            onClick={() => setIsShowing(false)}
            type="button"
          >
            <AiFillCloseSquare />
          </button>
        </header>
        <div className="flex items-center justify-between gap-3 mb-4 py-2 px-4">
          <span className="basis-11/12 flex flex-col gap-2 capitalize">
            <label
              htmlFor="card-number"
              className="font-medium text-Grey-700"
              aria-required
            >
              card number *
            </label>
            <input
              type="number"
              id="card-number"
              name="card-number"
              required
              className="border px-4 py-2 focus:outline-none focus:border-Primary-500"
              placeholder="your first name"
              value={formData["card-number"]}
              onChange={(e: React.ChangeEvent) => handleGetValue(e)}
            />
          </span>
          <figure className="flex flex-col w-14 self-end">
            <img src={cardProviderImage.src} alt="card-type" />
          </figure>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center justify-between mb-4 py-2 px-4">
          <span className="flex flex-col gap-2 capitalize">
            <label
              htmlFor="expire-date"
              className="font-medium text-Grey-700"
              aria-required
            >
              expire date *
            </label>
            <DatePicker
              onChange={(date) =>
                setFormData((prev: any) => {
                  const month = date?.getMonth()! + 1,
                    year = date?.getFullYear();
                  return {
                    ...prev,
                    "expire-date": {
                      asDate: date,
                      asString: `${month}-${year}`,
                    },
                  };
                })
              }
              dateFormat="MM/yyyy"
              showMonthYearPicker
              id="expire-date"
              name="expire-date"
              required
              className="!w-full border px-4 py-2 focus:outline-none focus:border-Primary-500"
              selected={formData["expire-date"].asDate}
            />
          </span>
          <span className="flex flex-col gap-2 capitalize">
            <label
              htmlFor="cvv"
              className="font-medium text-Grey-700 uppercase"
              aria-required
            >
              cvv code *
            </label>
            <input
              type="number"
              id="cvv"
              name="cvv"
              required
              maxLength={3}
              max={3}
              className="border px-4 py-2 focus:outline-none focus:border-Primary-500"
              placeholder="your first name"
              value={formData["cvv"]}
              onChange={(e: React.ChangeEvent) => handleGetValue(e)}
            />
          </span>
        </div>
        <div className="grid grid-cols-1 gap-3 items-center justify-between mb-4 py-2 px-4">
          <button
            className="rounded-md px-2 py-3 bg-Primary-600 text-white capitalize hover:bg-Primary-500"
            onClick={() => {
              handleAddNewCardData(formData);
              setIsShowing(false);
            }}
          >
            add card
          </button>
        </div>
      </motion.form>
    </div>
  );
}
