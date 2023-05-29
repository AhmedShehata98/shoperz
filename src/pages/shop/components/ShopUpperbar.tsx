import React from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
type Props = { title: string; count: number; fromCount: number };

function ShopUpperbar({ title, count, fromCount }: Props) {
  return (
    <header className="w-full flex flex-col gap-3 shadow-sm rounded-md border border-Grey-100 p-3 mb-4">
      <div className="flex items-stretch justify-between">
        <h3 className="text-lg font-semibold capitalize">{title}</h3>
        <span className="flex items-center gap-1 capitalize">
          <small>showing</small>
          <b>{count}</b>
          <small>from</small>
          <b>{fromCount}</b>
        </span>
      </div>
      <div className="flex items-stretch justify-between">
        <span className="flex items-center justify-center gap-3">
          <button className="p-2 text-Grey-800 text-lg bg-Grey-200 rounded-md border border-Grey-200 hover:bg-Grey-400">
            <BsGrid3X3GapFill />
          </button>
          <button className="p-2 text-Grey-800 text-lg bg-Grey-200 rounded-md border border-Grey-200 hover:bg-Grey-400">
            <FaListUl />
          </button>
        </span>
        <span className="flex items-center justify-center gap-3">
          <select
            name="sort-by"
            id="sort-by"
            className="bg-white border border-Grey-200 py-1.5 px-3 text-gray-700 text-sm capitalize font-medium rounded-full focus:outline-none focus:border-Primary-600 focus:text-Primary-800"
          >
            <option value="default-sorting">default sorting</option>
            <option value="ascending">ascending</option>
            <option value="descending">descending</option>
          </select>
          <select
            name="product-per-page"
            id="product-per-page"
            className="bg-white border border-Grey-200 py-1.5 px-3 text-gray-700 text-sm capitalize font-medium rounded-full focus:outline-none focus:border-Primary-600 focus:text-Primary-800"
          >
            <option value="15-per-page">15 product per page</option>
            <option value="25-per-page">25 product per page</option>
            <option value="35-per-page">35 product per page</option>
            <option value="50-per-page">50 product per page</option>
          </select>
        </span>
      </div>
    </header>
  );
}

export default ShopUpperbar;
