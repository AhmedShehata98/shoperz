import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { useAddToCartMutation } from "@/services/shoperzApi.service";
import watch from "../assets/products/watches.png";
import { AiFillShopping, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import useGetToken from "@/hooks/useGetToken";
import { selectAppState, setShowCartDrawer } from "@/redux/slices/app.slice";
import { BsFillCartCheckFill } from "react-icons/bs";

type Props = {
  product: Products;
};

const ColumnProduct = ({ product }: Props) => {
  const { isLoggedIn } = useSelector(selectAppState);
  const [fetchAddToCart, addToCartResponse] = useAddToCartMutation();
  const dispatch = useDispatch();
  const { token } = useGetToken();

  const handleAddToCart = (productId: string, quantity: number) => {
    if (isLoggedIn) {
      fetchAddToCart({ productId, quantity, token: token! })
        .unwrap()
        .then((res: any) => {
          dispatch(setShowCartDrawer(true));
        });
    } else {
      toast.warning(
        "You are not registered! ,Register first and start your shoping journy"
      );
    }
  };
  const { name, thumbnail, rating, price, isInCart } = product;

  return (
    <li className="flex items-center justify-between gap-3 bg-white transition-all duration-500 shadow p-3 mb-3 hover:shadow-lg hover:scale-105">
      <figure className="w-28 h-28 grid place-content-center place-items-center aspect-square">
        <img
          src={thumbnail}
          alt={"product-thumbnail"}
          className="max-w-full object-cover"
        />
      </figure>
      <div className="w-2/3 h-full flex flex-col items-start justify-center gap-2">
        <b className="text-sm text-Primary-700 capitalize">{name}</b>
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
