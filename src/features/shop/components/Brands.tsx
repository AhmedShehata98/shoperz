import { useGetAllProductsQuery } from "@/services/shoperzApi.service";
import React from "react";
import { ImSpinner8 } from "react-icons/im";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Brands() {
  const [brands, setBrands] = React.useState<string[]>([]);
  const {
    data: ProductsResponse,
    isLoading,
    isSuccess,
  } = useGetAllProductsQuery({ limit: 6 });
  React.useEffect(() => {
    if (isSuccess) {
      const products = ProductsResponse.data.products;
      const brandsList = products.map((prod) => prod.brand);
      const brandsSet = new Set([...brandsList]);
      setBrands(Array.from(brandsSet));
    }
  }, [isLoading, isSuccess]);

  return (
    <div className="w-full p-4 flex flex-col items-start justify-start border border-Grey-300 shadow">
      <h4 className="capitalize  font-semibold">brands</h4>
      <ul className="grid grid-flow-row gap-2 place-items-start">
        {isLoading && (
          <ImSpinner8 className="text-2xl animate-spin mx-auto py-3" />
        )}
        {isSuccess &&
          brands?.map((brand, i) => (
            <li
              key={i}
              className="flex items-center justify-start flex-row-reverse gap-2 "
            >
              <label
                htmlFor={brand}
                className="select-none text-Grey-700 capitalize text-sm hover:text-Grey-900 cursor-pointer"
              >
                {brand}
              </label>
              <input
                type="checkbox"
                name={"brand"}
                id={brand}
                value={brand}
                className="accent-Primary-700 w-4 cursor-pointer"
              />
            </li>
          ))}
      </ul>
      <button className="flex items-center justify-center gap-2 text-sm mt-4 capitalize text-Grey-700 hover:text-Grey-900">
        <p>show more</p>
        <MdOutlineKeyboardArrowDown />
      </button>
    </div>
  );
}
