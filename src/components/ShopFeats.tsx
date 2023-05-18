import React from "react";
import ShopFeat from "./ShopFeat";
import brand from "../assets/icons-feat/brand.svg";
import card from "../assets/icons-feat/card.svg";
import payment from "../assets/icons-feat/payment.svg";
import shield from "../assets/icons-feat/shoping.svg";
import secure from "../assets/icons-feat/shield.svg";

type Props = {};

const ShopFeats = (props: Props) => {
  const feats = [
    {
      src: secure,
      fontTitle: "guarantee",
      lightTitle: "24 Months",
    },
    { src: card, fontTitle: "Rate Paying", lightTitle: "4 - 12 Month" },
    { src: shield, fontTitle: "Free Delivery", lightTitle: "from $100" },
    { src: payment, fontTitle: "Payments", lightTitle: "Secured" },
    {
      src: brand,
      fontTitle: "Brands",
      lightTitle: "Only Top",
    },
  ];
  return (
    <div className="flex items-center justify-center ">
      <div className="flex max-lg:grid max-lg:grid-cols-2 container justify-between rounded-lg items-center divide-x-[1px] border-[1px] my-8 mt-16">
        {feats.map((el, i) => {
          return (
            <ShopFeat
              src={el.src}
              fontTitle={el.fontTitle}
              lightTitle={el.lightTitle}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ShopFeats;
