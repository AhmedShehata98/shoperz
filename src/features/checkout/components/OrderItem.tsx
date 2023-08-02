import React, { useMemo } from "react";

type Props = {
  products?: CartProducts;
};
function OrderItem({ products }: Props) {
  const total = useMemo(
    () =>
      products?.quantity && products.productId.price
        ? products?.productId?.price * +products?.quantity
        : 0,
    [products?.quantity, products?.productId.price]
  );
  return (
    <li
      key={products?.productId?._id}
      className="flex items-start justify-center gap-3 mb-2"
    >
      <span className="flex flex-col basis-1/4">
        {products?.productId?.thumbnail && (
          <figure className="w-20 overflow-hidden">
            <img
              src={products?.productId?.thumbnail}
              alt="product-image"
              className="w-full object-cover"
            />
          </figure>
        )}
        <p className="mt-2 text-Grey-600 self-center">{products?.quantity}X</p>
      </span>
      <span className="basis-2/3 flex flex-col items-start justify-center ">
        <p className="text-Primary-700 capitalize text-sm">
          {products?.productId?.name}
        </p>
        <small className="text-sm text-Grey-600">
          {Intl.NumberFormat("en-eg", {
            style: "currency",
            currency: "EGP",
          }).format(products?.productId?.price ?? 0)}
        </small>
        <b className="flex gap-2 capitalize mt-3 text-sm">
          total :
          <p>
            {Intl.NumberFormat("en-eg", {
              style: "currency",
              currency: "EGP",
            }).format(total)}
          </p>
        </b>
      </span>
    </li>
  );
}

export default OrderItem;
