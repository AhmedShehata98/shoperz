import React from "react";

type Props = {
  productsList: Pick<Order, "products">;
};
function OrderProductsList({ productsList }: Props) {
  return <div>OrderProductsList</div>;
}

export default OrderProductsList;
