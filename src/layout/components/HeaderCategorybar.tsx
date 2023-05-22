import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import CategorybarLink from "./CategorybarLink";
import DropDown from "./DropDown";

export default function HeaderCategorybar() {
  const [hover, setHover] = useState(false);
  return (
    <>
      <div className=" w-full flex flex-col items-center justify-center bg-sky-500">
        <nav className="container max-w-5xl mx-auto grid lg:grid-flow-col-dense text-gray-50 uppercase font-normal divide-x-[1px] divide-sky-600">
          <CategorybarLink
            setHover={setHover}
            hover={hover}
            title={"TV & Audio"}
            href={"TV-&-Audio"}
          />
          <CategorybarLink
            setHover={setHover}
            hover={hover}
            href={"smartphone"}
            title="smartphone"
          />
          <CategorybarLink
            setHover={setHover}
            hover={hover}
            href={"laptop & pc"}
            title="laptop-&-pc"
          />
          <CategorybarLink
            setHover={setHover}
            hover={hover}
            href={"gadgets"}
            title="gadgets"
          />
          <CategorybarLink
            setHover={setHover}
            hover={hover}
            href={"photo-&-video"}
            title="photo & video"
          />
          <CategorybarLink
            setHover={setHover}
            hover={hover}
            href={"gifts"}
            title="gifts"
          />
          <CategorybarLink
            setHover={setHover}
            hover={hover}
            href={"toys"}
            title="toys"
          />
        </nav>
      </div>
      <div className="container mx-auto max-lg:hidden">
        {hover && <DropDown />}
      </div>
    </>
  );
}
