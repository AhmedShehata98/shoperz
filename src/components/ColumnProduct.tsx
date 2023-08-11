import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { useAddToCartMutation } from "@/services/shoperzApi.service";
import watch from "../assets/products/watches.png";
import { AiFillShopping, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import useGetToken from "@/hooks/useGetToken";
import { selectAppState, setShowCartDrawer } from "@/redux/slices/app.slice";
import { BsFillCartCheckFill } from "react-icons/bs";
import { MdDiscount } from "react-icons/md";
import useInShoppingCart from "@/hooks/useInShoppingCart";
import Image from "next/image";

type Props = {
  product: Products;
};

const ColumnProduct = ({ product }: Props) => {
  const { isLoggedIn } = useSelector(selectAppState);
  const [fetchAddToCart, addToCartResponse] = useAddToCartMutation();
  const { token } = useGetToken();
  const { isInCart } = useInShoppingCart(product._id);
  const handleAddToCart = (productId: string, quantity: number) => {
    if (isLoggedIn) {
      fetchAddToCart({ productId, quantity, token: token! });
    } else {
      toast.warning(
        "You are not registered! ,Register first and start your shoping journy"
      );
    }
  };
  const { name, thumbnail, rating, discount, price } = product;

  return (
    <li className="relative flex items-center justify-between gap-3 bg-white transition-all duration-500 shadow p-3 mb-3 hover:shadow-lg hover:scale-105">
      {!discount && discount > 0 ? (
        <span className="absolute z-10 top-0 left-0 flex items-center gap-2 rounded-br-full shadow-xl font-semibold bg-orange-600 text-white px-4 py-1.5">
          <p>
            {(discount || "0").toLocaleString("en-EG", {
              style: "percent",
            })}
          </p>
          <MdDiscount />
        </span>
      ) : null}
      <figure className="w-28 h-28 grid place-content-start place-items-center aspect-square overflow-hidden">
        <Image
          src={
            typeof thumbnail === "string" ? thumbnail : (thumbnail as any)?.url
          }
          alt={"product-thumbnail"}
          width={140}
          height={140}
          className="grid min-w-full object-top object-cover"
        />
      </figure>
      <div className="w-2/3 h-full flex flex-col items-start justify-center gap-2">
        <b className="inline-block leading-4 h-8 overflow-hidden text-sm text-Primary-700 capitalize">
          {name}
        </b>
        <span className="flex items-center justify-center gap-1 text-orange-400">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </span>

        <span className="w-full flex items-center justify-between mt-2">
          <b className="text-sm">
            {price.toLocaleString("en-EG", {
              style: "currency",
              currency: "EGP",
            })}
          </b>
          <button
            type="button"
            className="w-9 h-9 flex items-center justify-center text-lg bg-Grey-500 text-Grey-100 rounded-full shadow hover:bg-Primary-700 disabled:bg-Primary-700 "
            onClick={() => handleAddToCart(product._id, 1)}
            disabled={isInCart}
          >
            {isInCart ? <BsFillCartCheckFill /> : <AiFillShopping />}
          </button>
        </span>
      </div>
    </li>
  );
};

export default ColumnProduct;
