import React from "react";

function ProductCard() {
  return (
    <li className="flex max-md:flex-col items-start justify-between gap-4 rounded-md py-3 px-3 hover:bg-Grey-100 mb-4">
      <figure className="w-16">
        <img
          src="https://picsum.photos/400"
          alt="product-image"
          className="w-full object-cover"
        />
      </figure>
      <span className="text-start capitalize">
        <p className="text-Grey-600">i phone 14 pro max </p>
      </span>
      <span className="max-md:w-full w-1/2 justify-between flex gap-3">
        <span className="flex gap-3 items-center capitalize">
          <small className="text-Grey-600">2x</small>
          <p className="uppercase font-medium">l.e 19245000,00</p>
        </span>
        <span>
          <p className="uppercase font-medium text-Grey-600">l.e 35125000,00</p>
        </span>
      </span>
    </li>
  );
}

export default ProductCard;
