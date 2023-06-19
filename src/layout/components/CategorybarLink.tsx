import Link from "next/link";
import React, { Dispatch, SetStateAction, useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

interface CategorybarLinkProps {
  href: string;
  title: string;
  hover: boolean;
  setHover: Dispatch<SetStateAction<boolean>>;
}
export default function CategorybarLink({
  setHover,
  title,
  href,
  hover,
}: CategorybarLinkProps) {
  return (
    <div onClick={() => setHover((e) => !e)} className="category-link">
      <p>{title}</p>
      {hover ? (
        <MdOutlineKeyboardArrowDown className={"block text-white text-sm"} />
      ) : (
        <MdOutlineKeyboardArrowUp className={"block text-white text-sm"} />
      )}
    </div>
  );
}
