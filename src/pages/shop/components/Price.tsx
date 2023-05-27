import React from "react";
const price = [
  {
    title: "< 50",
    value: true,
    name: "< 50",
  },
  {
    title: "100 200",
    value: false,
    name: "100 200",
  },
  {
    title: "200 300",
    value: false,
    name: "200 300",
  },
  {
    title: "300 400",
    value: false,
    name: "300 400",
  },
  {
    title: "400 500",
    value: false,
    name: "400 500",
  },
  {
    title: "> 500",
    value: false,
    name: "> 500",
  },
];
function Price() {
  const [inputRangeValue, setInputRangeValue] = React.useState(50);
  return (
    <div className="w-full p-3 flex flex-col items-start justify-start border border-Grey-300 shadow mb-4">
      <h4 className="capitalize mb-4 font-semibold">price</h4>
      <ul className="grid grid-flow-row gap-2 place-items-start">
        {price.map((prc) => (
          <li className="flex items-center justify-start flex-row-reverse gap-2 ">
            <label
              htmlFor={prc.name}
              className="text-Grey-700 capitalize text-sm hover:text-Grey-900 cursor-pointer"
            >
              {prc.title}
            </label>
            <input
              type="checkbox"
              name={prc.name}
              id={prc.name}
              checked={prc.value}
              className="accent-Primary-700 w-4 cursor-pointer"
            />
          </li>
        ))}
      </ul>
      <div className="w-full border-t my-3 py-3">
        <span className="flex items-center gap-2">
          <input
            type="checkbox"
            name="price-interval"
            id="price-interval"
            className="accent-Primary-700 w-4 cursor-pointer"
          />
          <label
            htmlFor="price-interval"
            className="text-Grey-700 capitalize text-sm hover:text-Grey-900 cursor-pointer"
          >
            price interval
          </label>
        </span>
        <span>
          <input
            type="range"
            name="price-interval"
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
