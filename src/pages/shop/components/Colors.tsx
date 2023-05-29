import React from "react";

type Props = {};
const data = [
  { id: 1, color: "#000000", isSelected: false },
  { id: 1, color: "#FFFFFF", isSelected: false },
  { id: 1, color: "#319DFF", isSelected: false },
  { id: 1, color: "#FFDE31", isSelected: false },
  { id: 1, color: "#FF316A", isSelected: false },
  { id: 1, color: "#0DA678", isSelected: false },
  { id: 1, color: "#9E13F3", isSelected: true },
  { id: 1, color: "#FFAA04", isSelected: false },
  { id: 1, color: "#FF64DD", isSelected: false },
  { id: 1, color: "#17D1DD", isSelected: false },
];
const Colors = (props: Props) => {
  return (
    <div className="w-full shadow-md p-4">
      <h4 className="capitalize mb-4 font-semibold">Colours</h4>
      <div className="grid grid-cols-5 w-full gap-y-4">
        {data.map((color) => {
          return (
            <li
              key={color.id}
              data-color={color.color}
              className={`block w-8 h-8 rounded-md shadow-2xl border-[1px]`}
              style={{
                backgroundColor: color.color,
                opacity: color.isSelected ? 0.5 : 1,
              }}
            ></li>
          );
        })}
      </div>
    </div>
  );
};

export default Colors;
