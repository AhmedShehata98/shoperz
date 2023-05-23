import Head from "next/head";
import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import AccountSidebarItem from "./components/AccountSidebarItem";
import { BiMap } from "react-icons/bi";
import { AiOutlineShopping } from "react-icons/ai";
import ProfileSettings from "./components/ProfileSettings";
import MyAddress from "./components/MyAddress";
import { useRouter } from "next/router";
import { routes } from "@/constants/Routes";
import MyOrders from "./components/MyOrders";

const MyAccount = () => {
  // const [currentRenderedComponent, setCurrentRenderedComponent] =
  //   React.useState<"profile settings" | "my address" | "my orders">(
  //     "profile settings"
  //   );
  const {
    query: { section },
  } = useRouter();
  const { profile, myOrders, myAddress } = routes.myAccount;

  const handleChangeRenderedComponent = (ev: React.MouseEvent) => {
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
        <title>My account</title>
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
              herf={{
                pathname: routes.myAccount.account,
                query: { section: routes.myAccount.profile },
              }}
              onClick={(ev) => handleChangeRenderedComponent(ev)}
            />
            <AccountSidebarItem
              Icon={<AiOutlineShopping />}
              title="my orders"
              herf={{
                pathname: routes.myAccount.account,
                query: { section: routes.myAccount.myOrders },
              }}
              onClick={(ev) => handleChangeRenderedComponent(ev)}
            />
            <AccountSidebarItem
              Icon={<BiMap />}
              title="my address"
              herf={{
                pathname: routes.myAccount.account,
                query: { section: routes.myAccount.myAddress },
              }}
              onClick={(ev) => handleChangeRenderedComponent(ev)}
            />
          </ul>
          {section === profile ? (
            <ProfileSettings title={"profile settings"} />
          ) : null}
          {section === myAddress ? <MyAddress title={"my address"} /> : null}
          {section === myOrders ? <MyOrders title={"my orders"} /> : null}
        </section>
      </main>
    </>
  );
};

export default MyAccount;
