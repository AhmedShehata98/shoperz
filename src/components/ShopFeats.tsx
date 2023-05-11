import React from "react";
import ShopFeat from "./ShopFeat";
import brand from "../assets/icons-feat/shield.svg";
import card from "../assets/icons-feat/shield.svg";
import payment from "../assets/icons-feat/shield.svg";
import secure from "../assets/icons-feat/shield.svg";
import shield from "../assets/icons-feat/shield.svg";

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
      <div className="flex container justify-center rounded-lg items-center divide-x-[1px] border-2 my-8">
        {feats.map((el, i) => {
          console.log(el);
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
