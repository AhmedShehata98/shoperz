import React from "react";

type Props = {
  Icon: React.ReactNode;
  title: string;
  isActive?: boolean;
  onClick: React.MouseEventHandler;
};
export default function AccountSidebarItem({
  Icon,
  isActive,
  onClick,
  title,
}: Props) {
  return (
    <li
      className={
        isActive
          ? "account-sidebar-item account-sidebar-item-active"
          : "account-sidebar-item"
      }
      onClick={onClick}
    >
      <span className="text-xl pointer-events-none">{Icon}</span>
      <p className="capitalize text-sm font-medium pointer-events-none">
        {title}
      </p>
    </li>
  );
}
