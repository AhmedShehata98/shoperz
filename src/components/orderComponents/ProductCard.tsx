import React from "react";

interface ProductCardProps {
  product: {
    thumbnail: string;
    title: string;
    quantity: number;
    price: number;
  };
}
function ProductCard({ product }: ProductCardProps) {
  return (
    <li className="flex max-md:flex-col items-start justify-between gap-4 rounded-md py-3 px-3 hover:bg-Grey-100 mb-4">
      <figure className="w-16">
        <img
          src={product?.thumbnail}
          alt="product-image"
          className="w-full object-cover"
        />
      </figure>
      <span className="text-start capitalize">
        <p className="text-Grey-600">{product?.title} </p>
      </span>
      <span className="max-md:w-full w-1/2 justify-between flex gap-3">
        <span className="flex gap-3 items-center capitalize">
          <small className="text-Grey-600">{product?.quantity}x</small>
          <p className="uppercase font-medium">l.e {product?.price},00</p>
        </span>
        <span>
          <p className="uppercase font-medium text-Grey-600">
            l.e {product?.price * product?.quantity},00
          </p>
        </span>
      </span>
    </li>
  );
}

export default ProductCard;
