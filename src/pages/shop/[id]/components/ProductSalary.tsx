import useGetToken from "@/hooks/useGetToken";
import { selectAppState } from "@/redux/slices/app.slice";
import {
  useAddToCartMutation,
  useRemoveFromCartMutation,
  useUpdateCartQuantityMutation,
} from "@/services/shoperzApi.service";
import React, { useState } from "react";
import { AiFillHeart, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import CarttQuantity from "./CarttQuantity";
import CustomButton from "@/components/CustomButton";
import { IoTrash } from "react-icons/io5";

type Props = {
  price: number;
  product_id: string;
  stock: number;
  isInCart: boolean;
  deliveryCost: "free" | number;
};
function ProductSalary({
  price,
  stock,
  deliveryCost,
  isInCart,
  product_id,
}: Props) {
  const [fetchRemoveFromCart, removeItemResponse] = useRemoveFromCartMutation();
  const { isLoggedIn } = useSelector(selectAppState);
  const { token } = useGetToken();
  const [fetchAddToCart, addToCartResponse] = useAddToCartMutation();

  function handleAddToCart() {
    if (isLoggedIn) {
      fetchAddToCart({
        token,
        productId: product_id,
        quantity: 1,
      }).then(() => {
        toast.done("The product added to cart .");
      });
    } else {
      toast.warning("You should be logged in first.");
    }
  }
  function handleRemoveFromCart() {
    fetchRemoveFromCart({ token, productId: product_id });
  }

  return (
    <div className="w-full lg:w-1/3 flex items-center justify-center gap-3 py-3 lg:py-0 mb-6 lg:mb-0">
      <ul className="w-full flex flex-col border shadow-sm rounded-md p-2">
        <span className="w-full flex justify-between items-center mb-3">
          <small className="text-gray-500 capitalize">delivery :</small>
          {deliveryCost !== undefined && deliveryCost === "free" ? (
            <small className="bg-emerald-300 text-emerald-700 rounded-md shadow-sm px-2 font-medium capitalize">
              {deliveryCost}
            </small>
          ) : (
            <small className="bg-blue-300 text-blue-700 rounded-md shadow-sm px-2 font-medium capitalize">
              {Intl.NumberFormat("en-EG", {
                style: "currency",
                currency: "EGP",
              }).format(deliveryCost)}
            </small>
          )}
        </span>
        <span className="w-full flex justify-between items-center mb-3">
          <small className="text-gray-500 capitalize">stock :</small>
          <small className="bg-stone-300 text-stone-800 rounded-md shadow-sm px-2 font-medium capitalize">
            {stock}
          </small>
        </span>
        <span className="w-full flex items-center justify-between mt-3">
          <button className="self-end w-1/2 flex items-center justify-center gap-4 rounded-full py-1 px-3 border-2 border-zinc-400 text-gray-600 capitalize">
            <p>whishlist</p>
            <AiFillHeart className="block text-xl" />
          </button>
        </span>
        <div className="w-full my-3">
          <b className="text-2xl ">
            {price.toLocaleString("en-EG", {
              style: "currency",
              currency: "EGP",
            })}
          </b>
        </div>
        <div className="w-full flex items-center my-4">
          {isInCart ? (
            <>
              <CarttQuantity product_id={product_id} />
              <CustomButton
                onClick={handleRemoveFromCart}
                extraClassName="bg-red-500 ms-auto hover:bg-red-700 px-3 py-2"
              >
                <IoTrash />
              </CustomButton>
            </>
          ) : (
            <CustomButton
              extraClassName="w-full rounded-full"
              onClick={handleAddToCart}
            >
              <p>add to cart</p>
              <BsFillCartPlusFill className="block text-xl" />
            </CustomButton>
          )}
        </div>
      </ul>
    </div>
  );
}

export default ProductSalary;
