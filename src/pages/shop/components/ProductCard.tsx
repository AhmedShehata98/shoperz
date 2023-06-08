import CustomButton from "@/components/CustomButton";
import { Rating } from "flowbite-react";
import Image from "next/image";
import React from "react";
import { BsFillCartCheckFill, BsFillCartPlusFill } from "react-icons/bs";

type Props = {
  productData: Products;
  onAddToCart: React.MouseEventHandler;
};
export default function ProductCard({ productData, onAddToCart }: Props) {
  const {
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
    isInCart,
    thumbnail,
    updatedAt,
  } = productData;
  console.log(isInCart);
  return (
    <li className="flex max-sm:flex-col max-md:w-full border shadow p-3 cursor-pointer hover:scale-105 duration-300 max-lg:justify-between">
      <figure className="flex max-sm:grid w-full">
        <div className="p-6">
          <img
            className="object-cover min-w-[200px] max-h-36 rounded"
            src={thumbnail}
            alt="product-img-thumbnail"
          />
        </div>
        <div>
          <h6 className="text-gray-500 text-sm">Smartphones,Telephones</h6>
          <h5 className="text-Primary-600 font-semibold text-sm py-2 items-center">
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

          <div className=" w-full">
            <ul className="text-gray-500 text-sm list-disc mx-4 py-2">
              <li>{description}</li>
            </ul>
            <div className="text-gray-500 text-xs  p-1">SKU : {sku}</div>
          </div>
        </div>
      </figure>
      <div className="flex flex-col max-sm:w-full w-fit h-fit max-lg:items-center justify-start max-md:justify-between">
        <div className="flex gap-2 my-2 max-sm:hidden">
          <span className="flex text-[#586A84] text-sm cursor-pointer hover:text-green-700 border-[1px] border-[#586A84] p-2 rounded-full text-center items-center justify-center gap-x-2">
            Compare
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" shadow-2xl "
            >
              <path
                d="M17.1258 3.29442C17.2886 3.13171 17.2886 2.86789 17.1258 2.70517L14.7984 0.377757C14.5359 0.115271 14.0871 0.301175 14.0871 0.672385L14.0871 2.16646H11.5871V2.16662H11.5866C10.5279 2.16662 9.56149 2.56144 8.82648 3.21186C9.18813 3.66387 9.47295 4.18002 9.66117 4.74052C10.1196 4.18652 10.8123 3.83349 11.5875 3.83329V3.83313H14.0871L14.0871 5.32721C14.0871 5.69842 14.5359 5.88432 14.7984 5.62183L17.1258 3.29442ZM17.1258 12.7052L14.7984 10.3778C14.5359 10.1153 14.0871 10.3012 14.0871 10.6724L14.0871 12.1665H11.5871C10.2072 12.1656 9.08877 11.0466 9.08877 9.66646L9.08714 9.66646V6.33313C9.08714 4.03195 7.22165 2.16646 4.92047 2.16646H1.58714C1.1269 2.16646 0.753806 2.53956 0.753806 2.9998C0.753806 3.46003 1.1269 3.83313 1.58714 3.83313H4.92047C6.28723 3.83313 7.39782 4.9299 7.42013 6.29134C7.42008 6.2959 7.42005 6.30045 7.42002 6.305L7.42017 6.33317H7.42047V9.66646V9.6665H7.42017C7.42017 9.95189 7.44886 10.2306 7.50352 10.4998C7.62845 11.1153 7.88902 11.6815 8.25268 12.1658L8.25285 12.1656C9.01298 13.1781 10.2236 13.8331 11.5871 13.8331H14.0871L14.0871 15.3272C14.0871 15.6984 14.5359 15.8843 14.7984 15.6218L17.1258 13.2944C17.2886 13.1317 17.2886 12.8679 17.1258 12.7052ZM0.753806 12.9998C0.753806 12.5396 1.1269 12.1665 1.58714 12.1665H4.91957V12.1664C5.69473 12.1661 6.38742 11.813 6.84579 11.259C7.03387 11.8192 7.31845 12.335 7.67978 12.7869C6.94506 13.4375 5.97891 13.8326 4.92047 13.833V13.8331H1.58714C1.1269 13.8331 0.753806 13.46 0.753806 12.9998ZM0.751953 9.66638C0.751953 9.69644 0.752271 9.72643 0.752905 9.75633V9.57643C0.752271 9.60634 0.751953 9.63632 0.751953 9.66638ZM4.91862 5.49972L4.89994 5.49976H4.91957V7.16638H4.91987V5.4998H4.94489L4.91862 5.49972ZM11.5866 10.5L11.6051 10.4999H11.5875V8.83329H11.5872V10.4999H11.5606L11.5866 10.5Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span className="flex text-[#586A84] text-sm cursor-pointer hover:text-red-700 border-[1px] border-[#586A84] p-2 rounded-full text-center items-center justify-center gap-x-2">
            Wishlist
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shadow-2xl"
            >
              <path
                d="M1.98738 1.96589C0.226864 3.72641 0.226864 6.58079 1.98738 8.3413L9.00033 15.3542L16.0133 8.3413C17.7738 6.58079 17.7738 3.72641 16.0133 1.96589C14.2528 0.205379 11.3984 0.205379 9.63787 1.96589L9.00033 2.60343L8.36278 1.96589C6.60227 0.205379 3.74789 0.205379 1.98738 1.96589Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </div>
        <div className="font-semibold text-xl py-4 text-center w-full">
          {price.toLocaleString("en", {
            style: "currency",
            currency: "USD",
          })}
        </div>
        <div className="py-2 w-full">
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
        </div>
      </div>
    </li>
  );
}
