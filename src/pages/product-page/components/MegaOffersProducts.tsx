import React from "react";
import CustomHeading from "./CustomHeading";
import ProductCard from "./ProductCard";

function MegaOffersProducts() {
  return (
    <div>
      <CustomHeading title="Mega Offers" />
      <ul>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ul>
    </div>
  );
}

export default MegaOffersProducts;
