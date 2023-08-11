import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import RatingStars from "./RatingStars";

type Props = {
  description: string;
  sku: string;
  colors: string[];
  category: string;
  name: string;
};
function ProductDescribtion({
  description,
  category,
  colors,
  sku,
  name,
}: Props) {
  return (
    <article className="w-full md:w-[48%] lg:w-[33%] flex flex-col items-center justify-center ">
      <p className="text-gray-500 capitalize font-medium self-start py-3">
        {category || "na-na"}
      </p>
      <h4 className="w-full font-bold text-xl text-start capitalize mb-4">
        {name}
      </h4>
      <RatingStars />
      <ul className="w-full max-h-72 flex gap-2 flex-col list-disc text-gray-700 my-3">
        <li className="ms-6 leading-4 overflow-x-hidden">
          <p>{description}</p>
        </li>
      </ul>
      <span className="w-full flex gap-2 uppercase items-center justify-start my-3 text-lg">
        <b className="text-gray-500">SKU :</b>
        <b>{sku}</b>
      </span>
      <div className="w-full flex flex-col gap-2 capitalize my-3">
        <b className="mb-3">colors</b>
        <ul className="w-full flex items-center justify-start gap-4 flex-wrap">
          {colors?.map((color) => (
            <li
              key={color}
              data-color={color.includes("#") ? `${color}` : color}
              className="block w-10 h-10 rounded-md shadow-2xl bg-opacity-100 opacity-100"
              style={{
                backgroundColor: color,
              }}
            ></li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ProductDescribtion;
