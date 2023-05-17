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
      className="flex bg-Primary-600 text-sm items-center justify-between gap-2 h-full px-6 py-4 overflow-hidden truncate transition-colors "
    >
      <p>{title}</p>
      <MdOutlineKeyboardArrowDown className={"block text-white text-sm"} />
    </Link>
  );
}
