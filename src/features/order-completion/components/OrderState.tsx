import React from "react";

export type OrderStatus =
  | "pending"
  | "awaiting_fulfillment"
  | "awaiting_shipment"
  | "shipped"
  | "completed"
  | "unknown"
  | "cancelled";
type Props = {
  orderStatus: OrderStatus;
};
function OrderState({ orderStatus }: Props) {
  const identityOrderStatusColor = (orderStatus: OrderStatus) => {
    switch (orderStatus) {
      case "cancelled":
        return "red";

      case "pending":
        return "#e7a50b";

      case "awaiting_fulfillment":
        return "#e7a50b";

      case "awaiting_shipment":
        return "#0a55e3";

      case "completed":
        return "green";

      case "shipped":
        return "#05c955";

      default:
        return "black";
    }
  };
  return (
    <header className="w-full flex items-center justify-between gap-2 py-4 px-2 mb-3 border-b-2 border-Grey-600">
      <h4 className="capitalize text-lg text-gray-700">your order status :</h4>
      <h5
        className="uppercase text-sm font-semibold"
        style={{
          color: identityOrderStatusColor(orderStatus),
        }}
      >
        {orderStatus.split("_").join(" ")}
      </h5>
    </header>
  );
}

export default OrderState;
