import { useGetAllCategoriesQuery } from "@/services/shoperzApi.service";
import Link from "next/link";
import React from "react";
import { ImSpinner8 } from "react-icons/im";

export default function SidebarCategories() {
  const {
    data: categoriesResponse,
    isLoading,
    isError,
    isSuccess,
  } = useGetAllCategoriesQuery();

  return (
    <div className="w-full p-3 bg-white flex flex-col items-start justify-center border border-Grey-300">
      <h4 className="capitalize mb-4 font-semibold">categories :</h4>
      <ul className="grid grid-flow-row gap-2">
        {isLoading && (
          <ImSpinner8 className="text-2xl animate-spin mx-auto py-3" />
        )}
        {isSuccess &&
          categoriesResponse?.data.categories.map((category, i) => (
            <li key={i} className="flex items-center justify-start gap-3">
              <input
                type="radio"
                name="category"
                id={category._id}
                value={category._id}
                className="accent-Primary-700"
              />
              <label
                htmlFor={category._id}
                className="text-sm uppercase text-gray-600 font-medium"
              >
                {category.name}
              </label>
            </li>
          ))}
      </ul>
    </div>
  );
}
