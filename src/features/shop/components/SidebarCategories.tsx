import { useGetAllCategoriesQuery } from "@/services/shoperzApi.service";
import Link from "next/link";
import React from "react";
import { ImSpinner8 } from "react-icons/im";

type Props = {
  onSelectCategory: React.ChangeEventHandler<HTMLInputElement>;
};
export default function SidebarCategories({ onSelectCategory }: Props) {
  const {
    data: categoriesResponse,
    isLoading,
    isError,
    isSuccess,
  } = useGetAllCategoriesQuery();

  const nonOption: Categories = {
    _id: "none",
    name: "none",
    image: "",
    description: "",
    slug: "none",
  };

  return (
    <div className="w-full bg-white flex flex-col items-start justify-center border border-Grey-300 divide-y-2">
      <h4 className="w-full inline-block capitalize my-2 font-semibold px-4">
        categories :
      </h4>
      <ul className="w-full grid grid-flow-row gap-2 p-3">
        {isLoading && (
          <ImSpinner8 className="text-2xl animate-spin mx-auto py-3" />
        )}
        {isSuccess &&
          [nonOption, ...categoriesResponse?.data.categories].map(
            (category, i) => (
              <li key={i} className="flex items-center justify-start gap-3">
                <input
                  type="radio"
                  name="category"
                  id={category._id}
                  value={category._id}
                  onChange={onSelectCategory}
                  className="accent-Primary-700"
                />
                <label
                  htmlFor={category._id}
                  className="text-sm uppercase text-gray-600 font-medium"
                >
                  {category.name}
                </label>
              </li>
            )
          )}
      </ul>
    </div>
  );
}
