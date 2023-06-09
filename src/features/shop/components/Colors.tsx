import React, { useState } from "react";

type Props = {};
const data = [
  { id: 1, color: "#000000", isSelected: false },
  { id: 2, color: "#FFFFFF", isSelected: false },
  { id: 3, color: "#319DFF", isSelected: false },
  { id: 4, color: "#FFDE31", isSelected: false },
  { id: 5, color: "#FF316A", isSelected: false },
  { id: 6, color: "#0DA678", isSelected: false },
  { id: 7, color: "#9E13F3", isSelected: true },
  { id: 8, color: "#FFAA04", isSelected: false },
  { id: 9, color: "#FF64DD", isSelected: false },
  { id: 10, color: "#17D1DD", isSelected: false },
];
const Colors = (props: Props) => {
  const [color, setColor] = useState(data);

  const handleSelectColor = (id: string | Number) => {
    setColor((prev) => {
      const newColorData = prev.map((e) =>
        e.id === id
          ? {
              ...e,
              isSelected: true,
            }
          : {
              ...e,
              isSelected: false,
            }
      );

      return newColorData;
    });
  };

  return (
    <div className="w-full shadow-md p-4">
      <h4 className="capitalize mb-4 font-semibold">Colours</h4>
      <div className="grid grid-cols-5 w-full gap-y-4">
        {data.map((color) => {
          return (
            <li
              key={color.id}
              onClick={() => handleSelectColor(color.id)}
              data-color={color.color}
              className={`block w-8 h-8 rounded-lg shadow-2xl border-[1px] cursor-pointer`}
              style={{
                backgroundColor: color.color,
              }}
            ></li>
          );
        })}
      </div>
    </div>
  );
};

export default Colors;
