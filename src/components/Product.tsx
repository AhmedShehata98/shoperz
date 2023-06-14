import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Button, Tooltip } from "flowbite-react";
type Props = {
  productData: Products;
  onAddToCart: React.MouseEventHandler;
};
const Product = ({ onAddToCart, productData }: Props) => {
  return (
    <li className=" p-4 grid h-[20rem] relative cursor-pointer border-Grey-200 group border-[1px] hover:border-transparent hover:shadow-md rounded">
      <h6 className="text-xs text-Grey-700 py-2">
        {productData?.category_id?.name || "NA-NA"}
      </h6>
      <h5 className="text-Primary-600 font-semibold text-sm py-2 items-center">
        {productData?.name}
      </h5>

      <div className="p-6">
        <img
          className="object-cover max-h-36 rounded mx-auto group-hover:scale-105 transition-all duration-500"
          src={productData?.thumbnail}
          alt="product-img-thumbnail"
        />
      </div>
      <div className="flex justify-between items-center py-2">
        <div className="font-semibold text-base my-auto">
          {productData?.price.toLocaleString("en", {
            style: "currency",
            currency: "USD",
          })}
        </div>
        <div className="">
          <Button className="p-3 w-11 !h-11 right-4 bottom-4 text-xl absolute hover:text-green-700 transition-all duration-500 !bg-Grey-400 !rounded-full group-hover:-translate-y-24">
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" shadow-2xl"
            >
              <path
                d="M17.1258 3.29442C17.2886 3.13171 17.2886 2.86789 17.1258 2.70517L14.7984 0.377757C14.5359 0.115271 14.0871 0.301175 14.0871 0.672385L14.0871 2.16646H11.5871V2.16662H11.5866C10.5279 2.16662 9.56149 2.56144 8.82648 3.21186C9.18813 3.66387 9.47295 4.18002 9.66117 4.74052C10.1196 4.18652 10.8123 3.83349 11.5875 3.83329V3.83313H14.0871L14.0871 5.32721C14.0871 5.69842 14.5359 5.88432 14.7984 5.62183L17.1258 3.29442ZM17.1258 12.7052L14.7984 10.3778C14.5359 10.1153 14.0871 10.3012 14.0871 10.6724L14.0871 12.1665H11.5871C10.2072 12.1656 9.08877 11.0466 9.08877 9.66646L9.08714 9.66646V6.33313C9.08714 4.03195 7.22165 2.16646 4.92047 2.16646H1.58714C1.1269 2.16646 0.753806 2.53956 0.753806 2.9998C0.753806 3.46003 1.1269 3.83313 1.58714 3.83313H4.92047C6.28723 3.83313 7.39782 4.9299 7.42013 6.29134C7.42008 6.2959 7.42005 6.30045 7.42002 6.305L7.42017 6.33317H7.42047V9.66646V9.6665H7.42017C7.42017 9.95189 7.44886 10.2306 7.50352 10.4998C7.62845 11.1153 7.88902 11.6815 8.25268 12.1658L8.25285 12.1656C9.01298 13.1781 10.2236 13.8331 11.5871 13.8331H14.0871L14.0871 15.3272C14.0871 15.6984 14.5359 15.8843 14.7984 15.6218L17.1258 13.2944C17.2886 13.1317 17.2886 12.8679 17.1258 12.7052ZM0.753806 12.9998C0.753806 12.5396 1.1269 12.1665 1.58714 12.1665H4.91957V12.1664C5.69473 12.1661 6.38742 11.813 6.84579 11.259C7.03387 11.8192 7.31845 12.335 7.67978 12.7869C6.94506 13.4375 5.97891 13.8326 4.92047 13.833V13.8331H1.58714C1.1269 13.8331 0.753806 13.46 0.753806 12.9998ZM0.751953 9.66638C0.751953 9.69644 0.752271 9.72643 0.752905 9.75633V9.57643C0.752271 9.60634 0.751953 9.63632 0.751953 9.66638ZM4.91862 5.49972L4.89994 5.49976H4.91957V7.16638H4.91987V5.4998H4.94489L4.91862 5.49972ZM11.5866 10.5L11.6051 10.4999H11.5875V8.83329H11.5872V10.4999H11.5606L11.5866 10.5Z"
                fill="currentColor"
              />
            </svg>
          </Button>

          <Button className="p-3 w-11 !h-11  right-4 bottom-4 text-xl absolute hover:text-red-700 duration-400 transition-all  !bg-Grey-400 !rounded-full group-hover:-translate-y-12">
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
          </Button>

          <Button
            className="p-3 w-11 !h-11  absolute right-4f bottom-4 text-xl  group-hover:!bg-Primary-600 transition-all duration-300 !bg-Grey-400 !rounded-full"
            onClick={onAddToCart}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=""
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.66527 4.66634V4.66637H3.46914C3.12302 4.66637 2.83447 4.93125 2.80491 5.27611L2.06205 13.9428C2.02869 14.332 2.33563 14.6664 2.72629 14.6664H13.2738C13.6644 14.6664 13.9714 14.332 13.938 13.9428L13.1952 5.27611C13.1656 4.93125 12.877 4.66637 12.5309 4.66637H11.3319V4.66634C11.3319 2.82539 9.83955 1.33301 7.9986 1.33301C6.15765 1.33301 4.66527 2.82539 4.66527 4.66634ZM7.99808 2.66641C6.89352 2.66641 5.9981 3.56182 5.99808 4.66637H9.99808C9.99806 3.56182 9.10264 2.66641 7.99808 2.66641ZM7.99687 9.99958C9.81927 9.99958 11.3001 8.53712 11.3298 6.72179C11.3313 6.70351 11.332 6.68502 11.332 6.66636C11.332 6.29817 11.0335 5.99969 10.6654 5.99969C10.2972 5.99969 9.9987 6.29816 9.99869 6.66634H9.99635C9.99634 7.7709 9.10091 8.66631 7.99635 8.66631C6.90982 8.66631 6.02565 7.79988 5.99707 6.72024C5.99849 6.70245 5.99922 6.68445 5.99922 6.66629C5.99922 6.2981 5.70074 5.99963 5.33255 5.99963C4.96436 5.99963 4.66588 6.2981 4.66588 6.66629V6.66634H4.66393V6.61469C4.66367 6.63184 4.66354 6.64903 4.66354 6.66624C4.66354 8.50719 6.15592 9.99958 7.99687 9.99958Z"
                fill="white"
              />
            </svg>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default Product;
