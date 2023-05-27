import React from "react";
import SideMenu from "./components/SideMenu";

type Props = {};

const Shop = (props: Props) => {
  return (
    <>
      <main className="w-full min-h-screen flex items-start justify-between gap-3 container max-w-5xl mx-auto">
        <SideMenu />
      </main>
    </>
  );
};

export default Shop;
