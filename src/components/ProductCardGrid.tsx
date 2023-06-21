import React from "react";
import Image from "next/image";
import { AiTwotoneHeart } from "react-icons/ai";
import { BsCartCheckFill, BsFillCartPlusFill } from "react-icons/bs";
import { MdDiscount } from "react-icons/md";
type Props = {
  productData: Products;
  onAddToCart: React.MouseEventHandler;
};
const ProductCardGrid = ({ onAddToCart, productData }: Props) => {
  return (
    <li className="h-80 p-4 flex flex-col items-start justify-between relative cursor-pointer border-Grey-200 group border-[1px] hover:border-transparent hover:shadow-md rounded">
      <span className="w-full flex justify-between items-center">
        <h6 className="text-xs text-Grey-700">
          {productData?.category_id?.name || "NA-NA"}
        </h6>
        <span className="flex items-center justify-center">
          {productData.discount && (
            <>
              <small className="font-bold text-opacity-60">
                {Intl.NumberFormat("en-EG", {
                  style: "percent",
                  unitDisplay: "short",
                }).format(productData.discount)}
              </small>
              <MdDiscount className="text-red-600 text-xl" />
            </>
          )}
        </span>
      </span>
      <h5 className="text-Primary-600 font-semibold text-sm py-2 items-center  leading-4">
        {productData?.name.length > 20
          ? productData.name.slice(0, 34).concat("...")
          : productData.name}
      </h5>
      <div className="flex items-center justify-center p-3 aspect-square overflow-hidden self-center">
        <Image
          className="object-cover max-w-full rounded group-hover:scale-110 transition-all duration-500"
          src={productData?.thumbnail}
          alt="product-img-thumbnail"
          width={150}
          height={150}
        />
      </div>
      <div className="w-full h-14 flex justify-between items-center mt-4">
        <b className="font-semibold text-base">
          {productData?.price.toLocaleString("en", {
            style: "currency",
            currency: "USD",
          })}
        </b>
        <div className="relative w-12">
          <button
            className="absolute w-10 h-10 grid place-content-center place-items-center bg-Grey-100 transition-all duration-500 rounded-full text-xl hover:text-red-700 group-hover:-translate-y-14"
            onClick={onAddToCart}
            title="wishlist"
          >
            <AiTwotoneHeart />
          </button>
          <button
            className={`product-grid-card-btn ${
              productData.isInCart ? "bg-Primary-700" : "bg-Grey-600"
            }`}
            onClick={onAddToCart}
            title="add to cart"
            disabled={productData.isInCart}
          >
            {productData.isInCart ? (
              <BsCartCheckFill />
            ) : (
              <BsFillCartPlusFill />
            )}
          </button>
        </div>
      </div>
    </li>
  );
};

export default ProductCardGrid;
