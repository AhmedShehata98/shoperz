import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Brands() {
  const brands = [
    {
      title: "apple",
      value: true,
      name: "apple",
    },
    {
      title: "samsung",
      value: false,
      name: "samsung",
    },
    {
      title: "lg",
      value: false,
      name: "lg",
    },
    {
      title: "huawei",
      value: false,
      name: "huawei",
    },
    {
      title: "lenovo",
      value: false,
      name: "lenovo",
    },
    {
      title: "nokia",
      value: false,
      name: "nokia",
    },
  ];
  return (
    <div className="w-full p-3 flex flex-col items-start justify-start border border-Grey-300 shadow mb-4">
      <h4 className="capitalize mb-4 font-semibold">brands</h4>
      <ul className="grid grid-flow-row gap-2 place-items-start">
        {brands.map((brand) => (
          <li className="flex items-center justify-start flex-row-reverse gap-2 ">
            <label
              htmlFor={brand.name}
              className="text-Grey-700 capitalize text-sm hover:text-Grey-900 cursor-pointer"
            >
              {brand.title}
            </label>
            <input
              type="checkbox"
              name={brand.name}
              id={brand.name}
              checked={brand.value}
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
