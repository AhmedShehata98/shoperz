import { useGetAllProductsQuery } from "@/services/shoperzApi.service";
import React, { useState } from "react";

type Props = {
  onSelectColor: React.ChangeEventHandler<HTMLInputElement>;
};

const Colors = ({ onSelectColor }: Props) => {
  const [colors, setColors] = useState<string[]>([]);
  const {
    data: ProductsResponse,
    isLoading,
    isSuccess,
  } = useGetAllProductsQuery({ limit: 6 });

  React.useEffect(() => {
    if (isSuccess) {
      const products = ProductsResponse.data.products;
      const colorsList = products.flatMap((prod) => prod.colors);
      const colorsSet = new Set(["", ...colorsList]);
      setColors(Array.from(colorsSet));
    }
  }, [isLoading, isSuccess]);

  return (
    <div className="w-full shadow-md p-4">
      <h4 className="capitalize mb-4 font-semibold">Colours</h4>
      <ul className="w-full flex items-start justify-start gap-3 overflow-x-auto">
        {colors.map((color, idx) => {
          return (
            <li
              key={idx}
              className={`flex items-center justify-center flex-col basis-12 gap-2`}
            >
              <label
                htmlFor={color}
                style={{ backgroundColor: color }}
                className="block w-8 h-8 rounded-lg shadow-2xl border-[1px] cursor-pointer capitalize font-bold"
              >
                {color === "" ? "none" : null}
              </label>
              <input
                type="radio"
                name="color"
                id={color}
                value={color}
                className="accent-Primary-700"
                onChange={onSelectColor}
                // checked={color}
                // onClick={() => handleSelectColor(color)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Colors;
