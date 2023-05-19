import Link from "next/link";
import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { RiArrowDownSFill } from "react-icons/ri";

interface Props {
  isAuthenticated: boolean;
  onClick: React.MouseEventHandler;
}
export default function UserBtn({ isAuthenticated, onClick }: Props) {
  if (isAuthenticated) {
    return (
      <button
        type="button"
        id="user-btn"
        className="flex items-center gap-1"
        onClick={onClick}
      >
        <RiArrowDownSFill className="text-2xl pointer-events-none" />
        <p className="text-gray-500 text-xs uppercase pointer-events-none">
          ahmed shehata
        </p>
      </button>
    );
  } else {
    return (
      <Link href={"register"} className="flex items-center gap-2">
        <FaUserAlt className="text-lg pointer-events-none" />
        <p className="text-gray-500 text-xs uppercase pointer-events-none">
          login / register
        </p>
      </Link>
    );
  }
}
