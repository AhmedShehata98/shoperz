import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import InputField from "../../components/InputField";
import { FiMenu } from "react-icons/fi";
import Logo from "../../components/Logo";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { selectAppState, setShowCartDrawer } from "@/redux/slices/app.slice";
import { selectAllCart } from "@/hooks/reduxHooks";
import UserDropMenu from "./UserDropMenu";
import UserBtn from "./UserBtn";

type Props = {
  setShowMenu: Dispatch<SetStateAction<boolean>>;
};
function HeaderControlsActions({ setShowMenu }: Props) {
  const { cartLength } = useSelector(selectAppState);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const dispatch = useDispatch();
  const handleShowCart = () => {
    dispatch(setShowCartDrawer(true));
  };

  const handleBodyClickEvent = (ev: MouseEvent) => {
    if (ev.target?.id !== "user-btn") {
      setShowUserMenu(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", (ev: MouseEvent) => {
      handleBodyClickEvent(ev);
    });
    return () => {
      document.body.removeEventListener("click", (ev: MouseEvent) => {
        handleBodyClickEvent(ev);
      });
    };
  }, []);
  return (
    <div className="w-full flex items-center  justify-between px-2 max-lg:pt-4 pb-4">
      <span className="flex items-center justify-center max-md:gap-4 gap-8">
        <button
          onClick={() => setShowMenu((e: boolean) => !e)}
          className="text-2xl text-gray-600 lg:hidden"
        >
          <FiMenu />
        </button>
        <div className="">
          <Logo />
        </div>
      </span>
      <div className="max-lg:hidden">
        <InputField />
      </div>
      <span className="relative flex items-center justify-between gap-6 text-gray-600">
        <UserBtn isAuthenticated={true} onClick={() => setShowUserMenu(true)} />
        {showUserMenu ? <UserDropMenu /> : null}
        <button type="button" className="flex items-center gap-2">
          <BsFillHeartFill />
          <p className="text-gray-500 text-xs uppercase pointer-events-none">
            1
          </p>
        </button>
        <button
          type="button"
          className="flex items-center gap-2"
          onClick={() => handleShowCart()}
        >
          <FaShoppingCart />
          <p className="text-gray-500 text-xs uppercase">{cartLength}</p>
        </button>
      </span>
    </div>
  );
}

export default HeaderControlsActions;
