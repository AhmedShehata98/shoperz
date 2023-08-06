import Image from "next/image";
import React from "react";

type Props = {
  product: Partial<Products>;
  quantity: number;
};
function OrderProductCard({ product, quantity }: Props) {
  return (
    <li className="flex items-center gap-2 border shadow p-1">
      <figure className="grid items-center justify-center">
        <Image
          src={
            typeof product.thumbnail === "string"
              ? product.thumbnail
              : (product.thumbnail as any).url
          }
          width={55}
          height={55}
          alt="prod-img"
        />
      </figure>
      <span className="flex flex-col items-start justify-center">
        <small className="max-w-full overflow-hidden truncate text-Primary-700">
          {product.name}
        </small>
        <small className="text-Grey-700 mx-3">X {quantity}</small>
      </span>
    </li>
  );
}

export default OrderProductCard;
