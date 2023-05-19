import Link from "next/link";
import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

interface CategorybarLinkProps {
  href: string;
  title: string;
}
export default function CategorybarLink({ title, href }: CategorybarLinkProps) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="flex hover:bg-Primary-800 lg:bg-Primary-600 text-sm items-center justify-between gap-2 h-full px-6 py-3 overflow-hidden truncate transition-colors "
    >
      <p>{title}</p>
      {hover ? (
        <MdOutlineKeyboardArrowDown className={"block text-white text-sm"} />
      ) : (
        <MdOutlineKeyboardArrowUp className={"block text-white text-sm"} />
      )}
    </Link>
  );
}
