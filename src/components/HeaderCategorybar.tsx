import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import CategorybarLink from "./CategorybarLink";

export default function HeaderCategorybar() {
  return (
    <div className=" w-full flex flex-col items-center justify-center bg-sky-500">
      <nav className=" container  max-w-5xl mx-auto grid lg:grid-flow-col-dense text-gray-50 uppercase font-medium divide-x-2 divide-sky-300">
        <CategorybarLink title={"TV & Audio"} href={"TV-&-Audio"} />
        <CategorybarLink href={"smartphone"} title="smartphone" />
        <CategorybarLink href={"laptop & pc"} title="laptop-&-pc" />
        <CategorybarLink href={"gadgets"} title="gadgets" />
        <CategorybarLink href={"photo-&-video"} title="photo & video" />
        <CategorybarLink href={"gifts"} title="gifts" />
        <CategorybarLink href={"toys"} title="toys" />
      </nav>
    </div>
  );
}
