import { ICart } from "@/models/shopperz.model";
import React from "react";
import { BsFillBoxFill } from "react-icons/bs";

interface OrdersPreviewListProps {
  cartItems: Array<ICart>;
}
export default function OrdersPreviewList({
  cartItems = [],
}: OrdersPreviewListProps) {
  return (
    <div className="w-full flex flex-col mt-8">
      <h3 className="mb-2 text-Grey-700 text-xl font-medium capitalize">
        Review your order :
      </h3>
      <ul className="w-full flex flex-col border border-Grey-300 shadow-md p-3">
        {cartItems.length >= 0
          ? cartItems.map((item) => (
              <li className="flex items-start justify-center gap-3 mb-2">
                <span className="flex flex-col basis-1/4">
                  <figure className="w-20 overflow-hidden">
                    <img
                      src={item?.thumbnail}
                      alt="product-image"
                      className="w-full object-cover"
                    />
                  </figure>
                  <p className="mt-2 text-Grey-600">{item.quantity}X</p>
                </span>
                <span className="basis-2/3 flex flex-col items-start justify-center ">
                  <p className="text-Primary-700 capitalize text-sm">
                    {item.title}
                  </p>
                  <small className="text-sm text-Grey-600">
                    {Intl.NumberFormat("en-eg", {
                      style: "currency",
                      currency: "EGP",
                    }).format(item.price)}
                  </small>
                  <b className="flex gap-2 capitalize mt-3 text-sm">
                    total :
                    <p>
                      {Intl.NumberFormat("en-eg", {
                        style: "currency",
                        currency: "EGP",
                      }).format(item?.price * item?.quantity)}
                    </p>
                  </b>
                </span>
              </li>
            ))
          : null}
        {cartItems.length <= 0 ? (
          <div className="w-full flex flex-col items-center">
            <span className="bg-Primary-300 w-max text-Primary-700 text-xl p-2 m-4 rounded-full">
              <BsFillBoxFill />
            </span>
            <p className="text-Grey-700 text-sm capitalize font-medium">
              there is no products in your cart.
            </p>
          </div>
        ) : null}
      </ul>
    </div>
  );
}
