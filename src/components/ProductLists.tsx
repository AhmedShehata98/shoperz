import React from "react";
import ProductCard from "./ProductCard";
import ColumnProducts from "./ColumnProducts";

type Props = {};

const ProductLists = (props: Props) => {
  return (
    <div className="bg-gray-100">
      <div className=" container pb-10 mx-auto flex max-md:flex-col gap-5 justify-between items-center">
        <ColumnProducts title="Top Rated" />
        <ColumnProducts title="Bestsellers" />
        <ColumnProducts title="Mega Offers" />
      </div>
    </div>
  );
};

export default ProductLists;
