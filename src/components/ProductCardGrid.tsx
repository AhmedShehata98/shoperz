import React from "react";
import Image from "next/image";
import { AiTwotoneHeart } from "react-icons/ai";
import { BsCartCheckFill, BsFillCartPlusFill } from "react-icons/bs";
import { MdDiscount } from "react-icons/md";
import { routes } from "@/constants/Routes";
import { useRouter } from "next/router";
import useInShoppingCart from "@/hooks/useInShoppingCart";
type Props = {
  productData: Products;
  onAddToCart?: React.MouseEventHandler;
};
const ProductCardGrid = ({ onAddToCart, productData }: Props) => {
  const { push } = useRouter();
  const { category_id, thumbnail, name, price, discount } = productData;
  const { isInCart, setIsInCart } = useInShoppingCart(productData._id);
  const { shop } = routes;
  function getProductPreview() {
    push(`${shop}/${productData._id}`);
  }

  return (
    <li className="h-80 p-4 flex flex-col items-start justify-between relative cursor-pointer border-Grey-200 group border-[1px] hover:border-transparent hover:shadow-md rounded">
      <span className="w-full flex justify-between items-center">
        <h6 className="text-xs text-Grey-700">
          {category_id?.name || "NA-NA"}
        </h6>
        <span className="flex items-center justify-center">
          {discount && (
            <>
              <small className="font-bold text-opacity-60">
                {Intl.NumberFormat("en-EG", {
                  style: "percent",
                  unitDisplay: "short",
                }).format(discount)}
              </small>
              <MdDiscount className="text-red-600 text-xl" />
            </>
          )}
        </span>
      </span>
      <h5
        className="text-Primary-600 font-semibold text-sm py-2 items-center  leading-4"
        onClick={getProductPreview}
      >
        {name.length > 20 ? name.slice(0, 34).concat("...") : name}
      </h5>
      <figure
        className="flex items-center justify-center p-3 aspect-square overflow-hidden self-center"
        onClick={getProductPreview}
      >
        <Image
          className="max-w-full grid object-cover aspect-square object-top rounded group-hover:scale-110 transition-all duration-500"
          src={
            typeof thumbnail === "string" ? thumbnail : (thumbnail as any).url
          }
          alt="product-img-thumbnail"
          width={150}
          height={150}
        />
      </figure>
      <div className="w-full h-14 flex justify-between items-center mt-4">
        <b className="font-semibold text-base">
          {price.toLocaleString("en", {
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
              isInCart ? "bg-Primary-700" : "bg-Grey-600"
            }`}
            onClick={onAddToCart}
            title="add to cart"
            disabled={isInCart}
          >
            {isInCart ? <BsCartCheckFill /> : <BsFillCartPlusFill />}
          </button>
        </div>
      </div>
    </li>
  );
};

export default ProductCardGrid;
