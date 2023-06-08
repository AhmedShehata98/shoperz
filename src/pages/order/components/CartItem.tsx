import {
  useRemoveFromCartMutation,
  useUpdateCartQuantityMutation,
} from "@/services/shoperzApi.service";
import React, { useState, useEffect } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { IoTrashOutline } from "react-icons/io5";

interface CartItemProps {
  itemData: Products;
  quantity: number;
}
export default function CartItem({ quantity, itemData }: CartItemProps) {
  const [token, setToken] = useState<string | undefined>(undefined);
  const [fetchRemoveCartItem, responseCart] = useRemoveFromCartMutation();
  const [fetchUpdateCartQuantity, responseQuantity] =
    useUpdateCartQuantityMutation();

  const handleDecreaseQuantity = (
    quantity: number | undefined,
    productId: string | undefined
  ) => {
    if (quantity) {
      if (quantity > 0) {
        fetchUpdateCartQuantity({
          token,
          productId,
          quantity: quantity - 1,
        });
      }
    }
  };
  const handleIncreaseQuantity = (
    quantity: number | undefined,
    productId: string | undefined
  ) => {
    if (quantity) {
      fetchUpdateCartQuantity({
        token,
        productId,
        quantity: quantity + 1,
      });
    }
  };

  useEffect(() => {
    const token = document.cookie.split("=")[1];
    if (token) {
      setToken(token);
    } else {
      setToken(undefined);
    }
  }, []);
  return (
    <li key={itemData?._id} className="cart-item">
      <div className="cart-product-info">
        <figure className="w-16 rounded-md">
          <img
            src={itemData.thumbnail}
            alt="cart-item-image"
            className="w-full object-cover object-center"
          />
        </figure>
        <figcaption className="w-10/12 flex items-start justify-between">
          <div className="basis-2/3 flex items-start flex-col">
            <p className="text-sky-700 font-semibold capitalize m-0">
              {itemData?.name}
            </p>
            <span className="flex items-center justify-center gap-4">
              <small className="text-gray-500">{quantity}X</small>
              <span className="flex items-center justify-center gap-1 text-gray-500">
                <small className="font-mono ">
                  {Intl.NumberFormat("en-eg", {
                    style: "currency",
                    currency: "EGP",
                  }).format(itemData?.price || 0)}
                </small>
              </span>
            </span>
          </div>
          <span className="basis-1/3 flex items-center max-lg:justify-end">
            <button
              className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-Grey-100"
              onClick={() => handleDecreaseQuantity(quantity, itemData?._id)}
            >
              {responseQuantity.isLoading ? (
                <span className="w-4 h-4 rounded-full border-2 border-Grey-400 border-t-Grey-100 animate-spin"></span>
              ) : (
                <AiOutlineMinus />
              )}
            </button>
            <label
              htmlFor=""
              className="px-3 py-2 bg-Grey-100 rounded-lg mx-1.5"
            >
              {quantity}
            </label>
            <button
              className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-Grey-100"
              onClick={() => handleIncreaseQuantity(quantity, itemData._id)}
            >
              {responseQuantity.isLoading ? (
                <span className="w-4 h-4 rounded-full border-2 border-Grey-400 border-t-Grey-100 animate-spin"></span>
              ) : (
                <AiOutlinePlus />
              )}
            </button>
          </span>
        </figcaption>
      </div>
      <div className="cart-product-pricing">
        <span className="w-16 flex max-lg:flex-row max-lg:gap-5 flex-col items-start justify-start flex-1">
          <p className="text-lg leading-5 font-semibold capitalize">total :</p>
          <span className="flex items-center justify-center gap-1">
            <p className="font-mono">
              {Intl.NumberFormat("en-eg", {
                style: "currency",
                currency: "EGP",
              }).format(itemData.price * quantity || 0)}
            </p>
          </span>
        </span>
        <button
          className="cart-rm-btn"
          disabled={responseCart.isLoading}
          onClick={() =>
            fetchRemoveCartItem({
              productId: itemData?._id,
              token,
            })
          }
        >
          {responseCart.isLoading ? (
            <span className="w-6 h-6 rounded-full border-4 border-white border-t-red-300 animate-spin"></span>
          ) : (
            <IoTrashOutline />
          )}
        </button>
      </div>
    </li>
  );
}
