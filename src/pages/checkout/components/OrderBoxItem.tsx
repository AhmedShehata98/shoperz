import React from "react";

interface OrderBoxItemProps {
  data: {
    title: string;
    value: number | undefined;
  };
  Icon: React.ReactNode;
}
export default function OrderBoxItem({ data, Icon }: OrderBoxItemProps) {
  return (
    <li className="flex items-center justify-between gap-4 capitalize mb-4">
      <span className="flex items-center justify-center gap-2 text-Grey-700">
        {Icon}
        <p className="capitalize text-sm font-medium ">{data?.title}</p>
      </span>
      <b className="capitalize text-sm text-Grey-800">
        {Intl.NumberFormat("en-EG", {
          style: "currency",
          currency: "EGP", // display price as country like => EGP , $
          currencySign: "accounting",
          notation: "standard", // displays price in title => 100K ,2M ,4B
        }).format(data?.value || 0)}
      </b>
    </li>
  );
}
