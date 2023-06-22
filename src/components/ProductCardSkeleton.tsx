import React from "react";

type Props = {
  dir: "list" | "grid";
};

function ProductCardSkeleton({ dir }: Props) {
  if (dir === "list") {
    return (
      <li className="flex items-center justify-between gap-5 border bg-Grey-100 py-3 px-5">
        <span className="block w-56 h-40 bg-Grey-500 rounded-md animate-pulse"></span>
        <ul className="w-1/3">
          <li className="block w-1/4 h-4 rounded-xl mb-3 bg-Grey-200 animate-pulse"></li>
          <li className="block w-1/2 h-4 rounded-xl mb-2 bg-Grey-200 animate-pulse"></li>
          <li className="block w-3/5 h-4 rounded-xl mb-5 bg-Grey-200 animate-pulse"></li>

          <li className="block w-3/4 h-3 rounded-xl mb-2 bg-Grey-200 animate-pulse"></li>
          <li className="block w-3/5 h-3 rounded-xl mb-2 bg-Grey-200 animate-pulse"></li>
          <li className="block w-3/4 h-3 rounded-xl mb-2 bg-Grey-200 animate-pulse"></li>
        </ul>
        <div className="w-1/3">
          <ul className="flex items-center justify-between gap-3 mb-5">
            <li className="w-1/2 h-9 bg-Grey-400 rounded-full animate-pulse"></li>
            <li className="w-1/2 h-9 bg-Grey-400 rounded-full animate-pulse"></li>
          </ul>
          <span className="block w-24 h-5 rounded-xl bg-Grey-200 my-6 mx-auto animate-pulse"></span>
          <span className="block w-10/12 h-8 rounded-full bg-Grey-400 mx-auto mb-2 animate-pulse"></span>
        </div>
      </li>
    );
  } else {
    return (
      <li className="flex flex-col items-start justify-start bg-Grey-100 border p-4">
        <span className="block w-1/3 h-3 rounded-xl bg-Grey-200 mb-3 animate-pulse"></span>
        <span className="block w-1/2 h-3 rounded-xl bg-Grey-400 animate-pulse"></span>
        <span className="block w-2/3 h-28 rounded bg-Grey-500 mx-auto mt-12 animate-pulse"></span>
        <ul className="w-full flex items-center justify-between mt-auto mb-4">
          <li className="block w-1/3 h-4 rounded-xl bg-Grey-200 animate-pulse"></li>
          <li className="block w-9 h-9 rounded-full bg-Grey-400 animate-pulse"></li>
        </ul>
      </li>
    );
  }
}

export default ProductCardSkeleton;
