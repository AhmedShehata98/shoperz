import React from "react";
import CustomHeading from "./CustomHeading";
import ProductCard from "@/components/ProductCard";
import { useGetAllProductsQuery } from "@/services/shoperzApi.service";
import ColumnProduct from "@/components/ColumnProduct";

function BestSellerProducts() {
  const { data, isLoading, isSuccess } = useGetAllProductsQuery({
    limit: 5,
  });
  return (
    <div>
      <CustomHeading title="Best Seller" />
      <ul className="grid grid-flow-row my-6">
        {isLoading
          ? [...Array(5).keys()].map((__, idx) => (
              <ColumnProductSkeleton key={idx} />
            ))
          : null}
        {!isLoading && isSuccess
          ? data?.data.products?.map((product) => (
              <ColumnProduct key={product._id} product={product} />
            ))
          : null}
      </ul>
    </div>
  );
}

export default BestSellerProducts;
function ColumnProductSkeleton() {
  return (
    <li className="flex items-center justify-between gap-3 p-3 bg-white border mb-3">
      <span className="block w-1/3 h-20 rounded bg-Grey-500 animate-pulse"></span>
      <ul className="block w-1/2 ">
        <li className="w-3/4 h-3 rounded-xl bg-Grey-200 mb-2 animate-pulse"></li>
        <li className="w-10/12 h-3 rounded-xl bg-Grey-200 mb-4 animate-pulse"></li>
        <li className="w-4/6 h-3 rounded-xl bg-Grey-400 mb-1 animate-pulse"></li>
      </ul>
      <span className="block w-9 h-9 bg-Grey-400 rounded-full self-end animate-pulse"></span>
    </li>
  );
}
