import React from "react";

type Props = {};
const data = [
  "#000000",
  "#FFFFFF",
  "#319DFF",
  "#FFDE31",
  "#FF316A",
  "#0DA678",
  "#9E13F3",
  "#FFAA04",
  "#FF64DD",
  "#17D1DD",
];
const Colors = (props: Props) => {
  return (
    <div className="w-full shadow-md p-4">
      <h4 className="capitalize mb-4 font-semibold">Colours</h4>
      <div className="grid grid-cols-5 w-full gap-y-4">
        {data.map((el, i) => {
          return (
            <li
              key={i}
              data-color={el}
              className="block w-8 h-8 rounded-md shadow-2xl border-[1px]"
              style={{ backgroundColor: el }}
            ></li>
          );
        })}
      </div>
    </div>
  );
};

export default Colors;
