import React from "react";
import ProductCard from "./ProductCard";
import CustomHeading from "./CustomHeading";

function TopRatedProducts() {
  return (
    <div>
      <CustomHeading title="Top Rated" />
      <ul>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ul>
    </div>
  );
}

export default TopRatedProducts;
