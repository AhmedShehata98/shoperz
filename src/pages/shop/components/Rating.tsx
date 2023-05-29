import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
type Props = {};

const Rating = (props: Props) => {
  const rate = [5, 4, 3, 2, 1];
  return (
    <span className="w-full flex items-center justify-start text-xl text-orange-500 mb-2">
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
      <AiOutlineStar />
      <small className="text-gray-400 text-xs ms-4">(1101)</small>
    </span>
  );
};

export default Rating;
