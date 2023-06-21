import clsx from "clsx";
import React from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
type Props = {
  onChangeProductsView: React.MouseEventHandler;
  title: string;
  count: number;
  fromCount: number;
  productsLimitSelect: number;
  sortMethod: sortMethods;
  currentProductView: "list" | "grid";
  onSortSelect: React.ChangeEventHandler;
  onSelectProductsLimit: React.ChangeEventHandler;
};

function ShopUpperbar({
  onChangeProductsView,
  title,
  count,
  fromCount,
  sortMethod,
  currentProductView,
  productsLimitSelect,
  onSortSelect,
  onSelectProductsLimit,
}: Props) {
  return (
    <header className="shop-upperbar">
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
            onClick={onChangeProductsView}
            data-view={"grid"}
            className={"switch-products-view-btn"}
            disabled={currentProductView === "grid"}
          >
            <BsGrid3X3GapFill className="pointer-events-none" />
          </button>
          <button
            onClick={onChangeProductsView}
            data-view={"list"}
            className={"switch-products-view-btn"}
            disabled={currentProductView === "list"}
          >
            <FaListUl className="pointer-events-none" />
          </button>
        </span>
        <form
          action={""}
          className="flex max-md:flex-col items-center justify-center gap-3"
        >
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
        </form>
      </div>
    </header>
  );
}

export default ShopUpperbar;
