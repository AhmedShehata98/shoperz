import React from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
type Props = {
  setShowProducts: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  count: number;
  fromCount: number;
  productsLimitSelect: number;
  sortMethod: sortMethods;
  onSortSelect: React.ChangeEventHandler;
  onSelectProductsLimit: React.ChangeEventHandler;
};

function ShopUpperbar({
  setShowProducts,
  title,
  count,
  fromCount,
  sortMethod,
  onSortSelect,
  productsLimitSelect,
  onSelectProductsLimit,
}: Props) {
  return (
    <header className="w-full flex flex-col gap-3 shadow-sm rounded-md border border-Grey-100 p-3 mb-4">
      <div className="flex items-stretch justify-between">
        <h3 className="text-lg font-semibold capitalize">{title}</h3>
        <span className="flex items-center gap-1 capitalize">
          <small className="text-xs text-gray-500">showing</small>
          <b className="text-base">{count}</b>
          <small className="text-xs text-gray-500">from</small>
          <b className="text-base">{fromCount}</b>
        </span>
      </div>
      <div className="flex items-stretch justify-between">
        <span className="flex items-center justify-center gap-3">
          <button
            onClick={() => setShowProducts(false)}
            className="p-2 text-Grey-800 text-lg bg-Grey-200 rounded-md border border-Grey-200 hover:bg-Grey-400"
          >
            <BsGrid3X3GapFill />
          </button>
          <button
            onClick={() => setShowProducts(true)}
            className="p-2 text-Grey-800 text-lg bg-Grey-200 rounded-md border border-Grey-200 hover:bg-Grey-400"
          >
            <FaListUl />
          </button>
        </span>
        <span className="flex max-md:flex-col items-center justify-center gap-3">
          <select
            name="sort-by"
            id="sort-by"
            className="bg-white border border-Grey-200 py-1.5 px-3 text-gray-500 text-sm capitalize font-medium rounded-full focus:outline-none focus:border-Primary-600 focus:text-Primary-800"
            defaultValue={sortMethod}
            onChange={onSortSelect}
          >
            <option value="-createdAt">Newest</option>
            <option value="price">Price: Low to high</option>
            <option value="-price">Price: high to Low</option>
            <option value="reviews">Reviews</option>
            <option value="discount">Discount</option>
          </select>
          <select
            name="product-per-page"
            id="product-per-page"
            defaultValue={productsLimitSelect}
            className="bg-white border border-Grey-200 py-1.5 px-3 text-gray-500 text-sm capitalize font-medium rounded-full focus:outline-none focus:border-Primary-600 focus:text-Primary-800"
            onChange={onSelectProductsLimit}
          >
            <option value="20">20 product per page</option>
            <option value="50">50 product per page</option>
            <option value="10">10 product per page</option>
          </select>
        </span>
      </div>
    </header>
  );
}

export default ShopUpperbar;
