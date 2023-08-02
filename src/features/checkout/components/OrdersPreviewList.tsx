import React from "react";
import { BsFillBoxFill } from "react-icons/bs";

interface Props {
  cartItems: Array<CartProducts>;
  children: React.ReactNode | React.ReactNode[];
}
export default function OrdersPreviewList({ cartItems, children }: Props) {
  const renderOrderItems = (products: CartProducts) => {
    return React.Children.map(children!, (child) =>
      React.cloneElement(child as any, { products })
    );
  };
  return (
    <div className="w-full flex flex-col mt-8">
      <h3 className="mb-2 text-Grey-700 text-xl font-medium capitalize">
        Review your order :
      </h3>
      <ul className="w-full flex flex-col gap-2 border border-Grey-300 p-3">
        {cartItems.length > 0 &&
          cartItems.map((product) => renderOrderItems(product))}
      </ul>
    </div>
  );
}
