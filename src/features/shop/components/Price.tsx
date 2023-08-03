import React, { useState } from "react";
const pricesList = [
  {
    title: "none",
    value: 0,
    isSelected: true,
  },
  {
    title: "grater than 100",
    value: "100",
    isSelected: false,
  },
  {
    title: "grater than 200",
    value: "200",
    isSelected: false,
  },
  {
    title: "grater than 300",
    value: "300",
    isSelected: false,
  },
  {
    title: "grater than 400",
    value: "400",
    isSelected: false,
  },
  {
    title: "grater than 500",
    value: "500",
    isSelected: false,
  },
];
function Price() {
  const [price, setPrice] = useState(pricesList);
  const [inputRangeValue, setInputRangeValue] = React.useState(50);
  const handlePriceRange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    // input range
    setInputRangeValue(ev.target.valueAsNumber);

    // unCheck price selection
    setPrice((price: any[]) =>
      price.map((pr) =>
        pr.value === 0
          ? { ...pr, isSelected: true }
          : { ...pr, isSelected: false }
      )
    );
  };

  const handleSelectPrice = (value: number) => {
    setPrice((price: any[]) =>
      price.map((pr) =>
        pr.value === value
          ? { ...pr, isSelected: true }
          : { ...pr, isSelected: false }
      )
    );
  };

  return (
    <div className="w-full p-4 flex flex-col items-start justify-start border border-Grey-300 shadow mb-4">
      <h4 className="capitalize mb-4 font-semibold">price</h4>
      <ul className="grid grid-flow-row gap-2 place-items-start">
        {price.map(
          (
            prc: {
              value: string | number;
              title:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
              isSelected: boolean;
            },

            idx: React.Key | null | undefined
          ) => (
            <li
              key={idx}
              className="flex items-center justify-start flex-row-reverse gap-2 "
            >
              <label
                htmlFor={prc.value.toString()}
                className="text-Grey-700 capitalize text-sm hover:text-Grey-900 cursor-pointer"
                onClick={() => handleSelectPrice(+prc.value)}
              >
                {prc.title}
              </label>
              <input
                type="radio"
                name={"pmax"}
                id={prc.value.toString()}
                value={prc.value.toString()}
                checked={idx === 0 ? prc.isSelected : undefined}
                className="accent-Primary-700 w-4 cursor-pointer"
                onChange={() => handleSelectPrice(+prc.value)}
              />
            </li>
          )
        )}
      </ul>
      <div className="w-full border-t my-3 py-3">
        <span>
          <input
            type="range"
            name="pmin"
            id="price-interval"
            className="accent-Primary-700"
            min={50}
            max={10e3}
            multiple
            value={inputRangeValue}
            onChange={(e) => handlePriceRange(e)}
          />
          <p>{inputRangeValue}</p>
        </span>
      </div>
    </div>
  );
}

export default Price;
