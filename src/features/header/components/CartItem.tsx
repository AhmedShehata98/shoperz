import useGetToken from "@/hooks/useGetToken";
import { useRemoveFromCartMutation } from "@/services/shoperzApi.service";
import React from "react";
import { IoTrashSharp } from "react-icons/io5";
import { ImSpinner8 } from "react-icons/im";
import Image from "next/image";

type Props = {
  product: Products;
  quantity: number;
};
function CartItem({ product, quantity }: Props) {
  const { token } = useGetToken();
  const [fetchRemoveCartItem, responseRemoveCart] = useRemoveFromCartMutation();
  return (
    <>
      <li
        key={product._id}
        className="flex gap-3 items-center justify-between p-3 rounded-md hover:bg-gray-100"
      >
        {product?.thumbnail && (
          <figure className="w-16 rounded-md">
            <Image
              src={
                typeof product?.thumbnail === "string"
                  ? product?.thumbnail
                  : (product?.thumbnail as any)?.url
              }
              width={65}
              height={65}
              alt="cart-item-image"
              className="w-full aspect-square object-cover object-top"
            />
          </figure>
        )}
        <div className="w-2/3 flex flex-col items-start justify-start gap-1">
          <p className="text-sky-700 font-semibold capitalize m-0">
            {product?.name}
          </p>
          <span className="flex items-center justify-center gap-4">
            <small className="text-gray-500">{quantity}X</small>
            <span className="flex items-center justify-center gap-1 text-gray-500">
              <small className="font-mono ">
                {Intl.NumberFormat("en-eg", {
                  style: "currency",
                  currency: "EGP",
                }).format(product.price)}
              </small>
            </span>
          </span>
        </div>
        <span className="w-16 flex flex-col items-start justify-center gap-1">
          <button
            type="button"
            className="text-red-400 hover:text-red-600 self-center"
            onClick={() =>
              fetchRemoveCartItem({
                productId: product?._id,
                token,
              })
            }
          >
            {responseRemoveCart.isLoading ? (
              <ImSpinner8 className="block text-2xl animate-spin" />
            ) : (
              <IoTrashSharp />
            )}
          </button>
          <span className="flex items-center justify-center gap-1">
            <small className="font-mono ">
              {Intl.NumberFormat("en-eg", {
                style: "currency",
                currency: "EGP",
              }).format(product.price * quantity)}
            </small>
          </span>
        </span>
      </li>
    </>
  );
}

export default CartItem;
