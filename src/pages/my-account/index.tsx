import Head from "next/head";
import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import AccountSidebarItem from "./components/AccountSidebarItem";
import { BiMap } from "react-icons/bi";
import { AiOutlineShopping } from "react-icons/ai";
import ProfileSettings from "./components/ProfileSettings";
import MyAddress from "./components/MyAddress";

const MyAccount = () => {
  const [currentRenderedComponent, setCurrentRenderedComponent] =
    React.useState<"profile settings" | "my address" | "my orders">(
      "profile settings"
    );

  const handleChangeRenderedComponent = (
    ev: React.MouseEvent,
    data: typeof currentRenderedComponent
  ) => {
    setCurrentRenderedComponent(data);
    const target = ev.target as Element;
    const parentEl = target.closest("ul");
    Array.from(parentEl?.children!).forEach((el) =>
      el.classList.remove("account-sidebar-item-active")
    );
    target.classList.add("account-sidebar-item-active");
  };

  return (
    <>
      <Head>
        <title>my account</title>
      </Head>
      <main className="w-full min-h-screen bg-Grey-100 flex flex-col items-center justify-start gap-2">
        <section className="container max-w-5xl mx-auto flex flex-col items-start justify-start px-2">
          <header className="flex items-start justify-center py-4">
            <h2 className="text-Grey-800 text-3xl capitalize font-bold">
              my account
            </h2>
          </header>
        </section>
        <section className="container max-w-5xl mx-auto flex max-lg:flex-col items-start justify-between px-2">
          <ul className="w-full lg:basis-1/5 grid grid-flow-row gap-2 mb-6">
            <AccountSidebarItem
              Icon={<FaRegUserCircle />}
              title="profile settings"
              isActive={true}
              onClick={(ev) =>
                handleChangeRenderedComponent(ev, "profile settings")
              }
            />
            <AccountSidebarItem
              Icon={<AiOutlineShopping />}
              title="my orders"
              onClick={(ev) => handleChangeRenderedComponent(ev, "my orders")}
            />
            <AccountSidebarItem
              Icon={<BiMap />}
              title="my address"
              onClick={(ev) => handleChangeRenderedComponent(ev, "my address")}
            />
          </ul>
          {currentRenderedComponent === "profile settings" ? (
            <ProfileSettings title={currentRenderedComponent} />
          ) : null}
          {currentRenderedComponent === "my address" ? (
            <MyAddress title={currentRenderedComponent} />
          ) : null}
        </section>
      </main>
    </>
  );
};

export default MyAccount;
