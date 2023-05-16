import React from "react";
import Image, { StaticImageData } from "next/image";
type Props = {
  cate: string;
  name: string;
  src: StaticImageData;
  price: number;
};

const Product = ({ cate, name, src, price }: Props) => {
  return (
    <div className=" p-4 border-Grey-200 border-[1px] hover:scale-110 transition-all rounded">
      <h6 className="text-xs text-Grey-700 py-2">{cate}</h6>
      <h5 className="text-Primary-600 font-semibold text-sm py-2 items-center">
        {name}
      </h5>
      <div className="py-2">
        <Image
          className="mx-auto"
          src={src}
          width={150}
          height={150}
          alt="product"
        />
      </div>
      <div className="flex justify-between items-center py-2">
        <span>{price}</span>
        <button>X</button>
      </div>
    </div>
  );
};

export default Product;
