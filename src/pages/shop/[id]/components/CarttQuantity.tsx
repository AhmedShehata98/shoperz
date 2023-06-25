import useGetToken from "@/hooks/useGetToken";
import { selectAppState } from "@/redux/slices/app.slice";
import {
  useGetCartByIdQuery,
  useUpdateCartQuantityMutation,
} from "@/services/shoperzApi.service";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { toast } from "react-toastify";

type Props = {
  product_id: string;
};
function CarttQuantity({ product_id }: Props) {
  const { token } = useGetToken();
  const [fetchUpdateQuantity, updateQuantityResponse] =
    useUpdateCartQuantityMutation();
  const { quantity, isLoading, refetch } = useGetCartByIdQuery(
    { productId: product_id, token },
    {
      selectFromResult: ({ isLoading, isError, data, isSuccess }) => {
        if (isSuccess) {
          return {
            isError,
            isLoading,
            quantity: data.data.cartItem.quantity,
          };
        } else {
          return {
            isError,
            isLoading,
            quantity: [],
          };
        }
      },
    }
  );
  function handleChangeQuantity(event: React.MouseEvent) {
    const target = event.target as HTMLButtonElement;
    const quantityBtn = target.dataset.quantity as "increase" | "descrease";
    let newQuantity = quantity;

    if (newQuantity !== 0) {
      fetchUpdateQuantity({
        token,
        productId: product_id,
        quantity:
          quantityBtn === "increase" ? newQuantity + 1 : newQuantity - 1,
      })
        .then((res) => {
          refetch();
          toast.success("increased quantity success.", {
            position: "bottom-center",
          });
        })
        .catch((err) => {
          toast.error(`something happend worng ${err.message}`);
        });
    }
  }
  return (
    <span
      className="w-max flex items-center justify-between border border-zinc-300 rounded-full p-1 my-3"
      id="quantity-label"
    >
      <button
        className="flex items-center justify-center p-1 leading-3 w-14 text-2xl text-gray-600 hover:bg-gray-200 rounded-full"
        onClick={handleChangeQuantity}
        type="button"
        data-quantity="increase"
      >
        <AiOutlinePlus />
      </button>
      {isLoading ? (
        <span className="block w-6 h-6 border-4 border-black border-t-Grey-400 rounded-full animate-spin"></span>
      ) : (
        <p className="w-max px-4">{quantity}</p>
      )}
      <button
        className="flex items-center justify-center p-1 leading-3 w-14 text-2xl text-gray-600 hover:bg-gray-200 rounded-full disabled:bg-red-200"
        type="button"
        onClick={handleChangeQuantity}
        data-quantity="descrease"
        disabled={quantity === 1}
      >
        <AiOutlineMinus />
      </button>
    </span>
  );
}

export default CarttQuantity;
