import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function RatingStars() {
  return (
    <span className="w-full flex items-center justify-start text-xl text-orange-500 mb-2">
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
      <AiOutlineStar />
      <small className="text-gray-500 ms-4">4.0 (Rate)</small>
    </span>
  );
}
