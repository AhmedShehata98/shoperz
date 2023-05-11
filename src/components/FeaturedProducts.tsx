import React from "react";
import Product1 from "../assets/products/Product.png";

import Product from "./Product";
import Headtitle from "./Headtitle";

type Props = {};

const FeaturedProducts = (props: Props) => {
  const p = [
    {
      src: Product1,
      name: "Appel iphone 14 pro,Ltop Super REtina xdr oled 6.1",
      price: 1200,
      cate: "Smartphones",
    },
    {
      src: Product1,
      name: "Appel iphone 14 pro,Ltop Super REtina xdr oled 6.1",
      price: 1200,
      cate: "Smartphones",
    },
    {
      src: Product1,
      name: "Appel iphone 14 pro,Ltop Super REtina xdr oled 6.1",
      price: 1200,
      cate: "Smartphones",
    },
    {
      src: Product1,
      name: "Appel iphone 14 pro,Ltop Super REtina xdr oled 6.1",
      price: 1200,
      cate: "Smartphones",
    },
    {
      src: Product1,
      name: "Appel iphone 14 pro,Ltop Super REtina xdr oled 6.1",
      price: 1200,
      cate: "Smartphones",
    },
  ];
  return (
    <div className="container py-10 mx-auto">
      <div className="grid justify-center px-12 mx-auto">
        <div className="py-8">
          <Headtitle title="Featured Products " />
        </div>
        <div className="flex justify-center items-center gap-8 ">
          {p.map((el, i) => {
            return (
              <Product
                key={i}
                src={el.src}
                name={el.name}
                price={el.price}
                cate={el.cate}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
