import Image from "next/image";
import React from "react";
import { AiTwotoneShopping } from "react-icons/ai";

export default function ProductCard({
  _id,
  brand,
  __v,
  category_id,
  colors,
  createdAt,
  description,
  discount,
  images,
  name,
  price,
  rating,
  sku,
  stock,
  thumbnail,
  updatedAt,
}: Products) {
  return (
    <li className="flex flex-col border shadow p-3">
      <span className="px-3 py-1">
        <small>category name</small>
      </span>
      <span>
        <p>{name}</p>
      </span>
      <figure>
        <img src={thumbnail} alt="product-img-thumbnail" />
      </figure>
      <span>
        <b>{price}</b>
        <button>
          <AiTwotoneShopping />
        </button>
      </span>
    </li>
  );
}
