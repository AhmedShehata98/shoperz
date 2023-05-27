import React from "react";

interface OrderBoxItemProps {
  data: {
    title: string;
    value: number;
  };
  Icon: React.ReactNode;
}
export default function OrderBoxItem({
  data: { title, value },
  Icon,
}: OrderBoxItemProps) {
  return (
    <li className="flex items-center justify-between gap-4 capitalize mb-4">
      <span className="flex items-center justify-center gap-2 text-Grey-600">
        {Icon}
        <p className="capitalize text-sm font-medium ">{title}</p>
      </span>
      <b className="capitalize text-sm text-Grey-800">
        {Intl.NumberFormat("en-EG", {
          style: "currency",
          currency: "EGP", // display price as country like => EGP , $
          currencySign: "accounting",
          notation: "standard", // displays price in title => 100K ,2M ,4B
        }).format(+value || 0)}
      </b>
    </li>
  );
}
