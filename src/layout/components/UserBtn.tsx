import { routes } from "@/constants/Routes";
import Link from "next/link";
import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { RiArrowDownSFill } from "react-icons/ri";

interface Props {
  isAuthenticated: boolean;
  name: string | undefined;
  onClick: React.MouseEventHandler;
}
export default function UserBtn({ isAuthenticated, name, onClick }: Props) {
  if (isAuthenticated) {
    return (
      <button
        type="button"
        id="user-btn"
        className="flex items-center gap-1 max-md:hidden"
        onClick={onClick}
      >
        <RiArrowDownSFill className="text-2xl pointer-events-none" />
        <p className="text-gray-400 font-semibold text-sm capitalize pointer-events-none">
          {name}
        </p>
      </button>
    );
  } else {
    return (
      <Link
        href={{ pathname: routes.register, query: { target: "login" } }}
        className="flex items-center gap-2 max-md:hidden"
      >
        <FaUserAlt className="text-lg pointer-events-none" />
        <p className="text-gray-500 text-xs uppercase pointer-events-none">
          login
        </p>
      </Link>
    );
  }
}
