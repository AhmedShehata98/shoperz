import { routes } from "@/constants/Routes";
import { useGetAllCategoriesQuery } from "@/services/shoperzApi.service";
import Link from "next/link";
import React from "react";
import { ImSpinner8 } from "react-icons/im";

function FooterCategoriesColumn() {
  const {
    data: categoriesResponse,
    isLoading,
    isSuccess,
  } = useGetAllCategoriesQuery();
  return (
    <div className="mt-3 lg:mt-0 px-2">
      <b className="capitalize text-lg">categories</b>
      <ul className="grid grid-flow-row-dense mt-6 gap-3">
        {isSuccess &&
          categoriesResponse.data.categories.map((category) => (
            <Link
              className="text-Grey-600 hover:underline"
              href={{
                pathname: routes.shop,
                search: `?category=${category._id}`,
              }}
            >
              {category.name}
            </Link>
          ))}
        {isLoading && (
          <ImSpinner8 className="inline-block text-2xl animate-spin my-auto mx-6" />
        )}
      </ul>
    </div>
  );
}

export default FooterCategoriesColumn;
