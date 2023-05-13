import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface CategorybarLinkProps {
  href: string;
  title: string;
}
export default function CategorybarLink({ title, href }: CategorybarLinkProps) {
  return (
    <Link
      href={href}
      className="flex text-sm items-center justify-between gap-2 h-full px-3 py-2 overflow-hidden truncate transition-colors hover:bg-sky-600"
    >
      <p>{title}</p>
      <MdOutlineKeyboardArrowDown className={"block text-white text-sm"} />
    </Link>
  );
}
