import CustomButton from "@/components/CustomButton";
import { routes } from "@/constants/Routes";
import useInShoppingCart from "@/hooks/useInShoppingCart";
import { Rating } from "flowbite-react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import {
  BsFillCartCheckFill,
  BsFillCartPlusFill,
  BsFillHeartFill,
} from "react-icons/bs";
import { MdCompareArrows } from "react-icons/md";

type Props = {
  productData: Products;
  onAddToCart: React.MouseEventHandler;
};
export default function ProductCardColumn({ productData, onAddToCart }: Props) {
  const {
    _id,
    category_id,
    colors,
    createdAt,
    description,
    discount,
    name,
    price,
    rating,
    sku,
    stock,
    thumbnail,
    updatedAt,
  } = productData;
  const { push } = useRouter();
  const { shop: shopRoute } = routes;
  const { isInCart } = useInShoppingCart(_id);
  function getProductPreview() {
    push(`${shopRoute}/${_id}`);
  }

  return (
    <li className="product-row-card">
      <figure className="product-row-card-media">
        {/* <figure className="px-4 cursor-pointer" onClick={getProductPreview}>
          </figure> */}
        <Image
          className="w-full grid aspect-square object-cover object-top rounded-md overflow-hidden"
          src={
            typeof thumbnail === "string" ? thumbnail : (thumbnail as any).url
          }
          width={400}
          height={400}
          alt="product-img-thumbnail"
          onClick={getProductPreview}
        />
      </figure>
      <div className="product-row-card-content">
        <h6 className="text-gray-500 text-sm uppercase ">
          {category_id?.name || "NA-NA"}
        </h6>
        <h5
          className="text-Primary-600 font-semibold py-2 items-center hover:text-Primary-700 cursor-pointer"
          onClick={getProductPreview}
        >
          {name}
        </h5>
        <Rating className="py-1">
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <p className="ml-2 text-xs font-medium text-gray-500">
            4.95 out of 5
          </p>
        </Rating>

        <div className="w-full">
          <ul className="relative h-16 overflow-hidden text-gray-500 text-sm list-disc py-2 px-1">
            {description.split("\n").map((descrip, idx) => (
              <li key={idx}>{descrip}</li>
            ))}
            <span className="absolute bottom-0 left-0 inline-block w-full h-3 bg-gradient-to-t from-slate-200 to-transparent bg-opacity-50"></span>
          </ul>
          <div className="flex gap-3 text-xs pb-2 mt-4">
            <p>SKU :</p>
            <code className="text-gray-500 font-bold uppercase">{sku}</code>
          </div>
        </div>
      </div>
      <div className="product-row-card-actions">
        <span className="w-full flex gap-2 my-2 max-sm:hidden">
          <button
            type="button"
            className="flex text-[#586A84] text-sm cursor-pointer hover:text-green-700 border-[1px] border-[#586A84] rounded-full text-center items-center justify-center gap-x-2 px-4 py-1.5"
          >
            Compare
            <MdCompareArrows className="text-lg pointer-events-none" />
          </button>
          <button
            type="button"
            className="flex text-[#586A84] text-sm cursor-pointer hover:text-red-700 border-[1px] border-[#586A84] rounded-full text-center items-center justify-center gap-x-2 px-4 py-1.5"
          >
            Wishlist
            <BsFillHeartFill className="text-lg pointer-events-none" />
          </button>
        </span>
        <h4 className="font-semibold text-xl py-4 text-center w-full">
          {price.toLocaleString("en", {
            style: "currency",
            currency: "USD",
          })}
        </h4>
        <span className="inline-block py-2 w-full">
          <CustomButton
            extraClassName="rounded-full py-2 w-full"
            onClick={onAddToCart}
            disabled={isInCart}
          >
            <span
              className={`${
                isInCart ? "hidden" : "flex"
              }  items-center justify-center gap-3`}
            >
              <p className="text-xs">Add to Cart</p>
              <BsFillCartPlusFill className="text-lg text-white pointer-events-none" />
            </span>
            <span
              className={`${
                isInCart ? "flex" : "hidden"
              }  items-center justify-center gap-3`}
            >
              <p className="text-xs">added</p>
              <BsFillCartCheckFill className="text-lg text-white pointer-events-none" />
            </span>
          </CustomButton>
        </span>
      </div>
    </li>
  );
}
