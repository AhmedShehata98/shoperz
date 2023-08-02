import React from "react";
const price = [
  {
    title: "grater than 100",
    value: "100",
  },
  {
    title: "grater than 200",
    value: "200",
  },
  {
    title: "grater than 300",
    value: "300",
  },
  {
    title: "grater than 400",
    value: "400",
  },
  {
    title: "grater than 500",
    value: "500",
  },
];
function Price() {
  const [inputRangeValue, setInputRangeValue] = React.useState(50);
  return (
    <div className="w-full p-4 flex flex-col items-start justify-start border border-Grey-300 shadow mb-4">
      <h4 className="capitalize mb-4 font-semibold">price</h4>
      <ul className="grid grid-flow-row gap-2 place-items-start">
        {price.map(
          (
            prc: {
              value: string | undefined;
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
            },
            i: React.Key | null | undefined
          ) => (
            <li
              key={i}
              className="flex items-center justify-start flex-row-reverse gap-2 "
            >
              <label
                htmlFor={prc.value}
                className="text-Grey-700 capitalize text-sm hover:text-Grey-900 cursor-pointer"
              >
                {prc.title}
              </label>
              <input
                type="radio"
                name={"pmax"}
                id={prc.value}
                value={prc.value}
                className="accent-Primary-700 w-4 cursor-pointer"
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
            onChange={(e) => setInputRangeValue(+e.target.value)}
          />
          <p>{inputRangeValue}</p>
        </span>
      </div>
    </div>
  );
}

export default Price;
