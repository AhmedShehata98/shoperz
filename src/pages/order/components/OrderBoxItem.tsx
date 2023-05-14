import React from "react";

interface OrderBoxItemProps {
  data: {
    title: string;
    value: string | number;
  };
}
export default function OrderBoxItem({
  data: { title, value },
}: OrderBoxItemProps) {
  return (
    <li className="flex items-center justify-between gap-4 capitalize mb-3">
      <p className="text-Grey-600 text-sm font-medium">{title} </p>
      <b>{value}</b>
    </li>
  );
}
