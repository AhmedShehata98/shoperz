import React from "react";
import { motion } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";

import { FiUser } from "react-icons/fi";
import Link from "next/link";
import { routes } from "@/constants/Routes";
import { BsLink45Deg } from "react-icons/bs";
import { useSelector } from "react-redux";
import { selectAppState } from "@/redux/slices/app.slice";
import { useUserDataQuery } from "@/services/shoperzApi.service";
import useGetToken from "@/hooks/useGetToken";
import dynamic from "next/dynamic";
import QuickLoadingModul from "./QuickLoadingModul";
type Props = {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const ActionMenuListItems = dynamic(
  () => import("./components/ActionMenuListItems"),
  { loading: () => <QuickLoadingModul /> }
);

const ActionMenu = ({ setShowMenu }: Props) => {
  const slideMenuVariant = {
    hidden: { opacity: 0, translateY: "50px" },
    visible: { opacity: 1, translateY: "0px" },
  };
  const { token } = useGetToken();
  const { isLoggedIn } = useSelector(selectAppState);
  const { data: userData, isLoading: loadUserData } = useUserDataQuery(token, {
    skip: !Boolean(token),
  });

  React.useEffect(() => {
    document.addEventListener("click", (ev: MouseEvent) => {
      const target = ev.target as HTMLElement;
      if (target.id !== "action-menu" && target.id !== "action-menu-btn") {
        setShowMenu(false);
      }
    });
    return () => {
      document.removeEventListener("click", (ev: MouseEvent) => {
        if ((ev.target as HTMLElement).id !== "action-menu") {
          setShowMenu(false);
        }
      });
    };
  }, []);

  return (
    <div className="absolute lg:hidden flex flex-col z-50 h-screen w-full bg-slate-700 inset-0 bg-opacity-60">
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
        exit={{ opacity: 0.1, translateY: "80%" }}
        id="action-menu"
        className="w-full md:w-2/5 lg:w-1/3 h-full min-h-screen flex flex-col items-center justify-start bg-white p-3 my-2 rounded-t-3xl md:rounded-none"
      >
        <div className="w-full flex items-center justify-start gap-4 rounded-lg bg-Grey-100 px-4 py-4 mt-6 mb-3 shadow-md">
          <span className="w-16 h-16 flex rounded-full items-center justify-center bg-Grey-400 text-3xl">
            <FiUser />
          </span>
          {isLoggedIn ? (
            <LoggedInBoard fullname={userData?.data.user.fullname} />
          ) : (
            <LoginButton />
          )}
        </div>
        <h3 className="self-start mt-4 mb-2 font-semibold uppercase text-Grey-800">
          options :
        </h3>
        <ActionMenuListItems />
      </motion.article>
    </div>
  );
};

export default ActionMenu;

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
  const { register, login } = routes.register;
  return (
    <Link
      href={{ pathname: register, query: { target: login } }}
      className="px-4 py-1.5 bg-Grey-400 capitalize text-sm rounded-md ms-auto"
    >
      register / login
    </Link>
  );
}
