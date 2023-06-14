import React from "react";
import ProductCard from "./ProductCard";
import CustomHeading from "./CustomHeading";

function BestSellerProducts() {
  return (
    <div>
      <CustomHeading title="Best Seller" />
      <ul>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ul>
    </div>
  );
}

export default BestSellerProducts;
