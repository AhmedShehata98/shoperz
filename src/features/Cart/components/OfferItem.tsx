import React from "react";

interface OfferItemProps {
  offerdata: {
    Icon: React.ReactNode;
    title: string;
    subTitle: string;
  };
}
export default function OfferItem({ offerdata }: OfferItemProps) {
  return (
    <li className="offer-item">
      <span className="my-4 p-3 bg-Primary-200 text-Primary-700 rounded-full text-4xl max-lg:text-3xl">
        {offerdata?.Icon}
      </span>
      <h4 className="font-medium text-xl max-lg:text-lg">{offerdata?.title}</h4>
      <p className="text-Grey-700 text-xl max-lg:text-lg">
        {offerdata?.subTitle}
      </p>
    </li>
  );
}
