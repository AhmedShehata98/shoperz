import React from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BiLogOutCircle } from "react-icons/bi";
import { TiArrowSortedUp } from "react-icons/ti";
import { motion } from "framer-motion";
import Link from "next/link";
import { routes } from "@/constants/Routes";
import { Url } from "next/dist/shared/lib/router/router";
import { BsBoxSeam } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { setIsLoggedIn } from "@/redux/slices/app.slice";

type DropMenuOptionProps = {
  title: string;
  Icon: React.ReactNode;
  href: Url;
  extraClassName?: string;
  onClick?: React.MouseEventHandler;
};
function DropMenuOption({
  Icon,
  href,
  title,
  extraClassName,
  onClick,
}: DropMenuOptionProps) {
  return (
    <Link
      href={href}
      className={`user-dropmenu-link ${extraClassName}`}
      onClick={onClick}
    >
      <span className="text-xl">{Icon}</span>
      <p>{title}</p>
    </Link>
  );
}

function UserDropMenu() {
  const {
    logout,
    myAccount: { account, myAddress, myOrders, profile },
    shoppingCart,
  } = routes;

  function handleLogout() {
    const domain = document.location.hostname;
    document.cookie = `${domain}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    setIsLoggedIn(false);
  }
  return (
    <div className="absolute z-10 top-full w-40 ">
      <motion.ul
        variants={{
          visible: { opacity: 1, translateY: 0, scaleY: 1 },
          hidden: { opacity: 0, translateY: "-25px", scaleY: 0.95 },
        }}
        initial={"hidden"}
        animate={"visible"}
        className="user-dropmenu"
      >
        <DropMenuOption
          title="my account"
          href={{ pathname: account, query: { section: profile } }}
          Icon={<MdOutlineSpaceDashboard />}
        />
        <DropMenuOption
          title="address"
          href={{ pathname: account, query: { section: myAddress } }}
          Icon={<FaRegAddressCard />}
        />
        <DropMenuOption
          title="orders"
          href={{ pathname: account, query: { section: myOrders } }}
          Icon={<BsBoxSeam />}
        />
        <DropMenuOption
          title="shopping cart"
          href={{ pathname: shoppingCart }}
          Icon={<IoCartOutline />}
        />
        <DropMenuOption
          extraClassName={"text-Danger-700 hover:bg-Danger-200"}
          title="logout"
          href={{ pathname: "/" }}
          onClick={handleLogout}
          Icon={<BiLogOutCircle />}
        />
      </motion.ul>
    </div>
  );
}

export default UserDropMenu;
