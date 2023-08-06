import Image from "next/image";
import React from "react";
import OrderProductCard from "./OrderProductCard";

type Props = {
  order?: Order;
};
function OrderCard({ order }: Props) {
  const orderDateFormated = new Date(order?.createdAt!).toLocaleString();

  const statesBgColor = ({ status }: Pick<Order, "status">) => {
    switch (status) {
      case "cancelled":
        return "red";

      case "pending":
        return "#e7a50b7a";

      case "awaiting_fulfillment":
        return "#e7a50b7a";

      case "awaiting_shipment":
        return "#0a55e37a";

      case "completed":
        return "green";

      case "shipped":
        return "#05c9557a";

      default:
        return "0000007a";
    }
  };
  return (
    <li className="flex items-center justify-start gap-3 p-3 border shadow bg-white">
      <span className="flex flex-col items-start justify-center">
        <span className="flex flex-col items-center justify-center gap-1 mb-4">
          <small className="uppercase font-bold">status</small>
          <small
            className="w-max px-3 py-1 rounded-full text-sm uppercase"
            style={{
              backgroundColor: statesBgColor({ status: order?.status! }),
            }}
          >
            {order?.status.split("_").join(" ")}
          </small>
        </span>
        {/* <code className="text-sm text-gray-700">{order?._id}</code> */}
        <span className="flex items-center justify-center flex-col mt-2 self-center">
          <small className="uppercase font-bold text-center">
            order requested in :
          </small>
          <code className="text-sm text-gray-700">{orderDateFormated}</code>
        </span>
      </span>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
        {order?.products.map((product) => (
          <OrderProductCard
            key={product._id}
            quantity={product.quantity}
            product={product.productId}
          />
        ))}
      </ul>
      <span className="flex flex-col items-center justify-center">
        <small className="font-medium uppercase text-Primary-700 text-center">
          total
        </small>
        <code className="mb-2">
          {order?.totalPrice?.toLocaleString("en-eg", {
            style: "currency",
            currency: "egp",
          })}
        </code>
        <small className="font-medium uppercase text-Primary-700 text-center">
          discounted total
        </small>
        <code className="mb-2">
          {order?.discountedTotal?.toLocaleString("en-eg", {
            style: "currency",
            currency: "egp",
          })}
        </code>
      </span>
    </li>
  );
}

export default OrderCard;
