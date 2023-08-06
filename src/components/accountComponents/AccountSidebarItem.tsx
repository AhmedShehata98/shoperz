import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  Icon: React.ReactNode;
  title: string;
  isActive?: boolean;
  href: any;
  onClick?: React.MouseEventHandler;
};
export default function AccountSidebarItem({
  Icon,
  isActive,
  onClick,
  href,
  title,
}: Props) {
  const { asPath } = useRouter();

  return (
    <Link
      href={...href}
      className={
        asPath.endsWith(href?.query.section) || isActive
          ? "account-sidebar-item account-sidebar-item-active"
          : "account-sidebar-item"
      }
      onClick={onClick}
    >
      <span className="text-xl pointer-events-none">{Icon}</span>
      <p className="capitalize text-sm font-medium pointer-events-none">
        {title}
      </p>
    </Link>
  );
}
