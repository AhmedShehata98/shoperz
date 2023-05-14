import React from "react";

interface OfferItemProps {
  offerdata: {
    Icon: React.ReactNode;
    title: string;
    subTitle: string;
  };
}
export default function OfferItem({
  offerdata: { Icon, subTitle, title },
}: OfferItemProps) {
  return (
    <li className="offer-item">
      <span className="my-4 p-3 bg-Primary-200 text-Primary-700 rounded-full text-4xl">
        {Icon}
      </span>
      <h4 className="font-medium text-xl">{title}</h4>
      <p className="text-Grey-700 text-xl">{subTitle}</p>
    </li>
  );
}
