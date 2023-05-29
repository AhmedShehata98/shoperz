import React from "react";
import SideMenu from "./components/SideMenu";
import Head from "next/head";

type Props = {};

const Shop = (props: Props) => {
  return (
    <>
      <Head>
        <title> Shop </title>
      </Head>
      <main className="w-full min-h-screen flex items-start justify-between gap-3 container max-w-5xl mx-auto">
        <SideMenu />
      </main>
    </>
  );
};

export default Shop;
