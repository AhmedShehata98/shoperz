import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoCloseSharp, IoLocationSharp } from "react-icons/io5";
import { BiShoppingBag } from "react-icons/bi";
import { RiShoppingBasketLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import Link from "next/link";
import { routes } from "@/constants/Routes";
import { BsFillGearFill, BsLink45Deg } from "react-icons/bs";
import { useSelector } from "react-redux";
import { selectAppState } from "@/redux/slices/app.slice";
import { useUserDataQuery } from "@/services/shoperzApi.service";
import useGetToken from "@/hooks/useGetToken";
import { RiAccountBoxFill } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";
type Props = {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const SlideMenu = ({ setShowMenu }: Props) => {
  const slideMenuVariant = {
    hidden: { opacity: 0, translateY: "50px" },
    visible: { opacity: 1, translateY: "0px" },
  };
  const { token } = useGetToken();
  const { isLoggedIn } = useSelector(selectAppState);
  const { data: userData, isLoading: loadUserData } = useUserDataQuery(token);
  return (
    <div className="absolute lg:hidden flex flex-col z-20 h-screen w-full bg-slate-700 inset-0 bg-opacity-60">
      <div className="w-full flex items-center justify-center px-3 my-2 ">
        <button
          className="flex items-center justify-center w-12 h-12 bg-red-600 p-3 rounded-full shadow-lg text-lg"
          title="go back"
          onClick={() => setShowMenu(false)}
        >
          <IoCloseSharp className="block text-5xl text-white" />
        </button>
      </div>
      <motion.article
        variants={slideMenuVariant}
        initial={"hidden"}
        animate={"visible"}
        exit={{ opacity: 0.5, translateX: "50px" }}
        className="w-full md:w-2/5 lg:w-1/3 h-full min-h-screen flex flex-col items-center justify-start bg-white p-3 my-2 rounded-t-3xl md:rounded-none"
      >
        <div className="w-full flex items-center justify-start gap-4 rounded-lg bg-Grey-200 px-4 py-4 mt-6 mb-3 shadow-md">
          <span className="w-16 h-16 flex rounded-full items-center justify-center bg-Grey-400 text-3xl">
            <FiUser />
          </span>
          {isLoggedIn ? (
            <LoggedInBoard fullname={userData?.data.user.fullname} />
          ) : (
            <LoginButton />
          )}
        </div>
        <nav className="w-full grid grid-flow-row border divide-y bg-Grey-100 p-2">
          <Link
            className="flex items-center justify-start gap-3 px-3 py-3 hover:bg-Grey-200 capitalize"
            href={{
              pathname: routes.myAccount.account,
              query: { section: routes.myAccount.profile },
            }}
          >
            <span className="!text-2xl text-Grey-800">
              <MdOutlineAccountCircle />
            </span>
            <p>my account</p>
          </Link>
          <Link
            className="flex items-center justify-start gap-3 px-3 py-3 hover:bg-Grey-200 capitalize"
            href={{
              pathname: routes.myAccount.account,
              query: { section: routes.myAccount.myAddress },
            }}
          >
            <span className="!text-2xl text-Grey-800">
              <RiAccountBoxFill />
            </span>
            <p>Address</p>
          </Link>
          <Link
            className="flex items-center justify-start gap-3 px-3 py-3 hover:bg-Grey-200 capitalize"
            href={{
              pathname: routes.myAccount.account,
              query: { section: routes.myAccount.myOrders },
            }}
          >
            <span className="!text-2xl text-Grey-800">
              <BiShoppingBag />
            </span>
            <p>Orders</p>
          </Link>
          <Link
            className="flex items-center justify-start gap-3 px-3 py-3 hover:bg-Grey-200 capitalize"
            href={{
              pathname: routes.shop,
            }}
          >
            <span className="!text-2xl text-Grey-800">
              <RiShoppingBasketLine />
            </span>
            <p>shop</p>
          </Link>
          <Link
            className="flex items-center justify-start gap-3 px-3 py-3 hover:bg-Grey-200 capitalize"
            href={{
              pathname: routes.trackOrder,
            }}
          >
            <span className="!text-2xl text-Grey-800">
              <IoLocationSharp />
            </span>
            <p>track order</p>
          </Link>
          <Link
            className="flex items-center justify-start gap-3 px-3 py-3 hover:bg-Grey-200 capitalize"
            href={{
              pathname: routes.myAccount.account,
              query: { section: routes.myAccount.profile },
            }}
          >
            <span className="!text-2xl text-Grey-800">
              <BsFillGearFill />
            </span>
            <p>settings</p>
          </Link>
        </nav>
      </motion.article>
    </div>
  );
};

export default SlideMenu;

type LoggedInBoardProps = {
  fullname: string | undefined;
};
function LoggedInBoard({ fullname }: LoggedInBoardProps) {
  return (
    <span className="flex flex-col items-start">
      <b className="capitalize">{fullname}</b>
      <Link
        href={{
          pathname: routes.myAccount.account,
          query: { section: routes.myAccount.profile },
        }}
        className="flex items-center gap-2 text-Grey-700 font-medium capitalize"
      >
        <p>my account</p>
        <BsLink45Deg />
      </Link>
    </span>
  );
}

function LoginButton() {
  return (
    <Link
      href={{ pathname: routes.register, query: { target: "login" } }}
      className="px-4 py-1.5 bg-Grey-400 capitalize text-sm rounded-md ms-auto"
    >
      register / login
    </Link>
  );
}
